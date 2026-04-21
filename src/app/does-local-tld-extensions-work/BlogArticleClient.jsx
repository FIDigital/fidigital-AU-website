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
  BarChart3, AlertCircle, Link as LinkIcon,
  ShieldAlert, MousePointer2, Anchor,
  CheckCircle, XCircle
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const MythFactItem = ({ myth, fact }) => (
  <div className="reveal" style={{ 
    marginBottom: '2.5rem', 
    padding: '2rem', 
    background: 'var(--bg-secondary)', 
    borderRadius: '24px', 
    border: '1px solid var(--border)' 
  }}>
    <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem', alignItems: 'center' }}>
       <div style={{ color: '#ef4444', display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 800 }}>
          <XCircle size={20} /> MYTH:
       </div>
       <div style={{ color: 'var(--text)', fontWeight: 600, fontSize: '1.1rem' }}>{myth}</div>
    </div>
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
       <div style={{ color: '#22c55e', display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 800 }}>
          <CheckCircle size={20} /> FACT:
       </div>
       <div style={{ color: 'var(--text-muted)', fontSize: '1rem' }}>{fact}</div>
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
                background: "rgba(29, 78, 216, 0.08)", color: "var(--primary)",
                padding: "0.5rem 1rem", borderRadius: "100px",
                fontWeight: 800, fontSize: "0.75rem", textTransform: "uppercase",
                letterSpacing: "0.1em", marginBottom: "1.5rem",
                border: "1px solid rgba(29, 78, 216, 0.2)"
              }}>
                <Globe size={14} /> Domain Strategy
              </div>

              <h1 className="hero-h1" style={{ 
                fontSize: "clamp(2.5rem, 6vw, 4.5rem)", fontWeight: 900,
                lineHeight: 1.1, marginBottom: "2rem", letterSpacing: "-0.03em"
              }}>
                Do <span style={{ color: "var(--primary)" }}>.Melbourne</span> or <br />
                <span style={{ color: "var(--primary)" }}>.Sydney</span> Domains Work?
              </h1>

              <div className="hero-meta" style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "2rem", color: "var(--text-muted)", fontSize: "0.95rem", fontWeight: 600 }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                  <div style={{ width: "40px", height: "40px", borderRadius: "12px", background: "var(--primary)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff" }}>
                    <User size={18} />
                  </div>
                  <span style={{ color: "var(--text)" }}>SEO Strategy Team</span>
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
                <p style={{ fontSize: "1.25rem", color: "var(--text)", fontWeight: 500, marginBottom: "3rem" }}>
                   Since the introduction of ".Melbourne" and ".Sydney" TLD extensions, many resellers have tried to spread misinformation about their ranking benefits. The reality is that TLD extensions have a negligible effect on your search ranking.
                </p>
              </div>

              <div style={{ marginTop: '4rem' }}>
                <h2 style={{ fontSize: "2.2rem", fontWeight: 900, color: "var(--text)", marginBottom: "2rem" }}>Debunking the Myths</h2>
                
                <MythFactItem 
                  myth="Local TLDs offer massive local ranking benefits." 
                  fact="Google is smart enough to show local results via Google My Business, irrespective of your domain extension." 
                />
                
                <MythFactItem 
                  myth="Hyperlocal services need .Melbourne to rank in Melbourne." 
                  fact="Vague metropolitan TLDs don't help hyperlocal shops (like a pizza shop in a specific suburb) rank better than a standard .com.au domain." 
                />

                <MythFactItem 
                  myth=".Melbourne defines your location specifically for search engines." 
                  fact="Searcher location and NAP/Directory listings are far more powerful signals than the domain extension itself." 
                />
              </div>

              <div className="reveal" style={{ marginTop: '5rem' }}>
                 <h2 style={{ fontSize: "2.2rem", fontWeight: 900, color: "var(--text)", marginBottom: "1.5rem" }}>Are There Any Advantages?</h2>
                 <p>
                   While way too small to consider as a primary strategy, there are two minor potential benefits:
                 </p>
                 <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginTop: '2rem' }} className="responsive-grid">
                    <div style={{ padding: '2rem', background: 'var(--bg-secondary)', borderRadius: '24px', border: '1px solid var(--border)' }}>
                       <MousePointer2 size={32} color="var(--primary)" style={{ marginBottom: '1rem' }} />
                       <div style={{ fontWeight: 800, color: 'var(--text)', marginBottom: '0.5rem' }}>Click-Through Rate (CTR)</div>
                       <p style={{ fontSize: '0.95rem', margin: 0 }}>A recognizable TLD might have a slight edge in generating trust, though masses still prefer established TLDs like .com.</p>
                    </div>
                    <div style={{ padding: '2rem', background: 'var(--bg-secondary)', borderRadius: '24px', border: '1px solid var(--border)' }}>
                       <Anchor size={32} color="var(--primary)" style={{ marginBottom: '1rem' }} />
                       <div style={{ fontWeight: 800, color: 'var(--text)', marginBottom: '0.5rem' }}>Anchor Text Advantage</div>
                       <p style={{ fontSize: '0.95rem', margin: 0 }}>Similar to Exact Match Domains (EMD), the TLD itself might act as natural anchor text when mentioned across the web.</p>
                    </div>
                 </div>
              </div>

              <div className="reveal" style={{ marginTop: '5rem', borderTop: '1px solid var(--border)', paddingTop: '4rem' }}>
                <h2 style={{ fontSize: "2.2rem", fontWeight: 900, color: "var(--text)", marginBottom: "1.5rem" }}>The Final Verdict</h2>
                <p>
                  Don't fall for the trap. If you are doing business in Australia or targeting Australian web traffic, **stick with ".com.au" or ".com"**. These TLDs generate the most credibility and are the standard for mass-market trust.
                </p>
                <div style={{ marginTop: '3rem', padding: '2.5rem', background: 'var(--bg-secondary)', borderRadius: '32px', border: '1px solid var(--border)' }}>
                   <p style={{ fontWeight: 800, color: 'var(--text)', margin: 0 }}>
                      At FI Digital, we base our SEO strategies on research and experiment, not resellers' myths. Contact us today to set your company on a successful digital journey.
                   </p>
                </div>
              </div>

            </article>

            {/* SIDEBAR */}
            <aside>
              <div style={{ position: 'sticky', top: '120px', display: 'grid', gap: '2.5rem' }}>
                
                {/* RESOURCES */}
                <div className="reveal" style={{ padding: '2rem', background: 'var(--bg-secondary)', borderRadius: '24px', border: '1px solid var(--border)' }}>
                  <h4 style={{ fontSize: '1.1rem', fontWeight: 900, marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <ShieldAlert size={20} color="var(--primary)" /> Advice Warning
                  </h4>
                  <div style={{ display: 'grid', gap: '1rem' }}>
                    {[
                      "Beware of Domain Resellers",
                      "Focus on GMB Registration",
                      "Priority .com.au domains",
                      "Don't fall for vague TLDs"
                    ].map((item, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.85rem', fontWeight: 700 }}>
                        <AlertCircle size={14} color="#ef4444" /> {item}
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="reveal" style={{ padding: '2rem', background: 'var(--primary)', borderRadius: '24px', color: '#fff', textAlign: 'center' }}>
                  <Target size={40} style={{ marginBottom: '1.5rem', opacity: 0.8 }} />
                  <h4 style={{ fontSize: '1.3rem', fontWeight: 900, marginBottom: '1rem' }}>Strategy Audit</h4>
                  <p style={{ fontSize: '0.95rem', marginBottom: '2rem', opacity: 0.9 }}>
                    Get an SEO roadmap based on data, not myths.
                  </p>
                  <Link href="/contact" style={{ display: 'block', background: '#fff', color: 'var(--primary)', padding: '1rem', borderRadius: '12px', fontWeight: 900, textDecoration: 'none' }}>
                    Contact Our Experts
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
                <p style={{ color: 'var(--text-muted)', fontWeight: 500 }}>Smart strategies for local business growth.</p>
              </div>
              <Link href="/blog" style={{ color: 'var(--primary)', fontWeight: 800, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                All Blogs <ArrowUpRight size={18} />
              </Link>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
              {[
                {
                  title: "Targeting Local Audience with Melbourne SEO",
                  cat: "Local SEO",
                  slug: "how-can-seo-agency-help-in-optimizing-your-website-to-target-local-audience"
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
