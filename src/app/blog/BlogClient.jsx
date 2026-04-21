"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  ArrowRight, Calendar, Clock, User, ArrowUpRight, 
  Newspaper, Sparkles, Settings, Cloud, Search, 
  Zap, Brain, ChevronRight, Filter, Tag,
  MessageSquare, Layout, Cpu, Database, 
  PenTool, Smartphone, Globe
} from "lucide-react";
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
    slug: "scaling-trust-time-and-talent-responsible-ai-as-australias-productivity-game-changer",
  }
];

const categories = ["All", ...new Set(blogPosts.map(post => post.category))];

const getCategoryIcon = (category) => {
  switch(category) {
    case "AI & Productivity": return <Sparkles size={20} />;
    case "Zoho Solutions": return <Settings size={20} />;
    case "Cloud Ecosystem": return <Cloud size={20} />;
    case "SEO & Strategy": return <Search size={20} />;
    case "Digital Strategy": return <Zap size={20} />;
    case "UX Design": return <Brain size={20} />;
    case "Tech Insights": return <Cpu size={20} />;
    case "Local SEO": return <Globe size={20} />;
    case "Marketing Automation": return <Layout size={20} />;
    case "Data & Analytics": return <Database size={20} />;
    case "Marketing & Strategy": return <PenTool size={20} />;
    default: return <Newspaper size={20} />;
  }
};

