# AGENTS.md — www.taxicolor.com

## Project

Next.js static export site for Taxicolor brand homepage. Deployed to Cloudflare Pages.

## Deployment

**Automatic: `git push` to `main` triggers GitHub Actions CI/CD.**

Workflow: `.github/workflows/deploy.yml`
- npm ci → next build → wrangler pages deploy
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

- Place new images in `public/img/`.
- A `husky` pre-commit hook runs `lint-staged` with `sharp` to automatically and aggressively compress `.png` and `.jpg` images in-place before committing.
- Do NOT bypass the pre-commit hook (e.g. avoid `--no-verify`).
- No need to manually convert to `.webp` or change extensions in the source code; just commit the `.png`/`.jpg` and it will be compressed optimally.

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
