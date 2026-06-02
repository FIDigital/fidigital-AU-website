"use client";

import { useState, useRef, useEffect } from "react";

/**
 * Embeds the Zoho Web-to-Lead form (served at /zoho-form) in an auto-sizing iframe.
 *
 * - src points at the /zoho-form route handler (NOT /zoho-form.html, which 404s and
 *   would render the whole site layout inside the iframe).
 * - Auto-height: the form posts {type:'iframeHeight'} on load/resize; we grow the
 *   iframe to match so there's no inner scrollbar (scrolling="no").
 * - Theme sync: pushes light/dark into the iframe so the form matches the site.
 *
 * Shared by /contact and /book-discovery.
 */
export default function ZohoFormEmbed({ title = "Contact Us Form", fallbackHeight = "850px" }) {
  const [height, setHeight] = useState(fallbackHeight);
  const iframeRef = useRef(null);

  useEffect(() => {
    const handleMessage = (event) => {
      if (event.data && event.data.type === "iframeHeight") {
        setHeight(`${event.data.height}px`);
      }
    };
    window.addEventListener("message", handleMessage);

    const pushTheme = (win) => {
      try {
        const isDark =
          document.documentElement.classList.contains("dark") ||
          document.documentElement.getAttribute("data-theme") === "dark" ||
          window.matchMedia("(prefers-color-scheme: dark)").matches;
        win.postMessage({ type: "theme", isDark }, "*");
      } catch (e) {}
    };

    const timer = setTimeout(() => {
      if (iframeRef.current && iframeRef.current.contentWindow) pushTheme(iframeRef.current.contentWindow);
    }, 1500);

    return () => {
      window.removeEventListener("message", handleMessage);
      clearTimeout(timer);
    };
  }, []);

  return (
    <div style={{ width: "100%", minHeight: height, transition: "min-height 0.3s ease" }}>
      <iframe
        ref={iframeRef}
        src="/zoho-form"
        title={title}
        scrolling="no"
        style={{ width: "100%", height: height, border: "none", display: "block" }}
        onLoad={(e) => {
          try {
            const isDark =
              document.documentElement.classList.contains("dark") ||
              document.documentElement.getAttribute("data-theme") === "dark" ||
              window.matchMedia("(prefers-color-scheme: dark)").matches;
            e.target.contentWindow.postMessage({ type: "theme", isDark }, "*");
          } catch (err) {}
        }}
      />
    </div>
  );
}
