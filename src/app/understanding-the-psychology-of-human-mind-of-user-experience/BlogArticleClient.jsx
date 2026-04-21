"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  Calendar, Clock, User, 
  ChevronRight, Quote, CheckCircle2,
  Lightbulb, TrendingUp, ShieldCheck, Zap,
  ArrowUpRight, ArrowRight, Brain, Eye, 
  Layers, Link2, Users, Smile, MousePointer2,
  AlertCircle, BarChart, Target
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const PrincipleCard = ({ icon: Icon, title, desc, color = "var(--primary)" }) => (
  <div className="principle-card reveal" style={{
    background: 'var(--card-bg)',
    border: '1px solid var(--border)',
    borderRadius: '24px',
    padding: '2.5rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
    transition: 'all 0.3s ease',
  }}>
    <div style={{
      width: '56px',
      height: '56px',
      borderRadius: '16px',
      background: `${color}15`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: color
    }}>
      <Icon size={28} />
    </div>
    <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text)' }}>{title}</h3>
    <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, fontSize: '0.95rem' }}>{desc}</p>
  </div>
);

export default function BlogArticleClient() {
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.from(".hero-content > *", {
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "power3.out"
    });

    gsap.utils.toArray(".reveal").forEach((el) => {
      gsap.from(el, {
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none none"
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
      });
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} style={{ background: "var(--bg)", color: "var(--text)" }}>
      {/* ══ HERO SECTION ══════════════════════════════════════════════════ */}
      <section style={{ 
        position: 'relative', 
        padding: '160px 1.5rem 100px', 
        background: 'var(--bg-secondary)',
        overflow: 'hidden',
        borderBottom: '1px solid var(--border)'
      }}>
        <div className="hero-img-blend" style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "60%",
          height: "100%",
          zIndex: 0,
          opacity: 0.6,
          pointerEvents: "none",
        }}>
          <Image
            src="/images/digital-transformation.png"
            alt="Psychology of UX"
            fill
            style={{
              objectFit: "cover",
              maskImage: "radial-gradient(circle at center right, black, transparent 90%)",
              WebkitMaskImage: "radial-gradient(circle at center right, black, transparent 90%)",
            }}
          />
        </div>

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="hero-content" style={{ maxWidth: '850px' }}>
            <div style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '0.75rem', 
              background: 'rgba(29, 78, 216, 0.1)', 
              color: 'var(--primary)', 
              padding: '0.6rem 1.25rem', 
              borderRadius: '50px', 
              fontWeight: 800, 
              fontSize: '0.85rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              marginBottom: '2rem',
              border: '1px solid rgba(29, 78, 216, 0.2)'
            }}>
              <Brain size={14} /> Psychology of Design
            </div>

            <h1 style={{ 
              fontSize: 'clamp(2.5rem, 6vw, 4.2rem)', 
              fontWeight: 900, 
              lineHeight: 1.1, 
              marginBottom: '2rem',
              letterSpacing: '-0.03em'
            }}>
              Understanding the <span style={{ color: 'var(--primary)' }}>Psychology</span> of the Human Mind in UX
            </h1>

            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '2rem', color: 'var(--text-muted)', fontSize: '0.95rem', fontWeight: 600 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '12px', background: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
                  <User size={18} />
                </div>
                <span style={{ color: 'var(--text)' }}>UX Research Team</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Calendar size={18} opacity={0.6} /> April 21, 2026</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Clock size={18} opacity={0.6} /> 15 min read</div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ ARTICLE BODY ══════════════════════════════════════════════════ */}
      <section style={{ padding: '100px 1.5rem', background: 'var(--bg)' }}>
        <div className="container" style={{ maxWidth: '1200px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 350px', gap: '5rem' }} className="article-layout">
            
            <article style={{ fontSize: '1.15rem', lineHeight: 1.8, color: 'var(--text-muted)' }}>
              <div className="reveal">
                <p style={{ fontSize: '1.3rem', color: 'var(--text)', fontWeight: 600, marginBottom: '2.5rem' }}>
                  Most users generally do not interact with your product in the manner you intend. In an era of shrinking attention spans, understanding the psychological triggers behind user behavior is the difference between a high-converting platform and a digital ghost town.
                </p>
                
                <p>
                  UX practitioners work tirelessly to create user-friendly interfaces, yet even the most "friendly" designs can fail to engage. To bridge this gap, we must look at human psychology—the initiation and performance of behavior. This deeper understanding allows for more usable interfaces and more effective user-specific research.
                </p>
              </div>

              <div className="reveal" style={{ margin: '4rem 0', padding: '3rem', background: 'var(--bg-secondary)', borderRadius: '32px', border: '1px solid var(--border)' }}>
                <h2 style={{ fontSize: '2rem', fontWeight: 900, color: 'var(--text)', marginBottom: '1.5rem' }}>What is UX?</h2>
                <p>
                  UX design is the process of designing a product—digital or physical—that is useful, easy to use, and provides a pleasant interaction. It focuses on enhancing the customer experience through utility and usability. For websites, UX is about the <strong>overall workflow and experience</strong>, rather than just aesthetics.
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', marginTop: '2.5rem' }}>
                  {[
                    { label: "Utility", icon: Zap },
                    { label: "Usability", icon: MousePointer2 },
                    { label: "Satisfaction", icon: Smile }
                  ].map((item, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1.25rem', background: 'var(--bg)', borderRadius: '16px', border: '1px solid var(--border)' }}>
                      <item.icon size={20} color="var(--primary)" />
                      <span style={{ fontWeight: 800, color: 'var(--text)', fontSize: '1rem' }}>{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="reveal">
                <h2 style={{ fontSize: '2.2rem', fontWeight: 900, color: 'var(--text)', marginBottom: '2rem' }}>Core Psychological Principles</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', margin: '3rem 0' }}>
                  <PrincipleCard 
                    icon={Brain}
                    title="Mental Models"
                    desc="Users carry pre-existing ideas of how things work in the real world. Effective UX replicates these real-world perceptions in the virtual space to reduce cognitive load."
                  />
                  <PrincipleCard 
                    icon={Zap}
                    title="Visceral Reaction"
                    color="#EF4444"
                    desc="The 'old brain' reacts instantly to visuals. Aqua blue for fresh water, red for danger—these primal triggers keep users engaged before they even process the content."
                  />
                  <PrincipleCard 
                    icon={BarChart}
                    title="Cost-Benefit Analysis"
                    color="#10B981"
                    desc="Subconsciously, users evaluate energy spent vs reward. If a form is too long and the reward is low, they will skip it. Always aim for high-benefit, low-friction tasks."
                  />
                  <PrincipleCard 
                    icon={Layers}
                    title="Hick's Law"
                    color="#8B5CF6"
                    desc="The time it takes to make a decision increases with the number and complexity of choices. Keep navigation and content options to a minimum to avoid choice paralysis."
                  />
                  <PrincipleCard 
                    icon={Eye}
                    title="Gestalt Psychology"
                    color="#F59E0B"
                    desc="How elements are perceived when combined. Laws like Proximity and Similarity help create structure and stability, drawing attention to what matters most."
                  />
                  <PrincipleCard 
                    icon={Users}
                    title="Social Influence"
                    color="#3B82F6"
                    desc="Humans look to others to inform their decisions. Testimonials, reviews, and popularity indicators provide social proof that builds trust and persuades action."
                  />
                </div>
              </div>

              <div className="reveal" style={{ margin: '5rem 0' }}>
                <h2 style={{ fontSize: '2.2rem', fontWeight: 900, color: 'var(--text)', marginBottom: '2rem' }}>The Power of Facial Recognition</h2>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }} className="responsive-grid">
                  <div>
                    <p>
                      We are born with a subconscious ability to read faces. A human face communicates mood, mind, and emotion far more effectively than words alone.
                    </p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginTop: '2rem' }}>
                      <div style={{ display: 'flex', gap: '1rem' }}>
                        <CheckCircle2 size={24} color="var(--primary)" style={{ flexShrink: 0 }} />
                        <span>A smiling face conveys a sense of welcome and safety.</span>
                      </div>
                      <div style={{ display: 'flex', gap: '1rem' }}>
                        <CheckCircle2 size={24} color="var(--primary)" style={{ flexShrink: 0 }} />
                        <span>Eyes can guide the user's attention toward a Call-to-Action.</span>
                      </div>
                    </div>
                  </div>
                  <div style={{ position: 'relative', height: '350px', borderRadius: '32px', overflow: 'hidden', border: '1px solid var(--border)' }}>
                    <Image src="/images/strategy.png" alt="UX Strategy" fill style={{ objectFit: 'cover' }} />
                  </div>
                </div>
              </div>

              <div className="reveal" style={{ margin: '5rem 0' }}>
                <h2 style={{ fontSize: '2.2rem', fontWeight: 900, color: 'var(--text)', marginBottom: '2rem' }}>Application: Turning Psychology into Performance</h2>
                <p style={{ marginBottom: '2.5rem' }}>
                  Being mindful of these psychological drivers allows you to build interfaces that feel intuitive. Here is how to apply them:
                </p>
                <div style={{ display: 'grid', gap: '1.5rem' }}>
                  {[
                    { t: "Progressive Disclosure", d: "Users are 'lazy'—they measure benefit vs energy. Show basic info first, then reveal detail as needed." },
                    { t: "Unconscious Decision Triggers", d: "Structure, tone, and color influence the emotional brain. Ensure your CTA buttons are visually dominant." },
                    { t: "Memory Support", d: "Human memory is fallible. Group relevant information symmetrically to help users process and retain it." },
                    { t: "Cultural Mental Models", d: "Design must align with the user's cultural environment and expectations to feel 'right'." }
                  ].map((item, i) => (
                    <div key={i} style={{ padding: '2rem', background: 'var(--bg-secondary)', borderRadius: '24px', border: '1px solid var(--border)' }}>
                      <h4 style={{ fontWeight: 900, fontSize: '1.2rem', marginBottom: '0.75rem', color: 'var(--primary)' }}>{item.t}</h4>
                      <p style={{ margin: 0, fontSize: '1rem' }}>{item.d}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="reveal" style={{ marginTop: '5rem' }}>
                <h2 style={{ fontSize: '2.2rem', fontWeight: 900, color: 'var(--text)', marginBottom: '1.5rem' }}>Conclusion</h2>
                <p>
                  UX design is essential for every modern business. Without a focus on user experience, companies risk losing market share, customers, and ROI. By understanding the factors that motivate users, you can provide the triggers that create new, desired behaviors.
                </p>
                <p>
                  Ultimately, UX design is about using psychology to bridge the gap between your business goals and your user's needs.
                </p>
              </div>

            </article>

            {/* ══ SIDEBAR ══════════════════════════════════════════════════════ */}
            <aside>
              <div style={{ position: 'sticky', top: '100px', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                
                {/* CTA BOX */}
                <div style={{ 
                  background: 'linear-gradient(135deg, var(--primary) 0%, #1e40af 100%)', 
                  padding: '2.5rem', 
                  borderRadius: '32px', 
                  color: '#fff',
                  boxShadow: '0 20px 40px rgba(29, 78, 216, 0.2)'
                }}>
                  <h3 style={{ fontSize: '1.8rem', fontWeight: 900, marginBottom: '1rem', lineHeight: 1.2 }}>Build a Human-Centric Experience</h3>
                  <p style={{ opacity: 0.9, fontSize: '1rem', marginBottom: '2rem' }}>
                    Ready to apply these psychological principles to your digital platform?
                  </p>
                  <Link href="/contact" style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    gap: '0.75rem', 
                    background: '#fff', 
                    color: 'var(--primary)', 
                    padding: '1rem', 
                    borderRadius: '16px', 
                    fontWeight: 800, 
                    textDecoration: 'none' 
                  }}>
                    Contact Our UX Team <ArrowRight size={18} />
                  </Link>
                </div>

                {/* QUICK FACTS */}
                <div style={{ background: 'var(--bg-secondary)', padding: '2rem', borderRadius: '24px', border: '1px solid var(--border)' }}>
                  <h4 style={{ fontWeight: 800, marginBottom: '1.5rem' }}>Key Takeaways</h4>
                  <div style={{ display: 'grid', gap: '1.25rem' }}>
                    {[
                      "15s to grab attention",
                      "Primal visceral reactions",
                      "Hick's Law of choices",
                      "Energy vs Reward balance"
                    ].map((item, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.9rem' }}>
                        <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--primary)' }}></div>
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </aside>

          </div>
        </div>
      </section>

      {/* ══ RELATED POSTS ══════════════════════════════════════════════════ */}
      <section style={{ padding: '80px 1.5rem', background: 'var(--bg-secondary)', borderTop: '1px solid var(--border)' }}>
        <div className="container" style={{ maxWidth: '1200px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem' }}>
            <div>
              <h2 style={{ fontSize: '2rem', fontWeight: 900, marginBottom: '0.5rem' }}>Related Insights</h2>
              <p style={{ color: 'var(--text-muted)' }}>Explore more about user behavior and digital growth.</p>
            </div>
            <Link href="/blog" style={{ color: 'var(--primary)', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }}>
              View All Insights <ArrowRight size={18} />
            </Link>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
            {/* Related 1 */}
            <Link href="/user-experience" style={{ textDecoration: 'none' }}>
              <div style={{ background: 'var(--bg)', borderRadius: '24px', border: '1px solid var(--border)', overflow: 'hidden' }} className="hover-lift">
                <div style={{ position: 'relative', height: '220px' }}>
                  <Image src="/images/mobile-app-card.png" alt="UX Design" fill style={{ objectFit: 'cover' }} />
                </div>
                <div style={{ padding: '2rem' }}>
                  <div style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--primary)', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Services</div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text)', marginBottom: '1rem' }}>User Experience Design & Research</h3>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary)', fontWeight: 700, fontSize: '0.9rem' }}>
                    Learn More <ArrowRight size={16} />
                  </div>
                </div>
              </div>
            </Link>

            {/* Related 2 */}
            <Link href="/seo-melbourne-expert-advice-for-blog-post-writing-fundamentals-2" style={{ textDecoration: 'none' }}>
              <div style={{ background: 'var(--bg)', borderRadius: '24px', border: '1px solid var(--border)', overflow: 'hidden' }} className="hover-lift">
                <div style={{ position: 'relative', height: '220px' }}>
                  <Image src="/images/seo.png" alt="SEO Advice" fill style={{ objectFit: 'cover' }} />
                </div>
                <div style={{ padding: '2rem' }}>
                  <div style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--primary)', textTransform: 'uppercase', marginBottom: '0.75rem' }}>SEO Strategy</div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text)', marginBottom: '1rem' }}>Expert Advice for Blog Post Writing Fundamentals</h3>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary)', fontWeight: 700, fontSize: '0.9rem' }}>
                    Read Article <ArrowRight size={16} />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <style jsx>{`
        .hover-lift { transition: transform 0.3s ease, box-shadow 0.3s ease; }
        .hover-lift:hover { transform: translateY(-10px); box-shadow: 0 20px 40px rgba(0,0,0,0.1); }
        @media (max-width: 1024px) {
          .article-layout { grid-template-columns: 1fr !important; }
          aside { order: 2; }
        }
        @media (max-width: 768px) {
          .responsive-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
