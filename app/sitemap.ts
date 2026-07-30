import type { MetadataRoute } from "next";

// Required by Next.js when output: "export" is enabled.
export const dynamic = "force-static";

const SITE = "https://mccoylandscapegroup.com";

const routes = [
 // Core
 { path: "/", priority: 1.0, changeFreq: "weekly" as const },
 { path: "/about", priority: 0.7, changeFreq: "monthly" as const },
 { path: "/contact", priority: 0.8, changeFreq: "monthly" as const },
 { path: "/gallery", priority: 0.8, changeFreq: "monthly" as const },

 // Services hub + leaf pages
 { path: "/services", priority: 0.9, changeFreq: "monthly" as const },
 { path: "/services/paver-patios", priority: 0.9, changeFreq: "monthly" as const },
 { path: "/services/paver-driveways", priority: 0.9, changeFreq: "monthly" as const },
 { path: "/services/retaining-walls", priority: 0.9, changeFreq: "monthly" as const },
 { path: "/services/outdoor-living", priority: 0.9, changeFreq: "monthly" as const },
 { path: "/services/landscape-lighting", priority: 0.9, changeFreq: "monthly" as const },
 { path: "/services/softscape", priority: 0.85, changeFreq: "monthly" as const },
 { path: "/services/maintenance", priority: 0.8, changeFreq: "monthly" as const },

 // Services — stone & masonry cluster
 { path: "/services/masonry-and-natural-stone", priority: 0.85, changeFreq: "monthly" as const },
 { path: "/services/natural-stone-patio", priority: 0.8, changeFreq: "monthly" as const },
 { path: "/services/natural-stone-steps", priority: 0.8, changeFreq: "monthly" as const },
 { path: "/services/seating-walls-and-stone-pillars", priority: 0.8, changeFreq: "monthly" as const },
 { path: "/services/armour-stone-retaining-wall", priority: 0.8, changeFreq: "monthly" as const },
 { path: "/services/garden-retaining-wall", priority: 0.8, changeFreq: "monthly" as const },

 // Services — outdoor living & design cluster
 { path: "/services/landscape-design-consultation", priority: 0.85, changeFreq: "monthly" as const },
 { path: "/services/fire-pit-and-outdoor-fireplace", priority: 0.8, changeFreq: "monthly" as const },
 { path: "/services/pergola-and-pavilion-design", priority: 0.8, changeFreq: "monthly" as const },

 // Services — paver care & repair cluster
 { path: "/services/paver-cleaning-and-sealing", priority: 0.8, changeFreq: "monthly" as const },
 { path: "/services/interlock-repair-and-re-levelling", priority: 0.8, changeFreq: "monthly" as const },

 // Services — softscape cluster
 { path: "/services/landscape-planting", priority: 0.8, changeFreq: "monthly" as const },
 { path: "/services/garden-bed-design", priority: 0.8, changeFreq: "monthly" as const },
 { path: "/services/decorative-rock-and-mulch", priority: 0.75, changeFreq: "monthly" as const },
 { path: "/services/sod-installation", priority: 0.8, changeFreq: "monthly" as const },
 { path: "/services/artificial-turf-installation", priority: 0.8, changeFreq: "monthly" as const },

 // Service-area / location pages
 { path: "/service-areas/oakville", priority: 0.85, changeFreq: "monthly" as const },
 { path: "/service-areas/burlington", priority: 0.85, changeFreq: "monthly" as const },
 { path: "/service-areas/mississauga", priority: 0.85, changeFreq: "monthly" as const },
 { path: "/service-areas/milton", priority: 0.85, changeFreq: "monthly" as const },

 // Blog
 { path: "/blog", priority: 0.6, changeFreq: "weekly" as const },
 { path: "/blog/drainage-first-hardscape", priority: 0.5, changeFreq: "monthly" as const },
 { path: "/blog/full-backyard-hardscape-halton", priority: 0.5, changeFreq: "monthly" as const },
 { path: "/blog/paver-patios-ontario-winters", priority: 0.5, changeFreq: "monthly" as const },

 // Legal
 { path: "/privacy", priority: 0.3, changeFreq: "yearly" as const },
 { path: "/terms", priority: 0.3, changeFreq: "yearly" as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
 const lastModified = new Date();
 return routes.map((r) => ({
 url: `${SITE}${r.path}`,
 lastModified,
 changeFrequency: r.changeFreq,
 priority: r.priority,
 }));
}
