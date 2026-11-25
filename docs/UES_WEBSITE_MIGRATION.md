# UES ecosystem website redesign (proposal)
Date: 2026-11-25
Scope: replace legacy XUNI promotional homepage at `template/index.html` with a UES *pre-launch* ecosystem overview, powered by `template/assets/ues-ecosystem.css`.

## Content safety
- The old homepage contains live-sounding XUNI claims, wallet download links and historical information on banking, messaging, mining and Tor. Those are intentionally not migrated to UES claims.
- The new homepage displays seven projects without implying UES mainnet availability, wallet downloads, token sale, current pricing, running explorer or active security software. “Malware Fighter” and “Performance” are described as proposed concepts pending verified product repositories and feature audits.
- `UltraNote/ultra-harddisk-defrag` is linked as the identified disk optimizer source. Browser and UES core point to their GitHub repositories. Links are informational only.
- No APIs, trackers, wallets, private keys, payments, swaps, backend endpoints or deployment configurations are added.
- Existing `template/privacy-policy.html` is linked but **must be reviewed** for relevance and accuracy before production deployment. A stale policy is not made correct by the new theme.
- Existing `template/404.html` also remains legacy and should be separately reviewed.
- The existing XUNI website must be archived and legacy URLs preserved/redirected deliberately, never silently repurposed into a live UES service.

## Design and accessibility
- Dark navy surfaces, cyan/teal logo and violet accents, consistent with UltraNote promotional artwork.
- Responsive grid and navigation; focus-visible rings and reduced-motion preference.
- SVG logo is an approximate vector interpretation for mockup purposes, not an approved master brand asset. Replace with verified original before production.
- No generated bitmap posters are embedded. Source-approved hero art can be added after asset provenance and size optimization are checked.

## Manual acceptance
1. Serve `template` locally and test 320/390/768/1024/1440 widths, zoom and keyboard navigation.
2. Review textual claims for brand, technical and legal accuracy, and update descriptions as products are implemented.
3. Verify external GitHub links, internal anchors and privacy-policy link; check all relative assets and CDN behavior.
4. Inspect console and network for unexpected connections; new homepage intentionally has no legacy analytics or stats polling.
5. Check contrast, screen-reader semantics, mobile nav, SEO metadata and social preview.
6. Confirm deployment configuration serves `template/index.html` and redirects legacy pages safely; do not start old `stats.js` merely for this design.
7. Verify final visual layout in a browser and capture screenshots. No automated visual QA or deployment is claimed by this branch.

This is a draft PR: keep main and the live domain unchanged pending human approval and testing.
