"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  Calendar, Clock, User, 
  ChevronRight, Quote, CheckCircle2,
  Lightbulb, TrendingUp, ShieldCheck, Zap,
  ArrowUpRight, ArrowRight, BarChart, Layout, Users, Link2, CalendarRange,
  Search, PenTool, Target, Layers
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const StrategyCard = ({ icon: Icon, title, desc }) => (
  <div className="reveal" style={{ 
    padding: '2.5rem', 
    background: 'var(--bg)', 
    border: '1px solid var(--border)', 
    borderRadius: '24px',
    height: '100%',
    transition: 'all 0.3s ease',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  }}>
    <div style={{ 
      width: '56px', height: '56px', borderRadius: '16px', 
      background: 'rgba(29, 78, 216, 0.1)', color: 'var(--primary)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      marginBottom: '0.5rem'
    }}>
      <Icon size={28} />
    </div>
    <h3 style={{ fontSize: '1.4rem', fontWeight: 900, color: 'var(--text)', marginBottom: '0.5rem', letterSpacing: '-0.02em' }}>{title}</h3>
    <p style={{ fontSize: '1rem', color: 'var(--text-muted)', lineHeight: 1.6, margin: 0 }}>{desc}</p>
  </div>
);

export default function BlogArticleClient() {
  const containerRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from(".hero-badge-branded", { y: -20, autoAlpha: 0, duration: 0.6 })
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
          {/* Background Visual — high-fidelity image with premium mask */}
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
              <div className="hero-badge-branded" style={{ 
                display: "inline-flex", alignItems: "center", gap: "0.5rem",
                background: "rgba(29, 78, 216, 0.08)", color: "var(--primary)",
                padding: "0.5rem 1rem", borderRadius: "100px",
                fontWeight: 800, fontSize: "0.75rem", textTransform: "uppercase",
                letterSpacing: "0.1em", marginBottom: "1.5rem",
                border: "1px solid rgba(29, 78, 216, 0.2)"
              }}>
                <Search size={14} /> SEO & Strategy
              </div>

              <h1 className="hero-h1" style={{ 
                fontSize: "clamp(2.2rem, 6vw, 4rem)", fontWeight: 900, 
                lineHeight: 1.1, marginBottom: "2rem", letterSpacing: "-0.03em" 
              }}>
                Expert Advice for <span style={{ color: "var(--primary)" }}>Blog Post Writing</span>: <br />
                The SEO Melbourne Guide
              </h1>

              <div className="hero-meta" style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "2rem", color: "var(--text-muted)", fontSize: "0.95rem", fontWeight: 600 }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                  <div style={{ width: "40px", height: "40px", borderRadius: "12px", background: "var(--primary)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff" }}>
                    <User size={18} />
                  </div>
                  <span style={{ color: "var(--text)" }}>FI Digital SEO Team</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}><Calendar size={18} opacity={0.6} /> April 21, 2026</div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}><Clock size={18} opacity={0.6} /> 6 min read</div>
              </div>
            </div>
          </div>
        </section>

        {/* ══ ARTICLE CONTENT ═══════════════════════════════════════════════ */}
        <section style={{ padding: "80px 1.5rem 120px", background: "var(--bg-secondary)" }}>
          <div className="container" style={{ maxWidth: "950px" }}>
            
            <article className="article-body" style={{ fontSize: "1.15rem", lineHeight: 1.8, color: "var(--text)" }}>
              
              <div className="reveal" style={{ marginBottom: "5rem" }}>
                <p style={{ fontSize: "1.25rem", fontWeight: 500, color: "var(--text)", marginBottom: "2rem" }}>
                  Whether you want to boost your website visibility or create a high-impact marketing strategy, you will need to write SEO-optimised blog posts. Unfortunately, this can be a little daunting if you haven't written anything since high school. 
                </p>
                <p>
                  As <strong>SEO Melbourne experts</strong>, FI Digital provides the foundational advice to help you bridge the gap between creative writing and technical performance. Master these fundamentals to ensure your content actually reaches your audience.
                </p>
              </div>

              {/* BENTO GRID: STRATEGY FUNDAMENTALS */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', margin: '4rem 0' }}>
                <StrategyCard 
                  icon={Target}
                  title="Plan Your Post"
                  desc="Don't just sit down and write. Define your message, target keywords, and user questions first. A solid structure (Intro, Body, Conclusion) prevents writer's block and ensures topic authority."
                />
                <StrategyCard 
                  icon={Layers}
                  title="Correct Formatting"
                  desc="Use headings (H2, H3) strategically. Search engines use them to grasp your main topics. Keep paragraphs focused on a single theme to improve readability and dwell time."
                />
                <StrategyCard 
                  icon={Users}
                  title="Human-First Writing"
                  desc="Avoid keyword stuffing. Use 'signal words' like 'firstly' or 'additionally' to guide scanning readers. If a human finds it hard to read, search engines will eventually penalise it."
                />
              </div>

              <div className="reveal" style={{ margin: "6rem 0" }}>
                <h2 style={{ fontSize: "2.5rem", fontWeight: 900, marginBottom: "2rem", letterSpacing: "-0.02em" }}>Internal Linking Strategy</h2>
                <p style={{ marginBottom: "2.5rem" }}>
                  If you have already written content, try to create links in your new work. You will need to ensure that the links are logical and share topics or ideas, but links will make your blog post stronger and show authority on the topic.
                </p>
                <div style={{ padding: '2.5rem', background: 'var(--bg)', borderRadius: '24px', border: '1px solid var(--border)', display: 'flex', gap: '2rem', alignItems: 'center' }} className="responsive-grid">
                  <div style={{ color: 'var(--primary)' }}><Link2 size={48} /></div>
                  <div>
                    <h4 style={{ fontWeight: 800, fontSize: '1.25rem', marginBottom: '0.5rem' }}>The Authority Loop</h4>
                    <p style={{ margin: 0, color: 'var(--text-muted)' }}>Link structure helps your search engine rankings and encourages readers to stay on your blog longer, signalling high value to algorithms.</p>
                  </div>
                </div>
              </div>

              <div className="reveal" style={{ margin: "6rem 0", padding: '4rem', background: 'var(--footer-bg)', borderRadius: '32px', color: '#fff', border: '1px solid var(--footer-border)' }}>
                <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', marginBottom: '2rem' }}>
                  <CalendarRange size={32} color="var(--primary)" />
                  <h2 style={{ fontSize: "2.25rem", fontWeight: 900, margin: 0, color: '#fff' }}>Content Consistency</h2>
                </div>
                <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.1rem', marginBottom: '3rem' }}>
                  Inactive websites are crawled less often by search engines. Regular posting signals that your business is active and authoritative in the Melbourne market.
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }} className="responsive-grid">
                  <div style={{ background: 'rgba(255,255,255,0.05)', padding: '2rem', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.1)' }}>
                    <h5 style={{ color: 'var(--primary)', fontWeight: 800, marginBottom: '0.5rem' }}>Content Schedule</h5>
                    <p style={{ margin: 0, fontSize: '0.95rem' }}>Plan your posts 1 month in advance to avoid the "last-minute" stress.</p>
                  </div>
                  <div style={{ background: 'rgba(255,255,255,0.05)', padding: '2rem', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.1)' }}>
                    <h5 style={{ color: 'var(--primary)', fontWeight: 800, marginBottom: '0.5rem' }}>Bulk Writing</h5>
                    <p style={{ margin: 0, fontSize: '0.95rem' }}>Write extra posts when you have momentum and schedule them for auto-publishing.</p>
                  </div>
                </div>
              </div>

              <div className="reveal" style={{ textAlign: 'center', marginTop: '6rem' }}>
                <p style={{ fontSize: '1.4rem', fontWeight: 600, maxWidth: '700px', margin: '0 auto 3rem' }}>
                  Need a professional SEO strategy for your Melbourne business?
                </p>
                <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', background: 'var(--primary)', color: '#fff', padding: '1.2rem 2.5rem', borderRadius: '100px', fontWeight: 900, textDecoration: 'none', transition: 'transform 0.3s ease' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                  Contact Our SEO Experts <ArrowRight size={20} />
                </Link>
              </div>

            </article>

            {/* AUTHOR SECTION */}
            <div className="reveal" style={{ marginTop: '8rem', paddingTop: '4rem', borderTop: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '60px', height: '60px', borderRadius: '16px', background: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
                  <Search size={28} />
                </div>
                <div>
                  <div style={{ fontWeight: 900, fontSize: '1.1rem' }}>SEO Consulting Team</div>
                  <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>FI Digital Melbourne · Growth Strategy</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══ RELATED POSTS ══════════════════════════════════════════════════ */}
        <section style={{ padding: '80px 1.5rem', background: 'var(--bg)', borderTop: '1px solid var(--border)' }}>
          <div className="container" style={{ maxWidth: '1200px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem' }}>
              <div>
                <h2 style={{ fontSize: '2rem', fontWeight: 900, marginBottom: '0.5rem' }}>Related Insights</h2>
                <p style={{ color: 'var(--text-muted)', fontWeight: 500 }}>More strategies for digital growth.</p>
              </div>
              <Link href="/blog" style={{ color: 'var(--primary)', fontWeight: 800, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                View Blog <ArrowUpRight size={18} />
              </Link>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
              {[
                {
                  title: "Scaling Trust, Time, and Talent: Responsible AI as Australia’s Productivity Game-Changer",
                  cat: "AI & Productivity",
                  slug: "scaling-trust-time-and-talent-responsible-ai-as-australias-productivity-game-changer"
                },
                {
                  title: "How Can SEO Help in Growing Your Business?",
                  cat: "SEO & Strategy",
                  slug: "how-can-seo-help-in-growing-your-business"
                }
              ].map((post, i) => (
                <Link key={i} href={`/${post.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                  <div style={{ 
                    padding: '2rem', background: 'var(--bg-secondary)', borderRadius: '20px', 
                    border: '1px solid var(--border)', height: '100%',
                    transition: 'all 0.3s ease'
                  }} className="related-card">
                    <div style={{ color: 'var(--primary)', fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', marginBottom: '1rem' }}>
                      {post.cat}
                    </div>
                    <h3 style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: '1.5rem', lineHeight: 1.4 }}>{post.title}</h3>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 'auto' }}>
                      <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 600 }}>8 min read</span>
                      <div style={{ color: 'var(--primary)' }}><ArrowRight size={20} /></div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

      </main>

      <style jsx>{`
        @media (max-width: 768px) {
          .responsive-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
        }
        .related-card:hover { border-color: var(--primary) !important; transform: translateY(-5px); }
        .hero-img-blend {
          filter: grayscale(1) brightness(0.9);
        }
        [data-theme='dark'] .hero-img-blend {
          filter: grayscale(1) brightness(0.7) contrast(1.1);
        }
      `}</style>
    </div>
  );
}
