"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight, ChevronRight, ChevronDown, Plus, Minus,
  Smartphone, Truck, Heart, Briefcase, Users,
  Wifi, WifiOff, Fingerprint, Upload, Shield, CheckCircle2,
  MapPin, Camera, ClipboardList, Bell
} from "lucide-react";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

const PRIMARY   = "#F97316"; // Orange
const SECONDARY = "#E11D48"; // Rose

/* ── WHAT WE BUILD ────────────────────────────────────────────────── */
const BUILDS = [
  {
    icon: Truck, num: "01", color: "#F97316",
    title: "Field Service & Operations Apps",
    intro: "Applications for workers operating away from the office — built for poor connectivity, physical environments, and fast task completion.",
    detail: "Job assignment and dispatch. Route navigation. Digital forms with offline capture. Photo and document attachment. Barcode and QR code scanning. GPS tracking and geofencing. Signature capture. Completion reports submitted automatically on reconnect. We have built field apps for logistics operators, utilities field teams, and civil engineering contractors.",
    chips: ["Offline-first", "GPS & geofencing", "Signature capture", "Barcode scanning", "Auto-sync on reconnect"],
    delivery: "14–18 wks",
  },
  {
    icon: Users, num: "02", color: "#E11D48",
    title: "Customer-Facing Mobile Apps",
    intro: "Branded iOS and Android apps for your customers or clients — designed around your brand and your customer journey.",
    detail: "Account management. Order tracking. Service booking. Document access. Push notifications. In-app messaging. We design customer mobile apps that feel native to your brand and reduce inbound support volume by giving customers self-service access to what they need.",
    chips: ["Push notifications", "In-app messaging", "Order tracking", "Service booking", "Branded UI"],
    delivery: "12–16 wks",
  },
  {
    icon: Heart, num: "03", color: "#7C3AED",
    title: "Healthcare & Care Coordination Apps",
    intro: "Mobile applications for care workers, nurses, and allied health professionals — built to Australian healthcare data security requirements.",
    detail: "Patient and resident profiles. Care plan access and updates. Medication management. Incident reporting. Rostering and scheduling. Built to Australian healthcare data security requirements including My Health Records Act alignment and encrypted local storage.",
    chips: ["Encrypted storage", "Medication management", "Incident reporting", "Rostering", "HIPAA-aligned"],
    delivery: "16–20 wks",
  },
  {
    icon: Briefcase, num: "04", color: "#0891B2",
    title: "Enterprise Internal Mobile Apps",
    intro: "Approval workflows, expense submission, inventory management, and quality checklists — connected to your existing enterprise systems.",
    detail: "Approval workflows. Expense submission. Internal directories. Inventory management. Quality assurance checklists. Built for seamless integration into your CRM, ERP, or custom backend. Single sign-on via your identity provider. Role-based access mirrored from your enterprise directory.",
    chips: ["SSO integration", "ERP / CRM connected", "Approval workflows", "Inventory", "QA checklists"],
    delivery: "10–14 wks",
  },
];

/* ── WHY MOBILE ISN'T OPTIONAL — expandable scenarios ────────────── */
const SCENARIOS = [
  {
    title: "Logistics & field workers can't use desktop systems in the field",
    short: "A logistics driver receiving jobs, capturing signatures, photographing damage, and submitting completion reports shouldn't need a desktop or a browser-based workaround on a small screen.",
    detail: "FI Digital builds field apps that work in the environments your workers actually operate in — poor connectivity, physical conditions, time pressure. Offline-first architecture means the app works with zero signal and syncs everything the moment connectivity is restored. No lost data. No failed submissions. No double-handling.",
  },
  {
    title: "Healthcare workers need patient data at the bedside, not at a desk",
    short: "A healthcare worker accessing patient notes, updating care plans, and logging incidents needs a mobile interface purpose-built for clinical workflows — not a desktop system forced onto a tablet.",
    detail: "We have built mobile applications for aged care providers, disability service organisations, and primary health care groups. Every application is built with encrypted local storage, biometric authentication, and data handling practices aligned to Australian healthcare data security requirements.",
  },
  {
    title: "Your customers expect a native mobile experience",
    short: "A responsive website is not a mobile app. Your customers expect push notifications, biometric login, offline access, and an interface that feels native to their device — not a browser window.",
    detail: "We build customer-facing iOS and Android applications that reduce support calls, increase engagement, and create a direct channel between your customers and your business. React Native gives you a single codebase at 60–70% of the cost of separate iOS and Android builds without sacrificing native performance.",
  },
];

