import type { NextConfig } from "next";

/**
 * Security headers applied to every response (Vercel mode only).
 *
 * X-Content-Type-Options: prevent MIME-sniffing.
 * X-Frame-Options: block clickjacking via iframe embedding.
 * Referrer-Policy: leak less referrer info to third parties.
 * Permissions-Policy: deny unused browser features by default.
 *
 * HSTS is already set by Vercel platform — do not duplicate here.
 *
 * In static-export mode (WP wrap on SiteGround), these headers are
 * configured at the server level via .htaccess instead.
 */
const securityHeaders = [
 { key: "X-Content-Type-Options", value: "nosniff" },
 { key: "X-Frame-Options", value: "SAMEORIGIN" },
 { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
 {
 key: "Permissions-Policy",
 value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
 },
];

/**
 * Set NEXT_EXPORT=true (e.g. via `npm run build:export`) to produce a
 * static HTML/JS/CSS build in `out/` for WordPress / SiteGround. Without
 * the flag, the build targets Vercel (server functions + headers).
 */
const isExport = process.env.NEXT_EXPORT === "true";

const nextConfig: NextConfig = isExport
 ? {
 output: "export",
 trailingSlash: true,
 images: { unoptimized: true },
 }
 : {
 async headers() {
 return [{ source: "/:path*", headers: securityHeaders }];
 },
 };

export default nextConfig;
