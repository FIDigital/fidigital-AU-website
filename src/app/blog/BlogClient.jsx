"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar, Clock, User, ArrowUpRight, Newspaper, Sparkles, Settings, Cloud, Search, Zap, Brain } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const blogPosts = [
  {
    id: -19,
    title: "Takings Cues From Apple’s WWDC 2016",
    excerpt: "Analyzing the major announcements from WWDC 2016 and their implications for Australian SMEs, from iMessage apps to Siri's evolution.",
    date: "April 21, 2026",
    readTime: "11 min read",
    author: "FI Strategy Team",
    category: "Tech Insights",
    image: "/images/strategy.png",
    slug: "takings-cues-from-apples-wwdc-2016",
  },
  {
    id: -18,
    title: "Common SEO Myths Busted – Part 1",
    excerpt: "The first installment of our myth-busting series, tackling misconceptions about keyword domain names and multiple redirects in the modern search era.",
    date: "April 21, 2026",
    readTime: "7 min read",
    author: "FI Strategy Team",
    category: "SEO Strategy",
    image: "/images/seo.png",
    slug: "common-seo-myths-busted-part-1",
  },
  {
    id: -17,
    title: "Does .Melbourne or .Sydney Domains work ?",
    excerpt: "Debunking myths about local TLD extensions. Discover why .Melbourne and .Sydney domains have negligible SEO benefits and what truly matters for local ranking.",
    date: "April 21, 2026",
    readTime: "8 min read",
    author: "FI Strategy Team",
    category: "Domain Strategy",
    image: "/images/seo.png",
    slug: "does-local-tld-extensions-work",
  },
  {
    id: -16,
    title: "Why Do Australian SMBs Need Superior Digital Marketing",
    excerpt: "Discover why digital marketing is the most cost-effective way for Australian small businesses to build brand authority and outperform rivals.",
    date: "April 21, 2026",
    readTime: "9 min read",
    author: "FI Strategy Team",
    category: "SME Growth",
    image: "/images/strategy.png",
    slug: "digital-agency-for-small-business",
  },
  {
    id: -15,
    title: "Glimpse into the Digital Marketing Scenario a Year From Now",
    excerpt: "A forward-looking analysis of digital marketing trends, exploring IoT, location-based marketing, big data, and the future of personalized user experiences.",
    date: "April 21, 2026",
    readTime: "15 min read",
    author: "FI Strategy Team",
    category: "Future Trends",
    image: "/images/strategy.png",
    slug: "glimpse-into-the-digital-marketing-scenario-a-year-from-now",
  },
  {
    id: -14,
    title: "Is Mobile Search The Next Big Thing?",
    excerpt: "An analysis of the mobile search revolution, exploring how Facebook, Google, and Apple are shaping the future of digital discovery through chatbots and AMP.",
    date: "April 21, 2026",
    readTime: "12 min read",
    author: "FI Strategy Team",
    category: "Mobile Strategy",
    image: "/images/seo.png",
    slug: "is-mobile-search-the-next-big-thing",
  },
  {
    id: -13,
    title: "Digital personalization – The Consciousness of Marketing Automation",
    excerpt: "Explore how digital personalization acts as the consciousness of marketing automation, driving ROI, sales, and brand loyalty through tailored user experiences.",
    date: "April 21, 2026",
    readTime: "10 min read",
    author: "Automation Strategy Team",
    category: "Marketing Automation",
    image: "/images/strategy.png",
    slug: "digital-personalization-the-consciousness-of-marketing-automation",
  },
  {
    id: -12,
    title: "What Changes Can You Experience in SEO in 2018?",
    excerpt: "A look back at the major shifts in SEO, from voice search to mobile-first indexing, and how they shaped the modern search landscape.",
    date: "April 21, 2026",
    readTime: "6 min read",
    author: "SEO Strategy Team",
    category: "SEO Evolution",
    image: "/images/seo.png",
    slug: "what-changes-can-you-experience-in-seo-in-2018",
  },
  {
    id: -11,
    title: "How to Select Your Next Digital Marketing Agency",
    excerpt: "An ultimate guide to selecting the right digital marketing agency for your business, featuring a robust 9-step selection framework.",
    date: "April 21, 2026",
    readTime: "15 min read",
    author: "Agency Selection Team",
    category: "Marketing & Strategy",
    image: "/images/it-software.png",
    slug: "how-to-select-your-next-digital-marketing-agency",
  },
  {
    id: -10,
    title: "Why Digital Marketing is Important for Australian SMEs?",
    excerpt: "Discover the critical role of digital marketing for Australian small and medium enterprises in driving growth, ROI, and brand authority.",
    date: "April 21, 2026",
    readTime: "8 min read",
    author: "FI Strategy Team",
    category: "Marketing & Strategy",
    image: "/images/strategy.png",
    slug: "why-digital-marketing-is-important-for-australian-smes",
  },
  {
    id: -9,
    title: "Tips for Choosing a Company For Your SEO, Melbourne Business Owners Should Know",
    excerpt: "Selecting the right SEO partner is critical for growth. Discover key tips on goal alignment, recommendations, and transparency for Melbourne businesses.",
    date: "April 21, 2026",
    readTime: "7 min read",
    author: "FI Strategy Team",
    category: "SEO & Strategy",
    image: "/images/strategy.png",
    slug: "tips-for-choosing-a-company-for-your-seo-melbourne-business-owners-should-know",
  },
  {
    id: -8,
    title: "How Can SEO Agency Help in Optimizing Your Website To Target Local Audience?",
    excerpt: "Dominate the Melbourne market by leveraging geo-targeting, local listings, and regional keyword strategies tailored for local business growth.",
    date: "April 21, 2026",
    readTime: "9 min read",
    author: "SEO Strategy Team",
    category: "Local SEO",
    image: "/images/seo.png",
    slug: "how-can-seo-agency-help-in-optimizing-your-website-to-target-local-audience",
  },
  {
    id: -7,
    title: "Top 12 Reasons Why Australian Small Businesses Should Invest in SEO",
    excerpt: "Discover why SEO is the highest ROI investment for Australian SMBs seeking sustainable growth and brand authority.",
    date: "April 21, 2026",
    readTime: "10 min read",
    author: "SEO Strategy Team",
    category: "SEO & Strategy",
    image: "/images/seo.png",
    slug: "top-12-reasons-why-australian-small-businesses-should-invest-in-seo",
  },
  {
    id: -6,
    title: "What is Marketing Automation?",
    excerpt: "Explore how marketing automation streamlines repetitive tasks, saves precious time, and enhances customer conversion rates.",
    date: "April 21, 2026",
    readTime: "8 min read",
    author: "Marketing Ops Team",
    category: "Marketing Technology",
    image: "/images/strategy.png",
    slug: "what-is-marketing-automation",
  },
  {
    id: -5,
    title: "Data Analytics: The Future of Data-Driven Decision Making",
    excerpt: "Discover how data-driven insights are transforming business efficiency, growth, and decision-making speed in the modern enterprise.",
    date: "April 21, 2026",
    readTime: "12 min read",
    author: "Data Strategy Team",
    category: "Data & Analytics",
    image: "/images/data-platforms.png",
    slug: "data-analytics-the-future-of-data-driven-decision-making",
  },
  {
    id: -4,
    title: "Understanding The Psychology of Human Mind of User Experience",
    excerpt: "Explore the psychological triggers—from mental models to visceral reactions—that drive user behavior and effective UX design.",
    date: "April 21, 2026",
    readTime: "15 min read",
    author: "UX Research Team",
    category: "UX Design",
    image: "/images/digital-transformation.png",
    slug: "understanding-the-psychology-of-human-mind-of-user-experience",
  },
  {
    id: -3,
    title: "Questions To Ask Your Potential SEO Agency",
    excerpt: "Avoid costly mistakes by asking these essential questions before hiring an SEO provider for your Melbourne business.",
    date: "April 21, 2026",
    readTime: "6 min read",
    author: "FI Digital SEO Team",
    category: "SEO & Strategy",
    image: "/images/it-software.png",
    slug: "questions-to-ask-your-potential-seo-agency",
  },
  {
    id: -2,
    title: "Developing Digital Transformation Strategy",
    excerpt: "Learn how to build technology-enabled business models that improve results, enhance engagement, and drive operational excellence in 2026.",
    date: "April 21, 2026",
    readTime: "12 min read",
    author: "FI Digital Consulting Team",
    category: "Digital Strategy",
    image: "/images/digital-transformation.png",
    slug: "developing-digital-transformation-strategy",
  },
  {
    id: -1,
    title: "How Can SEO Help in Growing Your Business?",
    excerpt: "Discover how Search Engine Optimization drives lead generation, brand visibility, and revenue growth for Melbourne businesses.",
    date: "April 21, 2026",
    readTime: "7 min read",
    author: "FI Digital SEO Team",
    category: "SEO & Strategy",
    image: "/images/strategy.png",
    slug: "how-can-seo-help-in-growing-your-business",
  },
  {
    id: 0,
    title: "SEO Melbourne Expert Advice For Blog Post Writing Fundamentals",
    excerpt: "Master the art of SEO-optimised writing. Learn how planning, formatting, and content schedules can boost your Melbourne business visibility.",
    date: "April 21, 2026",
    readTime: "6 min read",
    author: "FI Digital SEO Team",
    category: "SEO & Strategy",
    image: "/images/seo.png",
    slug: "seo-melbourne-expert-advice-for-blog-post-writing-fundamentals-2",
  },
  {
    id: 1,
    title: "Tools of Cloud Services: Powering the Future of SMBs",
    excerpt: "Explore the essential cloud ecosystem—from Trello and Slack to Salesforce—that drives efficiency for Melbourne’s vibrant business community.",
    date: "April 21, 2026",
    readTime: "7 min read",
    author: "FI Digital Team",
    category: "Cloud Ecosystem",
    image: "/images/it-infrastructure.png",
    slug: "tools-of-cloud-services",
  },
  {
    id: 2,
    title: "Zoho Partners Australia: Unlocking the Power of Zoho",
    excerpt: "Discover how Zoho's cloud-based suite transforms business operations, CRM, and productivity for Australian companies.",
    date: "April 21, 2026",
    readTime: "8 min read",
    author: "FI Digital Consulting",
    category: "Zoho Solutions",
    image: "/images/it-software.png",
    slug: "unlocking-the-power-of-zoho-for-australian-businesses",
  },
  {
    id: 3,
    title: "Scaling Trust, Time, and Talent: Responsible AI as Australia’s Productivity Game-Changer",
    excerpt: "Australia’s productivity story won’t be rewritten by longer hours – it’ll be shaped by better leverage. Explore how responsible AI scales time, talent, and trust across every business.",
    date: "April 21, 2026",
    readTime: "12 min read",
    author: "Senior Engineering Team",
    category: "AI & Productivity",
    image: "/images/home_hero_professional.png",
    slug: "scaling-trust-time-and-talent-responsible-ai-as-australias-productivity-game-changer",
  }
];


