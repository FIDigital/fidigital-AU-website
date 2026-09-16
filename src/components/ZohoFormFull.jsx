"use client";

/**
 * Inline Zoho WebToLead form — 5 fields, no iframe, no captcha.
 * Hidden fields copied byte-for-byte from src/app/zoho-form/route.js.
 */
export default function ZohoFormFull() {
  function handleSubmit(e) {
    const form = e.target;
    if (!form.checkValidity()) {
      e.preventDefault();
      form.reportValidity();
    }
  }

  const inputStyle = { padding: "0.85rem 1rem", fontSize: "0.95rem" };

  return (
    <form
      action="https://crm.zoho.com/crm/WebToLeadForm"
      method="POST"
      acceptCharset="UTF-8"
      onSubmit={handleSubmit}
      style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem" }}
    >
      {/* Hidden fields */}
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

      <div className="form-group">
        <label>First Name <span style={{ color: "var(--error, #ef4444)" }}>*</span></label>
        <input name="First Name" type="text" required maxLength={40} placeholder="e.g. John" className="form-input" style={inputStyle} />
      </div>
      <div className="form-group">
        <label>Last Name <span style={{ color: "var(--error, #ef4444)" }}>*</span></label>
        <input name="Last Name" type="text" required maxLength={80} placeholder="e.g. Smith" className="form-input" style={inputStyle} />
      </div>

      <div className="form-group" style={{ gridColumn: "1 / -1" }}>
        <label>Work Email <span style={{ color: "var(--error, #ef4444)" }}>*</span></label>
        <input name="Email" type="email" required maxLength={100} placeholder="john@example.com" className="form-input" style={inputStyle} />
      </div>

      <div className="form-group" style={{ gridColumn: "1 / -1" }}>
        <label>Company <span style={{ color: "var(--error, #ef4444)" }}>*</span></label>
        <input name="Company" type="text" required maxLength={200} placeholder="Your Company Name" className="form-input" style={inputStyle} />
      </div>

      <div className="form-group" style={{ gridColumn: "1 / -1" }}>
        <label>What do you want to automate? <span style={{ color: "var(--error, #ef4444)" }}>*</span></label>
        <textarea name="LEADCF130" required rows={3} placeholder="Describe your challenges…" className="form-input" style={{ ...inputStyle, resize: "vertical" }} />
      </div>

      <div style={{ gridColumn: "1 / -1", marginTop: "0.25rem" }}>
        <button type="submit" className="btn-primary" style={{ width: "100%", padding: "1rem", fontSize: "1.05rem", fontWeight: 700, borderRadius: 8, cursor: "pointer", border: "none" }}>
          Get in Touch
        </button>
      </div>

      <style>{`
        @media (max-width: 640px) {
          form[action*="WebToLeadForm"] { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </form>
  );
}
