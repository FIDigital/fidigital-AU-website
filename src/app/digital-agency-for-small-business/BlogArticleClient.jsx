"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  Calendar, Clock, User, 
  ChevronRight, Quote, CheckCircle2,
  Lightbulb, TrendingUp, ShieldCheck, Zap,
  ArrowUpRight, ArrowRight, Users, 
  MessageSquare, Layout, Sparkles, Target, 
  BarChart3, Globe, AlertCircle, Rocket,
  ExternalLink, Map, Award, Briefcase,
  Monitor, PenTool, Search, MousePointer2
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const ServiceCard = ({ title, icon: Icon }) => (
  <div style={{ 
    padding: '1.5rem', 
    background: 'var(--bg)', 
    border: '1px solid var(--border)', 
    borderRadius: '16px',
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    fontWeight: 700,
    fontSize: '0.95rem'
  }}>
    <div style={{ color: 'var(--primary)' }}>
      <Icon size={20} />
    </div>
    {title}
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
                <Users size={14} /> SME Growth
              </div>

              <h1 className="hero-h1" style={{ 
                fontSize: "clamp(2.5rem, 6vw, 4.5rem)", fontWeight: 900,
                lineHeight: 1.1, marginBottom: "2rem", letterSpacing: "-0.03em"
              }}>
                Why Australian <span style={{ color: "var(--primary)" }}>SMBs</span> Need <br />
                Superior Digital Marketing
              </h1>

              <div className="hero-meta" style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "2rem", color: "var(--text-muted)", fontSize: "0.95rem", fontWeight: 600 }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                  <div style={{ width: "40px", height: "40px", borderRadius: "12px", background: "var(--primary)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff" }}>
                    <User size={18} />
                  </div>
                  <span style={{ color: "var(--text)" }}>FI Strategy Team</span>
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
                  Small and medium-sized business owners in Australia must embrace the power of digital marketing to grab vital market share and stand out from rivals. In a landscape that has shifted dramatically toward the digital world, making a strong, positive impact is no longer optional—it's the key to survival.
                </p>
              </div>

              <div className="reveal" style={{ marginTop: '4rem' }}>
                 <h2 style={{ fontSize: "2.2rem", fontWeight: 900, color: "var(--text)", marginBottom: "1.5rem" }}>The Cost-Effective Advantage</h2>
                 <p>
                    Unlike traditional TV or radio spots, many digital strategies offer a much higher ROI for a fraction of the cost. Social media platforms provide access to a deep pool of prospective customers, while paid campaigns like PPC remain affordable even for modest marketing budgets.
                 </p>
                 <div style={{ marginTop: '2.5rem', padding: '2.5rem', background: 'var(--bg-secondary)', borderRadius: '32px', border: '1px solid var(--border)', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }} className="responsive-grid">
                    <div>
                       <div style={{ color: 'var(--primary)', fontWeight: 800, marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                          <Zap size={20} /> Digital Reach
                       </div>
                       <p style={{ fontSize: '0.95rem', margin: 0 }}>Access a global audience with targeted precision and real-time tracking.</p>
                    </div>
                    <div>
                       <div style={{ color: 'var(--primary)', fontWeight: 800, marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                          <Target size={20} /> Budget Control
                       </div>
                       <p style={{ fontSize: '0.95rem', margin: 0 }}>Scale your spending based on performance and specific business goals.</p>
                    </div>
                 </div>
              </div>

              <div className="reveal" style={{ marginTop: '5rem' }}>
                 <h2 style={{ fontSize: "2.2rem", fontWeight: 900, color: "var(--text)", marginBottom: "1.5rem" }}>The Wisdom of Outsourcing</h2>
                 <p>
                    Most SMB owners aren't digital marketing gurus. Handing the reins to experts allows you to focus on your strengths—delivering exceptional customer care—while accessing a team's collective talent, experience, and technical savvy.
                 </p>
                 <blockquote style={{ margin: '3rem 0', padding: '2.5rem', borderLeft: '6px solid var(--primary)', background: 'rgba(29, 78, 216, 0.03)', borderRadius: '0 24px 24px 0' }}>
                    <p style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text)', margin: 0, lineHeight: 1.5 }}>
                       "Aussie digital marketing experts understand the Land Down Under—its marketplace, economy, culture, and consumers. Choosing a local Melbourne partner is the key to generating true web traffic."
                    </p>
                 </blockquote>
              </div>

              <div className="reveal" style={{ marginTop: '5rem' }}>
                 <h2 style={{ fontSize: "2.2rem", fontWeight: 900, color: "var(--text)", marginBottom: "2rem" }}>Full-Service Premium Solutions</h2>
                 <p style={{ marginBottom: '2.5rem' }}>
                    Superior digital marketing isn't just one thing—it's a holistic approach designed to improve your business's image and profits.
                 </p>
                 <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }} className="responsive-grid">
                    <ServiceCard title="Website Optimization" icon={Monitor} />
                    <ServiceCard title="Content Strategy" icon={PenTool} />
                    <ServiceCard title="Search Marketing" icon={Search} />
                    <ServiceCard title="PPC Campaigns" icon={MousePointer2} />
                    <ServiceCard title="Digital Advisory" icon={Lightbulb} />
                    <ServiceCard title="Web Development" icon={Layout} />
                 </div>
              </div>

              <div className="reveal" style={{ marginTop: '5rem', borderTop: '1px solid var(--border)', paddingTop: '4rem' }}>
                <h2 style={{ fontSize: "2.2rem", fontWeight: 900, color: "var(--text)", marginBottom: "1.5rem" }}>Your Digital Journey Starts Here</h2>
                <p>
                   At FI Digital, we pride ourselves on being trusted partners in our clients' growth stories. Our solutions are specifically designed to suit small and medium businesses in Australia. Don't lose market share to competitors—embrace the innovation required to make your Aussie business shine.
                </p>
              </div>

            </article>

            {/* SIDEBAR */}
            <aside>
              <div style={{ position: 'sticky', top: '120px', display: 'grid', gap: '2.5rem' }}>
                
                {/* LOCAL ADVANTAGE */}
                <div className="reveal" style={{ padding: '2rem', background: 'var(--bg-secondary)', borderRadius: '24px', border: '1px solid var(--border)' }}>
                  <h4 style={{ fontSize: '1.1rem', fontWeight: 900, marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <Map size={20} color="var(--primary)" /> Aussie Insight
                  </h4>
                  <div style={{ display: 'grid', gap: '1rem' }}>
                    {[
                      "Local Market Knowledge",
                      "Cultural Nuance",
                      "Aussie Consumer Trends",
                      "Local SEO Expertise"
                    ].map((item, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.85rem', fontWeight: 700 }}>
                        <CheckCircle2 size={14} color="var(--primary)" /> {item}
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="reveal" style={{ padding: '2rem', background: 'var(--primary)', borderRadius: '24px', color: '#fff', textAlign: 'center' }}>
                  <Rocket size={40} style={{ marginBottom: '1.5rem', opacity: 0.8 }} />
                  <h4 style={{ fontSize: '1.3rem', fontWeight: 900, marginBottom: '1rem' }}>Partner for Growth</h4>
                  <p style={{ fontSize: '0.95rem', marginBottom: '2rem', opacity: 0.9 }}>
                    Ready to start your digital journey? Let's build your brand together.
                  </p>
                  <Link href="/contact" style={{ display: 'block', background: '#fff', color: 'var(--primary)', padding: '1rem', borderRadius: '12px', fontWeight: 900, textDecoration: 'none' }}>
                    Call Us Now
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
                <p style={{ color: 'var(--text-muted)', fontWeight: 500 }}>Empowering Australian businesses online.</p>
              </div>
              <Link href="/blog" style={{ color: 'var(--primary)', fontWeight: 800, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                All Blogs <ArrowUpRight size={18} />
              </Link>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
              {[
                {
                  title: "Why Digital Marketing is Important for SMEs",
                  cat: "SME Growth",
                  slug: "why-digital-marketing-is-important-for-australian-smes"
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
