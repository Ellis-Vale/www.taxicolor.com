# AGENTS.md — www.taxicolor.com

## Project

Next.js static export site for Taxicolor brand homepage. Deployed to Cloudflare Pages.

## Deployment

**Automatic: `git push` to `main` triggers GitHub Actions CI/CD.**

Workflow: `.github/workflows/deploy.yml`
- npm ci → Python Pillow compresses PNG→WebP → next build → wrangler pages deploy
- Cloudflare project name: `taxicolor`
- Domain: www.taxicolor.com

**Manual fallback:**
```bash
npm run build
npx wrangler@latest pages deploy out --project-name=taxicolor --commit-dirty=true
```

**Verify:**
```bash
gh run list -w deploy.yml -L 1 --repo Ellis-Vale/www.taxicolor.com
```

## Image Handling

- Place new images as PNG in `public/img/`. CI automatically converts to WebP and updates code references.
- Write `.png` in source code; build step replaces with `.webp`.

## Secrets Required (GitHub Actions)

- `CLOUDFLARE_API_TOKEN`
- `CLOUDFLARE_ACCOUNT_ID`
Both already configured. See `docs/10-部署流程标准化.md` in the foreign-trade project for details.

## Brand Context

- Taxicolor is the brand name. TAKINBOT is the legal entity name (appears on PI/banking only).
- Site positioning: "tech-savvy traditional trader" — not a disruptive SaaS.
- Full brand architecture: `docs/07-brand-architecture.md`

## Related Repos

- `Ellis-Vale/www.takinbot.com` — takinbot brand site
- `Ellis-Vale/filtration.taxicolor.com` — filtration product catalog
