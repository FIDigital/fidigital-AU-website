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
  BarChart3, Globe, AlertCircle, HelpCircle,
  ThumbsUp, HelpCircle as HelpIcon, DollarSign, Headset
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const TipSection = ({ title, desc, icon: Icon }) => (
  <div className="reveal" style={{ marginBottom: '4rem' }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
       <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(29, 78, 216, 0.1)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Icon size={24} />
       </div>
       <h2 style={{ fontSize: "1.8rem", fontWeight: 900, color: "var(--text)", margin: 0 }}>{title}</h2>
    </div>
    <div style={{ paddingLeft: '4rem' }}>
      <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--text-muted)' }}>{desc}</p>
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
                <HelpCircle size={14} /> Expert Advice
              </div>

              <h1 className="hero-h1" style={{ 
                fontSize: "clamp(2.5rem, 6vw, 4rem)", fontWeight: 900,
                lineHeight: 1.1, marginBottom: "2rem", letterSpacing: "-0.03em"
              }}>
                Choosing an <span style={{ color: "var(--primary)" }}>SEO Company</span>: <br />
                Essential Tips for Melbourne Business Owners
              </h1>

              <div className="hero-meta" style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "2rem", color: "var(--text-muted)", fontSize: "0.95rem", fontWeight: 600 }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                  <div style={{ width: "40px", height: "40px", borderRadius: "12px", background: "var(--primary)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff" }}>
                    <User size={18} />
                  </div>
                  <span style={{ color: "var(--text)" }}>FI Strategy Team</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}><Calendar size={18} opacity={0.6} /> April 21, 2026</div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}><Clock size={18} opacity={0.6} /> 7 min read</div>
              </div>
            </div>
          </div>
        </section>

        {/* ══ ARTICLE BODY ══════════════════════════════════════════════════ */}
        <section style={{ padding: "80px 1.5rem", position: "relative" }}>
          <div className="container" style={{ maxWidth: "1200px", display: "grid", gridTemplateColumns: "1fr 350px", gap: "5rem" }}>
            
            <article>
              <div className="reveal">
                <p style={{ fontSize: "1.25rem", color: "var(--text)", fontWeight: 500, marginBottom: "3rem", lineHeight: 1.7 }}>
                  SEO is a massive field, and if you want to harness the fantastic potential of the online marketplace, you will need to use SEO to ensure that your website is visible. Choosing the right Melbourne SEO experts is the first and most critical step in your digital journey.
                </p>
              </div>

              <div style={{ marginTop: '4rem' }}>
                <TipSection 
                  title="Understand Your Goals" 
                  icon={Target}
                  desc="Before you engage any experts, know what you want to achieve. 'More traffic' is vague. Think specifically about revenue boosts, subscriber growth, or positive brand reviews. Clear objectives help you find the partner best suited to meet them."
                />
                <TipSection 
                  title="Get Recommendations" 
                  icon={ThumbsUp}
                  desc="Melbourne offers numerous choices. Reach out to your network for reviews of agencies they've used. If recommendations aren't available, research your shortlist carefully. Watch for 'red flags' like outlandish claims—reputable agencies provide realistic assurances."
                />
                <TipSection 
                  title="Ask Plenty of Questions" 
                  icon={HelpIcon}
                  desc="Once you have a shortlist, prepare for a deep dive. Ask about their strategies, monitoring processes, and how they report metrics. Transparency in methodology is a hallmark of a professional SEO provider."
                />
              </div>

              <div className="reveal" style={{ marginTop: '2rem', padding: '3rem', background: 'var(--bg-secondary)', borderRadius: '32px', border: '1px solid var(--border)' }}>
                 <h2 style={{ fontSize: "1.8rem", fontWeight: 900, marginBottom: "1.5rem", color: 'var(--text)' }}>Critical Success Factors</h2>
                 <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }} className="responsive-grid">
                    <div>
                       <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--primary)', fontWeight: 800, marginBottom: '0.5rem' }}>
                          <DollarSign size={20} /> Transparent Budgeting
                       </div>
                       <p style={{ fontSize: '0.95rem', margin: 0, color: 'var(--text-muted)' }}>Budget shouldn't be the only factor, but transparency is key. Look for customized pricing tailored to your project requirements.</p>
                    </div>
                    <div>
                       <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--primary)', fontWeight: 800, marginBottom: '0.5rem' }}>
                          <Headset size={20} /> Customer Care
                       </div>
                       <p style={{ fontSize: '0.95rem', margin: 0, color: 'var(--text-muted)' }}>Judge how a company handles initial queries. If they aren't responsive when courting your business, they won't be responsive later.</p>
                    </div>
                 </div>
              </div>

              <div className="reveal" style={{ marginTop: '5rem', borderTop: '1px solid var(--border)', paddingTop: '4rem' }}>
                <h2 style={{ fontSize: "2.2rem", fontWeight: 900, color: "var(--text)", marginBottom: "1.5rem" }}>Partner with FI Digital</h2>
                <p style={{ marginBottom: '2rem' }}>
                  If you are looking for help with your SEO, Melbourne based FI Digital is ready to help. We are local experts with deep experience in all aspects of Melbourne search optimization.
                </p>
                <div style={{ padding: '2rem', background: 'rgba(29, 78, 216, 0.05)', borderRadius: '20px', border: '1px solid rgba(29, 78, 216, 0.1)' }}>
                   <p style={{ fontWeight: 700, color: 'var(--text)', margin: 0 }}>
                      Our team is on hand to answer any questions you have—whether you're boosting visibility or planning an extensive marketing campaign.
                   </p>
                </div>
              </div>

            </article>

            {/* SIDEBAR */}
            <aside>
              <div style={{ position: 'sticky', top: '120px', display: 'grid', gap: '2.5rem' }}>
                
                {/* CHECKLIST */}
                <div className="reveal" style={{ padding: '2rem', background: 'var(--bg-secondary)', borderRadius: '24px', border: '1px solid var(--border)' }}>
                  <h4 style={{ fontSize: '1.1rem', fontWeight: 900, marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <ShieldCheck size={20} color="var(--primary)" /> Red Flags
                  </h4>
                  <div style={{ display: 'grid', gap: '1rem' }}>
                    {[
                      "Guaranteed #1 rankings",
                      "Lack of reporting clarity",
                      "Cheap, generic packages",
                      "Opaque strategies"
                    ].map((item, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.85rem', fontWeight: 700 }}>
                        <AlertCircle size={14} color="#ef4444" /> {item}
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="reveal" style={{ padding: '2rem', background: 'var(--primary)', borderRadius: '24px', color: '#fff', textAlign: 'center' }}>
                  <Sparkles size={40} style={{ marginBottom: '1.5rem', opacity: 0.8 }} />
                  <h4 style={{ fontSize: '1.3rem', fontWeight: 900, marginBottom: '1rem' }}>Ready to Scale?</h4>
                  <p style={{ fontSize: '0.95rem', marginBottom: '2rem', opacity: 0.9 }}>
                    Speak to our Melbourne SEO experts for a transparent roadmap.
                  </p>
                  <Link href="/contact" style={{ display: 'block', background: '#fff', color: 'var(--primary)', padding: '1rem', borderRadius: '12px', fontWeight: 900, textDecoration: 'none' }}>
                    Contact FI Digital
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
                <p style={{ color: 'var(--text-muted)', fontWeight: 500 }}>More advice for Melbourne business owners.</p>
              </div>
              <Link href="/blog" style={{ color: 'var(--primary)', fontWeight: 800, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                All Blogs <ArrowUpRight size={18} />
              </Link>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
              {[
                {
                  title: "Questions To Ask Your Potential SEO Agency",
                  cat: "SEO & Strategy",
                  slug: "questions-to-ask-your-potential-seo-agency"
                },
                {
                  title: "Targeting Local Audience with Melbourne SEO",
                  cat: "Local SEO",
                  slug: "how-can-seo-agency-help-in-optimizing-your-website-to-target-local-audience"
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
