"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  Calendar, Clock, User, 
  ChevronRight, Quote, CheckCircle2,
  Lightbulb, TrendingUp, ShieldCheck, Zap,
  ArrowUpRight, ArrowRight, Sparkles, 
  MessageSquare, Layout, Target, 
  BarChart3, Globe, AlertCircle, Smartphone,
  UserCheck, Video, Search, Cpu, MapPin,
  Share2, Database, PenTool, Telescope
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const TrendItem = ({ title, desc, icon: Icon }) => (
  <div className="reveal" style={{ 
    padding: '2.5rem', 
    background: 'var(--bg-secondary)', 
    border: '1px solid var(--border)', 
    borderRadius: '28px',
    height: '100%',
    transition: 'all 0.3s ease',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  }}>
    <div style={{ 
      width: '52px', height: '52px', borderRadius: '14px', 
      background: 'rgba(29, 78, 216, 0.1)', color: 'var(--primary)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      marginBottom: '0.5rem'
    }}>
      <Icon size={26} />
    </div>
    <h3 style={{ fontSize: '1.4rem', fontWeight: 900, color: 'var(--text)', margin: 0 }}>{title}</h3>
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
                <Telescope size={14} /> Future Trends
              </div>

              <h1 className="hero-h1" style={{ 
                fontSize: "clamp(2.5rem, 6vw, 4.5rem)", fontWeight: 900,
                lineHeight: 1.1, marginBottom: "2rem", letterSpacing: "-0.03em"
              }}>
                Glimpse into the <br />
                <span style={{ color: "var(--primary)" }}>Digital Marketing</span> Scenario
              </h1>

              <div className="hero-meta" style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "2rem", color: "var(--text-muted)", fontSize: "0.95rem", fontWeight: 600 }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                  <div style={{ width: "40px", height: "40px", borderRadius: "12px", background: "var(--primary)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff" }}>
                    <User size={18} />
                  </div>
                  <span style={{ color: "var(--text)" }}>FI Strategy Team</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}><Calendar size={18} opacity={0.6} /> April 21, 2026</div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}><Clock size={18} opacity={0.6} /> 15 min read</div>
              </div>
            </div>
          </div>
        </section>

        {/* ══ ARTICLE BODY ══════════════════════════════════════════════════ */}
        <section style={{ padding: "80px 1.5rem", position: "relative" }}>
          <div className="container" style={{ maxWidth: "1200px" }}>
            
            <div className="reveal" style={{ maxWidth: '900px', marginBottom: '5rem' }}>
              <p style={{ fontSize: "1.35rem", color: "var(--text)", fontWeight: 500, lineHeight: 1.6 }}>
                Every business venture needs to find creative and innovative ways to incorporate emerging technologies into their plans. As the stage gets set to embrace the latest tools, here is a breakdown of the scenarios shaping the future of digital marketing.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
              
              <TrendItem title="Mobile Marketing" icon={Smartphone} desc="Marketers are finding smart ways to reach mobile consumers through responsive design and on-the-go app ecosystems." />
              
              <TrendItem title="Personalized Websites" icon={UserCheck} desc="User experience is the new pivot. Customized websites send a message of one-on-one personal care for each visitor." />
              
              <TrendItem title="Video Content" icon={Video} desc="Online advertising has adopted video as its pet channel. Short, striking, and novel content drives instant connection." />
              
              <TrendItem title="Paid Search (PPC)" icon={TrendingUp} desc="Google's mobile-first strategy has boosted Pay Per Click models, creating highly targeted revenue streams." />
              
              <TrendItem title="Organic Search (SEO)" icon={Search} desc="SEO continues to lead, targeting mobile-only indexing and Accelerated Mobile Pages (AMP) for maximum visibility." />
              
              <TrendItem title="Internet of Things (IoT)" icon={Cpu} desc="With billions of devices talking to one another, IoT marketing applications are becoming high priority for enterprises." />
              
              <TrendItem title="Location-Based Marketing" icon={MapPin} desc="Leveraging technologies like beacons to connect with consumers on the move through intelligent, target-based ad campaigns." />
              
              <TrendItem title="Social Media & CRM" icon={Share2} desc="Monetizing social networks by adapting to local and popular platforms for far-reaching, monetized impact." />
              
              <TrendItem title="Big Data Analytics" icon={Database} desc="Predictive analysis serves as a funnel for personalization strategies, helping make informed, sales-driving decisions." />
              
              <TrendItem title="Content Marketing" icon={PenTool} desc="Integrated content strategies featuring interactive content are garnering the most promising ROI results." />

            </div>

            <div className="reveal" style={{ marginTop: '5rem', padding: '4rem', background: 'var(--bg-secondary)', borderRadius: '40px', border: '1px solid var(--border)' }}>
               <h2 style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: '1.5rem', color: 'var(--text)' }}>Global Arena Competition</h2>
               <p style={{ fontSize: '1.2rem', lineHeight: 1.8, color: 'var(--text-muted)' }}>
                  Business and brands no longer compete just with local regions—the internet has pitched them up on a global arena. Our digital marketing agency in Melbourne has the expertise to understand these key tactics and assist in creating cutting-edge strategies for the best brand campaigns.
               </p>
               <div style={{ marginTop: '3rem', display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                  <Link href="/contact" style={{ padding: '1.25rem 2.5rem', background: 'var(--primary)', color: '#fff', borderRadius: '16px', fontWeight: 900, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    Start Your Campaign <ArrowRight size={20} />
                  </Link>
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
                <p style={{ color: 'var(--text-muted)', fontWeight: 500 }}>Preparing for the next digital shift.</p>
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
        .hover-card:hover {
          transform: translateY(-5px);
          border-color: var(--primary) !important;
          box-shadow: 0 20px 40px rgba(0,0,0,0.05);
        }
      `}</style>
    </div>
  );
}
