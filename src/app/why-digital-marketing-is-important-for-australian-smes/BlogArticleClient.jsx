"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  Calendar, Clock, User, 
  ChevronRight, Quote, CheckCircle2,
  Lightbulb, TrendingUp, ShieldCheck, Zap,
  ArrowUpRight, ArrowRight, Globe, 
  MessageSquare, Layout, Sparkles, Target, 
  BarChart3, AlertCircle, DollarSign, 
  LineChart, PieChart, MousePointer2
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const StatCard = ({ val, label }) => (
  <div className="reveal" style={{ 
    padding: '2rem', 
    background: 'var(--bg-secondary)', 
    border: '1px solid var(--border)', 
    borderRadius: '24px',
    textAlign: 'center'
  }}>
    <div style={{ fontSize: '2.5rem', fontWeight: 900, color: 'var(--primary)', marginBottom: '0.5rem' }}>{val}</div>
    <div style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{label}</div>
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
              alt="" fill className="object-cover"
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
                <Globe size={14} /> Marketing & Strategy
              </div>

              <h1 className="hero-h1" style={{ 
                fontSize: "clamp(2.5rem, 6vw, 4.5rem)", fontWeight: 900,
                lineHeight: 1.1, marginBottom: "2rem", letterSpacing: "-0.03em"
              }}>
                Why <span style={{ color: "var(--primary)" }}>Digital Marketing</span> is <br />
                Critical for Australian SMEs
              </h1>

              <div className="hero-meta" style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "2rem", color: "var(--text-muted)", fontSize: "0.95rem", fontWeight: 600 }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                  <div style={{ width: "40px", height: "40px", borderRadius: "12px", background: "var(--primary)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff" }}>
                    <User size={18} />
                  </div>
                  <span style={{ color: "var(--text)" }}>FI Strategy Team</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}><Calendar size={18} opacity={0.6} /> April 21, 2026</div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}><Clock size={18} opacity={0.6} /> 8 min read</div>
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
                  Digital marketing allows you to connect with current clients, engage potential ones, and find quality leads for a fraction of the budget traditional methods require. For Australian SME owners, it provides a competitive edge that is no longer optional—it is essential for survival.
                </p>
              </div>

              <div className="reveal" style={{ marginTop: '4rem' }}>
                <h2 style={{ fontSize: "2.2rem", fontWeight: 900, color: "var(--text)", marginBottom: "1.5rem" }}>Efficiency & Invaluable Insights</h2>
                <p>
                  Traditional marketing requires substantial budgets. Digital marketing, however, connect you with customers for significantly less whilst providing insights into consumer behavior. This allows you to tailor your products and services range with surgical precision.
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginTop: '2.5rem' }} className="responsive-grid">
                   <div style={{ padding: '2rem', background: 'var(--bg-secondary)', borderRadius: '20px', border: '1px solid var(--border)' }}>
                      <DollarSign size={32} color="var(--primary)" style={{ marginBottom: '1rem' }} />
                      <div style={{ fontWeight: 800, color: 'var(--text)', marginBottom: '0.5rem' }}>Cost-Effective</div>
                      <p style={{ fontSize: '0.95rem', margin: 0 }}>Higher conversion rates for a fraction of traditional costs.</p>
                   </div>
                   <div style={{ padding: '2rem', background: 'var(--bg-secondary)', borderRadius: '20px', border: '1px solid var(--border)' }}>
                      <Target size={32} color="var(--primary)" style={{ marginBottom: '1rem' }} />
                      <div style={{ fontWeight: 800, color: 'var(--text)', marginBottom: '0.5rem' }}>Targeted Traffic</div>
                      <p style={{ fontSize: '0.95rem', margin: 0 }}>Keyword optimization ensures you reach the right audience.</p>
                   </div>
                </div>
              </div>

              <div className="reveal" style={{ marginTop: '5rem' }}>
                <blockquote style={{ 
                  margin: '0', padding: '3rem', background: 'var(--bg-secondary)', 
                  borderRadius: '32px', borderLeft: '8px solid var(--primary)',
                  position: 'relative', overflow: 'hidden'
                }}>
                  <Quote size={80} style={{ position: 'absolute', top: '-10px', right: '20px', opacity: 0.05, color: 'var(--primary)' }} />
                  <p style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--text)', lineHeight: 1.5, margin: 0 }}>
                    "Digital marketing helps you build brand authority. For startups and local ventures, trust is the currency of loyalty. As people begin to trust your online authority, they are more likely to become loyal clients."
                  </p>
                </blockquote>
              </div>

              <div className="reveal" style={{ marginTop: '5rem' }}>
                 <h2 style={{ fontSize: "2.2rem", fontWeight: 900, color: "var(--text)", marginBottom: "2rem" }}>The Australian Landscape</h2>
                 <p style={{ marginBottom: '3rem' }}>
                    A study of 500+ Australian small businesses confirmed a significant gap in digital maturity. While many struggle with engagement, those with a strategy report substantial gains.
                 </p>
                 <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }} className="responsive-grid">
                    <StatCard val="16%" label="High Digital Engagement" />
                    <StatCard val="20%+" label="Annual Revenue Increase" />
                 </div>
              </div>

              <div className="reveal" style={{ marginTop: '5rem', borderTop: '1px solid var(--border)', paddingTop: '4rem' }}>
                <h2 style={{ fontSize: "2.2rem", fontWeight: 900, color: "var(--text)", marginBottom: "1.5rem" }}>Don't Risk Extinction</h2>
                <p>
                  Having a strong online presence immediately boosts brand awareness and distinguishes you from the competition. Instead of risking obsolescence, transform your business with a strategy that delivers measurable growth.
                </p>
                <p style={{ marginTop: '2rem', fontWeight: 700, color: 'var(--text)' }}>
                  At FI Digital, we have 4.5 years of experience running campaigns for SMEs across Australia. We’d love to help you sort your digital strategy.
                </p>
              </div>

            </article>

            {/* SIDEBAR */}
            <aside>
              <div style={{ position: 'sticky', top: '120px', display: 'grid', gap: '2.5rem' }}>
                
                {/* SME BENEFITS */}
                <div className="reveal" style={{ padding: '2rem', background: 'var(--bg-secondary)', borderRadius: '24px', border: '1px solid var(--border)' }}>
                  <h4 style={{ fontSize: '1.1rem', fontWeight: 900, marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <BarChart3 size={20} color="var(--primary)" /> SME Growth
                  </h4>
                  <div style={{ display: 'grid', gap: '1rem' }}>
                    {[
                      "Better ROI tracking",
                      "Scalable campaigns",
                      "Customer insights",
                      "Brand trust building"
                    ].map((item, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.85rem', fontWeight: 700 }}>
                        <CheckCircle2 size={14} color="var(--primary)" /> {item}
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="reveal" style={{ padding: '2rem', background: 'var(--primary)', borderRadius: '24px', color: '#fff', textAlign: 'center' }}>
                  <TrendingUp size={40} style={{ marginBottom: '1.5rem', opacity: 0.8 }} />
                  <h4 style={{ fontSize: '1.3rem', fontWeight: 900, marginBottom: '1rem' }}>Sort Your Strategy</h4>
                  <p style={{ fontSize: '0.95rem', marginBottom: '2rem', opacity: 0.9 }}>
                    Let's chat about your digital transformation.
                  </p>
                  <Link href="/contact" style={{ display: 'block', background: '#fff', color: 'var(--primary)', padding: '1rem', borderRadius: '12px', fontWeight: 900, textDecoration: 'none' }}>
                    Contact Us
                  </Link>
                </div>

              </div>
            </aside>

          </div>
        </section>

        {/* ══ AUTHOR SECTION ══════════════════════════════════════════════════ */}
        <section style={{ padding: '40px 1.5rem 100px' }}>
          <div className="container" style={{ maxWidth: '1200px' }}>
            <div className="reveal" style={{ borderTop: '1px solid var(--border)', paddingTop: '4rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '60px', height: '60px', borderRadius: '16px', background: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
                  <PieChart size={28} />
                </div>
                <div>
                  <div style={{ fontWeight: 900, fontSize: '1.1rem' }}>FI Strategy Team</div>
                  <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>FI Digital Melbourne · Growth Partners</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══ RELATED POSTS ══════════════════════════════════════════════════ */}
        <section style={{ padding: '80px 1.5rem', background: 'var(--bg-secondary)', borderTop: '1px solid var(--border)' }}>
          <div className="container" style={{ maxWidth: '1200px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem' }}>
              <div>
                <h2 style={{ fontSize: '2rem', fontWeight: 900, marginBottom: '0.5rem' }}>Related Insights</h2>
                <p style={{ color: 'var(--text-muted)', fontWeight: 500 }}>More ways to scale your Australian business.</p>
              </div>
              <Link href="/blog" style={{ color: 'var(--primary)', fontWeight: 800, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                All Blogs <ArrowUpRight size={18} />
              </Link>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
              {[
                {
                  title: "How Can SEO Help in Growing Your Business?",
                  cat: "SEO & Strategy",
                  slug: "how-can-seo-help-in-growing-your-business"
                },
                {
                  title: "Tips for Choosing an SEO Company",
                  cat: "SEO & Strategy",
                  slug: "tips-for-choosing-a-company-for-your-seo-melbourne-business-owners-should-know"
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
