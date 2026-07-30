"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { Camera, ArrowRight } from "lucide-react";
import TopoBG from "./TopoBG";

/**
 * Live Instagram feed — Elfsight, McCoy-specific.
 *
 * Widget ID is hardcoded since it's tied to McCoy's Elfsight account
 * + Instagram business account.
 */
const MCCOY_ELFSIGHT_INSTAGRAM_ID = "69501b0e-109b-4f3a-b81b-14c659db95b4";
const ELFSIGHT_PLATFORM_SRC = "https://elfsightcdn.com/platform.js";
const MCCOY_INSTAGRAM_HANDLE = "mccoylandscapegroup";

export default function InstagramCarousel() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof document === "undefined") return;
    if (document.getElementById("elfsight-platform-loader")) return;
    const script = document.createElement("script");
    script.id = "elfsight-platform-loader";
    script.src = ELFSIGHT_PLATFORM_SRC;
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <section className="relative bg-white py-20 md:py-24 overflow-hidden">
      <TopoBG shape="shape_02" position="top-right" size={520} opacity={0.08} tint="primary" />
      <div className="relative mx-auto max-w-[1440px] px-5 md:px-10 lg:px-20">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-10 md:mb-12">
          <div className="max-w-[640px]">
            <span className="eyebrow text-[var(--color-accent-mid)]">FROM THE FIELD</span>
            <h2 className="font-[family-name:var(--font-display)] font-black leading-[1.15] text-[clamp(28px,3.4vw,42px)] text-[var(--color-primary)] mt-3">
              Follow Along on{" "}
              <em className="italic font-light">Instagram</em>
            </h2>
            <p className="text-[15px] md:text-[17px] leading-[1.65] text-[var(--color-text-muted)] mt-3">
              Live builds, fresh installs, before-and-afters — what we&apos;re working on across Oakville, Burlington, Mississauga & Milton.
            </p>
          </div>
          <Link
            href={`https://www.instagram.com/${MCCOY_INSTAGRAM_HANDLE}/`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 self-start md:self-end px-5 py-3 rounded-full bg-[var(--color-primary)] text-white font-semibold text-[14px] hover:-translate-y-0.5 transition-transform shadow-[0_8px_22px_-12px_rgba(36,64,48,0.55)]"
          >
            <Camera size={16} strokeWidth={2.2} />
            Follow @{MCCOY_INSTAGRAM_HANDLE}
            <ArrowRight size={14} strokeWidth={2.2} />
          </Link>
        </div>

        <div
          ref={ref}
          className={`elfsight-app-${MCCOY_ELFSIGHT_INSTAGRAM_ID}`}
          data-elfsight-app-lazy
        />
      </div>
    </section>
  );
}
