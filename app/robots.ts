import type { MetadataRoute } from "next";

// Required by Next.js when output: "export" is enabled — tells Next that
// robots.txt is fully static and safe to generate at build time.
export const dynamic = "force-static";

const SITE = "https://mccoylandscapegroup.com";

/**
 * robots.txt — explicitly allow all major search crawlers AND major AI
 * crawlers (GPTBot, ClaudeBot, PerplexityBot, GoogleOther, etc.). Per the
 * project CLAUDE.md, AI crawlers are allowed by default unless the client
 * specifically requests blocking. AI citability requires AI bots can read
 * the site.
 */
export default function robots(): MetadataRoute.Robots {
 return {
 rules: [
 // Default — allow everything to all bots
 { userAgent: "*", allow: "/" },

 // Explicit allows for AI crawlers (signals intent + future-proofs against
 // any blanket block we might add later by accident)
 { userAgent: "GPTBot", allow: "/" },
 { userAgent: "ChatGPT-User", allow: "/" },
 { userAgent: "OAI-SearchBot", allow: "/" },
 { userAgent: "ClaudeBot", allow: "/" },
 { userAgent: "Claude-Web", allow: "/" },
 { userAgent: "anthropic-ai", allow: "/" },
 { userAgent: "PerplexityBot", allow: "/" },
 { userAgent: "Perplexity-User", allow: "/" },
 { userAgent: "Google-Extended", allow: "/" },
 { userAgent: "GoogleOther", allow: "/" },
 { userAgent: "Bingbot", allow: "/" },
 { userAgent: "CCBot", allow: "/" },
 { userAgent: "Applebot-Extended", allow: "/" },
 { userAgent: "FacebookBot", allow: "/" },
 { userAgent: "Bytespider", allow: "/" },
 ],
 sitemap: `${SITE}/sitemap.xml`,
 host: SITE,
 };
}