export default function BlogClient() {
  const containerRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.to(".hero-reveal", {
      y: 0,
      opacity: 1,
      duration: 0.6,
      stagger: 0.12,
      ease: "power3.out",
    });

    gsap.utils.toArray(".blog-card").forEach((card) => {
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

  return (
    <div ref={containerRef} style={{ background: "var(--bg)", color: "var(--text)" }}>
      <main style={{ paddingTop: "var(--header-h)" }}>
        
        {/* ══ HERO ══ */}
        <section style={{
          position: "relative",
          minHeight: "85vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          overflow: "hidden",
          padding: "calc(var(--header-h) + 40px) 1.5rem 100px",
          background: "var(--bg)",
          borderBottom: "1px solid var(--border)"
        }}>
          {/* Background Visual — high-fidelity image with premium mask */}
          <div className="hero-img-blend" style={{
            position: "absolute", top: 0, right: 0,
            width: "65%", height: "100%", zIndex: 0,
            opacity: 0.25, pointerEvents: "none",
          }}>
            <Image
              src="/images/home_hero_professional.png"
              alt=""
              fill
              style={{
                objectFit: "cover",
                maskImage: "radial-gradient(circle at right, black, transparent 85%)",
                WebkitMaskImage: "radial-gradient(circle at right, black, transparent 85%)",
              }}
              priority
            />
          </div>

          <div className="container" style={{ position: "relative", zIndex: 1 }}>
            <div style={{ maxWidth: "900px" }}>
              <div className="hero-reveal" style={{ 
                opacity: 0, transform: "translateY(10px)",
                display: "inline-flex", alignItems: "center", gap: "0.5rem",
                background: "rgba(29,78,216,0.08)", color: "var(--primary)",
                padding: "0.45rem 1rem", borderRadius: "50px",
                fontWeight: 700, fontSize: "0.85rem", letterSpacing: "0.5px",
                marginBottom: "1.5rem"
              }}>
                <Newspaper size={14} /> Insights & Thought Leadership
              </div>

              <h1 className="hero-reveal" style={{
                opacity: 0, transform: "translateY(10px)",
                fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
                fontWeight: 900, lineHeight: 1.1,
                marginBottom: "2rem", letterSpacing: "-0.02em"
              }}>
                Latest <span style={{ color: "var(--primary)" }}>News & Updates</span>
              </h1>

              <p className="hero-reveal" style={{
                opacity: 0, transform: "translateY(10px)",
                fontSize: "clamp(1.1rem, 2vw, 1.3rem)",
                color: "var(--text-muted)", lineHeight: 1.7, maxWidth: "750px",
                fontWeight: 500
              }}>
                We help companies succeed in the digital world through impactful storytelling and digital experience. Explore our latest thinking on software, data, and AI.
              </p>
            </div>
          </div>
        </section>


        {/* ══ BLOG LIST ══ */}
        <section style={{ padding: "80px 1.5rem 120px", background: "var(--bg-secondary)" }}>
          <div className="container">
            <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "2.5rem", maxWidth: "1100px", margin: "0 auto" }}>
              {blogPosts.map((post, index) => (
                <div key={post.id} className="blog-card" style={{ opacity: 0 }}>
                  <Link href={`/${post.slug}`} style={{ textDecoration: "none", color: "inherit" }}>
                    <article style={{
                      padding: "3rem",
                      borderRadius: "24px",
                      background: "var(--bg)",
                      border: "1px solid var(--border)",
                      transition: "all 0.3s cubic-bezier(0.16,1,0.3,1)",
                      position: "relative",
                      overflow: "hidden"
                    }} className="article-inner">
                      
                      {/* Category & Stats */}
                      <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "1.5rem", marginBottom: "2rem" }}>
                        <div style={{ 
                          background: "rgba(29, 78, 216, 0.1)", 
                          color: "var(--primary)", 
                          padding: "0.5rem 1.25rem", 
                          borderRadius: "100px", 
                          fontSize: "0.75rem", 
                          fontWeight: 800,
                          textTransform: "uppercase",
                          letterSpacing: "0.1em"
                        }}>
                          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                            {post.category === "AI & Productivity" && <Sparkles size={14} />}
                            {post.category === "Zoho Solutions" && <Settings size={14} />}
                            {post.category === "Cloud Ecosystem" && <Cloud size={14} />}
                            {post.category === "SEO & Strategy" && <Search size={14} />}
                            {post.category === "Digital Strategy" && <Zap size={14} />}
                            {post.category === "UX Design" && <Brain size={14} />}
                            {post.category}
                          </div>
                        </div>
                        
                        <div style={{ display: "flex", alignItems: "center", gap: "1.5rem", color: "var(--text-muted)", fontSize: "0.85rem", fontWeight: 600 }}>
                          <span style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}><Calendar size={15} opacity={0.6} /> {post.date}</span>
                          <span style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}><Clock size={15} opacity={0.6} /> {post.readTime}</span>
                        </div>
                      </div>

                      {/* Title & Excerpt */}
                      <div style={{ maxWidth: "800px" }}>
                        <h2 style={{ 
                          fontSize: "clamp(1.5rem, 3vw, 2.25rem)", 
                          fontWeight: 900, 
                          marginBottom: "1.5rem", 
                          lineHeight: 1.2, 
                          transition: "color 0.2s ease" 
                        }} className="post-title">
                          {post.title}
                        </h2>
                        <p style={{ 
                          color: "var(--text-muted)", 
                          lineHeight: 1.7, 
                          marginBottom: "2.5rem", 
                          fontSize: "clamp(1rem, 1.2vw, 1.15rem)",
                          fontWeight: 400
                        }}>
                          {post.excerpt}
                        </p>
                      </div>

                      {/* Footer: Author & CTA */}
                      <div style={{ 
                        display: "flex", 
                        alignItems: "center", 
                        justifyContent: "space-between", 
                        borderTop: "1px solid var(--border)",
                        paddingTop: "2rem"
                      }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                          <div style={{ 
                            width: "40px", height: "40px", 
                            borderRadius: "12px", 
                            background: "rgba(29, 78, 216, 0.1)", 
                            display: "flex", alignItems: "center", justifyContent: "center", 
                            color: "var(--primary)" 
                          }}>
                            <User size={20} />
                          </div>
                          <div>
                            <div style={{ fontWeight: 800, fontSize: "0.9rem" }}>{post.author}</div>
                            <div style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>FI Digital Australia</div>
                          </div>
                        </div>
                        
                        <div style={{ 
                          display: "flex", 
                          alignItems: "center", 
                          gap: "0.6rem", 
                          color: "var(--primary)", 
                          fontWeight: 800, 
                          fontSize: "1rem",
                          transition: "gap 0.3s ease"
                        }} className="read-more">
                          Full Article <ArrowRight size={20} />
                        </div>
                      </div>
                    </article>
                  </Link>
                </div>
              ))}
            </div>


            {/* Pagination or Load More (Placeholder) */}
            <div style={{ textAlign: "center", marginTop: "5rem" }}>
              <button className="btn-main" style={{ padding: "0.8rem 2.5rem", borderRadius: "100px", fontWeight: 800 }}>
                View All Insights
              </button>
            </div>
          </div>
        </section>
      </main>

      <style jsx>{`
        .blog-card:hover .article-inner {
          transform: translateY(-8px);
          border-color: var(--primary) !important;
          box-shadow: 0 25px 60px -15px rgba(29, 78, 216, 0.15);
        }
        .hero-img-blend { filter: grayscale(1) brightness(0.8); }
        [data-theme='dark'] .hero-img-blend { filter: grayscale(1) brightness(0.4) contrast(1.2); }
        .blog-card:hover .post-title {
          color: var(--primary);
        }
        .blog-card:hover .read-more {
          gap: 1rem !important;
        }
        .btn-main {
          background: var(--primary);
          color: #fff;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 10px 20px rgba(29, 78, 216, 0.2);
        }
        .btn-main:hover {
          background: var(--primary-dark);
          transform: translateY(-2px);
          box-shadow: 0 15px 30px rgba(29, 78, 216, 0.3);
        }
      `}</style>

    </div>
  );
}
