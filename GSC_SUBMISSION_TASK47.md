# Task 47 — Google Search Console submission (manual, needs your GSC login)

This step can only be done by someone with access to the verified **fidigital.com.au**
property in Google Search Console. It cannot be automated from the codebase.

## 1. Submit the sitemap
GSC → **Sitemaps** → add a new sitemap:
```
https://fidigital.com.au/sitemap.xml
```
> ⚠️ The sprint doc said `https://www.fidigital.com.au/sitemap.xml` (www). We standardised the
> whole site on **non-www**, so submit the **non-www** URL above. (If the GSC property is the
> www variant, switch the property to the non-www domain/property first, or use a Domain property
> which covers both.)

## 2. Request (re)indexing of the 12 priority URLs
GSC → **URL Inspection** → paste each URL → **Request Indexing**:
1. https://fidigital.com.au/
2. https://fidigital.com.au/product-engineering
3. https://fidigital.com.au/data-platforms
4. https://fidigital.com.au/ai-agents
5. https://fidigital.com.au/business-systems
6. https://fidigital.com.au/zoho-consultants
7. https://fidigital.com.au/zoho-partners-australia
8. https://fidigital.com.au/crm-implementation
9. https://fidigital.com.au/locations/melbourne
10. https://fidigital.com.au/locations/sydney
11. https://fidigital.com.au/case-studies
12. https://fidigital.com.au/contact

## Prerequisite
These must be **deployed live** first (the changes are currently local/uncommitted) — GSC can only
inspect/index public URLs. Deploy → submit sitemap → request indexing.

## Note
The sitemap currently lists 37 real routes (verified, non-www, no stale/404 entries).
