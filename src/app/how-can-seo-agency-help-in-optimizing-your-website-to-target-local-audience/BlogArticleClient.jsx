"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  Calendar, Clock, User, 
  ChevronRight, Quote, CheckCircle2,
  Lightbulb, TrendingUp, ShieldCheck, Zap,
  ArrowUpRight, ArrowRight, Search, 
  MessageSquare, Layout, Sparkles, Target, 
  BarChart3, Globe, AlertCircle, MapPin, 
  Users, Link2, Megaphone, Map
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const TacticCard = ({ title, desc, icon: Icon }) => (
  <div className="reveal" style={{ 
    padding: '2.5rem', 
    background: 'var(--bg)', 
    border: '1px solid var(--border)', 
    borderRadius: '24px',
    height: '100%',
    transition: 'all 0.3s ease'
  }}>
    <div style={{ 
      width: '56px', height: '56px', borderRadius: '16px', 
      background: 'rgba(29, 78, 216, 0.1)', color: 'var(--primary)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      marginBottom: '1.5rem'
    }}>
      <Icon size={28} />
    </div>
    <h3 style={{ fontSize: '1.4rem', fontWeight: 900, marginBottom: '1rem', color: 'var(--text)' }}>{title}</h3>
    <p style={{ fontSize: '1rem', color: 'var(--text-muted)', lineHeight: 1.6, margin: 0 }}>{desc}</p>
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
                background: "rgba(29, 78, 216, 0.08)", color: "var(--primary)",
                padding: "0.5rem 1rem", borderRadius: "100px",
                fontWeight: 800, fontSize: "0.75rem", textTransform: "uppercase",
                letterSpacing: "0.1em", marginBottom: "1.5rem",
                border: "1px solid rgba(29, 78, 216, 0.2)"
              }}>
                <MapPin size={14} /> Local SEO Strategy
              </div>

              <h1 className="hero-h1" style={{ 
                fontSize: "clamp(2.2rem, 5vw, 3.8rem)", fontWeight: 900,
                lineHeight: 1.1, marginBottom: "2rem", letterSpacing: "-0.03em"
              }}>
                Targeting the <span style={{ color: "var(--primary)" }}>Local Audience</span>: <br />
                How a Melbourne SEO Agency Can Help
              </h1>

              <div className="hero-meta" style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "2rem", color: "var(--text-muted)", fontSize: "0.95rem", fontWeight: 600 }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                  <div style={{ width: "40px", height: "40px", borderRadius: "12px", background: "var(--primary)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff" }}>
                    <User size={18} />
                  </div>
                  <span style={{ color: "var(--text)" }}>SEO Strategy Team</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}><Calendar size={18} opacity={0.6} /> April 21, 2026</div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}><Clock size={18} opacity={0.6} /> 9 min read</div>
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
                  When you own a local business in Melbourne, it is essential to be noticed in the crowd. The primary function of SEO is to reroute customer traffic to your website and get your business more visibility in search engines. A specialized Melbourne SEO agency uses Geo-targeting and Geo Keyword Research to direct organic traffic to your physical or digital storefront.
                </p>
              </div>

              <div className="reveal" style={{ marginTop: '4rem' }}>
                <h2 style={{ fontSize: "2.2rem", fontWeight: 900, color: "var(--text)", marginBottom: "2rem" }}>Key Tactics for Local Dominance</h2>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }} className="responsive-grid">
                  <TacticCard title="Local Listing" desc="Get noticed in Melbourne-specific directories and local search engines. A well-thought-out web listing differentiates your business from regional competitors." icon={Map} />
                  <TacticCard title="Geo-Keyword Research" desc="Research region-specific keywords to direct local traffic. Combining product-based terms with location signals leads to higher quality leads." icon={Target} />
                  <TacticCard title="Social Media Marketing" desc="Managing business pages and localized campaigns on Facebook and Twitter to generate views from the right demographic." icon={Users} />
                  <TacticCard title="Strategic Backlinking" desc="Building links from reliable, relevant Melbourne sites to create higher local revenue and build a reputation among the locals." icon={Link2} />
                </div>
              </div>

              <div className="reveal" style={{ marginTop: '5rem', padding: '3rem', background: 'var(--bg-secondary)', borderRadius: '32px', border: '1px solid var(--border)' }}>
                 <h2 style={{ fontSize: "1.8rem", fontWeight: 900, marginBottom: "1.5rem", color: 'var(--text)' }}>Paid Local Visibility</h2>
                 <p>
                   Beyond organic tactics, online advertising (PPC) is a service provided by the Melbourne SEO agency to create long-term awareness. As a paid marketing service, it involves continuous optimization of your campaigns to ensure higher revenue and immediate local reach.
                 </p>
                 <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
                    <div style={{ padding: '1rem 1.5rem', background: 'var(--bg)', borderRadius: '12px', border: '1px solid var(--border)', flex: 1 }}>
                       <div style={{ fontWeight: 800, color: 'var(--primary)', marginBottom: '0.5rem' }}>Investment</div>
                       <p style={{ fontSize: '0.9rem', margin: 0 }}>Strategic spend on localized keywords.</p>
                    </div>
                    <div style={{ padding: '1rem 1.5rem', background: 'var(--bg)', borderRadius: '12px', border: '1px solid var(--border)', flex: 1 }}>
                       <div style={{ fontWeight: 800, color: 'var(--primary)', marginBottom: '0.5rem' }}>Outcome</div>
                       <p style={{ fontSize: '0.9rem', margin: 0 }}>Consistent local lead generation.</p>
                    </div>
                 </div>
              </div>

              <div className="reveal" style={{ marginTop: '5rem', borderTop: '1px solid var(--border)', paddingTop: '4rem' }}>
                <h2 style={{ fontSize: "2.2rem", fontWeight: 900, color: "var(--text)", marginBottom: "1.5rem" }}>The Local Advantage</h2>
                <p>
                  These are some of the ways in which a local business in Melbourne can use SEO techniques to increase its local customer base. By leveraging specialized expertise, you ensure that your business is not just another face in the crowd, but a dominant local leader.
                </p>
              </div>

            </article>

            {/* SIDEBAR */}
            <aside>
              <div style={{ position: 'sticky', top: '120px', display: 'grid', gap: '2.5rem' }}>
                
                {/* LOCATION FOCUS */}
                <div className="reveal" style={{ padding: '2rem', background: 'var(--bg-secondary)', borderRadius: '24px', border: '1px solid var(--border)' }}>
                  <h4 style={{ fontSize: '1.1rem', fontWeight: 900, marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <Globe size={20} color="var(--primary)" /> Melbourne Focus
                  </h4>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                    Melbourne is one of the most favored places for doing business in Australia. Getting noticed correctly is vital for long-term growth.
                  </p>
                  <div style={{ display: 'grid', gap: '1rem' }}>
                    {[
                      "Local Directories",
                      "Google Business Profile",
                      "Regional Backlinks",
                      "Geo-Targeted Ads"
                    ].map((item, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.85rem', fontWeight: 700 }}>
                        <CheckCircle2 size={14} color="var(--primary)" /> {item}
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="reveal" style={{ padding: '2rem', background: 'var(--primary)', borderRadius: '24px', color: '#fff', textAlign: 'center' }}>
                  <Megaphone size={40} style={{ marginBottom: '1.5rem', opacity: 0.8 }} />
                  <h4 style={{ fontSize: '1.3rem', fontWeight: 900, marginBottom: '1rem' }}>Dominate Local Search</h4>
                  <p style={{ fontSize: '0.95rem', marginBottom: '2rem', opacity: 0.9 }}>
                    Let our Melbourne SEO specialists put your business on the map.
                  </p>
                  <Link href="/contact" style={{ display: 'block', background: '#fff', color: 'var(--primary)', padding: '1rem', borderRadius: '12px', fontWeight: 900, textDecoration: 'none' }}>
                    Get Local Audit
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
                  <Target size={28} />
                </div>
                <div>
                  <div style={{ fontWeight: 900, fontSize: '1.1rem' }}>SEO Strategy Team</div>
                  <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>FI Digital Melbourne · Local Search Experts</div>
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
                <p style={{ color: 'var(--text-muted)', fontWeight: 500 }}>Winning strategies for the Melbourne market.</p>
              </div>
              <Link href="/blog" style={{ color: 'var(--primary)', fontWeight: 800, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                All Blogs <ArrowUpRight size={18} />
              </Link>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
              {[
                {
                  title: "Top 12 Reasons Why Small Businesses Should Invest in SEO",
                  cat: "SEO & Strategy",
                  slug: "top-12-reasons-why-australian-small-businesses-should-invest-in-seo"
                },
                {
                  title: "How Can SEO Help in Growing Your Business?",
                  cat: "SEO & Strategy",
                  slug: "how-can-seo-help-in-growing-your-business"
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
