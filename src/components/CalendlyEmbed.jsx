"use client";

import { useEffect, useRef } from "react";

/**
 * Calendly inline scheduling widget (sprint Task 2 — /book-discovery).
 *
 * A raw <script> in JSX won't execute in React, so we load Calendly's widget.js
 * and initialise the inline widget manually against our container ref. Manual init
 * (rather than the data-url auto-scan) is SPA-safe: it re-renders correctly on
 * client-side navigation back to the page, with no duplicate widgets.
 */
const WIDGET_SRC = "https://assets.calendly.com/assets/external/widget.js";

export default function CalendlyEmbed({
  url = "https://calendly.com/rohan-fristinetech/30min",
  minWidth = "320px",
  height = "700px",
}) {
  const containerRef = useRef(null);

  useEffect(() => {
    let cancelled = false;

    const render = () => {
      if (cancelled || !containerRef.current || !window.Calendly) return;
      containerRef.current.innerHTML = ""; // avoid duplicate widget on re-init
      window.Calendly.initInlineWidget({ url, parentElement: containerRef.current });
    };

    if (window.Calendly) {
      render();
      return () => { cancelled = true; };
    }

    let script = document.querySelector(`script[src="${WIDGET_SRC}"]`);
    if (!script) {
      script = document.createElement("script");
      script.src = WIDGET_SRC;
      script.async = true;
      document.body.appendChild(script);
    }
    script.addEventListener("load", render);

    return () => {
      cancelled = true;
      script.removeEventListener("load", render);
    };
  }, [url]);

  return <div ref={containerRef} style={{ minWidth, height }} aria-label="Book a discovery session" />;
}
