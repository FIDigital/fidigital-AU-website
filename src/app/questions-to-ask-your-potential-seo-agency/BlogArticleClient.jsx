"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  Calendar, Clock, User, 
  ChevronRight, Quote, CheckCircle2,
  Lightbulb, TrendingUp, ShieldCheck, Zap,
  ArrowUpRight, ArrowRight, BarChart, AlertCircle, Code2, MessageSquare, Search, Target
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const QuestionCard = ({ icon: Icon, question, answer, warning }) => (
  <div className="reveal" style={{ 
    padding: '3rem', 
    background: 'var(--bg)', 
    border: '1px solid var(--border)', 
    borderRadius: '32px',
    marginBottom: '2rem',
    transition: 'all 0.3s ease',
    position: 'relative',
    overflow: 'hidden'
  }}>
    <div style={{ display: 'flex', gap: '2rem' }} className="responsive-grid">
      <div style={{ 
        width: '64px', height: '64px', borderRadius: '18px', 
        background: 'rgba(29, 78, 216, 0.1)', color: 'var(--primary)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        flexShrink: 0
      }}>
        <Icon size={32} />
      </div>
      <div>
        <h3 style={{ fontSize: '1.6rem', fontWeight: 900, marginBottom: '1.25rem', color: 'var(--text)', letterSpacing: '-0.02em' }}>{question}</h3>
        <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: 1.7, margin: 0 }}>{answer}</p>
        
        {warning && (
          <div style={{ 
            marginTop: '1.5rem', padding: '1rem 1.5rem', 
            background: 'rgba(239, 68, 68, 0.08)', borderLeft: '4px solid #ef4444',
            borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '1rem'
          }}>
            <AlertCircle size={20} color="#ef4444" />
            <span style={{ fontSize: '0.9rem', fontWeight: 700, color: '#ef4444' }}>Red Flag: {warning}</span>
          </div>
        )}
      </div>
    </div>
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
              src="/images/it-software.png" 
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
              <div className="hero-badge-branded" style={{ 
                display: "inline-flex", alignItems: "center", gap: "0.5rem",
                background: "rgba(29, 78, 216, 0.08)", color: "var(--primary)",
                padding: "0.5rem 1rem", borderRadius: "100px",
                fontWeight: 800, fontSize: "0.75rem", textTransform: "uppercase",
                letterSpacing: "0.1em", marginBottom: "1.5rem",
                border: "1px solid rgba(29, 78, 216, 0.2)"
              }}>
                <Lightbulb size={14} /> Agency Hiring Guide
              </div>

              <h1 className="hero-h1" style={{ 
                fontSize: "clamp(2.2rem, 6vw, 4rem)", fontWeight: 900, 
                lineHeight: 1.1, marginBottom: "2rem", letterSpacing: "-0.03em" 
              }}>
                Questions To Ask Your <br />
                <span style={{ color: "var(--primary)" }}>Potential SEO Agency</span>
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
          <div className="container" style={{ maxWidth: "900px" }}>
            
            <article className="article-body" style={{ fontSize: "1.15rem", lineHeight: 1.8, color: "var(--text)" }}>
              
              <div className="reveal" style={{ marginBottom: "5rem" }}>
                <p style={{ fontSize: "1.25rem", fontWeight: 500, color: "var(--text)", marginBottom: "2rem" }}>
                  If you are looking for an SEO provider, you may find that you have many companies to choose from. While competition is great, it can make it difficult to hire reliable, professional, and experienced services.
                </p>
                <p>
                  Melbourne business owners often worry about making the wrong decision. To help you navigate the landscape, we’ve compiled the essential questions you should ask any potential agency before you sign on the dotted line.
                </p>
              </div>

              {/* QUESTIONS LIST */}
              <div style={{ margin: '4rem 0' }}>
                <QuestionCard 
                  icon={TrendingUp}
                  question="How Will You Improve My Rankings?"
                  answer="You need to know what strategies and methods will be employed. Even if you are an SEO novice, this discussion provides insight into how the company works. Experienced companies understand that a realistic, sustainable approach is necessary for long-term success."
                  warning="Be wary of companies promising 'instant' results."
                />
                <QuestionCard 
                  icon={ShieldCheck}
                  question="Do You Adhere to the Webmaster Guidelines?"
                  answer="Some agencies may suggest 'black hat' strategies to fool search engines. This usually hurts your site in the long run. Look for a company that adheres to Google's webmaster best practices to avoid penalties."
                />
                <QuestionCard 
                  icon={Target}
                  question="Can You Guarantee Number One Rankings?"
                  answer="This is a trick question. No one can guarantee rankings due to search engine algorithm volatility. Ethical providers focus on growth and ROI rather than absolute position guarantees."
                  warning="Claims of 'special insider relationships' with search engines."
                />
                <QuestionCard 
                  icon={Code2}
                  question="Will You Share All Changes Made to the Site?"
                  answer="SEO often requires changes to your coding and content. You should be aware of what is being modified. State upfront if you want the agency to obtain permission before altering your website code."
                />
                <QuestionCard 
                  icon={BarChart}
                  question="How Will Campaign Success be Measured?"
                  answer="Tracking is needed to monitor traffic origins and growth. Your agency should use the latest tools and share data regularly to show how improvements are being made over time."
                />
              </div>

              <div className="reveal" style={{ margin: "6rem 0", padding: '4rem', background: 'var(--footer-bg)', borderRadius: '32px', color: '#fff', border: '1px solid var(--footer-border)', textAlign: 'center' }}>
                <h2 style={{ fontSize: "2.25rem", fontWeight: 900, marginBottom: "1.5rem", color: '#fff' }}>Hiring the Right Partner</h2>
                <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.1rem', marginBottom: '3rem' }}>
                  Choosing an SEO agency can be daunting, but asking the right questions reduces uncertainty. Melbourne-based FI Digital is ready to answer any queries you may have.
                </p>
                <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', background: 'var(--primary)', color: '#fff', padding: '1.2rem 3.5rem', borderRadius: '100px', fontWeight: 900, textDecoration: 'none', transition: 'transform 0.3s ease' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                  Talk to Our SEO Experts <ArrowRight size={20} />
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
                  <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>FI Digital Melbourne · Industry Leaders</div>
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
                  title: "How Can SEO Help in Growing Your Business?",
                  cat: "SEO & Strategy",
                  slug: "how-can-seo-help-in-growing-your-business"
                },
                {
                  title: "SEO Melbourne Expert Advice For Blog Post Writing Fundamentals",
                  cat: "SEO & Strategy",
                  slug: "seo-melbourne-expert-advice-for-blog-post-writing-fundamentals-2"
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
                      <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 600 }}>6 min read</span>
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
