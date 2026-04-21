"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  Calendar, Clock, User, 
  ChevronRight, Quote, CheckCircle2,
  Lightbulb, TrendingUp, ShieldCheck, Zap,
  ArrowUpRight, ArrowRight, Apple, 
  MessageSquare, Layout, Sparkles, Target, 
  BarChart3, Globe, AlertCircle, Smartphone,
  Watch, Monitor, Tv, Cpu, Bot, Mic,
  MapPin, ShoppingCart, Lock, Clipboard
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const OSBadge = ({ name, icon: Icon }) => (
  <div style={{ 
    display: 'flex', alignItems: 'center', gap: '0.75rem', 
    padding: '0.75rem 1.25rem', background: 'var(--bg-secondary)', 
    borderRadius: '12px', border: '1px solid var(--border)',
    fontWeight: 800, fontSize: '0.85rem'
  }}>
    <Icon size={18} color="var(--primary)" /> {name}
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
                <Apple size={14} /> Tech Insights
              </div>

              <h1 className="hero-h1" style={{ 
                fontSize: "clamp(2.5rem, 6vw, 4.5rem)", fontWeight: 900,
                lineHeight: 1.1, marginBottom: "2rem", letterSpacing: "-0.03em"
              }}>
                Taking Cues from <br />
                <span style={{ color: "var(--primary)" }}>Apple’s WWDC</span>
              </h1>

              <div className="hero-meta" style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "2rem", color: "var(--text-muted)", fontSize: "0.95rem", fontWeight: 600 }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                  <div style={{ width: "40px", height: "40px", borderRadius: "12px", background: "var(--primary)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff" }}>
                    <User size={18} />
                  </div>
                  <span style={{ color: "var(--text)" }}>FI Strategy Team</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}><Calendar size={18} opacity={0.6} /> April 21, 2026</div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}><Clock size={18} opacity={0.6} /> 11 min read</div>
              </div>
            </div>
          </div>
        </section>

        {/* ══ ARTICLE BODY ══════════════════════════════════════════════════ */}
        <section style={{ padding: "80px 1.5rem", position: "relative" }}>
          <div className="container" style={{ maxWidth: "1200px" }}>
            
            <div className="reveal" style={{ maxWidth: '900px', marginBottom: '5rem' }}>
              <p style={{ fontSize: "1.35rem", color: "var(--text)", fontWeight: 500, lineHeight: 1.6 }}>
                Like every year, Apple's developer conference announced pivotal shifts across their ecosystem. Beyond name changes, we're seeing an Apple that is moving fast to embrace Chatbots, AI, and a deeper hardware-software web.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '2.5rem' }}>
                <OSBadge name="watchOS" icon={Watch} />
                <OSBadge name="iOS" icon={Smartphone} />
                <OSBadge name="tvOS" icon={Tv} />
                <OSBadge name="macOS" icon={Monitor} />
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }} className="responsive-grid">
               
               <div className="reveal">
                  <h2 style={{ fontSize: '2.2rem', fontWeight: 900, marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <Bot size={32} color="var(--primary)" /> iOS 10 & AI
                  </h2>
                  <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, fontSize: '1.1rem' }}>
                    Apple is taking chatbots and AI seriously. Opening iMessage to developers unlocks social buying, group food ordering, and health tracking directly within the chat window. Combined with Apple Pay for the web, the purchase cycle can now be completed without ever leaving the conversation.
                  </p>
                  <ul style={{ marginTop: '2rem', display: 'grid', gap: '1rem', listStyle: 'none', padding: 0 }}>
                    {[
                      { text: "Siri opened to developers", icon: Mic },
                      { text: "Predictive Map intelligence", icon: MapPin },
                      { text: "IoT-focused Home App", icon: Cpu }
                    ].map((item, i) => (
                      <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontWeight: 700, color: 'var(--text)' }}>
                         <item.icon size={18} color="var(--primary)" /> {item.text}
                      </li>
                    ))}
                  </ul>
               </div>

               <div className="reveal">
                  <h2 style={{ fontSize: '2.2rem', fontWeight: 900, marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <Monitor size={32} color="var(--primary)" /> macOS Sierra
                  </h2>
                  <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, fontSize: '1.1rem' }}>
                    The transition to macOS brings features that were once only imaginable. Siri's integration allows for background multi-tasking, while Universal Clipboard creates a seamless bridge between your iPhone and Mac.
                  </p>
                  <div style={{ marginTop: '2rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                     <div style={{ padding: '1.5rem', background: 'var(--bg-secondary)', borderRadius: '20px', border: '1px solid var(--border)' }}>
                        <Clipboard size={24} color="var(--primary)" style={{ marginBottom: '0.75rem' }} />
                        <div style={{ fontWeight: 800, fontSize: '0.9rem' }}>Universal Clipboard</div>
                     </div>
                     <div style={{ padding: '1.5rem', background: 'var(--bg-secondary)', borderRadius: '20px', border: '1px solid var(--border)' }}>
                        <Lock size={24} color="var(--primary)" style={{ marginBottom: '0.75rem' }} />
                        <div style={{ fontWeight: 800, fontSize: '0.9rem' }}>Auto Unlock</div>
                     </div>
                  </div>
               </div>

            </div>

            <div className="reveal" style={{ marginTop: '5rem', padding: '4rem', background: 'var(--primary)', borderRadius: '40px', color: '#fff' }}>
               <h2 style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: '1.5rem' }}>What's in store for SMEs?</h2>
               <p style={{ fontSize: '1.2rem', opacity: 0.9, lineHeight: 1.8, maxWidth: '800px' }}>
                  Millennials want everything with a click. To serve this generation, businesses must be agile. Apple Pay for the web requires quick adoption for e-commerce, while the focus on chatbot technology will yield higher engagement and keep you ahead of the competition.
               </p>
               <div style={{ marginTop: '3rem', display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                  <Link href="/contact" style={{ background: '#fff', color: 'var(--primary)', padding: '1.25rem 2.5rem', borderRadius: '16px', fontWeight: 900, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    Audit Your Mobile Strategy <ArrowRight size={20} />
                  </Link>
               </div>
            </div>

            <div className="reveal" style={{ marginTop: '5rem', borderTop: '1px solid var(--border)', paddingTop: '4rem' }}>
               <p style={{ fontSize: '1.15rem', fontWeight: 600, color: 'var(--text-muted)' }}>
                  At FI Digital, we keep you ahead of the curve. Whether it's Mobile Search Optimization or developing social buying interfaces, our Melbourne-based team ensures your business is ready for the future of the Apple ecosystem.
               </p>
            </div>

          </div>
        </section>

        {/* ══ RELATED POSTS ══════════════════════════════════════════════════ */}
        <section style={{ padding: '80px 1.5rem', background: 'var(--bg-secondary)', borderTop: '1px solid var(--border)' }}>
          <div className="container" style={{ maxWidth: '1200px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem' }}>
              <div>
                <h2 style={{ fontSize: '2rem', fontWeight: 900, marginBottom: '0.5rem' }}>Related Insights</h2>
                <p style={{ color: 'var(--text-muted)', fontWeight: 500 }}>Navigating the tech ecosystem.</p>
              </div>
              <Link href="/blog" style={{ color: 'var(--primary)', fontWeight: 800, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                All Blogs <ArrowUpRight size={18} />
              </Link>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
              {[
                {
                  title: "Is Mobile Search The Next Big Thing?",
                  cat: "Mobile Strategy",
                  slug: "is-mobile-search-the-next-big-thing"
                },
                {
                  title: "Digital Personalization & Automation",
                  cat: "Marketing Tech",
                  slug: "digital-personalization-the-consciousness-of-marketing-automation"
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
        .hover-card:hover {
          transform: translateY(-5px);
          border-color: var(--primary) !important;
          box-shadow: 0 20px 40px rgba(0,0,0,0.05);
        }
      `}</style>
    </div>
  );
}
