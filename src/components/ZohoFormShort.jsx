
"use client";

import { useState, useEffect } from "react";
import { ArrowRight, CheckCircle } from "lucide-react";

export default function ZohoFormShort() {
  const [submitted, setSubmitted] = useState(false);
  const [adData, setAdData] = useState({});

  /* Capture ad-tracking params from URL + persist in sessionStorage.
     Runs once on mount so values survive page navigation. */
  useEffect(() => {
    let store = {};
    try { store = JSON.parse(sessionStorage.getItem("fi_ad") || "{}"); } catch (e) {}
    const q = new URLSearchParams(window.location.search);
    ["gclid", "gbraid", "wbraid", "utm_source", "utm_medium", "utm_campaign",
     "utm_term", "utm_content", "fbclid"].forEach((k) => {
      if (q.get(k)) store[k] = q.get(k);
    });
    if (!store.landing) store.landing = window.location.href.split("?")[0];
    if (!store.first_seen) store.first_seen = new Date().toISOString();
    try { sessionStorage.setItem("fi_ad", JSON.stringify(store)); } catch (e) {}
    setAdData(store);
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    if (!form.checkValidity()) { form.reportValidity(); return; }

    const data = new FormData(form);
    fetch("https://crm.zoho.com/crm/WebToLeadForm", {
      method: "POST",
      body: new URLSearchParams(data),
      mode: "no-cors",
    }).finally(() => setSubmitted(true));
  }

  return (
    <section style={{
      padding: "clamp(4rem, 8vw, 7rem) 1.5rem",
      background: "linear-gradient(135deg, rgba(16,185,129,0.06) 0%, rgba(29,78,216,0.08) 100%)",
      borderTop: "1px solid var(--border)",
    }}>
      <div className="zfs-grid" style={{
        maxWidth: 1100,
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "1fr 420px",
        gap: "clamp(2.5rem, 5vw, 5rem)",
        alignItems: "center",
      }}>
        {/* Left — headline */}
        <div>
          <p style={{
            fontSize: "0.8rem", fontWeight: 700, color: "var(--primary)",
            textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "1rem",
          }}>
            Start a conversation
          </p>
          <h2 style={{
            fontSize: "clamp(1.8rem, 4vw, 2.6rem)", fontWeight: 800,
            lineHeight: 1.15, marginBottom: "1.25rem", letterSpacing: "-0.02em",
          }}>
            Tell us what you{"\u2019"}d like to automate
          </h2>
          <p style={{
            fontSize: "1.05rem", color: "var(--text-muted)",
            lineHeight: 1.75, maxWidth: 440,
          }}>
            Share a few details about your project. Our engineering team will review your inquiry and respond within one business day.
          </p>
          <a href="/book-discovery" className="zfs-discovery">
            Prefer a live conversation? <strong>Book a discovery call</strong> <ArrowRight size={16} />
          </a>
        </div>

        {/* Right — form card / thank-you */}
        <div style={{
          background: "var(--card-bg)",
          border: "1px solid var(--border)",
          borderRadius: 24,
          padding: "clamp(1.75rem, 3vw, 2.25rem)",
          boxShadow: "0 12px 40px rgba(0,0,0,0.06)",
          minHeight: 380,
          display: "flex",
          alignItems: submitted ? "center" : "stretch",
          justifyContent: submitted ? "center" : "stretch",
        }}>
          {submitted ? (
            <div style={{ textAlign: "center", padding: "1.5rem 0" }}>
              <div style={{
                width: 64, height: 64, borderRadius: "50%",
                background: "linear-gradient(135deg, rgba(16,185,129,0.15) 0%, rgba(29,78,216,0.12) 100%)",
                display: "flex", alignItems: "center", justifyContent: "center",
                margin: "0 auto 1.25rem",
              }}>
                <CheckCircle size={28} color="var(--primary)" />
              </div>
              <h3 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: "0.5rem" }}>
                Thank You!
              </h3>
              <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", lineHeight: 1.6 }}>
                We&apos;ve received your details and will be in touch within one business day.
              </p>
            </div>
          ) : (
            <form
              action="https://crm.zoho.com/crm/WebToLeadForm"
              method="POST"
              acceptCharset="UTF-8"
              onSubmit={handleSubmit}
              style={{ display: "grid", gap: "1rem", width: "100%" }}
            >
              {/* Hidden fields */}
              {/* Zoho security/anti-bot fields — DO NOT remove */}
              <input type="hidden" name="xnQsjsdp" value="6e7ad8a6daf4ea054e5ef608a5109284b49720f6036ea3168941efac9fbfb063" />
              <input type="hidden" name="xmIwtLD" value="1d3620b7b2439270183167777417067374f5233c22fd568841cad9929169b27afc6f970121d46c9a16d1a6caf3ea4009" />
              <input type="hidden" name="actionType" value="TGVhZHM=" />
              <input type="hidden" name="returnURL" value="https://www.fidigital.com.au/thank-you" />
              <input type="hidden" name="ldeskuid" value="" />
              <input type="hidden" name="LDTuvid" value="" />
              <input type="hidden" name="aG9uZXlwb3Q" value="" />
              <select name="LEADCF48" defaultValue="FI Digital" hidden><option value="FI Digital">FI Digital</option></select>
              <select name="Lead Status" defaultValue="New Lead" hidden><option value="New Lead">New Lead</option></select>

              {/* Ad-tracking hidden fields */}
              <input type="hidden" name="zc_gad"    id="fi_gclid"      value={adData.gclid || ""} />
              <input type="hidden" name="LEADCF_xx" id="fi_gbraid"     value={adData.gbraid || ""} />
              <input type="hidden" name="LEADCF_xx" id="fi_wbraid"     value={adData.wbraid || ""} />
              <input type="hidden" name="LEADCF155" id="fi_source"     value={adData.utm_source || ""} />
              <input type="hidden" name="LEADCF157" id="fi_medium"     value={adData.utm_medium || ""} />
              <input type="hidden" name="LEADCF156" id="fi_campaign"   value={adData.utm_campaign || ""} />
              <input type="hidden" name="LEADCF153" id="fi_term"       value={adData.utm_term || ""} />
              <input type="hidden" name="LEADCF158" id="fi_content"    value={adData.utm_content || ""} />
              <input type="hidden" name="LEADCF154" id="fi_fbclid"     value={adData.fbclid || ""} />
              <input type="hidden" name="LEADCF_xx" id="fi_landing"    value={adData.landing || ""} />
              <input type="hidden" name="LEADCF_xx" id="fi_first_seen" value={adData.first_seen || ""} />

              {/* Name row */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem" }}>
                <div className="zfs-field">
                  <label className="zfs-label">First Name</label>
                  <input name="First Name" type="text" required maxLength={40} placeholder="John" className="zfs-input" />
                </div>
                <div className="zfs-field">
                  <label className="zfs-label">Last Name</label>
                  <input name="Last Name" type="text" required maxLength={80} placeholder="Smith" className="zfs-input" />
                </div>
              </div>

              <div className="zfs-field">
                <label className="zfs-label">Work Email</label>
                <input name="Email" type="email" required maxLength={100} placeholder="john@company.com" className="zfs-input" />
              </div>

              <div className="zfs-field">
                <label className="zfs-label">Company</label>
                <input name="Company" type="text" required maxLength={200} placeholder="Your company name" className="zfs-input" />
              </div>

              <div className="zfs-field">
                <label className="zfs-label">What do you want to automate?</label>
                <textarea name="LEADCF130" required rows={3} placeholder="Tell us about your project or challenge…" className="zfs-input" style={{ resize: "vertical" }} />
              </div>

              <button type="submit" className="zfs-btn">
                Get in Touch <ArrowRight size={18} />
              </button>
            </form>
          )}
        </div>
      </div>

      <style>{`
        .zfs-field {
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
        }
        .zfs-label {
          font-size: 0.8rem;
          font-weight: 700;
          color: var(--text);
          letter-spacing: 0.02em;
        }
        .zfs-input {
          width: 100%;
          padding: 0.7rem 0.85rem;
          border-radius: 10px;
          border: 1.5px solid var(--border);
          background: var(--bg);
          color: var(--text);
          font-size: 0.9rem;
          font-family: inherit;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
          outline: none;
        }
        .zfs-input::placeholder {
          color: var(--text-muted);
          opacity: 0.6;
        }
        .zfs-input:focus {
          border-color: var(--primary);
          box-shadow: 0 0 0 3px rgba(29, 78, 216, 0.1);
        }
        .zfs-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          width: 100%;
          padding: 0.85rem 1.5rem;
          margin-top: 0.25rem;
          background: linear-gradient(135deg, #0279FF 0%, #00A3F3 100%);
          color: #fff;
          font-size: 0.95rem;
          font-weight: 700;
          font-family: inherit;
          border: none;
          border-radius: 10px;
          cursor: pointer;
          box-shadow: 0 4px 16px rgba(2, 121, 255, 0.3);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .zfs-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(2, 121, 255, 0.4);
        }
        .zfs-btn:active {
          transform: translateY(0);
        }
        .zfs-discovery {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          margin-top: 1.5rem;
          font-size: 0.95rem;
          color: var(--primary);
          text-decoration: none;
          font-weight: 500;
          transition: gap 0.2s ease;
        }
        .zfs-discovery:hover {
          gap: 0.65rem;
        }
        @media (max-width: 768px) {
          .zfs-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
