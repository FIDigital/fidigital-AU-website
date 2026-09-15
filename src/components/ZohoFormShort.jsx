"use client";

export default function ZohoFormShort() {
  function handleSubmit(e) {
    const form = e.target;
    if (!form.checkValidity()) {
      e.preventDefault();
      form.reportValidity();
    }
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
        gridTemplateColumns: "1fr 1fr",
        gap: "clamp(2rem, 5vw, 4rem)",
        alignItems: "center",
      }}>
        {/* Left — headline */}
        <div>
          <p style={{ fontSize: "0.85rem", fontWeight: 700, color: "var(--primary)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.75rem" }}>
            Start a conversation
          </p>
          <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)", fontWeight: 800, lineHeight: 1.15, marginBottom: "1rem", letterSpacing: "-0.02em" }}>
            Tell us what you want to automate
          </h2>
          <p style={{ fontSize: "1.05rem", color: "var(--text-muted)", lineHeight: 1.7, maxWidth: 440 }}>
            Fill in a few details and we&apos;ll get back to you within one business day with a tailored response.
          </p>
        </div>

        {/* Right — compact form card */}
        <div style={{
          background: "var(--card-bg)",
          border: "1px solid var(--border)",
          borderRadius: 20,
          padding: "clamp(1.5rem, 3vw, 2rem)",
        }}>
          <form
            action="https://crm.zoho.com/crm/WebToLeadForm"
            method="POST"
            acceptCharset="UTF-8"
            onSubmit={handleSubmit}
            style={{ display: "grid", gap: "0.85rem" }}
          >
            {/* Hidden fields — from src/app/zoho-form/route.js */}
            <input type="hidden" name="xnQsjsdp" value="c4ebc2295599e6f55807fb0c7fee5e54c307e58b68c3dbaab25ae6171f1b36dd" />
            <input type="hidden" name="zc_gad" value="" />
            <input type="hidden" name="xmIwtLD" value="6d650e49c8bf22da2119e8bf5cb34675211ca0d40f9018d449a33cd25419cb3a0f82068935026d39630e6ebdc363da87" />
            <input type="hidden" name="actionType" value="TGVhZHM=" />
            <input type="hidden" name="returnURL" value="https://fidigital.com.au/thank-you" />
            <input type="hidden" name="ldeskuid" value="" />
            <input type="hidden" name="LDTuvid" value="" />
            <input type="hidden" name="aG9uZXlwb3Q" value="" />
            <select name="LEADCF48" defaultValue="FI Digital" hidden><option value="FI Digital">FI Digital</option></select>
            <select name="Lead Status" defaultValue="New Lead" hidden><option value="New Lead">New Lead</option></select>

            {/* Name row — side by side */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.85rem" }}>
              <input name="First Name" type="text" required maxLength={40} placeholder="First Name" className="form-input" style={{ padding: "0.75rem 0.9rem", fontSize: "0.9rem" }} />
              <input name="Last Name" type="text" required maxLength={80} placeholder="Last Name" className="form-input" style={{ padding: "0.75rem 0.9rem", fontSize: "0.9rem" }} />
            </div>

            <input name="Email" type="email" required maxLength={100} placeholder="Work Email" className="form-input" style={{ padding: "0.75rem 0.9rem", fontSize: "0.9rem" }} />
            <input name="Company" type="text" required maxLength={200} placeholder="Company" className="form-input" style={{ padding: "0.75rem 0.9rem", fontSize: "0.9rem" }} />
            <textarea name="LEADCF130" required rows={2} placeholder="What do you want to automate?" className="form-input" style={{ padding: "0.75rem 0.9rem", fontSize: "0.9rem", resize: "vertical" }} />

            <button type="submit" className="btn-primary" style={{ width: "100%", padding: "0.85rem", fontSize: "0.95rem", borderRadius: 8, fontWeight: 700, cursor: "pointer", marginTop: "0.25rem" }}>
              Get in Touch
            </button>
          </form>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .zfs-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
