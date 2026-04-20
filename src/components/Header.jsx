"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Plus, Minus, Grid3X3, ChevronRight } from "lucide-react";
import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";

/* ─────────────────────────────────────────────
   PRIMARY NAV — shown individually in the bar
───────────────────────────────────────────────*/
const primaryNav = [
    { href: "/", label: "Home" },
    {
        href: "/product-engineering",
        label: "Product Engineering",
        subLinks: [
            { href: "/product-engineering/web-applications",    label: "Web Applications" },
            { href: "/product-engineering/mobile-applications",  label: "Mobile Applications" },
            { href: "/product-engineering/saas-mvp",             label: "SaaS & MVP Builds" },
            { href: "/product-engineering/product-modernisation",label: "Product Modernisation" },
        ]
    },
    {
        href: "/data-platforms",
        label: "Data Platforms",
        subLinks: [
            { href: "/data-platforms/databricks",           label: "Databricks Consulting" },
            { href: "/data-platforms/microsoft-fabric",     label: "Microsoft Fabric" },
            { href: "/data-platforms/snowflake",            label: "Snowflake Consulting" },
            { href: "/data-platforms/business-intelligence",label: "Business Intelligence" },
        ]
    },
    {
        href: "/ai-agents",
        label: "AI Agents",
        subLinks: [
            { href: "/ai-agents/rag-document-intelligence", label: "RAG & Document Intelligence" },
            { href: "/ai-agents/copilots-digital-workers",  label: "Copilots & Digital Workers" },
            { href: "/ai-agents/workflow-automation",       label: "Workflow Automation" },
        ]
    },
    {
        href: "/business-systems",
        label: "Business Systems",
        subLinks: [
            { href: "/business-systems",                    label: "Modernisation Hub" },
            { href: "/zoho-consultants/",                   label: "Zoho Consultants" },
            { href: "/zoho-partners-australia/",            label: "Zoho Partners Australia" },
            { href: "/zoho-implementation-specialist/",     label: "Implementation Specialist" },
            { href: "/crm-implementation/",                 label: "CRM Implementation" },
            { href: "/desk-implementation/",                label: "Desk Implementation" },
            { href: "/custom-development/",                 label: "Custom Development" },
            { href: "/3rd-party-zoho-integration/",         label: "3rd Party Integration" },
            { href: "/creator/",                            label: "Creator" },
        ]
    },
    {
        href: "javascript:void(0)",
        label: "Industries",
        subLinks: [
            { href: "/financial-services-wealth",       label: "Financial Services & Wealth" },
            { href: "/healthcare-aged-care",            label: "Healthcare & Aged Care" },
            { href: "/resources-mining-logistics",      label: "Resources, Mining & Logistics" },
        ]
    },
    {
        href: "/why-fi-digital",
        label: "Why Us",
        subLinks: [
            { href: "/why-fi-digital/global-delivery",         label: "Global Delivery" },
            { href: "/why-fi-digital/partnerships",            label: "Partnerships" },
            { href: "/why-fi-digital/australian-compliance",   label: "Australian Compliance" },
        ]
    },
    { href: "/contact", label: "Contact" },
];

