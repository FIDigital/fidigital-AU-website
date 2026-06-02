"use client";

import Link from 'next/link';
import gsap from 'gsap';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { ArrowRight, Truck, LayoutDashboard, Clock, MapPin, Activity, FileText, Zap, Smartphone } from 'lucide-react';
import Image from 'next/image';

if (typeof window !== 'undefined') {
  const { ScrollTrigger } = require('gsap/ScrollTrigger');
  gsap.registerPlugin(ScrollTrigger);
}

export default function LogisticsClient() {
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.from(".hero-badge", { y: 20, autoAlpha: 0, duration: 0.6, ease: "power3.out" });
    gsap.from(".hero-title", { y: 30, autoAlpha: 0, duration: 0.8, delay: 0.1, ease: "power3.out" });
    gsap.from(".hero-subtitle", { y: 30, autoAlpha: 0, duration: 0.8, delay: 0.2, ease: "power3.out" });
    gsap.from(".hero-btn", { y: 20, autoAlpha: 0, duration: 0.6, delay: 0.35, ease: "power3.out" });

    gsap.utils.toArray(".reveal").forEach((elem) => {
      gsap.fromTo(elem, 
        { y: 40, autoAlpha: 0 },
        {
          y: 0, 
          autoAlpha: 1, 
          duration: 0.8, 
          ease: "power3.out",
          scrollTrigger: {
            trigger: elem,
            start: "top 85%",
            once: true
          }
        }
      );
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} style={{ background: "var(--bg)", minHeight: "100vh" }}>
      
      {/* ══ HERO SECTION ══════════════ */}
      <section style={{
        position: "relative",
        minHeight: "85vh",
        display: "flex",
        alignItems: "center",
        padding: "clamp(120px, 15vh, 180px) 1.5rem 100px",
        background: "var(--bg)",
        overflow: "hidden",
        borderBottom: "1px solid var(--border)"
      }}>
        <div style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "60%",
          height: "100%",
          zIndex: 0,
          opacity: 0.45,
          pointerEvents: "none",
        }}>
          <Image
            src="/images/logistics.png"
            alt="Agile Logistics Networks"
            aria-hidden="true"
            fill sizes="(max-width: 768px) 100vw, 50vw"
            style={{
              objectFit: "cover",
              maskImage: "radial-gradient(circle at right, black, transparent 80%)",
              WebkitMaskImage: "radial-gradient(circle at right, black, transparent 80%)",
            }}
          />
        </div>

        <div className="container" style={{ position: "relative", zIndex: 1, textAlign: "left" }}>
          
          <div style={{ maxWidth: "1000px", textAlign: "left" }}>
            <div className="hero-badge" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "rgba(29, 78, 216, 0.1)", color: "var(--primary)", padding: "0.5rem 1rem", borderRadius: "50px", fontWeight: 700, marginBottom: "1.5rem" }}>
              <Truck size={16} /> Scalable Fleet & Supply Chains
            </div>

            <h1 className="hero-title" style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)", lineHeight: 1.1, fontWeight: 900, color: "var(--text)", letterSpacing: "-0.02em", marginBottom: "2rem", textWrap: "balance" }}>
              Responsive Logistics <br/>
              <span style={{ color: "var(--primary)", fontWeight: 300 }}>& Fleet Optimization</span>
            </h1>

            <div className="hero-subtitle" style={{ display: "grid", gap: "1.5rem", margin: "0 0 3rem 0", maxWidth: "800px" }}>
              <p style={{ fontSize: "clamp(1.1rem, 2vw, 1.25rem)", color: "var(--text-muted)", lineHeight: 1.7, margin: 0, textWrap: "balance" }}>
                Do you want to create an agile, responsive and personalized logistics chain? With Zoho implementation and integration services, logistics companies can deliver their goods on time, while also ensuring enhanced customer experience.
              </p>
              
              <p style={{ fontSize: "clamp(1.1rem, 2vw, 1.25rem)", color: "var(--text-muted)", lineHeight: 1.7, margin: 0, paddingLeft: "1.5rem", borderLeft: "4px solid var(--primary)" }}>
                At FI Digital, we use a wide range of Zoho applications such as Zoho Creator for digitizing your logistics business and provide you with an edge over your competitors.
              </p>
            </div>

            <div className="hero-btn" style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-start', flexWrap: 'wrap' }}>
              <Link href="/contact" className="btn-primary" style={{ height: "42px", padding: "0 1.5rem", fontSize: "0.9rem", display: "inline-flex", alignItems: "center", gap: "0.5rem", textDecoration: "none", fontWeight: 600 }}>
                Digitize Your Logistics Ecosystem <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ══ SECTION 1: ZOHO CAPABILITIES ══════════════ */}
      <section className="section" style={{ background: "var(--bg-secondary)", padding: "100px 1.5rem" }}>
        <div className="container" style={{ maxWidth: "1000px", textAlign: "center" }}>
          <div className="reveal">
            <h2 className="section-title" style={{ fontSize: "2.5rem", fontWeight: 900, marginBottom: "2rem", lineHeight: 1.2 }}>
              How Zoho Application & Implementation <br/>Can Help Logistics Chains?
            </h2>
            <div style={{ background: "var(--bg)", border: "1px solid var(--border)", borderRadius: "24px", padding: "3rem", boxShadow: "0 20px 40px rgba(0,0,0,0.02)", textAlign: "left" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                <p style={{ fontSize: "1.15rem", color: "var(--text)", lineHeight: 1.8, margin: 0 }}>
                  Zoho for Logistics is designed to assist logistics companies in managing their shipments with ease and minimal efforts.
                </p>
                <div style={{ padding: "1.5rem", background: "rgba(29, 78, 216, 0.05)", borderLeft: "4px solid var(--primary)", borderRadius: "0 16px 16px 0" }}>
                  <p style={{ color: "var(--text-muted)", fontWeight: 500, margin: 0, fontSize: "1.1rem", lineHeight: 1.7 }}>
                    It also helps them to comfortably manage their procurements, distribution as well as warehousing needs and offer a hassle free business experience to their customers.
                  </p>
                </div>
                <p style={{ fontSize: "1.15rem", color: "var(--text-muted)", lineHeight: 1.8, margin: 0 }}>
                  Logistics business can customize as well as integrate Zoho applications to design a full-fledged and an efficient logistics management system.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ SECTION 2: LOGISTICS GRID ══════════════ */}
      <section className="section" style={{ background: "var(--bg)", padding: "100px 1.5rem", borderTop: "1px solid var(--border)" }}>
        <div className="container" style={{ maxWidth: "1250px" }}>
          
          <div className="reveal" style={{ textAlign: "center", marginBottom: "4rem" }}>
             <p style={{ fontSize: "1.15rem", color: "var(--primary)", fontWeight: 700, margin: "0 auto", maxWidth: "800px", lineHeight: 1.8 }}>
                Zoho application integration and implementation enables logistics companies to:
             </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "2rem" }}>
             {[
               { title: "Unified Dashboard", desc: "Set up and view all the mission-critical data/information through a unified and an easy to access dashboard.", icon: LayoutDashboard, color: "#3B82F6" },
               { title: "Order Analytics", desc: "Access all the order related information, pending order data and earnings for a trip through the dashboard.", icon: Clock, color: "#10B981" },
               { title: "Shipment Tracking", desc: "Keep track of the shipments through mobile based barcode scanning as well as geo-tagging that provides real-time location updates.", icon: MapPin, color: "#F59E0B" },
               { title: "Fleet Efficient Reporting", desc: "Review the fleets’ operational and fuel efficiency, workforce efficiency, inventory turnover, customer satisfaction as well as other metrics through comprehensive and unique reports.", icon: Activity, color: "#8B5CF6" },
               { title: "Custom Shipment Reports", desc: "Access and customize all the shipment reports in just a couple of clicks.", icon: FileText, color: "#EF4444" },
               { title: "Optimized Task Automation", desc: "Save time through task automation and optimization of delivery channels.", icon: Zap, color: "#06B6D4" },
               { title: "Real-Time Driver App", desc: "Enable drivers to update the status of their shipment delivery in real-time via a mobile app.", icon: Smartphone, color: "#14B8A6" }
             ].map((item, i) => (
                <div key={i} className="reveal hover-lift" style={{ background: "var(--card-bg)", padding: "2.5rem 2rem", borderRadius: "20px", border: "1px solid var(--border)", boxShadow: "0 10px 30px rgba(0,0,0,0.03)", display: "flex", flexDirection: "column", gap: "1.15rem" }}>
                  <div style={{ width: "56px", height: "56px", borderRadius: "14px", background: `${item.color}15`, display: "flex", alignItems: "center", justifyContent: "center", color: item.color }}>
                    <item.icon size={28} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: "1.25rem", fontWeight: 800, color: "var(--text)", marginBottom: "0.75rem" }}>{item.title}</h3>
                    <p style={{ color: "var(--text-muted)", lineHeight: 1.6, margin: 0, fontSize: "1.05rem" }}>
                      {item.desc}
                    </p>
                  </div>
                </div>
             ))}
          </div>

        </div>
      </section>

      {/* ══ SECTION 3: WHY US ══════════════ */}
      <section className="section" style={{ background: "var(--bg-secondary)", padding: "100px 1.5rem", borderTop: "1px solid var(--border)" }}>
        <div className="container" style={{ maxWidth: "1000px", textAlign: "center" }}>
          
          <div className="reveal">
            <h2 className="section-title" style={{ fontSize: "2.5rem", fontWeight: 900, marginBottom: "2rem" }}>
              Why Us?
            </h2>
            <div style={{ background: "var(--bg)", padding: "3.5rem", borderRadius: "24px", border: "1px solid var(--border)", boxShadow: "0 20px 40px rgba(0,0,0,0.02)" }}>
              <p style={{ fontSize: "1.15rem", color: "var(--text-muted)", lineHeight: 1.8, margin: 0 }}>
                As the premier provider of Zoho implementation & integration solutions in Australia, we are committed to assisting logistics companies at every step of their business. Our experienced and efficient team of Zoho consultants identify your specific requirements to implement the best Zoho software and applications that help you to effectively manage your inventory, vendors, distributors, fleet and expenses.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ══ FINAL CTA SECTION ══════════════ */}
      <section id="cta" style={{ padding: '120px 1.5rem', background: '#1d4ed8', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.1, backgroundImage: 'radial-gradient(circle at right center, rgba(255,255,255,0.8) 0%, transparent 50%)' }}></div>
        <div className="container" style={{ maxWidth: '900px', textAlign: 'center', position: 'relative', zIndex: 2 }}>
          
          <h2 style={{ fontSize: '3rem', fontWeight: 900, color: 'white', marginBottom: '3rem', letterSpacing: '-0.02em', lineHeight: 1.2, margin: "0 auto 3rem auto" }}>
             Connect with our Zoho experts to scale your logistic business to the next level!
          </h2>

          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Link href="/contact" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.75rem',
              background: 'white',
              color: 'var(--primary)',
              padding: '1.1rem 2.5rem',
              borderRadius: '100px',
              fontSize: '1.15rem',
              fontWeight: 800,
              textDecoration: 'none',
              boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
              transition: 'all 0.3s ease'
             }} className="btn-primary-hover">
              Contact Us <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      <style jsx>{`
        .btn-primary {
          background: linear-gradient(135deg, var(--primary) 0%, rgba(29, 78, 216, 1) 100%);
          color: white;
          border-radius: 8px;
          box-shadow: 0 15px 30px rgba(29, 78, 216, 0.2);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 20px 40px rgba(29, 78, 216, 0.3);
        }
        .hover-lift {
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease;
        }
        .hover-lift:hover {
          transform: translateY(-8px);
          box-shadow: 0 30px 60px rgba(0,0,0,0.12) !important;
        }
        .btn-primary-hover:hover {
          transform: translateY(-5px);
          box-shadow: 0 25px 50px rgba(0,0,0,0.3) !important;
        }
        @media (max-width: 768px) {
           .hover-lift {
              transform: none !important;
           }
        }
      `}</style>
    </div>
  );
}
