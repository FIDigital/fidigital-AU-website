"use client";

import Image from "next/image";

/**
 * "Trusted by" logo strip (sprint Task 33).
 * Greyscale by default, colour on hover. Where a client has no logo file yet,
 * a labelled grey placeholder rectangle is rendered (Pratik swaps real logos later).
 *
 * Props:
 *   clients?: { name: string, src?: string }[]
 *   caption?: string
 */
const DEFAULT_CLIENTS = [
  { name: "Silk Logistics" },
  { name: "BlueNRG" },
  { name: "Civil Survey Solutions" },
  { name: "Drova" },
  { name: "Visual Exposure" },
  { name: "Warequip" },
];

export default function TrustedBy({ clients = DEFAULT_CLIENTS, caption = "Trusted by Australian enterprise clients." }) {
  return (
    <section aria-label="Trusted by Australian enterprise clients" style={{ padding: "2.5rem 1.5rem", background: "var(--bg)", borderBottom: "1px solid var(--border)" }}>
      <div className="container" style={{ maxWidth: "1100px", textAlign: "center" }}>
        <p style={{ fontSize: "0.8rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: "1.5rem" }}>
          {caption}
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center", gap: "1.25rem" }}>
          {clients.map((c) => (
            <div key={c.name} className="trusted-logo" title={c.name}>
              {c.src ? (
                <Image src={c.src} alt={c.name} width={120} height={40} style={{ objectFit: "contain", height: "40px", width: "auto" }} />
              ) : (
                <span className="trusted-placeholder">{c.name}</span>
              )}
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .trusted-logo {
          filter: grayscale(1);
          opacity: 0.6;
          transition: filter 0.3s ease, opacity 0.3s ease;
          display: flex;
          align-items: center;
        }
        .trusted-logo:hover {
          filter: grayscale(0);
          opacity: 1;
        }
        .trusted-placeholder {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          height: 44px;
          padding: 0 1.25rem;
          background: var(--bg-secondary);
          border: 1px solid var(--border);
          border-radius: 8px;
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--text-muted);
          white-space: nowrap;
        }
      `}</style>
    </section>
  );
}