/* ─────────────────────────────────────────────
   MEGA MENU — groups overflow menus into columns
───────────────────────────────────────────────*/
const megaMenuColumns = [
    {
        heading: "Zoho For",
        href: "javascript:void(0)",
        links: [
            { href: "/energy-renewables/",  label: "Energy & Renewables" },
            { href: "/manufacturing/",       label: "Manufacturing" },
            { href: "/retail/",              label: "Retail" },
            { href: "/distribution/",        label: "Distribution" },
            { href: "/logistics/",           label: "Logistics" },
            { href: "/solar-energy/",        label: "Solar Energy" },
            { href: "/it-software/",         label: "IT & Software" },
            { href: "/financial-services/",  label: "Financial Services" },
            { href: "/mortgage-brokers/",    label: "Mortgage Brokers" },
        ]
    },
    {
        heading: "Other Services",
        href: "javascript:void(0)",
        links: [
            { href: "/search-engine-optimisation/",                      label: "Search Engine Optimisation" },
            { href: "/digital-transformation-consultant-melbourne/",     label: "Digital Transformation" },
            { href: "/strategy/",                                        label: "Strategy" },
            { href: "/mobile-app-development/",                          label: "Mobile App Development" },
            { href: "/web-app-development/",                             label: "Web App Development" },
            { href: "/user-experience/",                                 label: "User Experience" },
            { href: "/design/",                                          label: "Design" },
            { href: "/content/",                                         label: "Content" },
            { href: "/support/",                                         label: "Support" },
            { href: "/build/",                                           label: "Build" },
        ]
    },
    {
        heading: "Resources",
        href: "javascript:void(0)",
        links: [
            { href: "/case-studies/",                                         label: "Case Studies" },
            { href: "/exploring-promotions-in-casino-online-non-aams-sicuri-8/", label: "Online Casino Promotions" },
        ]
    },
];

/* All nav items flattened — used by the mobile menu */
const allNavLinks = [
    ...primaryNav,
    {
        href: "javascript:void(0)",
        label: "More",
        isMegaMenu: true,
        otherServices: megaMenuColumns.map(col => ({
            label: col.heading,
            subLinks: col.links,
        }))
    }
];

