"use client";

import { useState } from "react";
import { CheckCircle2, Download, FileCheck2, ShieldCheck, ArrowRight } from "lucide-react";

/*
 * Gated lead-magnet page (sprint Task 39) — Option A: Zoho Campaigns.
 *
 * INTEGRATION (when the Zoho Campaigns signup-form embed is supplied):
 *   The form below is the styled placeholder UI. To wire it to Zoho Campaigns,
 *   either (a) replace this <form> with the Zoho Campaigns signup-form embed, or
 *   (b) keep this design and set the form `action` to the Zoho `zcsub` endpoint
 *       + add the hidden token inputs Zoho provides, and map the field `name`s
 *       (mirrors how /zoho-form maps Web-to-Lead fields).
 *   The Zoho Campaigns autoresponder on the target list sends the checklist email
 *   (holding email for now; real PDF attached later).
 */

const WHATS_INSIDE = [
  "Audit framework for your current Zoho setup (CRM, Books, Creator, Desk)",
  "Automation gap analysis — where manual work is costing you time",
  "Australian data residency & compliance checkpoints",
  "Integration opportunities across your business systems",
  "Module-by-module optimisation recommendations",
  "A migration-readiness score to prioritise your roadmap",
];

export default function ChecklistClient() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({ name: "", email: "", company: "" });

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");
    try {
      // Posts to our Zoho Campaigns subscribe route. Until the Zoho env vars are
      // configured the route returns { ok:true, configured:false } (placeholder mode),
      // so the success state still shows; once configured it subscribes + the list
      // autoresponder sends the checklist email.
      const res = await fetch("/api/lead-magnet", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) throw new Error(data.error || "Submit failed");
      setSubmitted(true);
    } catch (err) {
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main style={{ paddingTop: "var(--header-h)", background: "var(--bg)", color: "var(--text)" }}>

      {/* ══ HERO ══ */}
      <section className="section" style={{ padding: "clamp(90px, 11vh, 150px) 1.5rem 60px", borderBottom: "1px solid var(--border)" }}>
        <div className="container" style={{ maxWidth: "1100px" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "rgba(29,78,216,0.1)", color: "var(--primary)", padding: "0.5rem 1rem", borderRadius: "50px", fontWeight: 700, fontSize: "0.85rem", marginBottom: "1.5rem" }}>
            <FileCheck2 size={16} /> Free Resource
          </div>
          <h1 className="section-title" style={{ fontSize: "clamp(2.25rem, 5vw, 3.5rem)", fontWeight: 900, lineHeight: 1.1, letterSpacing: "-0.02em", maxWidth: "820px", marginBottom: "1.25rem" }}>
            The Zoho Modernisation Checklist
          </h1>
          <p style={{ fontSize: "1.2rem", color: "var(--text-muted)", lineHeight: 1.7, maxWidth: "680px", margin: 0 }}>
            A practical, no-fluff checklist to audit your Zoho setup, surface automation gaps, and build a clear modernisation roadmap. Built for Australian mid-market and enterprise teams.
          </p>
        </div>
      </section>

      {/* ══ CONTENT: what's inside + form ══ */}
      <section className="section" style={{ padding: "70px 1.5rem 110px" }}>
        <div className="container" style={{ maxWidth: "1100px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "3rem", alignItems: "start" }}>

          {/* Left — what's inside */}
          <div>
            <h2 style={{ fontSize: "1.6rem", fontWeight: 900, marginBottom: "1.75rem" }}>What's inside</h2>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "1.1rem" }}>
              {WHATS_INSIDE.map((item, i) => (
                <li key={i} style={{ display: "flex", gap: "0.85rem", alignItems: "flex-start" }}>
                  <CheckCircle2 size={22} color="var(--primary)" style={{ flexShrink: 0, marginTop: "2px" }} />
                  <span style={{ fontSize: "1.05rem", color: "var(--text)", lineHeight: 1.6 }}>{item}</span>
                </li>
              ))}
            </ul>
            <p style={{ marginTop: "2rem", display: "inline-flex", alignItems: "center", gap: "0.5rem", fontSize: "0.9rem", color: "var(--text-muted)" }}>
              <ShieldCheck size={16} /> No spam. Your details are handled per our Privacy Policy.
            </p>
            {/* PDF not yet designed — holding email is sent for now */}
            <p style={{ marginTop: "1rem", fontSize: "0.85rem", color: "var(--text-muted)", fontStyle: "italic" }}>
              [PLACEHOLDER: PDF to be designed and supplied later — a holding email is sent on submit for now.]
            </p>
          </div>

          {/* Right — gated form card */}
          <div className="glass-card" style={{ background: "var(--card-bg)", border: "1px solid var(--border)", borderRadius: "24px", padding: "2.5rem 2rem", boxShadow: "0 20px 50px rgba(0,0,0,0.08)" }}>
            {!submitted ? (
              <>
                <h2 style={{ fontSize: "1.4rem", fontWeight: 900, marginBottom: "0.5rem" }}>Get the checklist</h2>
                <p style={{ fontSize: "0.98rem", color: "var(--text-muted)", marginBottom: "1.75rem" }}>
                  Enter your details and we'll send it straight to your inbox.
                </p>
                {/* Zoho Campaigns signup form drops in here (Option A) */}
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.1rem" }}>
                  <Field label="Name" id="name" value={form.name} onChange={update("name")} placeholder="e.g. John Smith" required />
                  <Field label="Email" id="email" type="email" value={form.email} onChange={update("email")} placeholder="john@company.com.au" required />
                  <Field label="Company" id="company" value={form.company} onChange={update("company")} placeholder="Your company" required />
                  <button type="submit" disabled={submitting} style={{
                    marginTop: "0.5rem", display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "0.5rem",
                    background: "var(--primary)", color: "#fff", border: "none", padding: "1rem 1.5rem",
                    borderRadius: "10px", fontSize: "1rem", fontWeight: 800, cursor: submitting ? "wait" : "pointer",
                    opacity: submitting ? 0.7 : 1,
                  }}>
                    <Download size={18} /> {submitting ? "Sending…" : "Send me the checklist"}
                  </button>
                  {error && (
                    <p style={{ color: "#ef4444", fontSize: "0.9rem", margin: 0 }}>{error}</p>
                  )}
                </form>
              </>
            ) : (
              <div style={{ textAlign: "center", padding: "2rem 0.5rem" }}>
                <div style={{ width: "64px", height: "64px", borderRadius: "50%", background: "rgba(16,185,129,0.12)", color: "#10B981", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1.5rem" }}>
                  <CheckCircle2 size={34} />
                </div>
                <h2 style={{ fontSize: "1.5rem", fontWeight: 900, marginBottom: "0.75rem" }}>Thanks — your checklist is on its way.</h2>
                <p style={{ fontSize: "1rem", color: "var(--text-muted)", lineHeight: 1.7, marginBottom: "2rem" }}>
                  Check your inbox in the next few minutes. If it doesn't arrive, check your spam folder or email us at support@fidigital.com.au.
                </p>
                <a href="/book-discovery" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "var(--primary)", fontWeight: 800, textDecoration: "none" }}>
                  Book a free Zoho audit <ArrowRight size={18} />
                </a>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

function Field({ label, id, type = "text", value, onChange, placeholder, required }) {
  return (
    <label htmlFor={id} style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
      <span style={{ fontSize: "0.85rem", fontWeight: 700, color: "var(--text)" }}>
        {label}{required && <span style={{ color: "#ef4444", marginLeft: "2px" }}>*</span>}
      </span>
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        style={{
          width: "100%", padding: "0.85rem 1rem", borderRadius: "10px",
          border: "1.5px solid var(--border)", background: "var(--bg)", color: "var(--text)",
          fontSize: "1rem", outline: "none",
        }}
      />
    </label>
  );
}
