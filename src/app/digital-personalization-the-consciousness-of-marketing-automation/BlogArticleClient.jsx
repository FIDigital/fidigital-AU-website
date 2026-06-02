"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  Calendar, Clock, User, 
  ChevronRight, Quote, CheckCircle2,
  Lightbulb, TrendingUp, ShieldCheck, Zap,
  ArrowUpRight, ArrowRight, UserCheck, 
  MessageSquare, Layout, Sparkles, Target, 
  BarChart3, Globe, AlertCircle, Heart,
  DollarSign, ShoppingBag, Fingerprint,
  RefreshCcw, MousePointer2, Smile
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const BenefitItem = ({ title, desc, icon: Icon }) => (
  <div className="reveal" style={{ 
    padding: '2rem', 
    background: 'var(--bg)', 
    border: '1px solid var(--border)', 
    borderRadius: '24px',
    height: '100%',
    transition: 'all 0.3s ease'
  }}>
    <div style={{ 
      width: '48px', height: '48px', borderRadius: '12px', 
      background: 'rgba(29, 78, 216, 0.1)', color: 'var(--primary)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      marginBottom: '1.5rem'
    }}>
      <Icon size={24} />
    </div>
    <h3 style={{ fontSize: '1.25rem', fontWeight: 900, marginBottom: '1rem', color: 'var(--text)' }}>{title}</h3>
    <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: 1.6, margin: 0 }}>{desc}</p>
  </div>
);