export default function Header() {
    const pathname = usePathname();
    const [scrolled, setScrolled]             = useState(false);
    const [visible, setVisible]               = useState(true);
    const [mobileOpen, setMobileOpen]         = useState(false);
    const [mobileSubmenu, setMobileSubmenu]   = useState(null);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [activeMegaSub, setActiveMegaSub]   = useState(null);
    const closeTimer     = useRef(null);
    const megaSubTimer   = useRef(null);
    const mobileOpenRef  = useRef(false);   // mirrors mobileOpen for scroll handler
    const lastScrollY    = useRef(0);
    const ticking        = useRef(false);

    useEffect(() => {
        const handleScroll = () => {
            // ── Never hide header or close menu while mobile menu is open ──
            if (mobileOpenRef.current) return;

            if (!ticking.current) {
                window.requestAnimationFrame(() => {
                    const currentY = window.scrollY;
                    setScrolled(currentY > 20);
                    if (currentY > lastScrollY.current && currentY > 80) {
                        setVisible(false);
                        setActiveDropdown(null);
                    } else {
                        setVisible(true);
                    }
                    lastScrollY.current = currentY;
                    ticking.current = false;
                });
                ticking.current = true;
            }
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        setMobileOpen(false);
        setMobileSubmenu(null);
        setActiveDropdown(null);
    }, [pathname]);

    // Keep ref in sync so scroll handler always sees latest value
    useEffect(() => {
        mobileOpenRef.current = mobileOpen;
        document.body.style.overflow = mobileOpen ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [mobileOpen]);


    const handleNavEnter = (label) => {
        if (closeTimer.current) { clearTimeout(closeTimer.current); closeTimer.current = null; }
        setActiveDropdown(label);
        // reset sub when switching top-level
        if (label !== "__mega__") setActiveMegaSub(null);
    };
    const handleNavLeave = () => {
        closeTimer.current = setTimeout(() => {
            setActiveDropdown(null);
            setActiveMegaSub(null);
        }, 120);
    };
    const handleMegaSubEnter = (heading) => {
        if (megaSubTimer.current) { clearTimeout(megaSubTimer.current); megaSubTimer.current = null; }
        setActiveMegaSub(heading);
    };
    const handleMegaSubLeave = () => {
        megaSubTimer.current = setTimeout(() => setActiveMegaSub(null), 100);
    };
    const toggleMobileSubmenu = (label) => {
        setMobileSubmenu(mobileSubmenu === label ? null : label);
    };

    const MEGA_KEY = "__mega__";
    const isMegaOpen = activeDropdown === MEGA_KEY;

    return (
        <>
            <header
                className={["site-header", scrolled ? "scrolled" : "", visible ? "visible" : "hidden"].join(" ")}
                role="banner"
            >
                <div style={{
                    maxWidth: "1440px", margin: "0 auto", padding: "0.5rem 1.5rem",
                    width: "100%", display: "flex", alignItems: "center",
                    justifyContent: "space-between", flexWrap: "nowrap", minHeight: "80px", gap: "0.5rem"
                }}>

                    {/* Logo */}
                    <Link href="/" aria-label="FI Digital – Home" style={{ display: "flex", alignItems: "center", textDecoration: "none", flexShrink: 0, marginRight: "1rem" }}>
                        <Logo variant="theme" width="180px" height="54px" />
                    </Link>

                    {/* ── Desktop Nav ── */}
                    <nav className="nav-desktop" aria-label="Main navigation"
                        style={{ display: "flex", alignItems: "center", gap: "0", flex: 1, flexWrap: "nowrap", overflow: "visible" }}
                    >
                        {/* PRIMARY items */}
                        {primaryNav.map((link) => {
                            const isOpen = activeDropdown === link.label;
                            return (
                                <div
                                    key={link.label}
                                    className="nav-item-wrapper"
                                    style={{ position: "relative", flexShrink: 0 }}
                                    onMouseEnter={() => link.subLinks ? handleNavEnter(link.label) : undefined}
                                    onMouseLeave={() => link.subLinks ? handleNavLeave() : undefined}
                                >
                                    <Link
                                        href={link.href}
                                        className={`nav-link ${pathname === link.href || (link.href !== "/" && link.href !== "javascript:void(0)" && pathname.startsWith(link.href)) ? "active" : ""}`}
                                        style={{
                                            color: "var(--text)", fontSize: "0.8rem", fontWeight: 700,
                                            letterSpacing: "0.01em", textDecoration: "none",
                                            display: "flex", alignItems: "center", gap: "0.3rem",
                                            padding: "0.25rem 0.6rem", whiteSpace: "nowrap"
                                        }}
                                    >
                                        {link.label}
                                        {link.subLinks && (
                                            <ChevronDown size={13} opacity={0.5}
                                                style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.25s ease" }}
                                            />
                                        )}
                                    </Link>

                                    {link.subLinks && (
                                        <div
                                            className="dropdown-menu"
                                            style={{
                                                opacity: isOpen ? 1 : 0,
                                                visibility: isOpen ? "visible" : "hidden",
                                                transform: isOpen ? "translateX(-50%) translateY(0)" : "translateX(-50%) translateY(10px)",
                                                pointerEvents: isOpen ? "auto" : "none",
                                            }}
                                            onMouseEnter={() => handleNavEnter(link.label)}
                                            onMouseLeave={() => handleNavLeave()}
                                        >
                                            {link.subLinks.map((sub) => (
                                                <Link key={sub.href} href={sub.href}
                                                    className={`dropdown-item${pathname === sub.href ? " active" : ""}`}
                                                    style={{
                                                        display: "block", padding: "0.7rem 1.25rem",
                                                        fontSize: "0.85rem", fontWeight: 600,
                                                        color: pathname === sub.href ? "var(--primary)" : "var(--text)",
                                                        textDecoration: "none", transition: "all 0.2s ease",
                                                        borderBottom: pathname === sub.href ? "2px solid var(--primary)" : "2px solid transparent",
                                                    }}
                                                >
                                                    {sub.label}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            );
                        })}

                        {/* ── MORE dropdown (compact 2-level flyout) ── */}
                        <div
                            className="nav-item-wrapper"
                            style={{ position: "relative", flexShrink: 0 }}
                            onMouseEnter={() => handleNavEnter(MEGA_KEY)}
                            onMouseLeave={() => handleNavLeave()}
                        >
                            <button
                                className={`nav-link nav-more-btn${isMegaOpen ? " active" : ""}`}
                                style={{
                                    background: "none", border: "none", color: "var(--text)",
                                    fontSize: "0.8rem", fontWeight: 700, letterSpacing: "0.01em",
                                    display: "flex", alignItems: "center", gap: "0.3rem",
                                    padding: "0.25rem 0.6rem", whiteSpace: "nowrap", cursor: "pointer"
                                }}
                            >
                                More
                                <ChevronDown size={13} opacity={0.5}
                                    style={{ transform: isMegaOpen ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.25s ease" }}
                                />
                            </button>

                            {/* Level-1/2: Mega Menu Container */}
                            <div
                                className="mega-menu-container"
                                style={{
                                    position: "absolute",
                                    right: "0",
                                    top: "calc(100% + 4px)",
                                    transform: isMegaOpen ? "translateY(0)" : "translateY(10px)",
                                    width: "850px",
                                    background: "var(--card-bg)",
                                    border: "1px solid var(--border)",
                                    borderRadius: "24px",
                                    boxShadow: "0 30px 60px rgba(0,0,0,0.15)",
                                    opacity: isMegaOpen ? 1 : 0,
                                    visibility: isMegaOpen ? "visible" : "hidden",
                                    pointerEvents: isMegaOpen ? "auto" : "none",
                                    transition: "all 0.3s ease-out",
                                    zIndex: 1000,
                                    overflow: "hidden",
                                }}
                                onMouseEnter={() => handleNavEnter(MEGA_KEY)}
                                onMouseLeave={() => handleNavLeave()}
                            >
                                <div style={{ display: "flex", minHeight: "350px", background: "var(--card-bg)" }}>
                                    {/* Left Panel: Category List */}
                                    <div style={{ width: "240px", borderRight: "1px solid var(--border)", padding: "1rem" }}>
                                        {megaMenuColumns.map((col, idx) => {
                                            const isSubOpen = activeMegaSub === col.heading;
                                            return (
                                                <div 
                                                    key={col.heading}
                                                    onMouseEnter={() => handleMegaSubEnter(col.heading)}
                                                    className={`mega-cat-item ${isSubOpen ? "active" : ""}`}
                                                    style={{
                                                        padding: "0.8rem 1rem",
                                                        borderRadius: "10px",
                                                        cursor: "pointer",
                                                        fontSize: "0.9rem",
                                                        fontWeight: 750,
                                                        display: "flex",
                                                        alignItems: "center",
                                                        justifyContent: "space-between",
                                                        marginBottom: "0.25rem",
                                                        color: isSubOpen ? "var(--primary)" : "var(--text)",
                                                        background: isSubOpen ? "rgba(79, 70, 229, 0.05)" : "transparent"
                                                    }}
                                                >
                                                    {col.heading}
                                                    <ChevronRight size={14} opacity={isSubOpen ? 1 : 0.3} />
                                                </div>
                                            );
                                        })}
                                    </div>
                                    {/* Right Panel: Sub-links Grid */}
                                    <div style={{ flex: 1, padding: "1.5rem", overflowY: "auto" }}>
                                        {activeMegaSub !== null ? (
                                            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem" }}>
                                                {megaMenuColumns.find(c => c.heading === activeMegaSub)?.links.map((sub) => (
                                                    <Link
                                                        key={sub.href}
                                                        href={sub.href}
                                                        style={{
                                                            padding: "0.75rem 1rem",
                                                            borderRadius: "8px",
                                                            fontSize: "0.85rem",
                                                            fontWeight: 600,
                                                            color: pathname === sub.href ? "var(--primary)" : "var(--text-muted)",
                                                            textDecoration: "none",
                                                            transition: "all 0.2s ease",
                                                            display: "flex",
                                                            alignItems: "center",
                                                            gap: "0.5rem"
                                                        }}
                                                        className="dropdown-item"
                                                    >
                                                        <div style={{ width: "4px", height: "4px", borderRadius: "50%", background: "var(--primary)", opacity: 0.4, flexShrink: 0 }} />
                                                        {sub.label}
                                                    </Link>
                                                ))}
                                            </div>
                                        ) : (
                                            <div style={{ height: "100%", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--text-muted)", fontSize: "0.9rem", opacity: 0.6 }}>
                                                Hover over a category to see services
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </nav>

                    {/* Desktop Actions */}
                    <div className="header-actions-desktop" style={{
                        display: "flex", alignItems: "center", gap: "1rem",
                        borderLeft: "1px solid var(--border)", paddingLeft: "1rem",
                        marginLeft: "0.5rem", flexShrink: 0
                    }}>
                        <ThemeToggle />
                        <Link href="/book-discovery" style={{
                            padding: "0.5rem 1.1rem", borderRadius: "8px",
                            background: "var(--primary)", color: "#fff",
                            textDecoration: "none", fontSize: "0.82rem",
                            fontWeight: "600", whiteSpace: "nowrap"
                        }}>
                            Book a Discovery
                        </Link>
                    </div>

                    {/* Mobile Hamburger */}
                    <button
                        className="nav-mobile-btn"
                        onClick={() => setMobileOpen((o) => !o)}
                        aria-expanded={mobileOpen}
                        aria-label="Toggle mobile menu"
                        style={{
                            display: "none", background: "none", border: "none",
                            cursor: "pointer", padding: "0.5rem", color: "var(--text)",
                            position: "relative", zIndex: 1001, marginLeft: "auto"
                        }}
                    >
                        <div className={`hamburger ${mobileOpen ? "open" : ""}`}>
                            <span></span><span></span><span></span>
                        </div>
                    </button>
                </div>
            </header>

            {/* ── Mobile Menu ── */}
            <div className={`mobile-menu ${mobileOpen ? "open" : ""}`}>
                <nav style={{ padding: "80px 1.5rem 2.5rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2rem", padding: "0 0.5rem" }}>
                        <span style={{ fontSize: "0.9rem", fontWeight: 700, opacity: 0.6, textTransform: "uppercase" }}>Theme</span>
                        <ThemeToggle />
                    </div>

                    {allNavLinks.map((link) => (
                        <div key={link.label} style={{ display: "flex", flexDirection: "column" }}>
                            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                                {link.href && link.href !== "javascript:void(0)" ? (
                                    <Link
                                        href={link.href}
                                        onClick={() => setMobileOpen(false)}
                                        style={{
                                            padding: "1rem 0.5rem", fontSize: "1.2rem", fontWeight: 800,
                                            color: "var(--text)", textDecoration: "none", flex: 1
                                        }}
                                    >
                                        {link.label}
                                    </Link>
                                ) : (
                                    <span
                                        style={{
                                            padding: "1rem 0.5rem", fontSize: "1.2rem", fontWeight: 800,
                                            color: "var(--text)", flex: 1, cursor: "pointer"
                                        }}
                                        onClick={() => toggleMobileSubmenu(link.label)}
                                    >
                                        {link.label}
                                    </span>
                                )}
                                {(link.subLinks || link.isMegaMenu) && (
                                    <button
                                        onClick={(e) => { e.preventDefault(); toggleMobileSubmenu(link.label); }}
                                        style={{
                                            background: "rgba(0,0,0,0.05)", border: "none", borderRadius: "8px",
                                            width: "40px", height: "40px", display: "flex",
                                            alignItems: "center", justifyContent: "center", color: "var(--text)", cursor: "pointer"
                                        }}
                                    >
                                        {mobileSubmenu === link.label ? <Minus size={18} /> : <Plus size={18} />}
                                    </button>
                                )}
                            </div>

                            {link.subLinks && !link.isMegaMenu && mobileSubmenu === link.label && (
                                <div style={{
                                    paddingLeft: "1rem", display: "flex", flexDirection: "column",
                                    borderLeft: "2px solid var(--primary)", margin: "0.5rem 0 0.5rem 0.5rem"
                                }}>
                                    {link.subLinks.map((sub) => (
                                        <Link key={sub.href} href={sub.href}
                                            onClick={() => setMobileOpen(false)}
                                            style={{
                                                padding: "0.75rem 0.5rem", fontSize: "1rem", fontWeight: 600,
                                                color: "var(--text-muted)", textDecoration: "none"
                                            }}
                                        >
                                            {sub.label}
                                        </Link>
                                    ))}
                                </div>
                            )}

                            {link.isMegaMenu && mobileSubmenu === link.label && (
                                <div style={{
                                    paddingLeft: "1rem", display: "flex", flexDirection: "column",
                                    borderLeft: "2px solid var(--primary)", margin: "0.5rem 0 0.5rem 0.5rem"
                                }}>
                                    {link.otherServices.map((cat) => (
                                        <div key={cat.label} style={{ marginBottom: "1rem" }}>
                                            <div style={{ fontSize: "0.85rem", fontWeight: 800, color: "var(--primary)", textTransform: "uppercase", marginBottom: "0.5rem" }}>{cat.label}</div>
                                            <div style={{ display: "grid", gap: "0.5rem" }}>
                                                {cat.subLinks.map(sub => (
                                                    <Link
                                                        key={sub.href}
                                                        href={sub.href}
                                                        onClick={() => setMobileOpen(false)}
                                                        style={{
                                                            padding: "0.4rem 0", fontSize: "0.95rem", fontWeight: 600,
                                                            color: "var(--text-muted)", textDecoration: "none"
                                                        }}
                                                    >
                                                        {sub.label}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </nav>
            </div>

            <style>{`
              /* ── Desktop nav ── */
              .nav-desktop { display: flex; }
              .header-actions-desktop { display: flex; }
              .nav-mobile-btn { display: none; }

              /* ── Hamburger ── */
              .hamburger { display:flex; flex-direction:column; justify-content:center; gap:5px; width:26px; height:22px; }
              .hamburger span { display:block; height:2.5px; width:100%; background:var(--text); border-radius:4px; transition:all 0.32s cubic-bezier(0.16,1,0.3,1); transform-origin:center; }
              .hamburger.open span:nth-child(1) { transform:translateY(7.5px) rotate(45deg); }
              .hamburger.open span:nth-child(2) { opacity:0; transform:scaleX(0); }
              .hamburger.open span:nth-child(3) { transform:translateY(-7.5px) rotate(-45deg); }

              /* ── Nav link ── */
              .nav-link { transition:all 0.2s ease; border-bottom:2px solid transparent; }
              .nav-link:hover, .nav-link.active { color:var(--primary) !important; }
              .nav-more-btn { transition:color 0.2s ease; }
              .nav-more-btn:hover, .nav-more-btn.active { color:var(--primary) !important; }

              /* ── Regular dropdown ── */
              .dropdown-menu {
                position:absolute;
                top:calc(100% + 4px);
                left:50%;
                background:var(--card-bg);
                border:1px solid var(--border);
                border-radius:16px;
                min-width:240px;
                padding:0.75rem;
                box-shadow:0 20px 40px rgba(0,0,0,0.12);
                transition:opacity 0.25s cubic-bezier(0.16,1,0.3,1), transform 0.25s cubic-bezier(0.16,1,0.3,1), visibility 0.25s;
                z-index:1000;
              }
              .dropdown-item:hover {
                background:var(--hover-bg);
                color:var(--primary) !important;
                padding-left:1.5rem !important;
              }

              /* ── Mega Menu dropdown category row hover ── */
              .mega-cat-item {
                transition: all 0.2s ease;
              }
              .mega-cat-item:hover {
                background: rgba(79, 70, 229, 0.05) !important;
                color: var(--primary) !important;
              }

              /* ── Mobile menu ── */
              .mobile-menu {
                position:fixed; top:0; left:0; right:0; bottom:0;
                background:var(--bg); z-index:999;
                transform:translateX(100%);
                transition:transform 0.38s cubic-bezier(0.16,1,0.3,1);
                overflow-y:auto; -webkit-overflow-scrolling:touch;
              }
              .mobile-menu.open { transform:translateX(0); }

              /* ── Breakpoint ── */
              @media (max-width: 1024px) {
                .nav-desktop { display:none !important; }
                .header-actions-desktop { display:none !important; }
                .nav-mobile-btn { display:flex !important; align-items:center; justify-content:center; }
              }
              @media (max-width: 480px) {
                .site-header .logo-container { min-width:auto !important; }
              }
            `}</style>
        </>
    );
}