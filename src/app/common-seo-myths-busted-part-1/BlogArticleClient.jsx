"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  Calendar, Clock, User, 
  ChevronRight, Quote, CheckCircle2,
  Lightbulb, TrendingUp, ShieldCheck, Zap,
  ArrowUpRight, ArrowRight, ShieldAlert, 
  MessageSquare, Layout, Sparkles, Target, 
  BarChart3, Globe, AlertCircle, AlertTriangle,
  XCircle, CheckCircle, Search, RefreshCcw
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const MythBox = ({ myth, fact }) => (
  <div className="reveal" style={{ 
    marginBottom: '3rem', 
    padding: '2.5rem', 
    background: 'var(--bg-secondary)', 
    borderRadius: '32px', 
    border: '1px solid var(--border)',
    boxShadow: '0 10px 30px rgba(0,0,0,0.02)'
  }}>
    <div style={{ display: 'flex', gap: '1.25rem', marginBottom: '1.5rem', alignItems: 'flex-start' }}>
       <div style={{ color: '#ef4444', flexShrink: 0, marginTop: '0.2rem' }}>
          <XCircle size={24} />
       </div>
       <div>
          <div style={{ fontSize: '0.8rem', fontWeight: 800, color: '#ef4444', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>The Myth</div>
          <h3 style={{ color: 'var(--text)', fontWeight: 700, fontSize: '1.3rem', lineHeight: 1.4, margin: 0 }}>{myth}</h3>
       </div>
    </div>
    <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start', paddingLeft: '0.5rem' }}>
       <div style={{ color: '#22c55e', flexShrink: 0, marginTop: '0.2rem' }}>
          <CheckCircle size={24} />
       </div>
       <div>
          <div style={{ fontSize: '0.8rem', fontWeight: 800, color: '#22c55e', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>The Reality</div>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: 1.6, margin: 0 }}>{fact}</p>
       </div>
    </div>
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
              src="/images/seo.png" 
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
                background: "rgba(239, 68, 68, 0.08)", color: "#ef4444",
                padding: "0.5rem 1rem", borderRadius: "100px",
                fontWeight: 800, fontSize: "0.75rem", textTransform: "uppercase",
                letterSpacing: "0.1em", marginBottom: "1.5rem",
                border: "1px solid rgba(239, 68, 68, 0.2)"
              }}>
                <ShieldAlert size={14} /> Myth-Buster Series
              </div>

              <h1 className="hero-h1" style={{ 
                fontSize: "clamp(2.5rem, 6vw, 4.5rem)", fontWeight: 900,
                lineHeight: 1.1, marginBottom: "2rem", letterSpacing: "-0.03em"
              }}>
                Common <span style={{ color: "var(--primary)" }}>SEO Myths</span> Busted: <br />
                The Domain Fallacy
              </h1>

              <div className="hero-meta" style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "2rem", color: "var(--text-muted)", fontSize: "0.95rem", fontWeight: 600 }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                  <div style={{ width: "40px", height: "40px", borderRadius: "12px", background: "var(--primary)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff" }}>
                    <User size={18} />
                  </div>
                  <span style={{ color: "var(--text)" }}>FI Strategy Team</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}><Calendar size={18} opacity={0.6} /> April 21, 2026</div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}><Clock size={18} opacity={0.6} /> 7 min read</div>
              </div>
            </div>
          </div>
        </section>

        {/* ══ ARTICLE BODY ══════════════════════════════════════════════════ */}
        <section style={{ padding: "80px 1.5rem", position: "relative" }}>
          <div className="container" style={{ maxWidth: "1200px", display: "grid", gridTemplateColumns: "1fr 350px", gap: "5rem" }}>
            
            <article style={{ fontSize: "1.15rem", lineHeight: 1.8, color: "var(--text-muted)" }}>
              <div className="reveal">
                <p style={{ fontSize: "1.25rem", color: "var(--text)", fontWeight: 500, marginBottom: "3.5rem" }}>
                   After 4.5 years of working with Victorian SMEs, I've seen firsthand how misconceptions can derail a digital strategy. The Australian market is highly mobile-centric, making it even more critical for business owners to separate SEO myths from reality.
                </p>
              </div>

              <div style={{ marginTop: '4rem' }}>
                <MythBox 
                  myth="Buying a domain name that matches your product instantly ranks you on Page 1." 
                  fact="This hasn't been true for years. Google considers 100+ factors. If ranking were that easy, the search results would be full of low-quality sites with high-keyword domain names."
                />
                
                <MythBox 
                  myth="Redirecting 30-40 keyword-rich domains to your site boosts ranking." 
                  fact="This has a negligible positive effect. Google prioritizes the usefulness of your data for visitors over the quantity of redirects hitting your server."
                />
              </div>

              <div className="reveal" style={{ marginTop: '5rem' }}>
                 <h2 style={{ fontSize: "2.2rem", fontWeight: 900, color: "var(--text)", marginBottom: "1.5rem" }}>The 'Google' Paradox</h2>
                 <p>
                   When "Google" started, the name was nowhere related to "Search"—today, it is the synonym. A better strategy than chasing keyword domains is focusing on a brand that keeps your content relevant and useful. Keep your data valuable, and the search engine rewards will follow.
                 </p>
                 <div style={{ marginTop: '3rem', padding: '3rem', background: 'var(--bg-secondary)', borderRadius: '32px', border: '1px solid var(--border)' }}>
                    <div style={{ display: 'flex', gap: '1.5rem' }}>
                       <div style={{ width: '56px', height: '56px', borderRadius: '16px', background: 'rgba(29, 78, 216, 0.1)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                          <Lightbulb size={28} />
                       </div>
                       <div>
                          <h4 style={{ fontSize: '1.3rem', fontWeight: 900, color: 'var(--text)', marginBottom: '0.75rem' }}>Inform Your Investment</h4>
                          <p style={{ margin: 0, fontSize: '1.05rem' }}>
                             Accept that digital trends change faster than management can often track. Empower your digital team (in-house or agency) and give them the trust required to execute a modern, factor-based strategy.
                          </p>
                       </div>
                    </div>
                 </div>
              </div>

              <div className="reveal" style={{ marginTop: '5rem', borderTop: '1px solid var(--border)', paddingTop: '4rem' }}>
                <h2 style={{ fontSize: "2.2rem", fontWeight: 900, color: "var(--text)", marginBottom: "1.5rem" }}>Rest Assured with FI Digital</h2>
                <p>
                   We aim to simplify Digital & Inbound Marketing for Australian SMEs so you can take informed decisions. As a Melbourne-based SEO company, we are dedicated to your growth, guaranteeing success through transparency and research.
                </p>
              </div>

            </article>

            {/* SIDEBAR */}
            <aside>
              <div style={{ position: 'sticky', top: '120px', display: 'grid', gap: '2.5rem' }}>
                
                {/* QUICK TIPS */}
                <div className="reveal" style={{ padding: '2rem', background: 'var(--bg-secondary)', borderRadius: '24px', border: '1px solid var(--border)' }}>
                  <h4 style={{ fontSize: '1.1rem', fontWeight: 900, marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <Target size={20} color="var(--primary)" /> Real Focus
                  </h4>
                  <div style={{ display: 'grid', gap: '1rem' }}>
                    {[
                      "User Data Usefulness",
                      "Brand Trust Building",
                      "Factor-Based Ranking",
                      "Mobile Optimization"
                    ].map((item, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.85rem', fontWeight: 700 }}>
                        <CheckCircle2 size={14} color="var(--primary)" /> {item}
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="reveal" style={{ padding: '2rem', background: 'var(--primary)', borderRadius: '24px', color: '#fff', textAlign: 'center' }}>
                  <Search size={40} style={{ marginBottom: '1.5rem', opacity: 0.8 }} />
                  <h4 style={{ fontSize: '1.3rem', fontWeight: 900, marginBottom: '1rem' }}>Discuss Your Case</h4>
                  <p style={{ fontSize: '0.95rem', marginBottom: '2rem', opacity: 0.9 }}>
                    Get advised on all possible options after a professional audit.
                  </p>
                  <Link href="/contact" style={{ display: 'block', background: '#fff', color: 'var(--primary)', padding: '1rem', borderRadius: '12px', fontWeight: 900, textDecoration: 'none' }}>
                    Email Our Experts
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
                <p style={{ color: 'var(--text-muted)', fontWeight: 500 }}>Busting myths for SME growth.</p>
              </div>
              <Link href="/blog" style={{ color: 'var(--primary)', fontWeight: 800, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                All Blogs <ArrowUpRight size={18} />
              </Link>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
              {[
                {
                  title: "Do .Melbourne or .Sydney Domains Work?",
                  cat: "Domain Strategy",
                  slug: "does-local-tld-extensions-work"
                },
                {
                  title: "Tips for Choosing an SEO Company",
                  cat: "Expert Advice",
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
