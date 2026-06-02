"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  Calendar, Clock, User, 
  ChevronRight, Quote, CheckCircle2,
  Lightbulb, TrendingUp, ShieldCheck, Zap,
  ArrowUpRight, ArrowRight, BarChart, Database,
  Search, Target, LineChart, PieChart, Layers, 
  Settings, MessageSquare, Globe, AlertCircle
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const StepCard = ({ num, title, desc }) => (
  <div className="reveal" style={{ 
    padding: '2.5rem', 
    background: 'var(--bg)', 
    border: '1px solid var(--border)', 
    borderRadius: '24px',
    height: '100%',
    position: 'relative',
    overflow: 'hidden',
    transition: 'all 0.3s ease'
  }}>
    <div style={{ 
      position: 'absolute', top: '-10px', right: '20px', 
      fontSize: '5rem', fontWeight: 900, color: 'var(--primary)', 
      opacity: 0.05, zIndex: 0 
    }}>
      {num}
    </div>
    <div style={{ position: 'relative', zIndex: 1 }}>
      <div style={{ color: 'var(--primary)', fontWeight: 900, fontSize: '0.9rem', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Step {num}</div>
      <h3 style={{ fontSize: '1.4rem', fontWeight: 900, marginBottom: '1rem', color: 'var(--text)' }}>{title}</h3>
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
              src="/images/data-platforms.png" 
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
                <Database size={14} /> Data & Analytics
              </div>

              <h1 className="hero-h1" style={{ 
                fontSize: "clamp(2.2rem, 6vw, 4rem)", fontWeight: 900,
                lineHeight: 1.1, marginBottom: "2rem", letterSpacing: "-0.03em"
              }}>
                Data Analytics: The Future of <br />
                <span style={{ color: "var(--primary)" }}>Data-Driven</span> Decision Making
              </h1>

              <div className="hero-meta" style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "2rem", color: "var(--text-muted)", fontSize: "0.95rem", fontWeight: 600 }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                  <div style={{ width: "40px", height: "40px", borderRadius: "12px", background: "var(--primary)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff" }}>
                    <User size={18} />
                  </div>
                  <span style={{ color: "var(--text)" }}>Data Strategy Team</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}><Calendar size={18} opacity={0.6} /> April 21, 2026</div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}><Clock size={18} opacity={0.6} /> 12 min read</div>
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
                  Data should be the heart of any strategic decision we make in the business irrespective of the type or size of the organization. If you are looking for answers to the key questions like how to increase consumer satisfaction, what is my conversion rates etc. then data can only provide you the relevant insight for the same.
                </p>
                <div style={{ padding: '2rem', background: 'var(--bg-secondary)', borderLeft: '4px solid var(--primary)', borderRadius: '0 20px 20px 0', marginBottom: '3rem' }}>
                   <p style={{ fontStyle: 'italic', margin: 0, color: 'var(--text)' }}>
                     "Data leads into insights; business owners can use those insights to take decisions and formulate strategies that lead their business to success."
                   </p>
                </div>
              </div>

              <div className="reveal" style={{ marginTop: '4rem' }}>
                <h2 style={{ fontSize: "2.2rem", fontWeight: 900, color: "var(--text)", marginBottom: "1.5rem" }}>The Core Challenge</h2>
                <p>
                  In the fast-paced world nowadays, the companies that can make quick decisions are more likely to succeed than others. Making a decision is no easy job. You need to frame your questions correctly, and then find right data to support for analysis in a transparent and repeatable manner. The decision-making becomes more complex as your business expands and enters new markets.
                </p>
                <p>
                  As per a survey conducted by EY, <strong>81% of senior executives</strong> believed that they need to improve their decision-making speed and level of insight to succeed. Most respondents found that their employees are spending too much time in making decisions based on intuition and focusing on irrelevant details instead of correct data.
                </p>
              </div>

              <div className="reveal" style={{ marginTop: '4rem', padding: '3rem', background: 'var(--footer-bg)', borderRadius: '32px', color: '#fff', border: '1px solid var(--footer-border)' }}>
                <h2 style={{ fontSize: "1.8rem", fontWeight: 900, marginBottom: "1.5rem", color: '#fff' }}>How Driven Insights Change Business</h2>
                <div style={{ display: 'grid', gap: '2rem' }}>
                   <div>
                     <h3 style={{ color: 'var(--primary)', fontWeight: 800, fontSize: '1.2rem', marginBottom: '0.5rem' }}>Efficiency & Cost Optimization</h3>
                     <p style={{ margin: 0, opacity: 0.8 }}>Identify opportunities for cost savings and potential operational efficiencies. Modernizing information systems can reduce IT costs by 20-30 times compared to traditional warehousing.</p>
                   </div>
                   <div>
                     <h3 style={{ color: 'var(--primary)', fontWeight: 800, fontSize: '1.2rem', marginBottom: '0.5rem' }}>Growth of Existing Streams</h3>
                     <p style={{ margin: 0, opacity: 0.8 }}>Introduce new offers through better understanding of consumer behavior. Aggregating relevant customer data allows for innovatively personalizing digital experiences.</p>
                   </div>
                   <div>
                     <h3 style={{ color: 'var(--primary)', fontWeight: 800, fontSize: '1.2rem', marginBottom: '0.5rem' }}>Unlocking New Data Streams</h3>
                     <p style={{ margin: 0, opacity: 0.8 }}>Expand traditional boundaries with geo-located marketing and servicing offers. Use analytics to enter entirely new markets with validated products.</p>
                   </div>
                </div>
              </div>

              <div className="reveal" style={{ marginTop: '5rem' }}>
                <h2 style={{ fontSize: "2.2rem", fontWeight: 900, color: "var(--text)", marginBottom: "2rem" }}>A 10-Step Implementation Framework</h2>
                <p style={{ marginBottom: '3rem' }}>
                  Successfully integrating data analytics into your decision-making process requires a systematic approach. Follow these 10 steps to transform raw data into actionable intelligence:
                </p>
                
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }} className="responsive-grid">
                  <StepCard num="01" title="Formulate a Strategy" desc="Identify the data that will actually make a difference to your business objectives instead of just collecting everything." />
                  <StepCard num="02" title="Identify Key Business Areas" desc="Determine which departments (usually Finance and Operations) will have the most impact on overall strategy." />
                  <StepCard num="03" title="Unanswered Questions" desc="Find the questions essential to your goals. This reduces data requirements, cost, and complexity drastically." />
                  <StepCard num="04" title="Relevant Data Sets" desc="Identify ideal data sets that answer your questions based on cost, effectiveness, and ease of availability." />
                  <StepCard num="05" title="Own vs. Acquire" desc="Audit internal servers for existing data. If missing, look to acquire from external sources or set up new collection methods." />
                  <StepCard num="06" title="Estimate Cost & Effort" desc="Ensure the tangible benefits outweigh the investment. Data should be treated as a long-term business asset." />
                  <StepCard num="07" title="Data Collection" desc="Set up processes to manage collection. Consider analysis-ready interfaces to reduce manual effort." />
                  <StepCard num="08" title="Analyze for Insights" desc="Extract lessons using text, speech, or image analytics. Raw data has no value until it is meaningfully processed." />
                  <StepCard num="09" title="Distribute Insights" desc="Ensure findings reach the right decision-maker at the right time in a meaningful, visual format." />
                  <StepCard num="10" title="Utilization & Action" desc="The final, most critical step: turning insights into action to transform your business trajectory." />
                </div>
              </div>

              <div className="reveal" style={{ marginTop: '5rem', borderTop: '1px solid var(--border)', paddingTop: '4rem' }}>
                <h2 style={{ fontSize: "2.2rem", fontWeight: 900, color: "var(--text)", marginBottom: "1.5rem" }}>Conclusion</h2>
                <p>
                  Data should be the foundation of every decision you take. The real challenge lies in finding data that can create the most relevant and genuine insights. Organizations realizing the value of data are combining digital technology with transformational management to succeed.
                </p>
                <p>
                  Utilizing big data for your favor is all about organizational integration, change, and evolution. By using these technologies, you can enhance your capability to compete with new entrants and create new revenue streams that take your business to new heights.
                </p>
              </div>

            </article>

            {/* SIDEBAR */}
            <aside>
              <div style={{ position: 'sticky', top: '120px', display: 'grid', gap: '2.5rem' }}>
                
                {/* KEY STATS */}
                <div className="reveal" style={{ padding: '2rem', background: 'var(--bg-secondary)', borderRadius: '24px', border: '1px solid var(--border)' }}>
                  <h4 style={{ fontSize: '1.1rem', fontWeight: 900, marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <BarChart size={20} color="var(--primary)" /> Industry Insights
                  </h4>
                  <div style={{ display: 'grid', gap: '1.5rem' }}>
                    <div>
                      <div style={{ fontSize: '1.8rem', fontWeight: 900, color: 'var(--primary)' }}>81%</div>
                      <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 600 }}>Executives seeking faster insights</div>
                    </div>
                    <div>
                      <div style={{ fontSize: '1.8rem', fontWeight: 900, color: 'var(--primary)' }}>20-30x</div>
                      <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 600 }}>Cheaper than legacy warehousing</div>
                    </div>
                  </div>
                </div>

                {/* TAKE ACTION */}
                <div className="reveal" style={{ padding: '2rem', background: 'var(--primary)', borderRadius: '24px', color: '#fff', textAlign: 'center' }}>
                  <LineChart size={40} style={{ marginBottom: '1.5rem', opacity: 0.8 }} />
                  <h4 style={{ fontSize: '1.3rem', fontWeight: 900, marginBottom: '1rem' }}>Ready to Scale?</h4>
                  <p style={{ fontSize: '0.95rem', marginBottom: '2rem', opacity: 0.9 }}>
                    Let our data experts architect your modern analytics ecosystem.
                  </p>
                  <Link href="/contact" style={{ display: 'block', background: '#fff', color: 'var(--primary)', padding: '1rem', borderRadius: '12px', fontWeight: 900, textDecoration: 'none' }}>
                    Get Data Audit
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
                  <Database size={28} />
                </div>
                <div>
                  <div style={{ fontWeight: 900, fontSize: '1.1rem' }}>Data Strategy Team</div>
                  <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>FI Digital Melbourne · Analytics Specialists</div>
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
                <p style={{ color: 'var(--text-muted)', fontWeight: 500 }}>Advanced strategies for modern organizations.</p>
              </div>
              <Link href="/blog" style={{ color: 'var(--primary)', fontWeight: 800, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                All Blogs <ArrowUpRight size={18} />
              </Link>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
              {[
                {
                  title: "Developing Digital Transformation Strategy",
                  cat: "Business Strategy",
                  slug: "developing-digital-transformation-strategy"
                },
                {
                  title: "Understanding the Psychology of UX",
                  cat: "UX Design",
                  slug: "understanding-the-psychology-of-human-mind-of-user-experience"
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
