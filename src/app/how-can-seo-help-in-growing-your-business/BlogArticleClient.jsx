"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  Calendar, Clock, User, 
  ChevronRight, Quote, CheckCircle2,
  Lightbulb, TrendingUp, ShieldCheck, Zap,
  ArrowUpRight, ArrowRight, BarChart, Globe, Monitor, MapPin, Search,
  MousePointer2, Smartphone, Target
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const FeatureCard = ({ icon: Icon, title, desc }) => (
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
              <div className="hero-badge-branded" style={{ 
                display: "inline-flex", alignItems: "center", gap: "0.5rem",
                background: "rgba(29, 78, 216, 0.08)", color: "var(--primary)",
                padding: "0.5rem 1rem", borderRadius: "100px",
                fontWeight: 800, fontSize: "0.75rem", textTransform: "uppercase",
                letterSpacing: "0.1em", marginBottom: "1.5rem",
                border: "1px solid rgba(29, 78, 216, 0.2)"
              }}>
                <TrendingUp size={14} /> Business Growth
              </div>

              <h1 className="hero-h1" style={{ 
                fontSize: "clamp(2.2rem, 6vw, 4rem)", fontWeight: 900, 
                lineHeight: 1.1, marginBottom: "2rem", letterSpacing: "-0.03em" 
              }}>
                How Can <span style={{ color: "var(--primary)" }}>SEO Help</span> in <br />
                Growing Your Business?
              </h1>

              <div className="hero-meta" style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "2rem", color: "var(--text-muted)", fontSize: "0.95rem", fontWeight: 600 }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                  <div style={{ width: "40px", height: "40px", borderRadius: "12px", background: "var(--primary)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff" }}>
                    <User size={18} />
                  </div>
                  <span style={{ color: "var(--text)" }}>FI Digital SEO Team</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}><Calendar size={18} opacity={0.6} /> April 21, 2026</div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}><Clock size={18} opacity={0.6} /> 7 min read</div>
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
                  Melbourne is a bustling city of opportunities and a perfect environment to start your business. However, it is also essential to stand out in the crowd.
                </p>
                <p>
                  Search Engine Optimization (SEO) remains the most favoured strategy among companies to increase sales revenue. By aligning your website with the Google algorithm, you generate higher quality leads and capture organic traffic that is already searching for your services.
                </p>
              </div>

              {/* SECTION: The SEO Advantage */}
              <div className="reveal" style={{ margin: "5rem 0" }}>
                <h2 style={{ fontSize: "2.5rem", fontWeight: 900, marginBottom: "3rem", letterSpacing: "-0.02em" }}>The Melbourne SEO Advantage</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '2rem' }} className="responsive-grid">
                  <FeatureCard 
                    icon={Target}
                    title="Choosing the Right Keywords"
                    desc="Keywords are the bridge between your business and your customers. We analyse your website and products to select exact-match keywords that put your local business at the top of Google rankings."
                  />
                  <FeatureCard 
                    icon={MousePointer2}
                    title="The Accessibility Factor"
                    desc="Modern SEO is about UX. We make your website user-friendly, ensuring customers can find products quickly. Proper functionality and accessibility are direct drivers of increased revenue."
                  />
                  <FeatureCard 
                    icon={MapPin}
                    title="Geographical Precision"
                    desc="Local businesses need region-specific leads. We target customers in Melbourne looking for your specific products, driving high-intent traffic directly to your digital doorstep."
                  />
                  <FeatureCard 
                    icon={Smartphone}
                    title="Cross-Screen Visibility"
                    desc="We ensure your brand is visible on any screen, irrespective of size. With mobile-first indexing, having a responsive site that ranks high is no longer optional—it's essential."
                  />
                </div>
              </div>

              <div className="reveal" style={{ margin: "6rem 0", padding: '4rem', background: 'var(--bg)', borderRadius: '32px', border: '1px solid var(--border)', textAlign: 'center' }}>
                <h2 style={{ fontSize: "2.25rem", fontWeight: 900, marginBottom: "1.5rem" }}>Generating Organic ROI</h2>
                <p style={{ maxWidth: '700px', margin: '0 auto 3rem', color: 'var(--text-muted)' }}>
                  The primary function of our SEO experts is to place your business in the top places of Google rankings. As people tend to click the first few results, being on top is the difference between a lead and a lost opportunity.
                </p>
                <div style={{ display: 'inline-flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                  <div style={{ padding: '1rem 2rem', background: 'rgba(29,78,216,0.1)', color: 'var(--primary)', borderRadius: '12px', fontWeight: 800 }}>Lead Generation</div>
                  <div style={{ padding: '1rem 2rem', background: 'rgba(29,78,216,0.1)', color: 'var(--primary)', borderRadius: '12px', fontWeight: 800 }}>Brand Authority</div>
                  <div style={{ padding: '1rem 2rem', background: 'rgba(29,78,216,0.1)', color: 'var(--primary)', borderRadius: '12px', fontWeight: 800 }}>Conversion Optimization</div>
                </div>
              </div>

              <div className="reveal" style={{ textAlign: 'center', marginTop: '6rem' }}>
                <p style={{ fontSize: '1.4rem', fontWeight: 600, maxWidth: '700px', margin: '0 auto 3rem' }}>
                  Ready to increase your business revenue with professional SEO?
                </p>
                <Link href="/book-discovery" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', background: 'var(--primary)', color: '#fff', padding: '1.2rem 3.5rem', borderRadius: '100px', fontWeight: 900, textDecoration: 'none', transition: 'transform 0.3s ease' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                  Book a Free SEO Strategy Session <ArrowRight size={20} />
                </Link>
              </div>

            </article>

            {/* AUTHOR SECTION */}
            <div className="reveal" style={{ marginTop: '8rem', paddingTop: '4rem', borderTop: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '60px', height: '60px', borderRadius: '16px', background: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
                  <TrendingUp size={28} />
                </div>
                <div>
                  <div style={{ fontWeight: 900, fontSize: '1.1rem' }}>Growth Strategy Team</div>
                  <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>FI Digital Melbourne · SEO Partners</div>
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
                <h2 style={{ fontSize: '2rem', fontWeight: 900, marginBottom: '0.5rem' }}>Continue Reading</h2>
                <p style={{ color: 'var(--text-muted)', fontWeight: 500 }}>More strategies for digital growth.</p>
              </div>
              <Link href="/blog" style={{ color: 'var(--primary)', fontWeight: 800, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                View All <ArrowUpRight size={18} />
              </Link>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
              {[
                {
                  title: "SEO Melbourne Expert Advice For Blog Post Writing Fundamentals",
                  cat: "SEO & Strategy",
                  slug: "seo-melbourne-expert-advice-for-blog-post-writing-fundamentals-2"
                },
                {
                  title: "Questions To Ask Your Potential SEO Agency",
                  cat: "SEO & Strategy",
                  slug: "questions-to-ask-your-potential-seo-agency"
                },
                {
                  title: "Psychology of UX: Understanding the Human Mind",
                  cat: "UX Design",
                  slug: "understanding-the-psychology-of-human-mind-of-user-experience"
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