/* ── ENGINEERING CAPABILITIES ─────────────────────────────────────── */
const CAPABILITIES = [
  {
    icon: WifiOff, color: "#F97316",
    title: "Offline-First Architecture",
    desc: "Data stored locally, operations queued, automatic sync on reconnect. Designed for the network conditions your users actually face — not ideal lab conditions.",
  },
  {
    icon: Fingerprint, color: "#E11D48",
    title: "Biometric & Security",
    desc: "Face ID, Touch ID, and PIN fallback. Encrypted local storage. Certificate pinning for API security. Jailbreak and root detection.",
  },
  {
    icon: Camera, color: "#7C3AED",
    title: "Device Integration",
    desc: "Camera, GPS, barcode and QR scanner, NFC, push notifications, and background sync. We access every native capability your use case requires.",
  },
  {
    icon: Upload, color: "#0891B2",
    title: "App Store Publishing",
    desc: "Full App Store and Google Play submission management — metadata optimisation, screenshot production, review preparation, and post-launch monitoring.",
  },
];

/* ── TIMELINE PHASES ──────────────────────────────────────────────── */
const PHASES = [
  {
    num: "01", weeks: "Wks 1–3",  title: "Discovery & UX Design", color: "#F97316",
    desc: "User research, journey mapping, wireframe prototyping, offline data flow design, and API contract design. You see and approve the UX before any development begins.",
  },
  {
    num: "02", weeks: "Wks 4–14", title: "Development",            color: "#E11D48",
    desc: "Sprint-based delivery with fortnightly TestFlight or Firebase App Distribution builds you can install on real devices. Working software every two weeks.",
  },
  {
    num: "03", weeks: "Wks 12–16",title: "QA & Device Testing",   color: "#7C3AED",
    desc: "iOS and Android device matrix testing, performance profiling, offline simulation, accessibility review, and security penetration testing.",
  },
  {
    num: "04", weeks: "Wks 15–18",title: "Launch",                 color: "#0891B2",
    desc: "App Store and Google Play submission, staged rollout, monitoring via Sentry and Datadog, and a two-week hypercare period with dedicated engineering support.",
  },
];

/* ── FAQ ──────────────────────────────────────────────────────────── */
const FAQS = [
  { q: "Should I build for iOS, Android, or both?",             a: "We recommend building for both platforms using React Native. A single React Native codebase deploys to both iOS and Android at roughly 60 to 70 percent of the cost of two separate native builds without sacrificing performance or native feel." },
  { q: "How long does it take to build a mobile app in Australia?", a: "A typical mobile application takes 14 to 18 weeks from Discovery to App Store launch. Simpler apps with a focused feature set can ship in 10 to 12 weeks. Complex apps with extensive integrations and offline capability may take 20 to 24 weeks." },
  { q: "Can the app work without internet connectivity?",        a: "Yes. We design offline-first mobile applications as standard for field service, logistics, and healthcare use cases. Data is stored locally on the device, operations are queued, and everything syncs automatically when connectivity is restored. No data is lost during offline periods." },
  { q: "How much does a custom mobile app cost in Australia?",  a: "Mobile apps typically range from $60,000 for a focused single-purpose app to $250,000 or more for complex enterprise apps with extensive integrations and offline capability. We provide a detailed estimate after the Discovery phase." },
  { q: "Can the mobile app integrate with our back-office systems?", a: "Yes. We integrate mobile apps with Zoho CRM, SAP, Oracle, Salesforce, Xero, MYOB, Databricks, Snowflake, custom REST APIs, and any system with an accessible API. Integration complexity is scoped and costed precisely in Discovery." },
  { q: "What happens after the app launches?",                  a: "We offer an optional ongoing support retainer covering bug fixes, OS compatibility updates, feature enhancements, and performance optimisation. We deliver complete source code and documentation at handover — no lock-in, no ongoing licence fees for code we write." },
];

