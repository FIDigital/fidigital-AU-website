import Link from "next/link";
import { siteConfig } from "@/lib/siteData";
import { Linkedin, Mail, Phone, MapPin } from "lucide-react";
import Logo from "./Logo";

const footerLinks = {
  Services: [
    { label: "Product Engineering", href: "/product-engineering" },
    { label: "Data Platforms", href: "/data-platforms" },
    { label: "AI Agents & RAG", href: "/ai-agents" },
    { label: "Business Systems", href: "/business-systems" },
    { label: "Zoho Consulting", href: "/zoho-consultants" },
  ],
  Industries: [
    { label: "Financial Services", href: "/financial-services-wealth" },
    { label: "Healthcare & Aged Care", href: "/healthcare-aged-care" },
    { label: "Resources & Logistics", href: "/resources-mining-logistics" },
    { label: "Energy & Renewables", href: "/energy-renewables" },
  ],
  Resources: [
    { label: "Case Studies", href: "/case-studies" },
    { label: "Modernisation Hub", href: "/business-systems" },
    { label: "Partnerships", href: "/why-fi-digital/partnerships" },
  ],
  Company: [
    { label: "Why Us", href: "/why-fi-digital" },
    { label: "Australian Compliance", href: "/why-fi-digital/australian-compliance" },
    { label: "Global Delivery", href: "/why-fi-digital/global-delivery" },
    { label: "Contact Us", href: "/contact" },
  ],
  Locations: [
    { label: "Melbourne", href: "/locations/melbourne" },
    { label: "Sydney", href: "/locations/sydney" },
  ],
};

