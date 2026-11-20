# Tolli's Construction local roofing pages

Public SEO landing pages for **Tolli's Construction Roofing & Exterior**, targeting homeowners searching for roofing in Ringgold, Chattanooga, Fort Oglethorpe, Rossville, Chickamauga, and Dalton, plus storm-damage and emergency roof repair.

Live site: https://tollisexcavation-lang.github.io/ringgold-roofing/

Main company website: https://www.tollisconstruction.com

These are static HTML pages hosted on GitHub Pages. They are not the Wix site and should not be published to or mixed with the live Wix website.

Inspection form submissions are delivered to roof@tollisconstruction.com through FormSubmit.

## Pages added Nov 20, 2026

- `/review/` redirects to the Google review form for the Tolli's Google Business Profile (noindex, not in sitemap). Print QR codes point here.
- `/free-inspection/` is the minimal ad/QR landing page (noindex, no nav, not in sitemap). Hidden field `Landing page` = `Ad page`.
- `/insurance-claim-guide/` and `/our-work/` are in the sitemap.

## Lead-source tracking

`assets/utm.js` saves `utm_source`/`utm_medium`/`utm_campaign` (and gclid/fbclid) from the URL into localStorage and fills hidden `Lead source` and `utm_source` fields on every inspection form, and tags the email subject, e.g. `[yardsign]`. Yard sign QR uses `?utm_source=yardsign&utm_medium=print`; door hanger uses `?utm_source=doorhanger&utm_medium=print`.
