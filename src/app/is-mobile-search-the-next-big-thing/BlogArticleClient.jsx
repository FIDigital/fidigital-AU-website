"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  Calendar, Clock, User, 
  ChevronRight, Quote, CheckCircle2,
  Lightbulb, TrendingUp, ShieldCheck, Zap,
  ArrowUpRight, ArrowRight, Smartphone, 
  MessageSquare, Layout, Sparkles, Target, 
  BarChart3, Globe, AlertCircle, MessageCircle,
  Apple, Chrome, Cpu, Bot
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const PlatformCard = ({ name, title, children, icon: Icon, color }) => (
  <div className="reveal" style={{ 
    padding: '3rem', 
    background: 'var(--bg-secondary)', 
    border: `1px solid var(--border)`, 
    borderRadius: '32px',
    marginBottom: '3rem',
    position: 'relative',
    overflow: 'hidden'
  }}>
    <div style={{ 
      position: 'absolute', top: '-20px', right: '-20px', 
      fontSize: '8rem', fontWeight: 900, opacity: 0.03, color: color 
    }}>
      {name[0]}
    </div>
    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
       <div style={{ 
         width: '56px', height: '56px', borderRadius: '16px', 
         background: 'var(--bg)', border: `1px solid ${color}44`,
         display: 'flex', alignItems: 'center', justifyContent: 'center', color: color 
       }}>
          <Icon size={28} />
       </div>
       <div>
         <div style={{ fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', color: color, letterSpacing: '0.1em' }}>{name}</div>
         <h2 style={{ fontSize: '1.8rem', fontWeight: 900, color: 'var(--text)', margin: 0 }}>{title}</h2>
       </div>
    </div>
    <div style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--text-muted)' }}>
      {children}
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
                <Smartphone size={14} /> Mobile Strategy
              </div>

              <h1 className="hero-h1" style={{ 
                fontSize: "clamp(2.5rem, 6vw, 4.5rem)", fontWeight: 900,
                lineHeight: 1.1, marginBottom: "2rem", letterSpacing: "-0.03em"
              }}>
                Is Mobile Search the <br />
                <span style={{ color: "var(--primary)" }}>Next Big Thing?</span>
              </h1>

              <div className="hero-meta" style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "2rem", color: "var(--text-muted)", fontSize: "0.95rem", fontWeight: 600 }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                  <div style={{ width: "40px", height: "40px", borderRadius: "12px", background: "var(--primary)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff" }}>
                    <User size={18} />
                  </div>
                  <span style={{ color: "var(--text)" }}>FI Strategy Team</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}><Calendar size={18} opacity={0.6} /> April 21, 2026</div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}><Clock size={18} opacity={0.6} /> 12 min read</div>
              </div>
            </div>
          </div>
        </section>

        {/* ══ ARTICLE BODY ══════════════════════════════════════════════════ */}
        <section style={{ padding: "80px 1.5rem", position: "relative" }}>
          <div className="container" style={{ maxWidth: "1200px" }}>
            
            <div className="reveal" style={{ maxWidth: '900px', marginBottom: '5rem' }}>
              <p style={{ fontSize: "1.35rem", color: "var(--text)", fontWeight: 500, lineHeight: 1.6 }}>
                Exciting and unpredictable times lay ahead for the world of Mobile Search. With over 50% of Google searches now occurring on mobile devices, it has evolved from a subset of traditional search into its own formidable ecosystem.
              </p>
            </div>

            <div style={{ display: 'grid', gap: '2rem' }}>
              
              <PlatformCard name="Facebook" title="The Messenger & Chatbot Revolution" icon={MessageCircle} color="#1877F2">
                <p>The FB family occupies nearly 60% of smartphone app usage. With the opening of Messenger to developers, we are entering the era of **Artificial Intelligence enabled bots**. Chatbots like Lark and Penny are already proving that brands can chat with prospective customers exactly like humans do, fundamentally changing e-commerce and digital advertising.</p>
              </PlatformCard>

              <PlatformCard name="Google" title="AMP & Unconventional Search" icon={Chrome} color="#4285F4">
                <p>Google is gearing up with **Accelerated Mobile Pages (AMP)**, a new open framework built for lightweight, high-speed delivery. Beyond traditional search, Google is being challenged by voice search and app indexing—technologies that will eventually surface content from within third-party apps directly in search results.</p>
              </PlatformCard>

              <PlatformCard name="Apple" title="Siri & Spotlight Domination" icon={Apple} color="#A2AAAD">
                <p>Apple device owners are traditionally high-value consumers. Through **Siri and Spotlight**, Apple uses chatbot technology without explicitly labeling it. If Spotlight begins to dive into the data of every installed app, it could provide a significant jolt to traditional search engines.</p>
              </PlatformCard>

            </div>

            <div className="reveal" style={{ marginTop: '5rem', padding: '4rem', background: 'var(--primary)', borderRadius: '40px', color: '#fff' }}>
               <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }} className="responsive-grid">
                  <div>
                    <h2 style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: '1.5rem' }}>The Revolution is Here</h2>
                    <p style={{ fontSize: '1.1rem', opacity: 0.9, lineHeight: 1.7 }}>
                      Industries like Fashion E-Commerce, Health, and Personal Finance are already at the forefront of this shift. The landscape is growing faster than anticipated, driven by the tech giants' focus on voice and AI.
                    </p>
                  </div>
                  <div style={{ display: 'grid', gap: '1.5rem' }}>
                     {[
                       { title: "Chatbot Integration", icon: Bot },
                       { title: "Voice Search Optimization", icon: Mic },
                       { title: "App Indexing", icon: Layers }
                     ].map((item, i) => (
                       <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', padding: '1.5rem', background: 'rgba(255,255,255,0.1)', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.1)' }}>
                          <item.icon size={24} />
                          <span style={{ fontWeight: 800 }}>{item.title}</span>
                       </div>
                     ))}
                  </div>
               </div>
            </div>

            <div className="reveal" style={{ marginTop: '5rem', borderTop: '1px solid var(--border)', paddingTop: '4rem' }}>
              <p style={{ fontSize: '1.2rem', fontWeight: 600 }}>
                At FI Digital, we ensure your business stays ahead of the curve. As Melbourne's own digital marketing company, we guarantee transparency and success for Australian SMEs in this rapidly changing mobile landscape.
              </p>
              <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '1rem', marginTop: '2rem', padding: '1.25rem 2.5rem', background: 'var(--primary)', color: '#fff', borderRadius: '16px', fontWeight: 900, textDecoration: 'none' }}>
                Contact Our Mobile Experts <ArrowRight size={20} />
              </Link>
            </div>

          </div>
        </section>

        {/* ══ RELATED POSTS ══════════════════════════════════════════════════ */}
        <section style={{ padding: '80px 1.5rem', background: 'var(--bg-secondary)', borderTop: '1px solid var(--border)' }}>
          <div className="container" style={{ maxWidth: '1200px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem' }}>
              <div>
                <h2 style={{ fontSize: '2rem', fontWeight: 900, marginBottom: '0.5rem' }}>Related Insights</h2>
                <p style={{ color: 'var(--text-muted)', fontWeight: 500 }}>Navigating the mobile-first world.</p>
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
                  title: "Why Digital Marketing is Important for SMEs",
                  cat: "Marketing & Strategy",
                  slug: "why-digital-marketing-is-important-for-australian-smes"
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
          .container { grid-template-columns: 1fr !important; }
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

// Internal icons needed
const Mic = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" x2="12" y1="19" y2="22"/></svg>
);
const Layers = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>
);
