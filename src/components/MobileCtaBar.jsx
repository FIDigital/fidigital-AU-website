"use client";

import Link from "next/link";
import { Phone, Calendar } from "lucide-react";

/**
 * Sticky bottom CTA bar — mobile only (sprint Task 23).
 * Two actions: tap-to-call and Book Discovery. Hidden at >= 768px.
 * Reserves bottom padding on the page so it never covers footer content.
 */
export default function MobileCtaBar() {
  return (
    <>
      <div className="mobile-cta-bar" role="region" aria-label="Quick contact">
        <a href="tel:1300921280" className="mcb-btn mcb-call" aria-label="Call 1300 921 280">
          <Phone size={18} /> Call 1300 921 280
        </a>
        <Link href="/book-discovery" className="mcb-btn mcb-book">
          <Calendar size={18} /> Book Discovery
        </Link>
      </div>

      <style jsx global>{`
        .mobile-cta-bar {
          display: none;
        }
        @media (max-width: 767px) {
          .mobile-cta-bar {
            position: fixed;
            left: 0;
            right: 0;
            bottom: 0;
            z-index: 9998;
            display: flex;
            gap: 0.5rem;
            padding: 0.6rem 0.75rem calc(0.6rem + env(safe-area-inset-bottom, 0px));
            background: var(--bg);
            border-top: 1px solid var(--border);
            box-shadow: 0 -6px 20px rgba(0, 0, 0, 0.08);
            animation: mcb-slide-up 0.35s cubic-bezier(0.16, 1, 0.3, 1) both;
          }
          /* Reserve space so the fixed bar never hides footer content */
          body {
            padding-bottom: 68px;
          }
        }
        .mcb-btn {
          flex: 1 1 0;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          padding: 0.85rem 0.75rem;
          border-radius: 10px;
          font-size: 0.9rem;
          font-weight: 700;
          text-decoration: none;
          white-space: nowrap;
        }
        .mcb-call {
          background: var(--bg-secondary);
          color: var(--text);
          border: 1px solid var(--border);
        }
        .mcb-book {
          background: var(--primary);
          color: #fff;
        }
        @keyframes mcb-slide-up {
          from { transform: translateY(100%); }
          to { transform: translateY(0); }
        }
      `}</style>
    </>
  );
}
