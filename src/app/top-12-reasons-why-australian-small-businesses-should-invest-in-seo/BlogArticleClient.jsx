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
  BarChart3, Globe, AlertCircle, Smartphone, MapPin, Share2
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const ReasonItem = ({ num, title, desc, icon: Icon }) => (
  <div className="reveal" style={{ 
    display: 'flex', gap: '1.5rem', marginBottom: '2.5rem', 
    padding: '2rem', background: 'var(--bg)', border: '1px solid var(--border)',
    borderRadius: '24px', transition: 'all 0.3s ease'
  }}>
    <div style={{ 
      width: '50px', height: '50px', borderRadius: '14px', 
      background: 'rgba(29, 78, 216, 0.1)', color: 'var(--primary)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      flexShrink: 0, fontWeight: 900
    }}>
      {Icon ? <Icon size={24} /> : num}
    </div>
    <div>
      <h3 style={{ fontSize: '1.3rem', fontWeight: 900, marginBottom: '0.75rem', color: 'var(--text)' }}>{title}</h3>
      <p style={{ fontSize: '1rem', color: 'var(--text-muted)', lineHeight: 1.6, margin: 0 }}>{desc}</p>
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
                <Search size={14} /> SEO & Growth
              </div>

              <h1 className="hero-h1" style={{ 
                fontSize: "clamp(2.5rem, 6vw, 4.5rem)", fontWeight: 900,
                lineHeight: 1.1, marginBottom: "2rem", letterSpacing: "-0.03em"
              }}>
                Top 12 Reasons Why Australian <br />
                Small Businesses Should <span style={{ color: "var(--primary)" }}>Invest in SEO</span>
              </h1>

              <div className="hero-meta" style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "2rem", color: "var(--text-muted)", fontSize: "0.95rem", fontWeight: 600 }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                  <div style={{ width: "40px", height: "40px", borderRadius: "12px", background: "var(--primary)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff" }}>
                    <User size={18} />
                  </div>
                  <span style={{ color: "var(--text)" }}>SEO Strategy Team</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}><Calendar size={18} opacity={0.6} /> April 21, 2026</div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}><Clock size={18} opacity={0.6} /> 10 min read</div>
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
                  Who does not like to see their business grow? We are one of the best SEO agencies in Melbourne, helping businesses grow in the right direction. Search engine optimization is an influential way to generate traffic to your website without spending too much on individual leads.
                </p>
              </div>

              <div className="reveal" style={{ marginTop: '4rem' }}>
                <h2 style={{ fontSize: "2.2rem", fontWeight: 900, color: "var(--text)", marginBottom: "2rem" }}>Why Invest in SEO?</h2>
                
                <div style={{ display: 'grid', gap: '1rem' }}>
                  <ReasonItem num="01" title="SEO is an Investment, Not a Cost" desc="Applied correctly, it delivers massive traffic. It is a long-term asset that fetches amazing returns compared to paid media overhead." icon={TrendingUp} />
                  <ReasonItem num="02" title="Impacts the Buying Cycle" desc="Directs potential customers to your product at the exact moment they are searching for solutions, increasing conversion probability." icon={Target} />
                  <ReasonItem num="03" title="Cost-Effective Scaling" desc="Relative to advertising or social programs, SEO fetches superior ROI by generating organic leads that don't stop when the budget does." icon={BarChart3} />
                  <ReasonItem num="04" title="SEO Still Works" desc="As long as search engines exist, SEO remains the most relevant way to connect intent with information." icon={Zap} />
                  <ReasonItem num="05" title="Top Source for Lead Generation" desc="Most consumers research products online before buying. High visibility translates directly into a robust lead pipeline." icon={Lightbulb} />
                  <ReasonItem num="06" title="Accelerated Brand Building" desc="Consistent visibility on page one builds trust and familiarity, making your brand recognizable and authoritative." icon={ShieldCheck} />
                  <ReasonItem num="07" title="Powers Social Media" desc="Optimized meta tags and titles ensure your content looks professional and clickable when shared across social networks." icon={Share2} />
                  <ReasonItem num="08" title="Stay Ahead of Competitors" desc="If you aren't optimizing, your competitors are. Constant improvement is required to maintain market share." icon={Globe} />
                  <ReasonItem num="09" title="Mobile Technology Shift" desc="With Google's mobile-first indexing, SEO ensures your site is ready for the majority of users on mobile devices." icon={Smartphone} />
                  <ReasonItem num="10" title="Dominating Local Search" desc="Crucial for physical businesses. Local SEO ensures you are the first choice for nearby customers." icon={MapPin} />
                  <ReasonItem num="11" title="Omni-Channel Content Health" desc="SEO principles apply to Facebook, YouTube, and Amazon. A healthy profile improves ranking across all digital platforms." icon={Layout} />
                  <ReasonItem num="12" title="Drives Offline Sales" desc="Customers research online before visiting stores. SEO ensures your physical storefront is discovered digitally." icon={ArrowUpRight} />
                </div>
              </div>

              <div className="reveal" style={{ marginTop: '5rem', borderTop: '1px solid var(--border)', paddingTop: '4rem' }}>
                <h2 style={{ fontSize: "2.2rem", fontWeight: 900, color: "var(--text)", marginBottom: "1.5rem" }}>The Verdict for Small Businesses</h2>
                <p>
                  Most small businesses do not have an extensive budget for marketing. So, they should plan to invest in such a marketing mix that gives you a better ROI. After going through the benefits of implementing SEO, you cannot afford not to invest in SEO.
                </p>
                <p>
                  If you are looking for an affordable SEO agency in Melbourne, we are here to help you grow your business in the right direction.
                </p>
              </div>

            </article>

            {/* SIDEBAR */}
            <aside>
              <div style={{ position: 'sticky', top: '120px', display: 'grid', gap: '2.5rem' }}>
                
                {/* QUICK FACTS */}
                <div className="reveal" style={{ padding: '2rem', background: 'var(--bg-secondary)', borderRadius: '24px', border: '1px solid var(--border)' }}>
                  <h4 style={{ fontSize: '1.1rem', fontWeight: 900, marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <AlertCircle size={20} color="var(--primary)" /> SEO Value
                  </h4>
                  <div style={{ display: 'grid', gap: '1.5rem' }}>
                    <div>
                      <div style={{ fontSize: '1.8rem', fontWeight: 900, color: 'var(--primary)' }}>#1</div>
                      <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 600 }}>Source for new business leads</div>
                    </div>
                    <div>
                      <div style={{ fontSize: '1.8rem', fontWeight: 900, color: 'var(--primary)' }}>24/7</div>
                      <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 600 }}>Active marketing for your brand</div>
                    </div>
                  </div>
                </div>

                {/* CALL TO ACTION */}
                <div className="reveal" style={{ padding: '2rem', background: 'var(--primary)', borderRadius: '24px', color: '#fff', textAlign: 'center' }}>
                  <TrendingUp size={40} style={{ marginBottom: '1.5rem', opacity: 0.8 }} />
                  <h4 style={{ fontSize: '1.3rem', fontWeight: 900, marginBottom: '1rem' }}>Rank Higher Today</h4>
                  <p style={{ fontSize: '0.95rem', marginBottom: '2rem', opacity: 0.9 }}>
                    Let's audit your site and find your missing traffic.
                  </p>
                  <Link href="/contact" style={{ display: 'block', background: '#fff', color: 'var(--primary)', padding: '1rem', borderRadius: '12px', fontWeight: 900, textDecoration: 'none' }}>
                    Free SEO Audit
                  </Link>
                </div>

              </div>
            </aside>

          </div>
        </section>

        {/* ══ AUTHOR SECTION ══════════════════════════════════════════════════ */}
        <section style={{ padding: '40px 1.5rem 100px' }}>
          <div className="container" style={{ maxWidth: '1200px' }}>
            <div className="reveal" style={{ borderTop: '1px solid var(--border)', paddingTop: '4rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '60px', height: '60px', borderRadius: '16px', background: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
                  <Search size={28} />
                </div>
                <div>
                  <div style={{ fontWeight: 900, fontSize: '1.1rem' }}>SEO Strategy Team</div>
                  <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>FI Digital Melbourne · Growth Engineers</div>
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
                <h2 style={{ fontSize: '2rem', fontWeight: 900, marginBottom: '0.5rem' }}>Related Insights</h2>
                <p style={{ color: 'var(--text-muted)', fontWeight: 500 }}>More ways to scale your Australian business.</p>
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