export default function Footer() {
  return (
    <footer className="fi-footer">
      <div className="fi-footer-accent-line" />

      <div className="fi-footer-inner">
        <div className="fi-footer-grid">
          {/* ── Brand Column ── */}
          <div className="fi-footer-brand">
            <Link href="/" aria-label="FI Digital – Home" style={{ display: "flex", alignItems: "center", textDecoration: "none", marginBottom: "1.5rem" }}>
                <Logo variant="white" width="190px" height="58px" />
            </Link>

            <p className="fi-footer-tagline">
              Premium Product Engineering, Data Platforms, and AI Agent Architects. Melbourne-based senior team serving the APAC region.
            </p>

            <div className="fi-footer-contact">
              <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`} className="fi-footer-contact-row">
                <span className="fi-footer-contact-icon"><Phone size={14} /></span>
                {siteConfig.phone}
              </a>
              <a href={`mailto:${siteConfig.email}`} className="fi-footer-contact-row">
                <span className="fi-footer-contact-icon"><Mail size={14} /></span>
                {siteConfig.email}
              </a>
            </div>

            <div className="fi-footer-socials">
              <a href="https://www.linkedin.com/company/fi-digital-services/posts/" target="_blank" rel="noopener noreferrer" className="fi-footer-social-link" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
              <a href="https://x.com/FidigitalAus?s=20" target="_blank" rel="noopener noreferrer" className="fi-footer-social-link" aria-label="X (formerly Twitter)">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>

          {/* ── Link Columns ── */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="fi-footer-col">
              <h3 className="fi-footer-col-title">{title}</h3>
              <ul className="fi-footer-col-list">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="fi-footer-col-link">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ── Offices ── */}
        <div className="fi-footer-offices">
          {Object.values(siteConfig.offices).map((office) => (
            <div key={office.city} className="fi-footer-office-card">
              <div className="fi-footer-office-header">
                <span className="fi-footer-office-dot" />
                <h4 className="fi-footer-office-city">{office.city}</h4>
              </div>
              <p className="fi-footer-office-detail">
                <MapPin size={12} /> {office.address}
              </p>
              <p className="fi-footer-office-detail">
                <Phone size={12} /> {office.phone}
              </p>
            </div>
          ))}
        </div>

        {/* ── Bottom bar ── */}
        <div className="fi-footer-bottom">
          <p className="fi-footer-copy">
            &copy; {new Date().getFullYear()} FI Digital Australia. All rights reserved.
          </p>
          <div className="fi-footer-legal">
            <Link href="/privacy" className="fi-footer-legal-link">Privacy Policy</Link>
            <span className="fi-footer-legal-dot">·</span>
            <Link href="/terms" className="fi-footer-legal-link">Terms of Service</Link>
          </div>
        </div>
      </div>

      <style>{`
        .fi-footer {
          background: #030712;
          color: #94a3b8;
          position: relative;
          overflow: hidden;
        }

        .fi-footer-accent-line {
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(29,78,216,0.6) 30%, rgba(99,102,241,0.6) 70%, transparent);
        }

        .fi-footer-inner {
          position: relative;
          z-index: 1;
          max-width: 1300px;
          margin: 0 auto;
          padding: 5rem 1.5rem 2.5rem;
        }

        .fi-footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr 1fr 1fr;
          gap: 3rem;
          padding-bottom: 4rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }

        .fi-footer-brand {
          max-width: 320px;
        }

        .fi-footer-tagline {
          font-size: 0.95rem;
          line-height: 1.7;
          color: #94a3b8;
          margin-bottom: 2rem;
        }

        .fi-footer-contact {
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
        }

        .fi-footer-contact-row {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-size: 0.9rem;
          color: #e2e8f0;
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .fi-footer-contact-row:hover {
          color: #3b82f6;
        }

        .fi-footer-contact-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 28px;
          height: 28px;
          border-radius: 8px;
          background: rgba(29,78,216,0.15);
          color: #3b82f6;
          flex-shrink: 0;
        }

        .fi-footer-socials {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-top: 2rem;
        }

        .fi-footer-social-link {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: 10px;
          background: rgba(255, 255, 255, 0.03);
          color: #94a3b8;
          transition: all 0.3s ease;
          border: 1px solid rgba(255, 255, 255, 0.05);
        }

        .fi-footer-social-link:hover {
          background: rgba(29, 78, 216, 0.1);
          color: #3b82f6;
          border-color: rgba(29, 78, 216, 0.2);
          transform: translateY(-3px);
        }

        .fi-footer-col-title {
          font-size: 0.75rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          color: #f8fafc;
          margin-bottom: 1.5rem;
          position: relative;
          padding-bottom: 0.75rem;
        }

        .fi-footer-col-title::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 30px;
          height: 2px;
          background: #3b82f6;
        }

        .fi-footer-col-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .fi-footer-col-link {
          font-size: 0.9rem;
          color: #94a3b8;
          text-decoration: none;
          transition: all 0.2s ease;
        }

        .fi-footer-col-link:hover {
          color: #3b82f6;
          padding-left: 4px;
        }

        .fi-footer-offices {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
          padding: 3rem 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }

        .fi-footer-office-card {
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.05);
          border-radius: 16px;
          padding: 1.5rem;
          transition: all 0.3s ease;
        }

        .fi-footer-office-card:hover {
          border-color: rgba(29,78,216,0.3);
          background: rgba(255,255,255,0.03);
        }

        .fi-footer-office-header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1rem;
        }

        .fi-footer-office-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #3b82f6;
          box-shadow: 0 0 10px rgba(59, 130, 246, 0.5);
        }

        .fi-footer-office-city {
          font-size: 1rem;
          font-weight: 700;
          color: #f8fafc;
        }

        .fi-footer-office-detail {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          font-size: 0.85rem;
          color: #94a3b8;
          line-height: 1.6;
          margin-top: 0.5rem;
        }

        .fi-footer-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 2rem;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .fi-footer-copy {
          font-size: 0.85rem;
          color: #94a3b8;
        }

        .fi-footer-legal {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .fi-footer-legal-link {
          font-size: 0.85rem;
          color: #94a3b8;
          text-decoration: none;
        }

        @media (max-width: 1024px) {
          .fi-footer-grid { grid-template-columns: 1fr 1fr 1fr; }
          .fi-footer-brand { grid-column: 1 / -1; max-width: 100%; margin-bottom: 2rem; }
        }

        @media (max-width: 768px) {
          .fi-footer-grid { grid-template-columns: 1fr 1fr; }
          .fi-footer-offices { grid-template-columns: 1fr; }
        }

        @media (max-width: 480px) {
          .fi-footer-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </footer>
  );
}