/* ═══════════════════════════════════════════════════════════════════ */
export default function MobileAppClient() {
  const containerRef   = useRef(null);
  const [openBuild,    setOpenBuild]    = useState(null);
  const [openScenario, setOpenScenario] = useState(null);
  const [openFaq,      setOpenFaq]      = useState(null);
  const [activePhase,  setActivePhase]  = useState(0);

  useGSAP(() => {
    gsap.from(".hero-badge", { y: -14, autoAlpha: 0, duration: 0.4, ease: "power2.out" });
    gsap.from(".hero-h1",   { y: 32,  autoAlpha: 0, duration: 0.6, delay: 0.1,  ease: "power3.out" });
    gsap.from(".hero-sub",  { y: 20,  autoAlpha: 0, duration: 0.5, delay: 0.22, ease: "power2.out" });
    gsap.from(".hero-cta",  { y: 18,  autoAlpha: 0, duration: 0.45,delay: 0.34, ease: "power2.out" });

    gsap.utils.toArray(".reveal").forEach(el => {
      gsap.fromTo(el,
        { y: 28, autoAlpha: 0 },
        { y: 0, autoAlpha: 1, duration: 0.6, ease: "power2.out",
          clearProps: "transform,opacity,visibility",
          scrollTrigger: { trigger: el, start: "top 87%", once: true } }
      );
    });

    gsap.fromTo(".cap-card",
      { y: 26, autoAlpha: 0 },
      { y: 0, autoAlpha: 1, duration: 0.42, stagger: 0.1, ease: "power2.out",
        scrollTrigger: { trigger: ".cap-grid", start: "top 85%", once: true } }
    );
  }, { scope: containerRef });

  return (
    <div ref={containerRef}>
      <style>{`
        @keyframes fadeUp { from{opacity:0;transform:translateY(-6px)} to{opacity:1;transform:translateY(0)} }
        .expand-body { animation: fadeUp 0.25s ease; }
        .build-item  { transition: background 0.2s ease; }
        .build-item:hover { background: var(--bg-secondary) !important; }
        .scen-item   { transition: background 0.2s ease; }
        .scen-item:hover { background: var(--bg-secondary) !important; }
        .cap-card    { transition: transform 0.2s ease; }
        .cap-card:hover { transform: translateY(-4px); }
        .phase-btn   { transition: all 0.2s ease; }
        .phase-btn:hover { opacity: 1 !important; }
        @media (max-width: 860px) {
          .cap-grid    { grid-template-columns: 1fr 1fr !important; }
          .trust-grid  { grid-template-columns: 1fr 1fr !important; }
          .phase-strip { flex-wrap: wrap !important; }
          .when-layout { flex-direction: column !important; }
        }
        @media (max-width: 540px) {
          .cap-grid    { grid-template-columns: 1fr !important; }
          .trust-grid  { grid-template-columns: 1fr !important; }
        }
      `}</style>

      <main style={{ paddingTop: "var(--header-h)", overflow: "hidden" }}>

        {/* ══ HERO ══════════════════════════════════════════════════════ */}
        <section style={{
          position: "relative", minHeight: "82vh", display: "flex", alignItems: "center",
          padding: "0 1.5rem 60px", background: "var(--bg)", overflow: "hidden",
        }}>
          {/* Glow orbs */}
          <div style={{ position:"absolute", top:"15%", right:"3%", width:"640px", height:"640px",
            background:`radial-gradient(circle, ${PRIMARY}12 0%, transparent 70%)`,
            pointerEvents:"none", zIndex:0 }} />
          <div style={{ position:"absolute", bottom:"10%", left:"8%", width:"420px", height:"420px",
            background:`radial-gradient(circle, ${SECONDARY}0d 0%, transparent 70%)`,
            pointerEvents:"none", zIndex:0 }} />

          {/* Hero image */}
          <div style={{ position:"absolute", top:0, right:0, width:"52%", height:"100%", zIndex:0, opacity:0.35, pointerEvents:"none" }}>
            <Image src="/images/mobile-app-hero.png" alt="Mobile Application Development" fill
              style={{ objectFit:"cover",
                maskImage:"radial-gradient(ellipse at right, black, transparent 72%)",
                WebkitMaskImage:"radial-gradient(ellipse at right, black, transparent 72%)" }} />
          </div>

          <div className="container" style={{ position:"relative", zIndex:1 }}>
            <div className="hero-badge" style={{
              display:"inline-flex", alignItems:"center", gap:"0.75rem",
              background:"rgba(249,115,22,0.1)", border:"1px solid rgba(249,115,22,0.25)",
              padding:"0.6rem 1.25rem", borderRadius:"50px", marginBottom:"2rem"
            }}>
              <Smartphone size={16} color={PRIMARY} />
              <span style={{ color:PRIMARY, fontWeight:700, fontSize:"0.88rem" }}>
                React Native · iOS · Android · Offline-First · 200+ Engineers
              </span>
            </div>

            <h1 className="hero-h1 section-title" style={{
              maxWidth:"900px", fontSize:"clamp(2.2rem,5vw,3.8rem)", lineHeight:1.1, marginBottom:"1.5rem"
            }}>
              Mobile Application Development<br />
              <span style={{ color:"var(--primary)", fontWeight:300 }}>
                Apps Your Team and Customers Actually Use
              </span>
            </h1>

            <p className="hero-sub section-desc" style={{
              maxWidth:"700px", fontSize:"1.1rem", color:"var(--text-muted)", marginBottom:"3rem", lineHeight:1.82
            }}>
              Native iOS and Android apps for field workers, customers, and enterprise teams. React Native for cross-platform performance. Offline capability for remote environments. Real-time sync. Biometric authentication. FI Digital — 10 years delivering mobile apps for logistics, healthcare, financial services, and field service businesses across Australia.
            </p>

            <div className="hero-cta" style={{ display:"flex", flexWrap:"wrap", gap:"1rem" }}>
              <Link href="/book-discovery" style={{
                background:PRIMARY, color:"#fff", padding:"1rem 2rem",
                borderRadius:"8px", fontWeight:600, textDecoration:"none",
                display:"inline-flex", alignItems:"center", gap:"0.5rem"
              }}>
                Book a Mobile App Discovery Session <ArrowRight size={18} />
              </Link>
              <Link href="/case-studies#mobile-applications" style={{
                background:"transparent", color:"var(--text)", padding:"1rem 2rem",
                borderRadius:"8px", fontWeight:600, textDecoration:"none",
                display:"inline-flex", alignItems:"center", gap:"0.5rem",
                border:"1px solid var(--border)"
              }}>
                View Case Studies <ChevronRight size={18} />
              </Link>
            </div>
          </div>
        </section>

        {/* ══ STAT STRIP ════════════════════════════════════════════════ */}
        <div style={{ background:"var(--bg-secondary)", borderTop:"1px solid var(--border)", borderBottom:"1px solid var(--border)", padding:"2.25rem 1.5rem" }}>
          <div className="container">
            <div style={{ display:"flex", flexWrap:"wrap", gap:"2rem", justifyContent:"center", textAlign:"center" }}>
              {[
                { stat:"iOS + Android",label:"Single React Native codebase" },
                { stat:"14–18 wks",    label:"Discovery to App Store launch" },
                { stat:"Offline-first",label:"Works with zero connectivity" },
                { stat:"100%",         label:"Australian data residency" },
              ].map((s,i) => (
                <div key={i} className="reveal" style={{ flex:"1 1 180px" }}>
                  <div style={{ fontSize:"clamp(1.5rem,3vw,2.2rem)", fontWeight:900, color:PRIMARY, marginBottom:"0.35rem" }}>{s.stat}</div>
                  <div style={{ fontSize:"0.88rem", color:"var(--text-muted)", fontWeight:500 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ══ SECTION 1: MOBILE IS NOT OPTIONAL — expandable scenarios ═ */}
        <section className="section" style={{ background:"var(--bg)" }}>
          <div className="container">
            <div className="when-layout reveal" style={{ display:"flex", flexWrap:"wrap", gap:"5rem", alignItems:"flex-start" }}>

              {/* Left label */}
              <div style={{ flex:"0 0 340px" }}>
                <div className="section-label">The Mandate</div>
                <h2 className="section-title" style={{ marginBottom:"1.25rem" }}>
                  Mobile Is Not Optional
                </h2>
                <p style={{ fontSize:"0.97rem", color:"var(--text-muted)", lineHeight:1.8 }}>
                  Your workforce is mobile. Your customers are mobile. The tools they use need to meet them where they are — on a job site, at a bedside, or in a client's office.
                </p>
              </div>

              {/* Right expandable scenarios */}
              <div style={{ flex:"1 1 420px", display:"flex", flexDirection:"column", gap:"0.75rem" }}>
                {SCENARIOS.map((item, i) => (
                  <div key={i} className="scen-item reveal" style={{
                    background:"var(--card-bg)", borderRadius:"16px",
                    overflow:"hidden", boxShadow:"0 2px 12px rgba(0,0,0,0.05)"
                  }}>
                    <button onClick={() => setOpenScenario(openScenario===i ? null : i)}
                      style={{ width:"100%", display:"flex", alignItems:"center", justifyContent:"space-between",
                        padding:"1.4rem 1.75rem", background:"none", border:"none",
                        cursor:"pointer", textAlign:"left", gap:"1rem" }}>
                      <div style={{ flex:1 }}>
                        <div style={{ fontSize:"1rem", fontWeight:700, color:"var(--text)", marginBottom:"0.35rem" }}>{item.title}</div>
                        {openScenario !== i && (
                          <div style={{ fontSize:"0.86rem", color:"var(--text-muted)", lineHeight:1.6 }}>{item.short}</div>
                        )}
                      </div>
                      <div style={{
                        width:"30px", height:"30px", borderRadius:"50%",
                        background:openScenario===i ? `${PRIMARY}15` : "var(--bg-secondary)",
                        display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0
                      }}>
                        {openScenario===i
                          ? <Minus size={15} color={PRIMARY} />
                          : <Plus  size={15} color="var(--text-muted)" />
                        }
                      </div>
                    </button>
                    {openScenario===i && (
                      <div className="expand-body" style={{ padding:"0 1.75rem 1.5rem", borderTop:"1px solid var(--border)" }}>
                        <p style={{ fontSize:"0.93rem", color:"var(--text-muted)", lineHeight:1.8, paddingTop:"1.1rem", margin:0 }}>{item.detail}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ══ SECTION 2: WHAT WE BUILD — numbered expandable ════════════ */}
        <section className="section" style={{ background:"var(--bg-secondary)" }}>
          <div className="container">
            <div className="reveal" style={{ textAlign:"center", marginBottom:"4rem" }}>
              <div className="section-label">Capabilities</div>
              <h2 className="section-title" style={{ maxWidth:"680px", margin:"0 auto" }}>
                What We Build
              </h2>
            </div>

            <div style={{ display:"flex", flexDirection:"column" }}>
              {BUILDS.map((b, i) => (
                <div key={i} className="build-item reveal" style={{
                  background: openBuild===i ? "var(--card-bg)" : "transparent",
                  borderRadius:"18px",
                  borderBottom: i < BUILDS.length-1 ? "1px solid var(--border)" : "none",
                  overflow:"hidden",
                  boxShadow: openBuild===i ? "0 4px 28px rgba(0,0,0,0.07)" : "none",
                  marginBottom: openBuild===i ? "0.75rem" : 0,
                  transition:"all 0.25s ease"
                }}>
                  <button onClick={() => setOpenBuild(openBuild===i ? null : i)}
                    style={{ width:"100%", display:"flex", alignItems:"center",
                      padding:"2rem 1.75rem", background:"none", border:"none",
                      cursor:"pointer", textAlign:"left", gap:"1.5rem" }}>

                    <span style={{
                      fontSize:"clamp(2rem,4vw,3rem)", fontWeight:900, color:b.color,
                      opacity: openBuild===i ? 1 : 0.25, lineHeight:1,
                      minWidth:"3rem", transition:"opacity 0.25s ease"
                    }}>{b.num}</span>

                    <div style={{ flex:1, display:"flex", alignItems:"center", gap:"1rem" }}>
                      <div style={{ width:"46px", height:"46px", borderRadius:"13px",
                        background:`${b.color}${openBuild===i ? "18" : "0d"}`,
                        display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0,
                        transition:"background 0.25s ease" }}>
                        <b.icon size={20} color={b.color} />
                      </div>
                      <div>
                        <div style={{ fontSize:"1.15rem", fontWeight:800, color:"var(--text)" }}>{b.title}</div>
                        {openBuild !== i && (
                          <div style={{ fontSize:"0.85rem", color:"var(--text-muted)", marginTop:"0.2rem" }}>{b.intro}</div>
                        )}
                      </div>
                    </div>

                    <ChevronDown size={20} color="var(--text-muted)"
                      style={{ flexShrink:0, transform:openBuild===i?"rotate(180deg)":"rotate(0)", transition:"0.3s" }} />
                  </button>

                  {openBuild===i && (
                    <div className="expand-body" style={{ padding:"0 1.75rem 2rem 2rem" }}>
                      <div style={{ display:"grid", gridTemplateColumns:"1fr auto", gap:"3rem", alignItems:"start" }}>
                        <div>
                          <p style={{ fontSize:"0.97rem", color:"var(--text)", lineHeight:1.85, marginBottom:"1.5rem" }}>{b.detail}</p>
                          <div style={{ display:"flex", flexWrap:"wrap", gap:"0.45rem" }}>
                            {b.chips.map((chip,j) => (
                              <span key={j} style={{
                                padding:"0.3rem 0.85rem", background:`${b.color}12`,
                                borderRadius:"50px", fontSize:"0.8rem", fontWeight:700, color:b.color
                              }}>{chip}</span>
                            ))}
                          </div>
                        </div>
                        <div style={{ textAlign:"center", padding:"1.5rem", background:`${b.color}08`, borderRadius:"16px", minWidth:"140px" }}>
                          <div style={{ fontSize:"0.6rem", fontWeight:800, color:b.color, textTransform:"uppercase", letterSpacing:"0.12em", marginBottom:"0.5rem" }}>Delivery</div>
                          <div style={{ fontSize:"1.4rem", fontWeight:900, color:b.color, lineHeight:1.2 }}>{b.delivery}</div>
                          <div style={{ fontSize:"0.72rem", color:"var(--text-muted)", fontWeight:500, marginTop:"0.3rem" }}>Discovery to launch</div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ SECTION 3: ENGINEERING CAPABILITIES — 4-card grid ════════ */}
        <section className="section" style={{ background:"var(--bg)" }}>
          <div className="container">
            <div className="reveal" style={{ textAlign:"center", marginBottom:"4rem" }}>
              <div className="section-label">Engineering Approach</div>
              <h2 className="section-title" style={{ maxWidth:"740px", margin:"0 auto 1rem auto" }}>
                Our Mobile Engineering Approach
              </h2>
              <p style={{ color:"var(--text-muted)", fontSize:"0.97rem", maxWidth:"560px", margin:"0 auto" }}>
                React Native is our primary mobile framework — a single codebase that compiles to native iOS and Android with full access to device hardware.
              </p>
            </div>

            <div className="cap-grid" style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:"1.5rem" }}>
              {CAPABILITIES.map((cap, i) => (
                <div key={i} className="cap-card" style={{
                  background:"var(--card-bg)", borderRadius:"20px",
                  padding:"2rem 1.75rem", boxShadow:"0 2px 14px rgba(0,0,0,0.05)",
                  display:"flex", flexDirection:"column", gap:"1rem"
                }}>
                  <div style={{ width:"52px", height:"52px", borderRadius:"14px",
                    background:`${cap.color}12`,
                    display:"flex", alignItems:"center", justifyContent:"center" }}>
                    <cap.icon size={24} color={cap.color} />
                  </div>
                  <h3 style={{ fontSize:"1.05rem", fontWeight:800, color:"var(--text)", margin:0 }}>{cap.title}</h3>
                  <p style={{ fontSize:"0.88rem", color:"var(--text-muted)", lineHeight:1.75, margin:0 }}>{cap.desc}</p>
                </div>
              ))}
            </div>

            {/* React Native highlight strip */}
            <div className="reveal" style={{
              marginTop:"2.5rem", background:"var(--card-bg)", borderRadius:"18px",
              padding:"1.75rem 2.5rem", boxShadow:"0 2px 12px rgba(0,0,0,0.05)",
              display:"flex", flexWrap:"wrap", alignItems:"center", gap:"2rem", justifyContent:"center"
            }}>
              <span style={{ fontSize:"0.72rem", fontWeight:800, color:"var(--text-muted)", textTransform:"uppercase", letterSpacing:"0.08em" }}>Built with</span>
              {[
                { src:"/images/react-nobg.png",    alt:"React Native",  label:"React Native",  w:22 },
                { src:"/images/typescript-nobg.png",alt:"TypeScript",   label:"TypeScript",    w:22 },
                { src:"/images/aws-nobg.png",       alt:"AWS",          label:"AWS Sydney",    w:22 },
                { src:"/images/azure-nobg.png",     alt:"Azure",        label:"Azure AU East", w:22 },
              ].map((l,i) => (
                <div key={i} style={{ display:"flex", alignItems:"center", gap:"0.55rem" }}>
                  <div style={{ position:"relative", width:`${l.w}px`, height:"22px" }}>
                    <Image src={l.src} alt={l.alt} fill style={{ objectFit:"contain" }} />
                  </div>
                  <span style={{ fontSize:"0.88rem", fontWeight:700, color:"var(--text)" }}>{l.label}</span>
                </div>
              ))}
              <div style={{ width:"1px", height:"28px", background:"var(--border)" }} />
              <div style={{ display:"flex", alignItems:"center", gap:"0.5rem" }}>
                <CheckCircle2 size={14} color={PRIMARY} />
                <span style={{ fontSize:"0.82rem", fontWeight:700, color:"var(--text-muted)" }}>100% Australian data residency</span>
              </div>
            </div>
          </div>
        </section>

        {/* ══ SECTION 4: TIMELINE — interactive phase selector ═════════ */}
        <section className="section" style={{ background:"var(--bg-secondary)" }}>
          <div className="container" style={{ maxWidth:"900px" }}>
            <div className="reveal" style={{ textAlign:"center", marginBottom:"4rem" }}>
              <div className="section-label">The Process</div>
              <h2 className="section-title" style={{ maxWidth:"700px", margin:"0 auto" }}>
                Timeline and Engagement Model
              </h2>
            </div>

            {/* Phase selector */}
            <div className="phase-strip reveal" style={{ display:"flex", gap:"0.5rem", marginBottom:"2.5rem", justifyContent:"center", flexWrap:"wrap" }}>
              {PHASES.map((ph, i) => (
                <button key={i} className="phase-btn" onClick={() => setActivePhase(i)}
                  style={{
                    padding:"0.55rem 1.25rem", borderRadius:"50px", border:"none", cursor:"pointer",
                    fontWeight:700, fontSize:"0.84rem",
                    background: activePhase===i ? ph.color : "var(--card-bg)",
                    color: activePhase===i ? "#fff" : "var(--text-muted)",
                    boxShadow: activePhase===i ? `0 6px 20px ${ph.color}40` : "0 1px 6px rgba(0,0,0,0.06)",
                  }}>
                  {ph.num} {ph.title}
                </button>
              ))}
            </div>

            {/* Active phase detail */}
            {(() => {
              const ph = PHASES[activePhase];
              return (
                <div className="expand-body" key={activePhase} style={{
                  background:"var(--card-bg)", borderRadius:"24px",
                  padding:"3rem", boxShadow:"0 8px 40px rgba(0,0,0,0.07)",
                  display:"flex", gap:"3rem", alignItems:"center"
                }}>
                  <div style={{
                    width:"90px", height:"90px", borderRadius:"50%",
                    background:`${ph.color}14`, flexShrink:0,
                    display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", gap:"0.1rem"
                  }}>
                    <span style={{ fontSize:"1.6rem", fontWeight:900, color:ph.color, lineHeight:1 }}>{ph.num}</span>
                    <span style={{ fontSize:"0.62rem", fontWeight:700, color:ph.color, opacity:0.7 }}>{ph.weeks}</span>
                  </div>
                  <div style={{ flex:1 }}>
                    <h3 style={{ fontSize:"1.4rem", fontWeight:800, color:"var(--text)", marginBottom:"0.75rem" }}>{ph.title}</h3>
                    <p style={{ fontSize:"1rem", color:"var(--text-muted)", lineHeight:1.82, margin:0 }}>{ph.desc}</p>
                  </div>
                </div>
              );
            })()}
          </div>
        </section>

        {/* ══ TRUST / CAPABILITY BADGES ════════════════════════════════ */}
        <section style={{ background:"var(--bg)", padding:"3rem 1.5rem", borderBottom:"1px solid var(--border)" }}>
          <div className="container">
            <div className="trust-grid reveal" style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:"1rem" }}>
              {[
                { icon:WifiOff,      color:PRIMARY,    label:"Offline-First by Design",       sub:"Works with zero connectivity" },
                { icon:Fingerprint,  color:SECONDARY,  label:"Biometric Authentication",      sub:"Face ID, Touch ID, PIN fallback" },
                { icon:Shield,       color:"#7C3AED",  label:"Encrypted Local Storage",       sub:"Certificate pinning & jailbreak detection" },
                { icon:MapPin,       color:"#0891B2",  label:"GPS & Native Device Access",    sub:"Camera, NFC, barcode, geofencing" },
                { icon:Bell,         color:"#F59E0B",  label:"Push Notifications",            sub:"Background sync & real-time alerts" },
                { icon:CheckCircle2, color:"#059669",  label:"App Store & Google Play",       sub:"Full submission management included" },
              ].map((b,i) => (
                <div key={i} style={{
                  background:"var(--card-bg)", borderRadius:"16px",
                  padding:"1.5rem", boxShadow:"0 2px 12px rgba(0,0,0,0.05)",
                  display:"flex", alignItems:"flex-start", gap:"1rem"
                }}>
                  <div style={{ width:"42px", height:"42px", borderRadius:"11px",
                    background:`${b.color}12`, display:"flex", alignItems:"center",
                    justifyContent:"center", flexShrink:0 }}>
                    <b.icon size={18} color={b.color} />
                  </div>
                  <div>
                    <div style={{ fontWeight:700, fontSize:"0.9rem", color:"var(--text)" }}>{b.label}</div>
                    <div style={{ fontSize:"0.78rem", color:"var(--text-muted)", marginTop:"0.2rem" }}>{b.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ FAQ ══════════════════════════════════════════════════════ */}
        <section className="section" style={{ background:"var(--bg-secondary)" }}>
          <div className="container" style={{ maxWidth:"860px" }}>
            <div className="reveal" style={{ textAlign:"center", marginBottom:"4rem" }}>
              <div className="section-label">FAQ</div>
              <h2 className="section-title" style={{ maxWidth:"700px", margin:"0 auto" }}>
                Frequently Asked Questions
              </h2>
            </div>
            <div style={{ display:"flex", flexDirection:"column", gap:"0.75rem" }}>
              {FAQS.map((faq,i) => (
                <div key={i} className="reveal" style={{
                  background:"var(--card-bg)", borderRadius:"16px",
                  boxShadow:"0 1px 8px rgba(0,0,0,0.05)", overflow:"hidden"
                }}>
                  <button onClick={() => setOpenFaq(openFaq===i ? null : i)}
                    style={{ width:"100%", display:"flex", alignItems:"center", justifyContent:"space-between",
                      padding:"1.35rem 1.75rem", background:"none", border:"none",
                      cursor:"pointer", textAlign:"left", gap:"1rem" }}>
                    <span style={{ fontSize:"0.97rem", fontWeight:700, color:"var(--text)", flex:1 }}>{faq.q}</span>
                    <ChevronDown size={18} color="var(--text-muted)"
                      style={{ minWidth:"18px", transform:openFaq===i?"rotate(180deg)":"rotate(0)", transition:"0.3s" }} />
                  </button>
                  {openFaq===i && (
                    <div className="expand-body" style={{ padding:"0 1.75rem 1.5rem", borderTop:"1px solid var(--border)" }}>
                      <p style={{ fontSize:"0.93rem", color:"var(--text-muted)", lineHeight:1.8, paddingTop:"1rem", margin:0 }}>{faq.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ CTA ══════════════════════════════════════════════════════ */}
        <section className="section" style={{
          background:`linear-gradient(135deg, ${PRIMARY}0d 0%, ${SECONDARY}08 100%)`,
          borderTop:"1px solid var(--border)"
        }}>
          <div className="container" style={{ textAlign:"center" }}>
            <div className="reveal">
              <h2 style={{ fontSize:"clamp(1.8rem,4vw,2.8rem)", fontWeight:800, marginBottom:"1.25rem" }}>
                Ready to build your mobile application?
              </h2>
              <p style={{ fontSize:"1.05rem", color:"var(--text-muted)", maxWidth:"560px",
                margin:"0 auto 2.5rem", lineHeight:1.75 }}>
                Book a free Discovery session. We'll map your mobile use case, propose an architecture, and show you what offline-first looks like for your specific environment.
              </p>
              <div style={{ display:"flex", flexWrap:"wrap", gap:"1rem", justifyContent:"center" }}>
                <Link href="/book-discovery" style={{
                  background:PRIMARY, color:"#fff", padding:"1rem 2.25rem",
                  borderRadius:"8px", fontWeight:600, textDecoration:"none",
                  display:"inline-flex", alignItems:"center", gap:"0.5rem"
                }}>
                  Book a Mobile App Discovery Session <ArrowRight size={18} />
                </Link>
                <Link href="/case-studies#mobile-applications" style={{
                  background:"transparent", color:"var(--text)", padding:"1rem 2.25rem",
                  borderRadius:"8px", fontWeight:600, textDecoration:"none",
                  display:"inline-flex", alignItems:"center", gap:"0.5rem",
                  border:"1px solid var(--border)"
                }}>
                  View Case Studies <ChevronRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
