# SecureSight CCTV

Responsive Next.js starter website for a Kenya-wide CCTV and security systems service.

## Local development
- Node.js 20 or newer
- `npm install`
- Optional: copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_WHATSAPP_NUMBER` to the verified business WhatsApp number in international format without punctuation.
- `npm run dev`

## Verification
- `npm run build`
- Check mobile and desktop layouts.
- Test quotation form behavior after configuring the business WhatsApp number.

## Before public launch
1. Configure and verify `NEXT_PUBLIC_WHATSAPP_NUMBER`. Until configured, the form will not send users to a demo number.
2. Confirm the actual service area, response times, pricing, warranties, credentials and support promises.
3. Confirm the business email and contact details.
4. Review and customise the privacy notice and website terms.
5. Update `app/robots.ts` to allow indexing only when the site is ready for public launch.
6. Update the canonical base URL in `app/layout.tsx` and `app/sitemap.ts` if using a custom domain.
7. Run a production build and test the deployed preview. This starter does not include a database or server-side enquiry storage.

## Deployment
Import this repository as a new, separate Vercel project. Keep it isolated from MaliHub, ZenPOS and SmartBiz365. Preview indexing is disabled by default via `app/robots.ts`.
