"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  ArrowLeft, Calendar, Clock, User, 
  ChevronRight, Quote, CheckCircle2, AlertCircle,
  Lightbulb, TrendingUp, ShieldCheck, Zap, Sparkles,
  ArrowUpRight, ArrowRight, Settings, Users, Database, Globe
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const FeatureCard = ({ icon: Icon, title, desc }) => (
  <div className="reveal" style={{ 
    padding: '2rem', 
    background: 'var(--bg)', 
    border: '1px solid var(--border)', 
    borderRadius: '20px',
    height: '100%',
    transition: 'all 0.3s ease'
  }}>
    <div style={{ 
      width: '48px', height: '48px', borderRadius: '12px', 
      background: 'rgba(29, 78, 216, 0.1)', color: 'var(--primary)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      marginBottom: '1.5rem'
    }}>
      <Icon size={24} />
    </div>
    <h3 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '1rem', color: 'var(--text)' }}>{title}</h3>
    <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: 1.6, margin: 0 }}>{desc}</p>
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
          {/* Background Image with Mask */}
          <div className="hero-img-blend" style={{
            position: "absolute", top: 0, right: 0,
            width: "65%", height: "100%", zIndex: 0,
            opacity: 0.25, pointerEvents: "none"
          }}>
            <Image 
              src="/images/it-software.png" 
              alt="" fill className="object-cover"
              style={{
                maskImage: "radial-gradient(circle at right, black, transparent 85%)",
                WebkitMaskImage: "radial-gradient(circle at right, black, transparent 85%)"
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
                <Settings size={14} /> Zoho Solutions
              </div>

              <h1 className="hero-h1" style={{ 
                fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 900, 
                lineHeight: 1.15, marginBottom: "2rem", letterSpacing: "-0.02em" 
              }}>
                Zoho Partners Australia: <br />
                Unlocking the Power of <span style={{ color: "var(--primary)" }}>Zoho</span>
              </h1>

              <div className="hero-meta" style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "2rem", color: "var(--text-muted)", fontSize: "0.95rem", fontWeight: 600 }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                  <div style={{ width: "40px", height: "40px", borderRadius: "12px", background: "var(--primary)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff" }}>
                    <User size={18} />
                  </div>
                  <span style={{ color: "var(--text)" }}>FI Digital Consulting</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}><Calendar size={18} opacity={0.6} /> April 21, 2026</div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}><Clock size={18} opacity={0.6} /> 8 min read</div>
              </div>
            </div>
          </div>
        </section>

        {/* ══ ARTICLE CONTENT ═══════════════════════════════════════════════ */}
        <section style={{ padding: "80px 1.5rem 120px", background: "var(--bg-secondary)" }}>
          <div className="container" style={{ maxWidth: "900px" }}>
            
            <article className="article-body" style={{ fontSize: "1.15rem", lineHeight: 1.8, color: "var(--text)" }}>
              
              <div className="reveal" style={{ marginBottom: "4rem" }}>
                <p style={{ fontSize: "1.25rem", fontWeight: 500, marginBottom: "2rem" }}>
                  Zoho is a cloud-based software suite that offers a wide range of applications and services for businesses of all sizes. From customer relationship management (CRM) to accounting, marketing automation, and project management, Zoho provides an all-in-one platform to streamline business operations and drive growth.
                </p>
                <p>
                  As FI Digital – Zoho Partners Australia, we’ve had the privilege of working with businesses across various industries, helping them harness the power of Zoho to achieve their goals. In this blog post, we’ll explore the benefits of Zoho and why partnering with a Zoho expert can be a game-changer for your business.
                </p>
              </div>

              {/* SECTION: The Benefits of Zoho */}
              <div className="reveal" style={{ margin: "5rem 0" }}>
                <h2 style={{ fontSize: "2.25rem", fontWeight: 900, marginBottom: "1rem" }}>The Benefits of Zoho</h2>
                <p style={{ marginBottom: "3rem" }}>Zoho is an all-in-one suite of applications designed to help businesses manage their day-to-day operations more efficiently.</p>
                
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))', gap: '1.5rem' }}>
                  <FeatureCard 
                    icon={TrendingUp} 
                    title="Streamlined Business Operations" 
                    desc="Manage multiple functions from a single platform, eliminating the need for separate tools. Simplify processes and save time for what matters most." 
                  />
                  <FeatureCard 
                    icon={Users} 
                    title="Improved CRM" 
                    desc="Unified view of customer data across all channels. Provide personalized experiences and track interactions effectively to boost retention." 
                  />
                  <FeatureCard 
                    icon={Globe} 
                    title="Enhanced Collaboration" 
                    desc="Teams work together effortlessly, regardless of location. Improve productivity and enable faster decision-making with integrated communication tools." 
                  />
                  <FeatureCard 
                    icon={Zap} 
                    title="Increased Efficiency" 
                    desc="Automate repetitive tasks and free up time for strategic work. Achieve more with less effort through intelligent automation." 
                  />
                  <FeatureCard 
                    icon={ShieldCheck} 
                    title="Cost-Effective & Scalable" 
                    desc="Flexible pricing plans that grow with you. Pay only for what you use with one of the most scalable software suites on the market." 
                  />
                </div>
              </div>

              {/* SECTION: Why Partner with an Expert */}
              <div className="reveal" style={{ margin: "5rem 0" }}>
                <h2 style={{ fontSize: "2.25rem", fontWeight: 900, marginBottom: "1.5rem" }}>Why Partner with a Zoho Expert?</h2>
                <p style={{ marginBottom: "3rem" }}>While Zoho offers a range of benefits, partnering with FI Digital – Zoho Partners Australia helps you unlock its full potential.</p>

                <div style={{ display: 'grid', gap: '1.5rem' }}>
                  {[
                    { t: "Expertise and Experience", d: "In-depth knowledge of the platform to guide your customization and maximize your ROI." },
                    { t: "Customization and Integration", d: "Seamlessly connect Zoho with your existing tools and build bespoke workflows that fit your business perfectly." },
                    { t: "Training and Support", d: "Ensure your team is using the platform effectively with hands-on training and ongoing advisory." },
                    { t: "Improved ROI", d: "Identify hidden opportunities for automation and cost reduction that internal teams often miss." },
                    { t: "Scalability and Growth", d: "As your business evolves, we ensure your platform architecture evolves with it, preventing technical debt." }
                  ].map((item, i) => (
                    <div key={i} style={{ display: 'flex', gap: '1.5rem', padding: '1.5rem', background: 'var(--bg)', borderRadius: '16px', border: '1px solid var(--border)' }}>
                      <div style={{ color: 'var(--primary)', marginTop: '0.2rem' }}><CheckCircle2 size={24} /></div>
                      <div>
                        <h4 style={{ fontWeight: 800, fontSize: '1.1rem', marginBottom: '0.4rem', color: 'var(--text)' }}>{item.t}</h4>
                        <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', margin: 0 }}>{item.d}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* SECTION: FI Digital - Zoho Partners Australia */}
              <div className="reveal" style={{ margin: "5rem 0", padding: '4rem 3.5rem', background: 'var(--footer-bg)', borderRadius: '32px', color: '#fff', border: '1px solid var(--footer-border)' }}>
                <h2 style={{ fontSize: "2rem", fontWeight: 900, marginBottom: "1.5rem", color: '#fff' }}>Impact Stories</h2>
                <p style={{ marginBottom: "3rem", color: 'rgba(255,255,255,0.7)' }}>Here are some examples of how we have helped our clients leverage the Zoho ecosystem:</p>

                <div style={{ display: 'grid', gap: '2rem' }}>
                  {[
                    "Customer Experience Transformation for Financial Services Company",
                    "Streamlined Operations for a Manufacturing Company",
                    "Established customer support channel for ASX listed Logistics company",
                    "Implemented Zoho HRMS solution for a workforce of over 1000 in a Logistics company",
                    "Developed Car auto parts ordering system for European Car manufacturers in NZ"
                  ].map((story, i) => (
                    <div key={i} style={{ display: 'flex', gap: '1rem', alignItems: 'center', paddingBottom: '1rem', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                      <div style={{ color: 'var(--primary)', fontWeight: 900, fontSize: '1.25rem' }}>0{i+1}</div>
                      <div style={{ fontWeight: 600, color: '#fff' }}>{story}</div>
                    </div>
                  ))}
                </div>
              </div>

              <p className="reveal" style={{ fontSize: '1.25rem', fontWeight: 600, textAlign: 'center', lineHeight: 1.6, marginTop: '4rem' }}>
                Ready to transform your business with Zoho? <br />
                <span style={{ color: 'var(--primary)' }}>Let's build your unified operations platform together.</span>
              </p>

            </article>

            {/* SHARE & AUTHOR SECTION */}
            <div className="reveal" style={{ marginTop: '6rem', paddingTop: '4rem', borderTop: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '60px', height: '60px', borderRadius: '16px', background: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
                  <User size={28} />
                </div>
                <div>
                  <div style={{ fontWeight: 900, fontSize: '1.1rem' }}>Zoho Consulting Team</div>
                  <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>FI Digital Australia · Partners</div>
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
                <h2 style={{ fontSize: '2rem', fontWeight: 900, marginBottom: '0.5rem' }}>Continue Reading</h2>
                <p style={{ color: 'var(--text-muted)', fontWeight: 500 }}>Explore more insights from our experts.</p>
              </div>
              <Link href="/blog" style={{ color: 'var(--primary)', fontWeight: 800, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                View All <ArrowUpRight size={18} />
              </Link>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
              {[
                {
                  title: "Scaling Trust, Time, and Talent: Responsible AI as Australia’s Productivity Game-Changer",
                  cat: "AI & Productivity",
                  slug: "scaling-trust-time-and-talent-responsible-ai-as-australias-productivity-game-changer",
                  time: "12 min"
                },
                {
                  title: "Modernising Legacy Systems: A Strategic Guide for 2026",
                  cat: "Business Systems",
                  slug: "modernising-legacy-systems-strategic-guide",
                  time: "10 min"
                }
              ].map((post, i) => (
                <Link key={i} href={`/${post.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                  <div style={{ 
                    padding: '2rem', background: 'var(--bg)', borderRadius: '20px', 
                    border: '1px solid var(--border)', height: '100%',
                    transition: 'all 0.3s ease'
                  }} className="related-card">
                    <div style={{ color: 'var(--primary)', fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', marginBottom: '1rem', letterSpacing: '0.05em' }}>
                      {post.cat}
                    </div>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '1.5rem', lineHeight: 1.4 }}>{post.title}</h3>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 'auto' }}>
                      <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 600 }}>{post.time} read</span>
                      <div style={{ color: 'var(--primary)' }}><ArrowRight size={20} /></div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ══ NEXT STEPS ════════════════════════════════════════════════════ */}
        <section style={{ padding: '80px 1.5rem', background: 'var(--bg)', textAlign: 'center', borderTop: '1px solid var(--border)' }}>
          <div className="container">
            <h2 style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: '1.5rem' }}>Start Your Zoho Journey</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem' }}>
              Connect with our Zoho specialists to discuss how we can streamline your operations.
            </p>
            <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/book-discovery" style={{ background: 'var(--primary)', color: '#fff', padding: '1.2rem 3rem', borderRadius: '100px', fontWeight: 900, textDecoration: 'none' }}>
                Book a Free Discovery Session
              </Link>
              <a href="mailto:support@fidigital.com.au" style={{ background: 'var(--bg)', color: 'var(--text)', border: '1px solid var(--border)', padding: '1.2rem 3rem', borderRadius: '100px', fontWeight: 900, textDecoration: 'none' }}>
                Email Our Team
              </a>
            </div>
          </div>
        </section>

      </main>

      <style jsx>{`
        @media (max-width: 768px) {
          .help-row { grid-template-columns: 1fr !important; gap: 0.5rem !important; padding: 1.5rem 0 !important; }
          .help-row div:last-child { text-align: left !important; margin-top: 0.5rem; }
        }
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
