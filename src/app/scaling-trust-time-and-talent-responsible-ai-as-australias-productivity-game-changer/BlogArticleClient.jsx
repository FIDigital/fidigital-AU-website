"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  ArrowLeft, Calendar, Clock, User, 
  ChevronRight, Quote, CheckCircle2, AlertCircle,
  Lightbulb, TrendingUp, ShieldCheck, Zap, Sparkles,
  ArrowUpRight, ArrowRight
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const TableWrapper = ({ title, headers, rows }) => (
  <div className="table-container reveal" style={{ margin: '3rem 0' }}>
    {title && <h4 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '1.5rem', color: 'var(--primary)' }}>{title}</h4>}
    <div className="table-responsive" style={{ overflowX: 'auto', borderRadius: '16px', border: '1px solid var(--border)', background: 'var(--bg-secondary)' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '600px' }}>
        <thead>
          <tr style={{ background: 'var(--hover-bg)', borderBottom: '1px solid var(--border)' }}>
            {headers.map((h, i) => (
              <th key={i} style={{ padding: '1.25rem 1.5rem', fontSize: '0.9rem', fontWeight: 800, color: 'var(--text)' }}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} style={{ borderBottom: i === rows.length - 1 ? 'none' : '1px solid var(--border)' }}>
              {row.map((cell, j) => (
                <td key={j} style={{ padding: '1.25rem 1.5rem', fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
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
          {/* Background Image with Mask */}
          {/* Background Visual — high-fidelity image with premium mask */}
          <div className="hero-img-blend" style={{
            position: "absolute", top: 0, right: 0,
            width: "65%", height: "100%", zIndex: 0,
            opacity: 0.25, pointerEvents: "none"
          }}>
            <Image 
              src="/images/partner-hero.png" 
              alt="" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover"
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
                <Sparkles size={14} /> AI & Productivity
              </div>

              <h1 className="hero-h1" style={{ 
                fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 900, 
                lineHeight: 1.15, marginBottom: "2rem", letterSpacing: "-0.02em" 
              }}>
                Scaling Trust, Time, and Talent: <br />
                <span style={{ color: "var(--primary)" }}>Responsible AI</span> as Australia’s <br />
                Productivity Game-Changer
              </h1>

              <div className="hero-meta" style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "2rem", color: "var(--text-muted)", fontSize: "0.95rem", fontWeight: 600 }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                  <div style={{ width: "40px", height: "40px", borderRadius: "12px", background: "var(--primary)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff" }}>
                    <User size={18} />
                  </div>
                  <span style={{ color: "var(--text)" }}>Senior Engineering Team</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}><Calendar size={18} opacity={0.6} /> April 21, 2026</div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}><Clock size={18} opacity={0.6} /> 12 min read</div>
              </div>
            </div>
          </div>
        </section>

        {/* ══ ARTICLE CONTENT ═══════════════════════════════════════════════ */}
        <section style={{ padding: "80px 1.5rem 120px", background: "var(--bg-secondary)" }}>
          <div className="container" style={{ maxWidth: "900px" }}>
            
            <article className="article-body" style={{ fontSize: "1.15rem", lineHeight: 1.8, color: "var(--text)" }}>
              
              <p className="reveal" style={{ fontSize: "1.35rem", fontWeight: 500, color: "var(--primary)", marginBottom: "3rem", lineHeight: 1.6 }}>
                Australia’s productivity story won’t be rewritten by longer hours – it’ll be shaped by better leverage.
              </p>

              <div className="reveal" style={{ marginBottom: "3rem" }}>
                <p style={{ marginBottom: "1.5rem" }}>
                  AI is that leverage: a way to scale time, talent, and trust across every business, from scrappy SMEs to complex enterprises. We already know the entrepreneurial spark is here – just look at the global impact of Australian-built platforms like Atlassian and Canva. The question is how to scale that spirit economy-wide without crossing lines that undermine customer confidence or brand integrity.
                </p>
                <p>
                  This is where responsible AI matters. Not as a buzzword, but as the backbone of adoption. With clear guardrails, AI becomes a multiplier; without them, it becomes noise.
                </p>
              </div>

              {/* SECTION: The Productivity Moment */}
              <div className="reveal" style={{ margin: "4rem 0" }}>
                <h2 style={{ fontSize: "2rem", fontWeight: 900, marginBottom: "2rem" }}>The Productivity Moment: Why Now, Why AI</h2>
                <ul style={{ listStyle: "none", padding: 0 }}>
                  <li style={{ display: "flex", gap: "1rem", marginBottom: "1.5rem" }}>
                    <div style={{ color: "var(--primary)", marginTop: "0.25rem" }}><AlertCircle size={20} /></div>
                    <div><strong style={{ color: "var(--text)" }}>Flat output, rising expectations.</strong> Many leaders feel the productivity squeeze: more demand, thinner margins, talent shortages.</div>
                  </li>
                  <li style={{ display: "flex", gap: "1rem", marginBottom: "1.5rem" }}>
                    <div style={{ color: "var(--primary)", marginTop: "0.25rem" }}><TrendingUp size={20} /></div>
                    <div><strong style={{ color: "var(--text)" }}>Working smarter, not longer.</strong> AI changes the equation by removing repetitive drag, amplifying human judgment, and compressing cycle times—without adding burnout.</div>
                  </li>
                  <li style={{ display: "flex", gap: "1rem", marginBottom: "1.5rem" }}>
                    <div style={{ color: "var(--primary)", marginTop: "0.25rem" }}><Zap size={20} /></div>
                    <div><strong style={{ color: "var(--text)" }}>Australia’s advantage.</strong> We have the mindset and talent for world-class products. Responsible AI can widen that advantage from a few standout brands to tens of thousands of Australian businesses.</div>
                  </li>
                </ul>
              </div>

              {/* SECTION: The Leverage Trinity */}
              <div className="reveal" style={{ margin: "4rem 0" }}>
                <h2 style={{ fontSize: "2rem", fontWeight: 900, marginBottom: "1.5rem" }}>The Leverage Trinity: Trust, Time, Talent</h2>
                <p>AI done right scales three things every leader cares about.</p>
                
                <TableWrapper 
                  headers={["Leverage", "What it Means", "Why Leaders Care", "Early Signals"]} 
                  rows={[
                    ["Time", "Automate repetitive steps and compress cycle times", "Faster quoting, shorter resolution times, higher on-time delivery", "Lead time falls, work in progress shrinks"],
                    ["Talent", "Augment human judgment and creativity (not replace it)", "Better decisions, improved quality, richer client experiences", "Fewer avoidable errors, higher NPS"],
                    ["Trust", "Make AI’s role transparent, fair, and secure", "Customer confidence, team adoption, brand resilience", "Higher opt-in rates, stronger compliance"]
                  ]}
                />
              </div>

              {/* SECTION: What Responsible Looks Like */}
              <div className="reveal" style={{ margin: "4rem 0" }}>
                <h2 style={{ fontSize: "2rem", fontWeight: 900, marginBottom: "1.5rem" }}>What “Responsible” Looks Like</h2>
                <p style={{ marginBottom: "2rem" }}>Think of responsibility as the UX layer of AI: the part people actually feel.</p>

                <TableWrapper 
                  headers={["Guardrail", "The Idea", "Why It Matters", "What Good Feels Like"]} 
                  rows={[
                    ["Policy-first", "Set simple, living rules for AI use", "Clarity reduces risk and rework", "Teams know what’s allowed and where to ask"],
                    ["Human judgment", "AI is a power tool, not a proxy", "Keeps context, ethics, and common sense", "People feel in command – not replaced"],
                    ["Protect IP", "Use AI to assist, not to copy", "Preserves brand voice and legal safety", "Outputs feel authentic and differentiated"],
                    ["Transparency", "Disclose when and how AI helps", "Builds trust with customers and staff", "No black box – people understand the why"]
                  ]}
                />

                <div style={{ background: "rgba(29, 78, 216, 0.05)", borderLeft: "4px solid var(--primary)", padding: "2rem", borderRadius: "0 16px 16px 0", marginTop: "2rem" }}>
                  <p style={{ margin: 0, fontWeight: 500, color: "var(--text)" }}>
                    These aren’t box-ticking exercises. They’re adoption drivers. When employees and customers can trust AI, they actually use it and that’s when productivity moves.
                  </p>
                </div>
              </div>

              {/* SECTION: Where AI Quietly Lifts Output */}
              <div className="reveal" style={{ margin: "4rem 0" }}>
                <h2 style={{ fontSize: "2rem", fontWeight: 900, marginBottom: "1.5rem" }}>Where AI Quietly Lifts Output</h2>
                <p style={{ marginBottom: "2rem" }}>You don’t need moonshots to see impact. The most durable gains come from the unglamorous middle: the repeatable work that clogs calendars and slows teams.</p>

                <TableWrapper 
                  headers={["Function", "Everyday Frictions", "AI-Assisted Shift", "Business Win"]} 
                  rows={[
                    ["Sales", "Follow-ups slip, forecasting is fuzzy", "AI drafts follow-ups, scores leads", "Higher win rates, steadier revenue"],
                    ["Service", "High ticket volume, repetitive queries", "AI triage + suggested responses", "Faster resolution, lower cost per ticket"],
                    ["Finance", "Reconciliation, invoice coding", "AI pre-matches and flags anomalies", "Fewer errors, quicker month-end"],
                    ["HR/Talent", "Screening overload, scattered feedback", "AI summarises CVs and interviews", "Faster shortlists, better candidate fit"],
                    ["Supply Chain", "Forecast volatility, reorder lag", "AI spots demand shifts, proposes reorder points", "Fewer stockouts, smoother cash flow"],
                    ["Marketing", "Content bottlenecks, fragmentation", "AI drafts variations; humans craft narrative", "More testing, clearer brand voice"]
                  ]}
                />
                <p style={{ fontWeight: 700, textAlign: 'center', marginTop: '2rem', color: 'var(--primary)' }}>Notice the pattern: AI proposes, humans dispose. That’s how quality and pace go up together.</p>
              </div>

              {/* SECTION: Measuring What Matters */}
              <div className="reveal" style={{ margin: "4rem 0" }}>
                <h2 style={{ fontSize: "2rem", fontWeight: 900, marginBottom: "1.5rem" }}>Measuring What Matters</h2>
                <p style={{ marginBottom: "2rem" }}>Leaders want proof without turning teams into KPI robots. Orient around outcomes that match your context.</p>

                <TableWrapper 
                  headers={["Outcome Lens", "Signals to Track", "Why It’s Credible"]} 
                  rows={[
                    ["Cycle Time", "Quote turnaround, case resolution", "The universal currency of productivity"],
                    ["Quality", "First-time-right rate, rework %", "Quality protects margins and reputation"],
                    ["Customer Trust", "NPS/CSAT, AI opt-in volume", "Trust is the flywheel for adoption"],
                    ["Compliance", "Policy adherence, explainability logs", "Proves responsible is real, not rhetoric"],
                    ["Learning Velocity", "Experiments shipped, time-to-insight", "Faster learning compounds advantage"]
                  ]}
                />
              </div>

              {/* SECTION: Culture > Tools */}
              <div className="reveal" style={{ margin: "4rem 0" }}>
                <h2 style={{ fontSize: "2rem", fontWeight: 900, marginBottom: "2rem" }}>Culture &gt; Tools: Patterns that Predict Durable ROI</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
                  {[
                    { t: "Product Thinking", d: "Treat internal processes like products. Who's the user? What's the journey?" },
                    { t: "Small Bets", d: "Lots of tiny experiments beat one big rollout. Ship, learn, adjust." },
                    { t: "Human in Command", d: "AI drafts, humans decide—especially where ethics or safety are involved." },
                    { t: "Explainability", d: "If your team can’t explain a decision, don’t ship it." },
                    { t: "Data Minimalism", d: "Use the least data necessary, with clear permission and retention." }
                  ].map((item, i) => (
                    <div key={i} style={{ padding: '1.5rem', background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: '16px' }}>
                      <h4 style={{ fontWeight: 800, marginBottom: '0.75rem', color: 'var(--primary)' }}>{item.t}</h4>
                      <p style={{ fontSize: '0.95rem', margin: 0, color: 'var(--text-muted)' }}>{item.d}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* SECTION: SMEs vs Enterprises */}
              <div className="reveal" style={{ margin: "4rem 0" }}>
                <h2 style={{ fontSize: "2rem", fontWeight: 900, marginBottom: "1.5rem" }}>SMEs vs Enterprises</h2>
                
                <TableWrapper 
                  headers={["Aspect", "SMEs", "Enterprises"]} 
                  rows={[
                    ["Speed", "Faster to test and adopt", "Heavier governance, slower change"],
                    ["Data Depth", "Narrower but often cleaner", "Broader, more silos, more legacy"],
                    ["Risk Posture", "Pragmatic, resource-aware", "Formal, regulated, multi-stakeholder"],
                    ["Path to Value", "Start with visible bottlenecks", "Start with cross-functional pain points"],
                    ["Guardrail Focus", "Simple policy + strong disclosure", "End-to-end governance + explainability"]
                  ]}
                />
              </div>

              {/* SECTION: Ethics Is UX */}
              <div className="reveal" style={{ margin: "4rem 0", padding: '3rem', background: 'var(--bg)', borderRadius: '24px', border: '1px solid var(--border)' }}>
                <h2 style={{ fontSize: "1.75rem", fontWeight: 900, marginBottom: "1.5rem" }}>Ethics Is UX: Design for Trust</h2>
                <p style={{ marginBottom: "2rem" }}>Would you deploy a customer feature with broken UI? Of course not. Treat AI ethics the same way—as part of the user experience.</p>
                <div style={{ display: 'grid', gap: '1.5rem' }}>
                  <div style={{ display: 'flex', gap: '1rem' }}>
                    <CheckCircle2 size={24} color="var(--success)" flexShrink={0} />
                    <p style={{ margin: 0 }}><strong>Clarity:</strong> If a bot is answering, say so. If AI shaped a decision, explain how.</p>
                  </div>
                  <div style={{ display: 'flex', gap: '1rem' }}>
                    <CheckCircle2 size={24} color="var(--success)" flexShrink={0} />
                    <p style={{ margin: 0 }}><strong>Control:</strong> Offer an easy path to a human. Let people set preferences.</p>
                  </div>
                  <div style={{ display: 'flex', gap: '1rem' }}>
                    <CheckCircle2 size={24} color="var(--success)" flexShrink={0} />
                    <p style={{ margin: 0 }}><strong>Care:</strong> Respect voice, privacy, and context. Your brand shows up in these decisions.</p>
                  </div>
                </div>
              </div>

              {/* SECTION: How FI Digital Helps */}
              <div className="reveal" style={{ margin: "5rem 0", padding: '4rem 3rem', background: 'var(--footer-bg)', borderRadius: '32px', color: '#fff', border: '1px solid var(--footer-border)' }}>
                <h2 style={{ fontSize: "2.25rem", fontWeight: 900, marginBottom: "1.5rem", textAlign: 'center', color: '#fff' }}>How FI Digital Helps</h2>
                <p style={{ textAlign: 'center', marginBottom: '3rem', color: 'rgba(255,255,255,0.7)' }}>FI Digital Australia partners with leaders who want impact and integrity.</p>

                <div style={{ display: 'grid', gap: '2rem' }}>
                  {[
                    { t: "AI Strategy & Roadmap", d: "Map value pools, choose use cases, align with business priorities.", p: "Clear direction, faster traction" },
                    { t: "Governance & Policy", d: "Draft practical AI policies, set up review forums, create explainability logs.", p: "Confidence for boards & customers" },
                    { t: "Data Readiness", d: "Light-touch data audits, privacy-first patterns, integration plans.", p: "Clean, usable data" },
                    { t: "Build & Integrate", d: "Configure AI within Zoho and adjacent systems; human-in-loop design.", p: "Working solutions" }
                  ].map((item, i) => (
                    <div key={i} style={{ display: 'grid', gridTemplateColumns: '1.5fr 2fr 1fr', gap: '2rem', paddingBottom: '1.5rem', borderBottom: '1px solid rgba(255,255,255,0.1)', alignItems: 'center' }} className="help-row">
                      <div style={{ fontWeight: 800, fontSize: '1.1rem', color: '#fff' }}>{item.t}</div>
                      <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.95rem' }}>{item.d}</div>
                      <div style={{ color: 'var(--primary)', fontWeight: 800, fontSize: '0.9rem', textAlign: 'right' }}>{item.p}</div>
                    </div>
                  ))}
                </div>
                
                <div style={{ textAlign: 'center', marginTop: '4rem' }}>
                  <Link href="/book-discovery" style={{ background: '#fff', color: '#0f172a', padding: '1rem 2.5rem', borderRadius: '100px', fontWeight: 900, textDecoration: 'none', display: 'inline-block' }}>
                    Start Your AI Journey
                  </Link>
                </div>
              </div>

              {/* Closing Framing */}
              <div className="reveal" style={{ textAlign: 'center', margin: '5rem 0' }}>
                <div style={{ display: 'inline-block', padding: '3rem', border: '2px dashed var(--primary)', borderRadius: '32px' }}>
                  <h3 style={{ fontSize: '2rem', fontWeight: 900, marginBottom: '1.5rem' }}>Leverage + Legitimacy = Lift</h3>
                  <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap', fontWeight: 700 }}>
                    <p style={{ margin: 0 }}>Leverage: Multiply Time & Talent</p>
                    <p style={{ margin: 0 }}>+</p>
                    <p style={{ margin: 0 }}>Legitimacy: Transparent & Human-Centred</p>
                  </div>
                </div>
              </div>

              <p className="reveal" style={{ fontSize: '1.25rem', fontWeight: 600, textAlign: 'center', lineHeight: 1.6 }}>
                Australia doesn’t need to grind more hours to grow. We need to elevate how work gets done. Responsible AI lets us do exactly that.
              </p>

            </article>

            {/* SHARE & AUTHOR SECTION */}
            <div className="reveal" style={{ marginTop: '6rem', paddingTop: '4rem', borderTop: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '60px', height: '60px', borderRadius: '16px', background: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
                  <User size={28} />
                </div>
                <div>
                  <div style={{ fontWeight: 900, fontSize: '1.1rem' }}>Senior Engineering Team</div>
                  <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>FI Digital Australia · Insights</div>
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
                <p style={{ color: 'var(--text-muted)', fontWeight: 500 }}>Explore more about digital transformation and data platforms.</p>
              </div>
              <Link href="/blog" style={{ color: 'var(--primary)', fontWeight: 800, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                View All Blogs <ArrowUpRight size={18} />
              </Link>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
              {[
                {
                  title: "Developing Digital Transformation Strategy",
                  cat: "Digital Strategy",
                  slug: "developing-digital-transformation-strategy",
                  time: "12 min"
                },
                {
                  title: "SEO Melbourne Expert Advice For Blog Post Writing Fundamentals",
                  cat: "SEO & Strategy",
                  slug: "seo-melbourne-expert-advice-for-blog-post-writing-fundamentals-2",
                  time: "6 min"
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
            <h2 style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: '1.5rem' }}>Ready to Elevate Your Productivity?</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem' }}>
              Let's have a conversation about how responsible AI can create real lift in your business.
            </p>
            <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/book-discovery" style={{ background: 'var(--primary)', color: '#fff', padding: '1.2rem 3rem', borderRadius: '100px', fontWeight: 900, textDecoration: 'none' }}>
                Book a Discovery Session
              </Link>
              <Link href="/contact" style={{ background: 'var(--bg)', color: 'var(--text)', border: '1px solid var(--border)', padding: '1.2rem 3rem', borderRadius: '100px', fontWeight: 900, textDecoration: 'none' }}>
                Contact Our Team
              </Link>
            </div>
          </div>
        </section>

      </main>

      <style jsx>{`
        @media (max-width: 768px) {
          .help-row { grid-template-columns: 1fr !important; gap: 0.5rem !important; padding: 1.5rem 0 !important; }
          .help-row div:last-child { text-align: left !important; margin-top: 0.5rem; }
          .table-container { margin: 2rem -1.5rem !important; border-radius: 0 !important; border-left: none !important; border-right: none !important; }
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
