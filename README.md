# CaSon Management & Advies website

Professionele Next.js website voor Casper Sonnega / CaSon Management & Advies.

## Stack
- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Lucide icons
- Framer Motion (subtiele animaties)

## Starten
```bash
npm install
npm run dev
```
Open vervolgens `http://localhost:3000`.

## Scripts
- `npm run dev` – start development server
- `npm run build` – productiebuild
- `npm run start` – start productieversie
- `npm run lint` – lint checks
- `npm run typecheck` – TypeScript controle

## Structuur
- `src/app/*` – pagina's en routing
- `src/components/*` – herbruikbare UI en sectiecomponenten
- `src/content/site.ts` – globale sitecontent, CTA's en contactgegevens
- `src/content/services.ts` – diensteninhoud
- `src/content/expertise.ts` – expertise en sectoren
- `src/content/articles.ts` – inzichten/artikelen

## Content aanpassen
Aanpasbare velden voor opdrachtgever:
- Hero teksten, CTA labels, contactinfo: `src/content/site.ts`
- Diensten en omschrijvingen: `src/content/services.ts`
- Expertiseblokken: `src/content/expertise.ts`
- Inzichten/artikelen: `src/content/articles.ts`

Alle nog te valideren gegevens zijn gemarkeerd met `[NOG TE BEVESTIGEN]`.

## Contactformulier koppelen
`src/components/sections/contact-form.tsx` bevat een veilige placeholder submit-handler.
Voor productie kan dit gekoppeld worden via:
1. **Next.js Server Action** (eigen backendflow)
2. **Resend** (transactionele mail)
3. **Formspree** (snelle no-backend optie)

Vervang de huidige `onSubmit`-mock door een server-side submit flow met validatie en rate-limiting.

## SEO aanpassen
- globale metadata + Open Graph: `src/app/layout.tsx`
- pagina-specifieke metadata: per `page.tsx`
- sitemap: `src/app/sitemap.ts`
- robots: `src/app/robots.ts`
- artikelmetadata: `src/app/inzichten/[slug]/page.tsx`
