"use client";

import Link from 'next/link';
import gsap from 'gsap';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { ArrowRight, Smartphone, Compass, Lightbulb, Android, Apple, CheckCircle, SmartphoneNfc } from 'lucide-react';
import Image from 'next/image';

if (typeof window !== 'undefined') {
  const { ScrollTrigger } = require('gsap/ScrollTrigger');
  gsap.registerPlugin(ScrollTrigger);
}

export default function MobileAppClient() {
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.from(".hero-badge", { y: 20, autoAlpha: 0, duration: 0.6, ease: "power3.out" });
    gsap.from(".hero-title", { y: 30, autoAlpha: 0, duration: 0.8, delay: 0.1, ease: "power3.out" });
    gsap.from(".hero-subtitle", { y: 30, autoAlpha: 0, duration: 0.8, delay: 0.2, ease: "power3.out" });
    gsap.from(".hero-btn", { y: 20, autoAlpha: 0, duration: 0.6, delay: 0.35, ease: "power3.out" });

    gsap.utils.toArray(".reveal").forEach((elem) => {
      gsap.fromTo(elem, 
        { y: 40, autoAlpha: 0 },
        {
          y: 0, 
          autoAlpha: 1, 
          duration: 0.8, 
          ease: "power3.out",
          scrollTrigger: {
            trigger: elem,
            start: "top 85%",
            once: true
          }
        }
      );
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} style={{ background: "var(--bg)", minHeight: "100vh" }}>
      
      {/* ══ HERO SECTION ══════════════ */}
      <section style={{
        position: "relative",
        minHeight: "85vh",
        display: "flex",
        alignItems: "center",
        padding: "clamp(120px, 15vh, 180px) 1.5rem 100px",
        background: "var(--bg)",
        overflow: "hidden",
        borderBottom: "1px solid var(--border)"
      }}>
        <div style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "60%",
          height: "100%",
          zIndex: 0,
          opacity: 0.45,
          pointerEvents: "none",
        }}>
          {/* Note: Reusing the product-modernisation asset as a high-fidelity alternative if custom mobile illustration is missing */}
          <Image
            src="/images/mobile-app-dev.png"
            alt="Mobile Application Engineering Dashboard"
            aria-hidden="true"
            fill sizes="(max-width: 768px) 100vw, 50vw"
            style={{
              objectFit: "cover",
              maskImage: "radial-gradient(circle at right, black, transparent 80%)",
              WebkitMaskImage: "radial-gradient(circle at right, black, transparent 80%)",
            }}
          />
        </div>

        <div className="container" style={{ position: "relative", zIndex: 1, textAlign: "left" }}>
          
          <div style={{ maxWidth: "1000px", textAlign: "left" }}>
            <div className="hero-badge" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "rgba(29, 78, 216, 0.1)", color: "var(--primary)", padding: "0.5rem 1rem", borderRadius: "50px", fontWeight: 700, marginBottom: "1.5rem" }}>
              <Smartphone size={16} /> Native Cross-Platform Experiences
            </div>

            <h1 className="hero-title" style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)", lineHeight: 1.1, fontWeight: 900, color: "var(--text)", letterSpacing: "-0.02em", marginBottom: "2rem", textWrap: "balance", textTransform: "uppercase" }}>
              Mobile’-ize Your <br/>
              <span style={{ color: "var(--primary)", fontWeight: 300 }}>Great Idea</span>
            </h1>

            <div className="hero-subtitle" style={{ display: "grid", gap: "1.5rem", margin: "0 0 3rem 0", maxWidth: "800px" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                <p style={{ fontSize: "clamp(1.2rem, 2vw, 1.4rem)", color: "var(--text)", fontWeight: 700, margin: 0 }}>
                  A roadmap to enhance interactive communications with customers & clients.
                </p>
                <p style={{ fontSize: "1.05rem", color: "var(--text-muted)", lineHeight: 1.8, margin: 0 }}>
                  FI Digital is here to provide a roadmap to enhance your interactive communications with customers and clients. In the modern world, it seems like every little thing is connected to the internet. Whether it is your refrigerator’s thermostat or your bank account, everyone is evolving with the times and going mobile. This means that if you want to compete in the highly competitive marketplace, you need to join them.
                </p>
              </div>
            </div>

            <div className="hero-btn" style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-start', flexWrap: 'wrap' }}>
              <Link href="/contact" className="btn-primary" style={{ height: "42px", padding: "0 1.5rem", fontSize: "0.9rem", display: "inline-flex", alignItems: "center", gap: "0.5rem", textDecoration: "none", fontWeight: 600 }}>
                Consult Our App Architects <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ══ SECTION 1: SPECIALIST DEVELOPMENT ROW ══════════════ */}
      <section className="section" style={{ background: "var(--bg)", padding: "100px 1.5rem" }}>
        <div className="container" style={{ maxWidth: "1000px", textAlign: "center" }}>
          <div className="reveal">
            <h2 className="section-title" style={{ fontSize: "2.2rem", fontWeight: 900, marginBottom: "2rem", color: "var(--text)" }}>
               Specialist Mobile App Development
            </h2>
            <div style={{ background: "var(--bg-secondary)", border: "1px solid var(--border)", borderRadius: "24px", padding: "4rem", boxShadow: "0 20px 40px rgba(0,0,0,0.02)", textAlign: "left", display: "grid", gap: "1.5rem" }}>
               <p style={{ fontSize: "1.15rem", color: "var(--text-muted)", lineHeight: 1.8, margin: 0 }}>
                 FI Digital is a specialist mobile app development company and can help you with a custom, native IOS, Android or Windows mobile app. If you are looking for a responsive platform with a secure backend, you simply need to let us know!
               </p>
               <div style={{ paddingLeft: "1.5rem", borderLeft: "4px solid var(--primary)" }}>
                 <p style={{ fontSize: "1.15rem", color: "var(--text)", fontWeight: 600, lineHeight: 1.8, margin: 0 }}>
                   Our talented team will sit with you to discuss your needs and provide help with where to begin and how to get there. Even if you have an existing app, our expertise can help you make it even better. We can evaluate your app, enhancing the design and user interface to boost user experience.
                 </p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ SECTION 2: IDEATION MATRICES ══════════════ */}
      <section className="section" style={{ background: "var(--bg-secondary)", padding: "100px 1.5rem", borderTop: "1px solid var(--border)" }}>
        <div className="container" style={{ maxWidth: "1000px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "3rem" }}>
            
            {/* Split 1 */}
            <div className="reveal">
              <div style={{ background: "var(--bg)", border: "1px solid var(--border)", borderRadius: "24px", padding: "3rem", boxShadow: "0 20px 40px rgba(0,0,0,0.02)", height: "100%" }}>
                <div style={{ width: "56px", height: "56px", borderRadius: "14px", background: "rgba(59, 130, 246, 0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "#3B82F6", marginBottom: "1.5rem" }}>
                    <Lightbulb size={28} />
                </div>
                <h2 style={{ fontSize: "1.8rem", fontWeight: 900, marginBottom: "1.5rem", letterSpacing: "-0.01em", textTransform: "uppercase" }}>
                  So You Have An Idea; What Next?
                </h2>
                <div style={{ display: "grid", gap: "1.25rem" }}>
                  <p style={{ fontSize: "1.1rem", color: "var(--text-muted)", lineHeight: 1.7, margin: 0 }}>
                    All apps begin with an app idea, but there is a process that is needed to convert an idea into a functional app. In many cases, the difference between a great app and that idea that could have been is the right mobile app development.
                  </p>
                  <p style={{ fontSize: "1.1rem", color: "var(--text-muted)", lineHeight: 1.7, margin: 0 }}>
                    The FI Digital team members are experienced software developers, and we can turn your idea into a reality. We don’t simply want to release your app to an App store; we want to help you succeed by generating more downloads and boosting your profile. We can help you to develop that great idea into an effective tool for your business.
                  </p>
                </div>
              </div>
            </div>

            {/* Split 2 */}
            <div className="reveal">
              <div style={{ background: "var(--bg)", border: "1px solid var(--border)", borderRadius: "24px", padding: "3rem", boxShadow: "0 20px 40px rgba(0,0,0,0.02)", height: "100%" }}>
                <div style={{ width: "56px", height: "56px", borderRadius: "14px", background: "rgba(16, 185, 129, 0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "#10B981", marginBottom: "1.5rem" }}>
                    <Compass size={28} />
                </div>
                <h2 style={{ fontSize: "1.8rem", fontWeight: 900, marginBottom: "1.5rem", letterSpacing: "-0.01em", textTransform: "uppercase" }}>
                  Mobile App Development Strategy
                </h2>
                <div style={{ display: "grid", gap: "1.25rem" }}>
                  <p style={{ fontSize: "1.1rem", color: "var(--text-muted)", lineHeight: 1.7, margin: 0 }}>
                    As a specialist App developer, our 360 degree support will help you to clarify and reassemble your big ideas for the small screen. Our multi discipline cross platform environment will help you collaborate with the best designers in the industry to give you an edge over your competitors.
                  </p>
                  <p style={{ fontSize: "1.1rem", color: "var(--text-muted)", lineHeight: 1.7, margin: 0 }}>
                    UI/UX can be the make or break point for any app idea, but our pixel friendly team will put the app through real testing before rolling out a developed idea. App design is just as important as the functionality, so we work on all aspects simultaneously.
                  </p>
                  <p style={{ fontSize: "1.1rem", color: "var(--text-muted)", lineHeight: 1.7, margin: 0 }}>
                    The FI Digital team can guarantee you user engagement thanks to our alluring designs, easy navigation apps and of course, user friendly functionality. In this highly fragmented evolving environment, you can’t trust your app idea with nothing but the best!
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ══ SECTION 2: END-TO-END PLATFORMS ══════════════ */}
      <section className="section" style={{ background: "var(--bg)", padding: "100px 1.5rem", borderTop: "1px solid var(--border)" }}>
        <div className="container" style={{ maxWidth: "1250px" }}>
          
          <div className="reveal" style={{ textAlign: "center", marginBottom: "4rem" }}>
            <h2 className="section-title" style={{ fontSize: "2.5rem", fontWeight: 900, marginBottom: "1.5rem" }}>
              Native Architectural Ecosystems
            </h2>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "4rem" }}>
            
            {/* iOS Build */}
            <div className="reveal hover-lift" style={{ background: "var(--bg)", border: "1px solid var(--border)", borderRadius: "24px", padding: "4rem", position: "relative", overflow: "hidden", display: "grid", gap: "1rem", boxShadow: "0 20px 40px rgba(0,0,0,0.02)" }}>
               <div style={{ position: "relative", zIndex: 1 }}>
                 <div style={{ display: "inline-flex", alignItems: "center", gap: "0.75rem", background: "#000", color: "#fff", padding: "0.5rem 1.25rem", borderRadius: "50px", fontWeight: 700, marginBottom: "2rem" }}>
                   <SmartphoneNfc size={18} /> IOS DEVELOPMENT
                 </div>
                 <h3 style={{ fontSize: "2.2rem", fontWeight: 900, color: "var(--text)", marginBottom: "1.5rem" }}>Apple High-Fidelity Suites</h3>
                 <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                   <p style={{ fontSize: "1.15rem", color: "var(--text-muted)", lineHeight: 1.8, margin: 0 }}>
                     If you want to take your business to a new marketplace, you may want to consider iPhone app development. The FI Digital team has delivered a number of iPhone app projects here in Australia. We have helped businesses to harness the power of the Apple device user to boost their business profile and sales.
                   </p>
                   <div style={{ padding: "1.5rem", background: "rgba(0,0,0,0.02)", borderLeft: "4px solid #000", borderRadius: "0 12px 12px 0" }}>
                     <p style={{ fontSize: "1.15rem", color: "var(--text-muted)", lineHeight: 1.8, margin: 0 }}>
                       Whether you need a custom app development project or just need to brainstorm your app idea, a member of the FI Digital team is here to help. We can help you with the optimal approach for the development process including assisting you with the overall design, planning revenue generation and developing marketing strategies to make your app a success.
                     </p>
                   </div>
                   <p style={{ fontSize: "1.15rem", color: "var(--text-muted)", lineHeight: 1.8, margin: 0 }}>
                     Based on your specific requirements, we can assist you in determining the benefits of extending your app to other iOS devices such as the Apple Watch or iPad. Since there have been over 200 million iPads sold, you may not want to restrict your new app to just the iPhone as you could significantly boost the overall reach of your target audience.
                   </p>
                 </div>
               </div>
            </div>

            {/* Android Build */}
            <div className="reveal hover-lift" style={{ background: "var(--bg)", border: "1px solid rgba(16, 185, 129, 0.2)", borderRadius: "24px", padding: "4rem", position: "relative", overflow: "hidden", display: "grid", gap: "1rem", boxShadow: "0 20px 40px rgba(16, 185, 129, 0.03)" }}>
               <div style={{ position: "relative", zIndex: 1 }}>
                 <div style={{ display: "inline-flex", alignItems: "center", gap: "0.75rem", background: "#10B981", color: "#fff", padding: "0.5rem 1.25rem", borderRadius: "50px", fontWeight: 700, marginBottom: "2rem" }}>
                   <Smartphone size={18} /> ANDROID APP DEVELOPMENT
                 </div>
                 <h3 style={{ fontSize: "2.2rem", fontWeight: 900, color: "var(--text)", marginBottom: "1.5rem" }}>Cross-Platform Open Ecosystems</h3>
                 <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                   <p style={{ fontSize: "1.15rem", color: "var(--text-muted)", lineHeight: 1.8, margin: 0 }}>
                     As a specialist App developer, our 360 degree support will help you to clarify and reassemble your big ideas for the small screen. Our multi discipline cross platform environment will help you collaborate with the best designers in the industry to give you an edge over your competitors.
                   </p>
                   <div style={{ padding: "1.5rem", background: "rgba(16, 185, 129, 0.03)", borderLeft: "4px solid #10B981", borderRadius: "0 12px 12px 0" }}>
                     <p style={{ fontSize: "1.15rem", color: "var(--text-muted)", lineHeight: 1.8, margin: 0 }}>
                       UI/UX can be the make or break point for any app idea, but our pixel friendly team will put the app through real testing before rolling out a developed idea. App design is just as important as the functionality, so we work on all aspects simultaneously. Investing in the right design can take your business’s graph to a whole new level!
                     </p>
                   </div>
                 </div>
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* ══ FINAL CTA SECTION ══════════════ */}
      <section id="cta" style={{ padding: '120px 1.5rem', background: '#1d4ed8', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.1, backgroundImage: 'radial-gradient(circle at right center, rgba(255,255,255,0.8) 0%, transparent 50%)' }}></div>
        <div className="container" style={{ maxWidth: '900px', textAlign: 'center', position: 'relative', zIndex: 2 }}>
          
          <h2 style={{ fontSize: '2.5rem', fontWeight: 900, color: 'white', marginBottom: '2rem', letterSpacing: '-0.02em', lineHeight: 1.2, margin: "0 auto 2rem auto" }}>
             Start Building Your Infrastructure
          </h2>
          <p style={{ fontSize: "1.15rem", color: "rgba(255,255,255,0.9)", lineHeight: 1.8, margin: "0 auto 3rem auto", maxWidth: "800px" }}>
             If you are interested in learning more about mobile app development and would like to find out how a development company could assist you, contact us today. The FI Digital team is on hand to answer any queries and help you to plan your web application and mobile app development to ensure maximum audience engagement and boost your brand. Don’t wait while the competition takes the next step to harness the power of app development.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Link href="/contact" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.75rem',
              background: 'white',
              color: 'var(--primary)',
              padding: '1.1rem 2.5rem',
              borderRadius: '100px',
              fontSize: '1.15rem',
              fontWeight: 800,
              textDecoration: 'none',
              boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
              transition: 'all 0.3s ease'
             }} className="btn-primary-hover">
              Contact Us <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      <style jsx>{`
        .btn-primary {
          background: linear-gradient(135deg, var(--primary) 0%, rgba(29, 78, 216, 1) 100%);
          color: white;
          border-radius: 8px;
          box-shadow: 0 15px 30px rgba(29, 78, 216, 0.2);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 20px 40px rgba(29, 78, 216, 0.3);
        }
        .hover-lift {
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease;
        }
        .hover-lift:hover {
          transform: translateY(-8px);
          box-shadow: 0 30px 60px rgba(0,0,0,0.12) !important;
        }
        .btn-primary-hover:hover {
          transform: translateY(-5px);
          box-shadow: 0 25px 50px rgba(0,0,0,0.3) !important;
        }
        @media (max-width: 768px) {
           .hover-lift {
              transform: none !important;
           }
        }
      `}</style>
    </div>
  );
}
