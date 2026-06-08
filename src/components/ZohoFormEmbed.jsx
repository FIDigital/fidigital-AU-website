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

    // Read the *site* theme only. next-themes resolves the active theme onto a
    // `data-theme` attribute on <html> (defaultTheme="light"). We must NOT fall
    // back to the OS `prefers-color-scheme` — that pushed a dark theme onto the
    // light form whenever the visitor's OS was dark, making inputs borderless.
    const isSiteDark = () =>
      document.documentElement.getAttribute("data-theme") === "dark" ||
      document.documentElement.classList.contains("dark");

    const pushTheme = () => {
      const win = iframeRef.current && iframeRef.current.contentWindow;
      if (!win) return;
      try {
        win.postMessage({ type: "theme", isDark: isSiteDark() }, "*");
      } catch (e) {}
    };

    // Push shortly after mount (covers the iframe having already loaded before
    // the onLoad handler attached).
    const timer = setTimeout(pushTheme, 300);

    // Keep the form in sync if the user flips the site theme toggle.
    const observer = new MutationObserver(pushTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme", "class"],
    });

    return () => {
      window.removeEventListener("message", handleMessage);
      clearTimeout(timer);
      observer.disconnect();
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
              document.documentElement.getAttribute("data-theme") === "dark" ||
              document.documentElement.classList.contains("dark");
            e.target.contentWindow.postMessage({ type: "theme", isDark }, "*");
          } catch (err) {}
        }}
      />
    </div>
  );
}
