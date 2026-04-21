"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  Calendar, Clock, User, 
  ChevronRight, Quote, CheckCircle2,
  Lightbulb, TrendingUp, ShieldCheck, Zap,
  ArrowUpRight, ArrowRight, ClipboardList, 
  MessageSquare, Layout, Sparkles, Target, 
  BarChart3, Globe, AlertCircle, Search,
  Users, FileText, Send, PieChart, PenTool,
  Coffee, DollarSign, FileSignature
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const StepItem = ({ num, title, children, icon: Icon }) => (
  <div className="reveal" style={{ 
    display: 'flex', gap: '2rem', marginBottom: '4rem', 
    position: 'relative' 
  }}>
    <div style={{ flexShrink: 0 }}>
      <div style={{ 
        width: '64px', height: '64px', borderRadius: '20px', 
        background: 'var(--primary)', color: '#fff',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: '1.5rem', fontWeight: 900,
        boxShadow: '0 10px 20px rgba(29, 78, 216, 0.2)'
      }}>
        {Icon ? <Icon size={28} /> : num}
      </div>
      <div style={{ 
        width: '2px', height: 'calc(100% + 2rem)', 
        background: 'linear-gradient(to bottom, var(--primary), transparent)',
        margin: '1rem auto 0', opacity: 0.2 
      }} />
    </div>
    <div style={{ paddingTop: '0.5rem' }}>
      <div style={{ fontSize: '0.85rem', fontWeight: 800, color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>Step {num}</div>
      <h3 style={{ fontSize: '1.8rem', fontWeight: 900, marginBottom: '1.5rem', color: 'var(--text)' }}>{title}</h3>
      <div style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--text-muted)' }}>
        {children}
      </div>
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
              src="/images/it-software.png" 
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
                <ClipboardList size={14} /> Ultimate Selection Guide
              </div>

              <h1 className="hero-h1" style={{ 
                fontSize: "clamp(2.5rem, 6vw, 4.5rem)", fontWeight: 900,
                lineHeight: 1.1, marginBottom: "2rem", letterSpacing: "-0.03em"
              }}>
                How to Select Your Next <br />
                <span style={{ color: "var(--primary)" }}>Digital Marketing</span> Agency
              </h1>

              <div className="hero-meta" style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "2rem", color: "var(--text-muted)", fontSize: "0.95rem", fontWeight: 600 }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                  <div style={{ width: "40px", height: "40px", borderRadius: "12px", background: "var(--primary)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff" }}>
                    <User size={18} />
                  </div>
                  <span style={{ color: "var(--text)" }}>Agency Selection Team</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}><Calendar size={18} opacity={0.6} /> April 21, 2026</div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}><Clock size={18} opacity={0.6} /> 15 min read</div>
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
                  The world is shifting from analog to digital models at a rapid pace. Digital marketing is not just a trend—it defines the future of commerce. Fast, affordable, and measurable, it requires a specialized partner to navigate successfully. Here is the ultimate 9-step framework for selecting the right agency.
                </p>
              </div>

              <div style={{ marginTop: '5rem' }}>
                <StepItem num="1" title="Define Needs & Expectations" icon={Target}>
                  <p>Before looking for agencies, chalk out your business objectives. Decide on core activities: website design, social media, SEM, or analytics. Be clear about goals like brand awareness, lead generation, or sales volume.</p>
                </StepItem>

                <StepItem num="2" title="Shortlist by Capability" icon={Search}>
                  <p>Evaluate agency websites and their own social presence. If their own digital footprint is well-kept and informed, they understand the principles. Look for niche specialization—agencies with clients in your industry often have a head start on research.</p>
                </StepItem>

                <StepItem num="3" title="In-Depth Research" icon={Globe}>
                  <p>Verify Google Partner status and search engine accreditations. Look for real-world case studies and talk to existing or past clients to understand their true operational capacity.</p>
                </StepItem>

                <StepItem num="4" title="Send Request for Proposal (RFP)" icon={Send}>
                  <p>Be clear and realistic about your pricing model and objectives. The more transparent you are with the agency, the more tailored and effective their proposed solutions will be.</p>
                </StepItem>

                <StepItem num="5" title="The Strategy Assignment" icon={PenTool}>
                  <p>Ask for a brief strategy solution or a free marketing audit report. This reveals their creativity and technical skills before you commit to a long-term partnership.</p>
                </StepItem>

                <StepItem num="6" title="Evaluation & Teleconference" icon={Users}>
                  <p>Evaluate proposals uniformly. Meet in person or via teleconference to look for unrealistic explanations. Ensure the agency truly understands your requirements in a realistic timeframe.</p>
                </StepItem>

                <StepItem num="7" title="Meet the Operational Team" icon={Coffee}>
                  <p>Don't just meet the salesperson. Speak with the strategists, creatives, and developers who will actually be doing the work. Gauge their dedication, ethics, and project management systems.</p>
                </StepItem>

                <StepItem num="8" title="Understand Pricing & ROI" icon={DollarSign}>
                  <p>Pricing should be based on performance, not just the lowest bid. Whether it's a flat fee or a percentage of spend, ensure there is "accountability" with real-time results tracking.</p>
                </StepItem>

                <StepItem num="9" title="Signing the Service Agreement" icon={FileSignature}>
                  <p>Ensure non-compete clauses and confidentiality are agreed upon. Start with a 3 to 6-month trial contract before entering a long-term commitment.</p>
                </StepItem>
              </div>

              <div className="reveal" style={{ marginTop: '5rem', borderTop: '1px solid var(--border)', paddingTop: '4rem' }}>
                <h2 style={{ fontSize: "2.2rem", fontWeight: 900, color: "var(--text)", marginBottom: "1.5rem" }}>Generating True Revenue</h2>
                <p>
                  The right digital marketing agency will generate huge revenues, provide peace of mind, and save you the overhead of an in-house team. This allows you to focus on your strengths while your digital growth is handled by experts.
                </p>
                <div style={{ marginTop: '3rem', padding: '2rem', background: 'var(--bg-secondary)', borderRadius: '24px', border: '1px solid var(--border)' }}>
                   <p style={{ fontWeight: 800, color: 'var(--text)', margin: 0 }}>
                      Ready to start the selection process? FI Digital offers free marketing audits to help you baseline your current performance.
                   </p>
                </div>
              </div>

            </article>

            {/* SIDEBAR */}
            <aside>
              <div style={{ position: 'sticky', top: '120px', display: 'grid', gap: '2.5rem' }}>
                
                {/* QUICK CHECKLIST */}
                <div className="reveal" style={{ padding: '2rem', background: 'var(--bg-secondary)', borderRadius: '24px', border: '1px solid var(--border)' }}>
                  <h4 style={{ fontSize: '1.1rem', fontWeight: 900, marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <ShieldCheck size={20} color="var(--primary)" /> Evaluation Key
                  </h4>
                  <div style={{ display: 'grid', gap: '1rem' }}>
                    {[
                      "Google Partner Status",
                      "Niche Specialization",
                      "Real-Time Reporting",
                      "Trial Contract Periods"
                    ].map((item, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.85rem', fontWeight: 700 }}>
                        <CheckCircle2 size={14} color="var(--primary)" /> {item}
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="reveal" style={{ padding: '2rem', background: 'var(--primary)', borderRadius: '24px', color: '#fff', textAlign: 'center' }}>
                  <BarChart3 size={40} style={{ marginBottom: '1.5rem', opacity: 0.8 }} />
                  <h4 style={{ fontSize: '1.3rem', fontWeight: 900, marginBottom: '1rem' }}>Request an Audit</h4>
                  <p style={{ fontSize: '0.95rem', marginBottom: '2rem', opacity: 0.9 }}>
                    Baseline your performance with our free digital marketing audit.
                  </p>
                  <Link href="/contact" style={{ display: 'block', background: '#fff', color: 'var(--primary)', padding: '1rem', borderRadius: '12px', fontWeight: 900, textDecoration: 'none' }}>
                    Get Free Audit
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
                <p style={{ color: 'var(--text-muted)', fontWeight: 500 }}>Winning strategies for the Australian market.</p>
              </div>
              <Link href="/blog" style={{ color: 'var(--primary)', fontWeight: 800, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                All Blogs <ArrowUpRight size={18} />
              </Link>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
              {[
                {
                  title: "Tips for Choosing an SEO Company in Melbourne",
                  cat: "Expert Advice",
                  slug: "tips-for-choosing-a-company-for-your-seo-melbourne-business-owners-should-know"
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
