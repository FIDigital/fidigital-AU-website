# Brief for Zoho CRM Team — Contact Form Qualification Fields

**Goal:** Add 4 qualification fields to the website **Contact Us** Web-to-Lead form (Leads module) so we capture Industry, Budget, Timeline, and Service Line on every contact submission. Then send us the regenerated form code to embed.

---

## A. Create these custom fields in the Leads module
**Path:** Setup → Customization → Modules and Fields → **Leads** → **+ New Field**
**Type for all four:** Pick List (single select)

| # | Field Label | Field Type | Exact picklist values (use these exactly) |
|---|-------------|------------|--------------------------------------------|
| 1 | Industry of Interest | Pick List | Financial Services · Healthcare · Resources & Logistics · Energy · Other |
| 2 | Budget | Pick List | $15–50K · $50–150K · $150K+ |
| 3 | Timeline | Pick List | This quarter · 3–6 months · Exploring |
| 4 | Service Line | Pick List | Zoho · AI · Data · Product Engineering · Multiple |

Notes:
- **Company** is already captured by the form — no change needed.
- For field #1, you may instead reuse Zoho's built-in **Industry** field if you add exactly the 5 values above to its picklist. A dedicated custom field is preferred.

---

## B. Add the fields to the EXISTING Web-to-Lead form
**Path:** Setup → Developer Hub → **Webforms** (or Setup → Channels → Webforms, depending on Zoho version) → **Leads** → open the existing **"Contact Us"** form.

- ⚠️ **Edit the existing form — do NOT create a new one.** Creating a new form changes the form key/tokens and would break our live website embed.
- Drag the 4 new fields onto the form (suggested position: right after **Company**).
- **Mandatory setting:** keep the 4 new fields **Optional**. Leave the existing mandatory fields as-is (First Name, Last Name, Email, Mobile, Company, Description).
- Keep **CAPTCHA enabled**.
- Keep all existing fields and hidden security inputs unchanged.
- "On successful submission, redirect to": **https://fidigital.com.au/contact** (non-www — important, must not be www).
- Save.

---

## C. What to send back to us
1. The **full generated Web-to-Lead embed HTML** (the "Source / HTML" view of the saved form), **and**
2. For each of the 4 new fields, the **API field name** (e.g. `LEADCF61`) and its exact option values.
3. Confirmation that the form key (`xnQsjsdp`) and form id (`xmIwtLD`) are **unchanged** (they will be, if you edited the existing form rather than creating a new one).

---

## D. Why these rules matter (please follow exactly)
- The website form maps each field to CRM by its **API name**; dropdown option text must **exactly match** the CRM picklist values. Any mismatch = Zoho **silently drops** that value (lead comes in blank, no error).
- Editing the existing form (not creating a new one) preserves the tokens our live embed depends on.
- Non-www redirect URL keeps it consistent with the rest of the site (the site canonical host is non-www).

Once we receive the code/field names from C, we'll merge the 4 new dropdowns into the website form (keeping our existing styling + auto-resize), wired to the correct field IDs.
