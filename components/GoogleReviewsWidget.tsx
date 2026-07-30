"use client";

import { useEffect, useRef } from "react";

/**
 * Live Google Reviews widget — Elfsight, McCoy-specific.
 *
 * Widget ID is hardcoded since it's tied to McCoy's Elfsight account
 * and Google Business Profile. To swap providers later, switch
 * `MCCOY_ELFSIGHT_REVIEWS_ID` and adjust the script src.
 */
const MCCOY_ELFSIGHT_REVIEWS_ID = "35272889-7a61-4c81-b3db-cb67cc9bd053";
const ELFSIGHT_PLATFORM_SRC = "https://elfsightcdn.com/platform.js";

export default function GoogleReviewsWidget({
  widgetId = MCCOY_ELFSIGHT_REVIEWS_ID,
  className = "",
}: {
  widgetId?: string;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof document === "undefined") return;
    // Inject Elfsight platform.js once
    if (document.getElementById("elfsight-platform-loader")) return;
    const script = document.createElement("script");
    script.id = "elfsight-platform-loader";
    script.src = ELFSIGHT_PLATFORM_SRC;
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div
      ref={ref}
      className={`elfsight-app-${widgetId} ${className}`}
      data-elfsight-app-lazy
    />
  );
}
