interface ChatRequest {
  name: string;
  email?: string;
  message: string;
  page: string;
}

interface Env {
  FEISHU_WEBHOOK_URL: string;
}

export const onRequestPost = async ({ request, env }: { request: Request; env: Env }) => {
  const WEBHOOK_URL = env.FEISHU_WEBHOOK_URL as string;

  if (!WEBHOOK_URL) {
    return new Response(JSON.stringify({ error: 'Service not configured' }), {
      status: 503,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const contentType = request.headers.get('content-type') || '';
  if (!contentType.includes('application/json')) {
    return new Response(JSON.stringify({ error: 'Expected JSON' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  let body: ChatRequest;
  try {
    body = await request.json();
  } catch {
    return new Response(JSON.stringify({ error: 'Invalid JSON' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const { name, email, message, page } = body;

  // Honeypot: bots fill hidden fields, humans don't
  if ((body as any).website) {
    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  if (!name?.trim() || !message?.trim()) {
    return new Response(JSON.stringify({ error: 'Name and message are required' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const sanitize = (s: string) => s.slice(0, 2000);
  const safeName = sanitize(name.trim());
  const safeMessage = sanitize(message.trim());
  const safeEmail = email ? sanitize(email.trim()) : '';
  const safePage = page ? sanitize(page.trim()) : '';

  const feishuCard = {
    msg_type: 'interactive',
    card: {
      header: {
        title: {
          tag: 'plain_text',
          content: '📩 New Inquiry — taxicolor.com',
        },
        template: 'orange' as const,
      },
      elements: [
        {
          tag: 'div',
          fields: [
            { is_short: true, text: { tag: 'lark_md', content: `**Name**\n${safeName}` } },
            { is_short: true, text: { tag: 'lark_md', content: `**Email**\n${safeEmail || '—'}` } },
          ],
        },
        {
          tag: 'div',
          fields: [
            { is_short: false, text: { tag: 'lark_md', content: `**Page**\n${safePage || '—'}` } },
          ],
        },
        { tag: 'hr' },
        {
          tag: 'div',
          text: {
            tag: 'lark_md',
            content: `**Message**\n${safeMessage}`,
          },
        },
        {
          tag: 'note',
          elements: [
            {
              tag: 'plain_text',
              content: `taxicolor.com inquiry · ${new Date().toISOString().slice(0, 19).replace('T', ' ')} UTC`,
            },
          ],
        },
      ],
    },
  };

  try {
    const feishuRes = await fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(feishuCard),
    });

    const feishuResult = await feishuRes.json();

    if (feishuResult.code !== 0) {
      return new Response(
        JSON.stringify({ error: 'Failed to deliver message' }),
        { status: 502, headers: { 'Content-Type': 'application/json' } }
      );
    }

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch {
    return new Response(
      JSON.stringify({ error: 'Failed to deliver message' }),
      { status: 502, headers: { 'Content-Type': 'application/json' } }
    );
  }
};