export default function BlogClient() {
  const containerRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPosts = activeCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.to(".hero-reveal", {
      y: 0,
      opacity: 1,
      duration: 0.8,
      stagger: 0.1,
      ease: "power4.out",
    });

    gsap.fromTo(".blog-card", 
      { y: 30, opacity: 0 },
      { 
        y: 0, opacity: 1, 
        duration: 0.6, 
        stagger: 0.05, 
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".blog-grid",
          start: "top 85%",
          once: true
        }
      }
    );
  }, { scope: containerRef, dependencies: [activeCategory] });

  return (
    <div ref={containerRef} style={{ background: "var(--bg)", color: "var(--text)" }}>
      <main>
        
        {/* ══ HERO SECTION ══ */}
        <section className="hero-section" style={{
          position: "relative",
          minHeight: "80vh",
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
          padding: "clamp(120px, 15vh, 160px) 1.5rem 100px",
          background: "var(--bg)",
        }}>
          {/* Background Visual — right-side image with gradient mask */}
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
            <Image
              src="/images/Blog.png"
              alt=""
              fill
              style={{
                objectFit: "cover",
                maskImage: "radial-gradient(circle at right, black, transparent 80%)",
                WebkitMaskImage: "radial-gradient(circle at right, black, transparent 80%)",
              }}
              priority
            />
          </div>

          <div className="container" style={{ position: "relative", zIndex: 3, textAlign: "left" }}>
            <div style={{ maxWidth: "1000px", textAlign: "left" }}>
              <div className="hero-reveal" style={{ 
                opacity: 0, transform: "translateY(10px)",
                display: "inline-flex", alignItems: "center", gap: "0.5rem",
                background: "rgba(29,78,216,0.08)", color: "var(--primary)",
                padding: "0.45rem 1.25rem", borderRadius: "50px",
                fontWeight: 800, fontSize: "0.8rem", textTransform: "uppercase",
                letterSpacing: "0.1em", marginBottom: "1.5rem",
                border: "1px solid rgba(29, 78, 216, 0.2)"
              }}>
                <Newspaper size={14} /> Intelligence Feed
              </div>

              <h1 className="hero-reveal" style={{
                opacity: 0, transform: "translateY(10px)",
                fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
                fontWeight: 900, lineHeight: 1.1,
                marginBottom: "2rem", letterSpacing: "-0.04em"
              }}>
                Expert <span style={{ 
                  fontWeight: 300, 
                  background: "linear-gradient(135deg, var(--primary) 0%, #6366F1 100%)", 
                  WebkitBackgroundClip: "text", 
                  WebkitTextFillColor: "transparent", 
                  backgroundClip: "text" 
                }}>Perspectives</span> <br />
                on Digital Strategy.
              </h1>

              <p className="hero-reveal" style={{
                opacity: 0, transform: "translateY(10px)",
                fontSize: "clamp(1.1rem, 2vw, 1.3rem)",
                color: "var(--text-muted)", lineHeight: 1.7, maxWidth: "750px",
                fontWeight: 500, margin: 0
              }}>
                Research-led analysis on software engineering, data platforms, and the emerging AI landscape in Australian enterprise.
              </p>
            </div>
          </div>
        </section>

        {/* ══ FEED SECTION ══ */}
        <section style={{ padding: "80px 1.5rem 120px", background: "var(--bg)" }}>
          <div className="container">
            
            {/* Category Filter Bar */}
            <div className="reveal" style={{ marginBottom: '5rem', display: 'flex', alignItems: 'center', gap: '2.5rem', flexWrap: 'wrap', borderBottom: '1px solid var(--border)', paddingBottom: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text)', fontWeight: 800, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                <Filter size={16} color="var(--primary)" /> Filter by
              </div>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    style={{
                      padding: '0.5rem 1.25rem',
                      borderRadius: '12px',
                      border: 'none',
                      background: activeCategory === cat ? 'rgba(29, 78, 216, 0.1)' : 'transparent',
                      color: activeCategory === cat ? 'var(--primary)' : 'var(--text-muted)',
                      fontSize: '0.9rem',
                      fontWeight: activeCategory === cat ? 800 : 600,
                      cursor: 'pointer',
                      transition: 'all 0.2s ease'
                    }}
                    className="category-btn"
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Grid Layout (No Images) */}
            <div className="blog-grid" style={{ 
              display: "grid", 
              gridTemplateColumns: "repeat(auto-fill, minmax(400px, 1fr))", 
              gap: "2rem" 
            }}>
              {filteredPosts.map((post) => (
                <div key={post.id} className="blog-card" style={{ opacity: 0 }}>
                  <Link href={`/${post.slug}`} style={{ textDecoration: "none", color: "inherit" }}>
                    <article style={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      background: "var(--bg-secondary)",
                      borderRadius: "24px",
                      border: "1px solid var(--border)",
                      transition: "all 0.4s cubic-bezier(0.16,1,0.3,1)",
                      padding: '3rem',
                      position: 'relative'
                    }} className="article-inner">
                      
                      {/* Icon & Category */}
                      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2.5rem' }}>
                         <div style={{ 
                           width: '48px', height: '48px', borderRadius: '14px', 
                           background: 'var(--bg)', border: '1px solid var(--border)',
                           display: 'flex', alignItems: 'center', justifyContent: 'center',
                           color: 'var(--primary)'
                         }}>
                            {getCategoryIcon(post.category)}
                         </div>
                         <div style={{ color: 'var(--primary)', fontWeight: 800, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                            {post.category}
                         </div>
                      </div>

                      <div style={{ flex: 1 }}>
                        <h3 style={{ 
                          fontSize: "1.75rem", 
                          fontWeight: 900, 
                          marginBottom: "1.5rem", 
                          lineHeight: 1.25, 
                          color: 'var(--text)',
                          transition: "color 0.2s ease",
                          letterSpacing: '-0.02em'
                        }} className="post-title">
                          {post.title}
                        </h3>
                        
                        <p style={{ 
                          color: "var(--text-muted)", 
                          lineHeight: 1.7, 
                          marginBottom: "3rem", 
                          fontSize: "1.05rem",
                          fontWeight: 400
                        }}>
                          {post.excerpt}
                        </p>
                      </div>

                      {/* Card Footer */}
                      <div style={{ 
                        display: "flex", 
                        alignItems: "center", 
                        justifyContent: "space-between", 
                        borderTop: "1px solid var(--border)",
                        paddingTop: "2rem"
                      }}>
                        <div style={{ display: "flex", flexWrap: 'wrap', gap: "1.5rem", color: "var(--text-muted)", fontSize: "0.85rem", fontWeight: 600 }}>
                          <span style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}><Calendar size={14} opacity={0.6} /> {post.date}</span>
                          <span style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}><Clock size={14} opacity={0.6} /> {post.readTime}</span>
                        </div>
                        
                        <div className="arrow-box" style={{ 
                          width: '40px', height: '40px', borderRadius: '10px',
                          background: 'rgba(29, 78, 216, 0.05)', display: 'flex',
                          alignItems: 'center', justifyContent: 'center',
                          color: "var(--primary)", transition: "all 0.3s ease"
                        }}>
                          <ArrowRight size={20} />
                        </div>
                      </div>
                    </article>
                  </Link>
                </div>
              ))}
            </div>

          </div>
        </section>
      </main>

      <style jsx>{`
        .article-inner:hover {
          transform: translateY(-8px);
          border-color: var(--primary) !important;
          background: var(--bg);
          box-shadow: 0 30px 60px -20px rgba(0,0,0,0.08);
        }
        .article-inner:hover .post-title {
          color: var(--primary);
        }
        .article-inner:hover .arrow-box {
          background: var(--primary);
          color: #fff;
          transform: translateX(5px);
        }
        .category-btn:hover {
          color: var(--primary);
        }
        .load-more-btn:hover {
          border-color: var(--primary) !important;
          transform: translateY(-2px);
        }
        
        @media (max-width: 640px) {
          .blog-grid {
            grid-template-columns: 1fr !important;
          }
          .article-inner {
            padding: 2rem !important;
          }
        }
      `}</style>

    </div>
  );
}
