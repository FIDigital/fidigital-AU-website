"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Building2, TrendingUp, Zap } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

import { caseStudies } from "@/lib/caseStudiesData";


const ALL_INDUSTRIES = ["All", ...Array.from(new Set(caseStudies.map((c) => c.industry)))];

export default function CaseStudiesClient() {
  const containerRef = useRef(null);
  const [activeFilter, setActiveFilter] = useState("All");

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.to(".hero-reveal", {
      y: 0,
      opacity: 1,
      duration: 0.6,
      stagger: 0.12,
      ease: "power3.out",
    });

    gsap.utils.toArray(".cs-card").forEach((card) => {
      gsap.fromTo(
        card,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 88%",
            once: true,
          },
        }
      );
    });
  }, { scope: containerRef });

  const filtered =
    activeFilter === "All"
      ? caseStudies
      : caseStudies.filter((c) => c.industry === activeFilter);

  const displayList = activeFilter === "All" ? caseStudies : filtered;

  return (
    <div ref={containerRef} style={{ background: "var(--bg)", color: "var(--text)" }}>
      <main style={{ paddingTop: "var(--header-h)" }}>

        {/* ══ HERO ══ */}
        <section style={{
          position: "relative",
          minHeight: "80vh",
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
          padding: "clamp(120px, 15vh, 180px) 1.5rem 100px",
          background: "var(--bg)",
        }}>
          {/* Background Visual — right-side image with gradient mask */}
          <div style={{
            position: "absolute", top: 0, right: 0,
            width: "60%", height: "100%", zIndex: 0,
            opacity: 0.3, pointerEvents: "none",
          }}>
            <Image
              src="/images/home_hero_professional.png"
              alt=""
              fill
              style={{
                objectFit: "cover",
                maskImage: "radial-gradient(circle at right, black, transparent 80%)",
                WebkitMaskImage: "radial-gradient(circle at right, black, transparent 80%)",
              }}
            />
          </div>

          <div className="container" style={{ position: "relative", zIndex: 1 }}>
            <div style={{ maxWidth: "1000px" }}>
              <div
                className="hero-reveal"
                style={{
                  opacity: 0, transform: "translateY(10px)",
                  display: "inline-flex", alignItems: "center", gap: "0.5rem",
                  background: "rgba(29,78,216,0.08)", color: "var(--primary)",
                  padding: "0.45rem 1rem", borderRadius: "50px",
                  fontWeight: 700, fontSize: "0.85rem", letterSpacing: "0.5px",
                  marginBottom: "1.5rem",
                }}
              >
                <TrendingUp size={14} /> Customer Success & Impact
              </div>

              <h1
                className="hero-reveal"
                style={{
                  opacity: 0, transform: "translateY(10px)",
                  fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
                  fontWeight: 900, lineHeight: 1.1,
                  marginBottom: "2rem", letterSpacing: "-0.03em",
                }}
              >
                Real Results for <br />
                <span style={{
                  background: "linear-gradient(135deg, var(--primary) 0%, #6366F1 100%)",
                  WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}>
                  Australian Enterprise.
                </span>
              </h1>

              <p
                className="hero-reveal"
                style={{
                  opacity: 0, transform: "translateY(10px)",
                  fontSize: "clamp(1.1rem, 2vw, 1.3rem)",
                  color: "var(--text-muted)", lineHeight: 1.7, maxWidth: "800px",
                  marginBottom: "3rem"
                }}
              >
                We publish outcomes, not promises. Each case study details the client challenge, our approach across service pillars, the technology deployed, and the measurable results achieved. These are production deployments, not proof-of-concept experiments.
              </p>

              <div className="hero-reveal" style={{ display: "flex", gap: "1rem", opacity: 0, transform: "translateY(10px)" }}>
                <Link href="#filter" className="btn-primary" style={{ padding: "0.8rem 2rem", borderRadius: "12px", fontWeight: 800 }}>
                  Browse Studies
                </Link>
                <Link href="/contact" className="btn-secondary" style={{ padding: "0.8rem 2rem", borderRadius: "12px", fontWeight: 800 }}>
                  Start Your Project
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ══ INDUSTRY FILTER ══ */}
        <section style={{
          padding: "40px 1.5rem",
          borderBottom: "1px solid var(--border)",
          background: "var(--bg-secondary)",
          position: "sticky",
          top: "var(--header-h)",
          zIndex: 10
        }}>
          <div className="container" style={{ maxWidth: "1200px" }}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", alignItems: "center", justifyContent: "center" }}>
              <span style={{ fontWeight: 700, color: "var(--text-muted)", fontSize: "0.85rem", marginRight: "0.5rem" }}>Filter by industry:</span>
              {ALL_INDUSTRIES.map((ind) => (
                <button
                  key={ind}
                  onClick={() => setActiveFilter(ind)}
                  style={{
                    padding: "0.5rem 1.2rem",
                    borderRadius: "50px",
                    border: activeFilter === ind ? "2px solid var(--primary)" : "1px solid var(--border)",
                    background: activeFilter === ind ? "var(--primary)" : "var(--bg)",
                    color: activeFilter === ind ? "#fff" : "var(--text)",
                    fontWeight: 600, fontSize: "0.85rem",
                    cursor: "pointer", transition: "all 0.2s ease",
                    boxShadow: activeFilter === ind ? "0 4px 12px rgba(29, 78, 216, 0.2)" : "none"
                  }}
                >
                  {ind}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* ══ CASE STUDIES GRID ══ */}
        <section style={{ padding: "80px 1.5rem 120px", background: "var(--bg-secondary)" }}>
          <div className="container" style={{ maxWidth: "1280px" }}>
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
              gap: "2rem",
            }}>
              {displayList.map((cs) => (
                <Link
                  key={cs.id}
                  href={`/case-study/${cs.slug}`}
                  style={{ textDecoration: "none", display: "flex" }}
                >
                  <article
                    className="cs-card"
                    style={{
                      background: "linear-gradient(160deg, #0f172a 0%, #1e293b 100%)",
                      border: "1px solid rgba(255,255,255,0.07)",
                      borderRadius: "20px",
                      overflow: "hidden",
                      width: "100%",
                      display: "flex", flexDirection: "column",
                      transition: "transform 0.35s cubic-bezier(0.16,1,0.3,1), box-shadow 0.35s ease, border-color 0.35s ease",
                      cursor: "pointer",
                      boxShadow: "0 4px 24px rgba(0,0,0,0.18)"
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.transform = "translateY(-8px)";
                      e.currentTarget.style.boxShadow = `0 20px 50px rgba(0,0,0,0.35)`;
                      e.currentTarget.style.borderColor = `${cs.color}55`;
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow = "0 4px 24px rgba(0,0,0,0.18)";
                      e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)";
                    }}
                  >
                    {/* Top accent line */}
                    <div style={{
                      height: "3px",
                      background: `linear-gradient(90deg, ${cs.color} 0%, ${cs.color}44 100%)`
                    }} />

                    {/* Logo Area */}
                    <div style={{
                      padding: "2rem 2rem 1.5rem",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}>
                      <div style={{
                        background: "rgba(255,255,255,0.95)",
                        borderRadius: "12px",
                        padding: "12px 20px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        minWidth: "90px",
                        maxWidth: "180px",
                        height: "76px",
                        flexShrink: 0,
                        overflow: "hidden"
                      }}>
                        <img
                          src={cs.image}
                          alt={cs.company}
                          style={{
                            maxWidth: "100%",
                            maxHeight: "52px",
                            width: "auto",
                            height: "auto",
                            objectFit: "contain",
                            display: "block",
                            transform: `scale(${cs.logoScale || 1})`,
                            transformOrigin: "center center",
                            transition: "transform 0.2s ease"
                          }}
                        />
                      </div>

                      <span style={{
                        background: `${cs.color}22`,
                        border: `1px solid ${cs.color}44`,
                        color: cs.color,
                        padding: "0.35rem 0.9rem",
                        borderRadius: "50px",
                        fontWeight: 700,
                        fontSize: "0.65rem",
                        textTransform: "uppercase",
                        letterSpacing: "1px",
                        whiteSpace: "nowrap",
                      }}>
                        {cs.tag}
                      </span>
                    </div>

                    {/* Body */}
                    <div style={{ padding: "0 2rem 2rem", flex: 1, display: "flex", flexDirection: "column" }}>
                      {/* Divider */}
                      <div style={{ height: "1px", background: "rgba(255,255,255,0.07)", marginBottom: "1.5rem" }} />

                      <div style={{
                        color: cs.color,
                        fontSize: "0.7rem", fontWeight: 800,
                        textTransform: "uppercase", letterSpacing: "2px",
                        marginBottom: "0.75rem"
                      }}>
                        {cs.company}
                      </div>

                      <h3 style={{
                        fontSize: "1.15rem", fontWeight: 700,
                        color: "rgba(255,255,255,0.92)", lineHeight: 1.55,
                        flex: 1, marginBottom: "2rem",
                        letterSpacing: "-0.01em"
                      }}>
                        {cs.title}
                      </h3>

                      <div style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}>
                        <span style={{
                          fontSize: "0.75rem",
                          color: "rgba(255,255,255,0.4)",
                          fontWeight: 600,
                          background: "rgba(255,255,255,0.06)",
                          padding: "0.3rem 0.75rem",
                          borderRadius: "50px"
                        }}>
                          {cs.industry}
                        </span>
                        <div style={{
                          display: "flex", alignItems: "center", gap: "0.35rem",
                          color: cs.color, fontWeight: 800, fontSize: "0.85rem",
                        }}>
                          View Story <ArrowUpRight size={16} />
                        </div>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>

      </main>

      <style jsx>{`
        .cs-card:hover h3 {
          color: #fff !important;
        }
        @media (max-width: 768px) {
          .cs-card { border-radius: 16px !important; }
        }
      `}</style>
    </div>
  );
}
