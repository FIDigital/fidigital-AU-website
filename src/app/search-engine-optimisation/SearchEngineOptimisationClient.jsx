"use client";

import Link from 'next/link';
import gsap from 'gsap';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { ArrowRight, Search, BarChart3, LineChart, Target, Compass, Globe } from 'lucide-react';
import Image from 'next/image';

if (typeof window !== 'undefined') {
  const { ScrollTrigger } = require('gsap/ScrollTrigger');
  gsap.registerPlugin(ScrollTrigger);
}

export default function SearchEngineOptimisationClient() {
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
            src="/images/seo.png"
            alt="Search Engine Optimisation Architecture"
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
              <Search size={16} /> Data-Driven Digital Marketing
            </div>

            <h1 className="hero-title" style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)", lineHeight: 1.1, fontWeight: 900, color: "var(--text)", letterSpacing: "-0.02em", marginBottom: "2rem", textWrap: "balance" }}>
              Grow Your Online Presence, <br/>
              <span style={{ color: "var(--primary)", fontWeight: 300 }}>Grow Your Business</span>
            </h1>

            <div className="hero-subtitle" style={{ display: "grid", gap: "1.5rem", margin: "0 0 3rem 0", maxWidth: "800px" }}>
              <p style={{ fontSize: "clamp(1.1rem, 2vw, 1.25rem)", color: "var(--text-muted)", lineHeight: 1.7, margin: 0, textWrap: "balance" }}>
                These days, almost every business needs to have an online presence to compete in the marketplace. Even if you have a traditional business servicing a specific geographical area, local SEO can be implemented to boost sales and bring in new customers.
              </p>
              
              <p style={{ fontSize: "clamp(1.1rem, 2vw, 1.25rem)", color: "var(--text-muted)", lineHeight: 1.7, margin: 0, paddingLeft: "1.5rem", borderLeft: "4px solid var(--primary)" }}>
                An effective SEO campaign can help your business to stand out from the pack, showcasing your products and services. Having greater online visibility can also help to provide greater customer service, allowing your potential customers and existing clients to find the answers to their queries at any time of the day or night. It can also help to build solid client relationships and greater brand loyalty. Most business owners now recognise the massive potential of the online marketplace and need effective SEO to harness this for their own business growth.
              </p>
            </div>

            <div className="hero-btn" style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-start', flexWrap: 'wrap' }}>
              <Link href="/contact" className="btn-primary" style={{ height: "42px", padding: "0 1.5rem", fontSize: "0.9rem", display: "inline-flex", alignItems: "center", gap: "0.5rem", textDecoration: "none", fontWeight: 600 }}>
                Improve Organic Rankings <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ══ SECTION 1: CORE ARCHITECTURE (2 CARDS) ══════════════ */}
      <section className="section" style={{ background: "var(--bg-secondary)", padding: "100px 1.5rem", borderTop: "1px solid var(--border)" }}>
        <div className="container" style={{ maxWidth: "1250px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))", gap: "2.5rem" }}>
            
            {/* Card 1 */}
            <div className="reveal hover-lift" style={{ background: "var(--bg)", border: "1px solid var(--border)", borderRadius: "24px", padding: "3rem", boxShadow: "0 20px 40px rgba(0,0,0,0.02)" }}>
               <div style={{ width: "64px", height: "64px", borderRadius: "16px", background: "rgba(59, 130, 246, 0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "#3B82F6", marginBottom: "1.5rem" }}>
                  <BarChart3 size={32} />
               </div>
               <h3 style={{ fontSize: "1.5rem", fontWeight: 800, color: "var(--text)", marginBottom: "1.25rem", lineHeight: 1.3 }}>
                 Improve Your Organic <br/>Search Rankings
               </h3>
               <p style={{ fontSize: "1.1rem", color: "var(--text-muted)", lineHeight: 1.8, margin: "0 0 1rem 0" }}>
                 Organic Search is considered the single biggest factor contributing to your web traffic. The team of FI digital experts are specialists in all aspects of digital marketing and will carefully analyse the content on your pages and ensure that they are optimised to rank on the major search engines including Google, Yahoo & Bing.
               </p>
               <p style={{ fontSize: "1.1rem", color: "var(--text-muted)", lineHeight: 1.8, margin: 0 }}>
                 Ensuring that the relevant pages on your site are ranked in the search results means a great user experience and that in turn means more leads or online sales. Increased growth in web traffic can have a massive direct impact on your performance. If you want to exceed your budgeted growth using SEO, Melbourne based FI Digital is ready to help.
               </p>
            </div>

            {/* Card 2 */}
            <div className="reveal hover-lift" style={{ background: "var(--bg)", border: "1px solid var(--border)", borderRadius: "24px", padding: "3rem", boxShadow: "0 20px 40px rgba(0,0,0,0.02)" }}>
               <div style={{ width: "64px", height: "64px", borderRadius: "16px", background: "rgba(16, 185, 129, 0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "#10B981", marginBottom: "1.5rem" }}>
                  <Compass size={32} />
               </div>
               <h3 style={{ fontSize: "1.5rem", fontWeight: 800, color: "var(--text)", marginBottom: "1.25rem", lineHeight: 1.3 }}>
                 Planning Your SEO Melbourne <br/>Marketing Campaign
               </h3>
               <p style={{ fontSize: "1.1rem", color: "var(--text-muted)", lineHeight: 1.8, margin: "0 0 1rem 0" }}>
                 SEO strategies are more than just choosing some keywords. We aim to help you boost your online presence and achieve your sales goals by helping you to plan an effective marketing campaign. We aim to get your website appearing on page 1 of Google, so you will be highly visible to any potential customers and build those all-important relationships.
               </p>
               <p style={{ fontSize: "1.1rem", color: "var(--text-muted)", lineHeight: 1.8, margin: 0 }}>
                 You can benefit from our industry expertise and the resulting boost in organic traffic to your site. Whether you’re looking to increase your visitor traffic, increase conversions, or create a stronger brand, our SEO Melbourne experts can help.
               </p>
            </div>

          </div>
        </div>
      </section>

      {/* ══ SECTION 2: HOW WE GET RESULTS ══════════════ */}
      <section className="section" style={{ background: "var(--bg)", padding: "100px 1.5rem", borderTop: "1px solid var(--border)" }}>
        <div className="container" style={{ maxWidth: "1000px", textAlign: "center" }}>
          <div className="reveal">
            <h2 className="section-title" style={{ fontSize: "2.5rem", fontWeight: 900, marginBottom: "2rem", lineHeight: 1.2 }}>
              How Do We Get Results?
            </h2>
            <div style={{ textAlign: "left", display: "flex", flexDirection: "column", gap: "1.5rem", maxWidth: "850px", margin: "0 auto", padding: "1.5rem", borderLeft: "4px solid var(--primary)", background: "rgba(29, 78, 216, 0.03)", borderRadius: "0 16px 16px 0" }}>
              <p style={{ fontSize: "1.15rem", color: "var(--text)", lineHeight: 1.8, margin: 0 }}>
                As an SEO company, this is a question we frequently hear. After all, you want to boost your business profile and get to the top of Google as quickly as possible. Unfortunately, there is no simple answer to how long you will need to wait to see results. The timescale depends on the industry and the prevailing keyword competition. Therefore, you should be wary of any SEO services who promise to deliver results in “x” days, as they could end up harming your website with dodgy strategies and gimmicks.
              </p>
              <p style={{ fontSize: "1.15rem", color: "var(--text)", lineHeight: 1.8, margin: 0 }}>
                The Melbourne SEO market is mature, and FI Digital has been one of the market leaders servicing Small and Medium Businesses. We understand the Digital Marketing requirement of Australian businesses like no other. While we can’t promise you results within a set number of days, you can have complete confidence that we are working to boost your online presence and increase your traffic organically.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══ SECTION 3: STRATEGY GRID ══════════════ */}
      <section className="section" style={{ background: "var(--bg-secondary)", padding: "100px 1.5rem", borderTop: "1px solid var(--border)" }}>
        <div className="container" style={{ maxWidth: "1250px" }}>
          
          <div className="reveal" style={{ textAlign: "center", marginBottom: "4rem" }}>
            <h2 className="section-title" style={{ fontSize: "2.5rem", fontWeight: 900, marginBottom: "1.5rem" }}>
              Custom SEO Strategy and Implementation
            </h2>
            <p style={{ fontSize: "1.15rem", color: "var(--text-muted)", margin: "0 auto", maxWidth: "800px", lineHeight: 1.8 }}>
              Every FI Digital client receives a custom SEO strategy and implementation plan. To develop this plan, it is crucial for us to understand your business, target audience and expectations. We also need to develop an understanding of what we can offer you.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "2rem" }}>
             {[
               { title: "Behavioral Patterns", desc: "The FI Digital team masters this process of knowing your customers and their behaviour patterns on the web. This will help us to devise an effective SEO strategy tailored to the unique requirements and characteristics of your business.", icon: Target, color: "#3B82F6" },
               { title: "Strategic Execution", desc: "Our in house SEO specialists will use the information we have gathered and our custom strategy to create a marketing campaign that will make your business appear at the top of all the relevant search terms. This helps attract organic traffic without tricks or gimmicks.", icon: LineChart, color: "#10B981" },
               { title: "Comprehensive Growth", desc: "From optimised web design to Google Adwords, we can develop an effective strategy to boost your business. Whether you need design services or simply want to optimise your existing content, we’re ready to help. Get in touch with us today.", icon: Globe, color: "#8B5CF6" }
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

      {/* ══ FINAL CTA SECTION ══════════════ */}
      <section id="cta" style={{ padding: '120px 1.5rem', background: '#1d4ed8', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.1, backgroundImage: 'radial-gradient(circle at right center, rgba(255,255,255,0.8) 0%, transparent 50%)' }}></div>
        <div className="container" style={{ maxWidth: '900px', textAlign: 'center', position: 'relative', zIndex: 2 }}>
          
          <h2 style={{ fontSize: '3rem', fontWeight: 900, color: 'white', marginBottom: '3rem', letterSpacing: '-0.02em', lineHeight: 1.2, margin: "0 auto 3rem auto" }}>
             Connect With Customers, Grow Your Business With Us
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
           .section-grid {
              grid-template-columns: 1fr;
           }
        }
      `}</style>
    </div>
  );
}
