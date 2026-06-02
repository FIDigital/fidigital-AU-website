# Brief for Zoho Campaigns Team — Lead-Magnet Signup Form

**Goal:** Set up a **signup form** in Zoho Campaigns for a website lead magnet, the
**"Zoho Modernisation Checklist."** When a website visitor submits the form, they should be
added to a mailing list and automatically emailed the checklist. Then **send us the form's
embed code** and we'll place it on the website page.

**Where it goes:** the website page `/resources/zoho-modernisation-checklist` (already built).
We will embed your signup form on it (similar to how the contact form is embedded).

---

## A. Create a mailing list
- Contacts → Manage Lists → **New List**
- Name: **Zoho Modernisation Checklist** (or your preferred name)
- **Opt-in type:** please use **single opt-in** so the checklist email sends immediately on
  submission. *(If double opt-in is required for compliance, note it — the subscriber will get
  a confirmation email first, and the checklist only sends after they confirm.)*

## B. Confirm the form fields exist
The form must capture these three fields:
- **Name** (First Name)
- **Email** (the standard "Contact Email" field)
- **Company**

If **Company** is not already a contact field, add it: Contacts → Settings → Contact Fields → add a
**Company** field, so the value is stored against each contact.

## C. Create the autoresponder (this is what delivers the checklist)
- Automation → Autoresponders → **New** → trigger: **"When a contact joins the list"** (List Signup)
- Target: the list from step A
- Email subject: e.g. **"Your Zoho Modernisation Checklist"**
- Body: a **holding email for now** (e.g. "Thanks for your interest — your checklist is on its way / coming shortly").
  The final **PDF will be designed and supplied later**; attach or link it in this email once ready.
- **Activate** the autoresponder.

## D. Create the signup form
- Contacts → **Signup Forms** → **Create Signup Form**
- Associate it with the **list** from step A
- Add the fields: **Name (First Name), Email, Company** (mark required as appropriate)
- Form type: **embed / public form** (we need an embeddable form, not just a hosted landing page —
  though a hosted permalink URL also works for us)
- Post-submit message: set the "thank you" text to **"Thanks — your checklist is on its way."**
  *(We can also show our own thank-you on the website, so this is flexible.)*
- Keep spam protection (CAPTCHA) **enabled**.
- Styling: keep it **minimal/clean** — we'll style the surrounding container on the website to match
  the brand. (If easy, brand colour = blue `#1D4ED8`.)
- **Publish** the form.

## E. What to send back to us
1. The signup form **embed code** — the HTML/JS snippet Zoho generates
   (a `<div>` + `<script>`, or an `<iframe>`), **or** the hosted form **permalink URL**
   (looks like `https://...campaigns.zoho.com.au/.../formperma/XXXXX`).
2. Confirmation that the **autoresponder is active** on the list.
3. The **opt-in type** used (single or double).

## F. Notes
- Account region/data centre: please confirm (Australian Zoho = `.com.au`).
- We only need the embed code/URL from you — no API keys required for this approach.
- Once you send the embed code, we drop it onto the website page and it goes live; the email content
  and the PDF remain fully managed by your team inside Zoho Campaigns.