export default function BlogArticleClient() {
  const containerRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from(".hero-badge", { y: -20, autoAlpha: 0, duration: 0.6 })
      .from(".hero-h1", { y: 30, autoAlpha: 0, duration: 0.8 }, "-=0.3")
      .from(".hero-meta", { y: 20, autoAlpha: 0, duration: 0.6 }, "-=0.4");

    gsap.utils.toArray(".reveal").forEach((el) => {
      gsap.fromTo(el,
        { y: 30, autoAlpha: 0 },
        { 
          y: 0, autoAlpha: 1, duration: 0.8, ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 90%", once: true } 
        }
      );
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} style={{ background: "var(--bg)", color: "var(--text)" }}>
      <main>
        {/* ══ HERO ══════════════════════════════════════════════════════════ */}
        <section style={{
          position: "relative",
          minHeight: "85vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "calc(var(--header-h) + 40px) 1.5rem 80px",
          overflow: "hidden",
          background: "var(--bg)"
        }}>
          {/* Background Visual */}
          <div className="hero-img-blend" style={{
            position: "absolute", top: 0, right: 0,
            width: "70%", height: "100%", zIndex: 0,
            opacity: 0.7, pointerEvents: "none",
          }}>
            <Image 
              src="/images/strategy.png" 
              alt="" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover"
              style={{
                maskImage: "radial-gradient(circle at center right, black, transparent 90%)",
                WebkitMaskImage: "radial-gradient(circle at center right, black, transparent 90%)"
              }}
              priority
            />
          </div>

          <div className="container" style={{ position: "relative", zIndex: 1 }}>
            <div style={{ maxWidth: "1000px" }}>
              <div className="hero-badge" style={{ 
                display: "inline-flex", alignItems: "center", gap: "0.5rem",
                background: "rgba(29, 78, 216, 0.08)", color: "var(--primary)",
                padding: "0.5rem 1rem", borderRadius: "100px",
                fontWeight: 800, fontSize: "0.75rem", textTransform: "uppercase",
                letterSpacing: "0.1em", marginBottom: "1.5rem",
                border: "1px solid rgba(29, 78, 216, 0.2)"
              }}>
                <UserCheck size={14} /> Marketing Automation
              </div>

              <h1 className="hero-h1" style={{ 
                fontSize: "clamp(2.5rem, 6vw, 4.5rem)", fontWeight: 900,
                lineHeight: 1.1, marginBottom: "2rem", letterSpacing: "-0.03em"
              }}>
                Digital Personalization: The <br />
                <span style={{ color: "var(--primary)" }}>Consciousness</span> of Automation
              </h1>

              <div className="hero-meta" style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "2rem", color: "var(--text-muted)", fontSize: "0.95rem", fontWeight: 600 }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                  <div style={{ width: "40px", height: "40px", borderRadius: "12px", background: "var(--primary)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff" }}>
                    <User size={18} />
                  </div>
                  <span style={{ color: "var(--text)" }}>Automation Strategy Team</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}><Calendar size={18} opacity={0.6} /> April 21, 2026</div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}><Clock size={18} opacity={0.6} /> 10 min read</div>
              </div>
            </div>
          </div>
        </section>

        {/* ══ ARTICLE BODY ══════════════════════════════════════════════════ */}
        <section style={{ padding: "80px 1.5rem", position: "relative" }}>
          <div className="container" style={{ maxWidth: "1200px", display: "grid", gridTemplateColumns: "1fr 350px", gap: "5rem" }}>
            
            <article style={{ fontSize: "1.15rem", lineHeight: 1.8, color: "var(--text-muted)" }}>
              <div className="reveal">
                <p style={{ fontSize: "1.25rem", color: "var(--text)", fontWeight: 500, marginBottom: "2.5rem" }}>
                  Digital personalization is the latest buzzword in the digital world, but it represents a fundamental shift in how we approach the "king"—the customer. It adds a personal touch to the marketing segment, presenting offers intended for one specific individual based on their unique preferences and purchasing patterns.
                </p>
              </div>

              <div className="reveal" style={{ marginTop: '4rem' }}>
                <h2 style={{ fontSize: "2.2rem", fontWeight: 900, color: "var(--text)", marginBottom: "2rem" }}>Core Benefits of Personalization</h2>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }} className="responsive-grid">
                   <BenefitItem title="The Personal Touch" desc="Adapt to the digital age without losing the human element. Automation makes providing unique, 'special' experiences practical at scale." icon={Heart} />
                   <BenefitItem title="Improved ROI" desc="Deliver relevant messages to the right audience, fixing the 'leakage of dollars' often seen in generic marketing choice." icon={DollarSign} />
                   <BenefitItem title="Lead Nurturing" desc="Track wishlists and price sensitivities to turn hesitant leads into loyal customers with timely, attractive offers." icon={Target} />
                   <BenefitItem title="Current Trends" desc="Utilize real-time data to personalize website content according to the current market trend and stay ahead of competitors." icon={RefreshCcw} />
                </div>
              </div>

              <div className="reveal" style={{ marginTop: '5rem' }}>
                 <h2 style={{ fontSize: "2.2rem", fontWeight: 900, color: "var(--text)", marginBottom: "1.5rem" }}>Transforming the Sales Cycle</h2>
                 <p>
                   Personalization manifests in every stage of the digital communication medium, from the first hello to the final follow-up:
                 </p>
                 <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gap: '1.5rem', marginTop: '2rem' }}>
                    {[
                      { title: "Personalized Greetings", desc: "Greet customers like friends, building immediate rapport and comfort." },
                      { title: "Smart Landing Pages", desc: "Preload preferences and retained info for frictionless, rapid order dispersal." },
                      { title: "Strategic Follow-ups", desc: "Thank customers and provide hooked benefits for their next purchase to secure brand loyalty." }
                    ].map((step, i) => (
                      <li key={i} style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                         <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'var(--primary)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: '0.75rem', fontWeight: 900, marginTop: '0.25rem' }}>{i+1}</div>
                         <div>
                            <div style={{ fontWeight: 800, color: 'var(--text)', marginBottom: '0.25rem' }}>{step.title}</div>
                            <p style={{ margin: 0, fontSize: '1rem' }}>{step.desc}</p>
                         </div>
                      </li>
                    ))}
                 </ul>
              </div>

              <div className="reveal" style={{ marginTop: '5rem', borderTop: '1px solid var(--border)', paddingTop: '4rem' }}>
                <h2 style={{ fontSize: "2.2rem", fontWeight: 900, color: "var(--text)", marginBottom: "1.5rem" }}>Leaders in Automation</h2>
                <p>
                  At FI Digital, we are leaders in Marketing Automation in Australia. We offer end-to-end services, from software selection and setup to the intricate digital personalization required to secure and retain customers. Whether B2B or B2C, we facilitate your enterprise to reach its full potential.
                </p>
              </div>

            </article>

            {/* SIDEBAR */}
            <aside>
              <div style={{ position: 'sticky', top: '120px', display: 'grid', gap: '2.5rem' }}>
                
                {/* QUICK LIST */}
                <div className="reveal" style={{ padding: '2rem', background: 'var(--bg-secondary)', borderRadius: '24px', border: '1px solid var(--border)' }}>
                  <h4 style={{ fontSize: '1.1rem', fontWeight: 900, marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <Fingerprint size={20} color="var(--primary)" /> Why Personalize?
                  </h4>
                  <div style={{ display: 'grid', gap: '1rem' }}>
                    {[
                      "Lesser work for customers",
                      "Secured brand loyalty",
                      "Improved total sales",
                      "Increased brand authority"
                    ].map((item, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.85rem', fontWeight: 700 }}>
                        <CheckCircle2 size={14} color="var(--primary)" /> {item}
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="reveal" style={{ padding: '2rem', background: 'var(--footer-bg)', borderRadius: '24px', color: '#fff', border: '1px solid var(--footer-border)' }}>
                  <Sparkles size={32} style={{ marginBottom: '1.5rem', color: 'var(--primary)' }} />
                  <h4 style={{ fontSize: '1.3rem', fontWeight: 900, marginBottom: '1rem' }}>Master Automation</h4>
                  <p style={{ fontSize: '0.9rem', marginBottom: '2rem', opacity: 0.8 }}>
                    Need help with Digital Personalization? We have got you covered.
                  </p>
                  <Link href="/contact" style={{ display: 'block', background: 'var(--primary)', color: '#fff', padding: '1rem', borderRadius: '12px', fontWeight: 900, textDecoration: 'none', textAlign: 'center' }}>
                    Speak to our Experts
                  </Link>
                </div>

              </div>
            </aside>

          </div>
        </section>

        {/* ══ RELATED POSTS ══════════════════════════════════════════════════ */}
        <section style={{ padding: '80px 1.5rem', background: 'var(--bg-secondary)', borderTop: '1px solid var(--border)' }}>
          <div className="container" style={{ maxWidth: '1200px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem' }}>
              <div>
                <h2 style={{ fontSize: '2rem', fontWeight: 900, marginBottom: '0.5rem' }}>Related Insights</h2>
                <p style={{ color: 'var(--text-muted)', fontWeight: 500 }}>Unlocking the power of MarTech.</p>
              </div>
              <Link href="/blog" style={{ color: 'var(--primary)', fontWeight: 800, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                All Blogs <ArrowUpRight size={18} />
              </Link>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
              {[
                {
                  title: "What is Marketing Automation?",
                  cat: "MarTech",
                  slug: "what-is-marketing-automation"
                },
                {
                  title: "How to Select Your Next Digital Agency",
                  cat: "Expert Advice",
                  slug: "how-to-select-your-next-digital-marketing-agency"
                }
              ].map((post, i) => (
                <Link key={i} href={`/${post.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                  <div className="reveal hover-card" style={{ 
                    padding: '2rem', background: 'var(--bg)', borderRadius: '20px', 
                    border: '1px solid var(--border)', height: '100%',
                    transition: 'all 0.3s ease'
                  }}>
                    <div style={{ color: 'var(--primary)', fontWeight: 800, fontSize: '0.75rem', textTransform: 'uppercase', marginBottom: '1rem' }}>{post.cat}</div>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 900, marginBottom: '1.5rem', lineHeight: 1.3 }}>{post.title}</h3>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary)', fontWeight: 700, fontSize: '0.9rem' }}>
                      Read Article <ArrowRight size={16} />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <style jsx>{`
        @media (max-width: 992px) {
          .container > article { grid-template-columns: 1fr !important; }
          .container { grid-template-columns: 1fr !important; }
          aside { display: none; }
        }
        .hover-card:hover {
          transform: translateY(-5px);
          border-color: var(--primary) !important;
          box-shadow: 0 20px 40px rgba(0,0,0,0.05);
        }
      `}</style>
    </div>
  );
}
