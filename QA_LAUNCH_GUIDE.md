# Day-3 QA & Launch Guide (Tasks 43–47)

These are manual checks done on the **deployed** site. The code work is complete and
build-verified; this guide is the human/launch sign-off.

## ⚠️ Prerequisite — deploy first
All changes are currently local/uncommitted. Tasks 45 & 47 need public URLs and 46's real
Performance score needs the production CDN. Order: **commit → push → deploy → run 43–47 on live.**

---

## Task 43 — Desktop QA walkthrough
Open each edited page in Chrome (desktop) and check:
- Tab **title** correct (ends once with "| FI Digital AU")
- **H1** correct
- **Canonical** (Cmd+U → `<link rel="canonical">`) points to that page, non-www
- **CTA** button text page-specific
- **TrustedBy** logo strip under hero
- No broken images

Already script-verified (titles/canonicals/H1/CTA/TrustedBy/0 broken images) — this is visual confirmation.

## Task 44 — Mobile QA walkthrough
On a phone (or Chrome F12 → device toolbar → iPhone):
- Sticky bottom bar with 📞 Call + Book Discovery appears
- Tap Call → opens dialer (tel:1300921280)
- Hero images load ~2s (DevTools → Network → "Fast 4G" throttle → reload)

Bar/call/button + mobile-only CSS already verified; real-device tap + speed is manual.

## Task 45 — Schema validation
Tool: https://validator.schema.org/  or  https://search.google.com/test/rich-results
Validate these 8 URLs (green / no errors; warnings OK):
/, /ai-agents, /data-platforms, /data-platforms/databricks, /business-systems,
/crm-implementation, /locations/melbourne, /locations/sydney

JSON-LD already validated locally (valid JSON, correct types). This is the live green check.
(Before deploy: paste page HTML into the validator instead of a URL.)

## Task 46 — Lighthouse audit (mobile)
Easiest: https://pagespeed.web.dev/  (enter live URL, pick Mobile)
Or Chrome F12 → Lighthouse tab → Mobile + Perf/A11y/SEO → Analyze.
Pages: /, /ai-agents, /data-platforms/databricks
Targets: Performance 70+ · Accessibility 90+ · SEO 95+
Status from local runs: A11y 91–96 ✓, SEO 100 ✓ (met). Performance 59–75 on localhost —
deployed CDN/compression should raise it; if still low, compress hero PNGs to WebP.

## Task 47 — Google Search Console
Needs GSC access to the fidigital.com.au property.
1. Sitemaps → submit https://fidigital.com.au/sitemap.xml  (non-www)
2. URL Inspection → Request Indexing for the 12 priority URLs:
   /, /product-engineering, /data-platforms, /ai-agents, /business-systems,
   /zoho-consultants, /zoho-partners-australia, /crm-implementation,
   /locations/melbourne, /locations/sydney, /case-studies, /contact
Must be deployed first (GSC inspects public URLs only). See GSC_SUBMISSION_TASK47.md.
