module.exports = {
  // Tags are inherited by all posts.
  tags: ["pathItem", "wordpress"],
  path: {
    // Slug is used by landing pages like / and /learn to link to this path.
    // Because it affects urls, the slug should never be translated.
    slug: "wordpress",
    cover: "/images/collections/wordpress.svg",
    title: "WordPress",
    updated: "March 24, 2020",
    description: `Build successful and progressive WordPress sites.`,
    overview: `This section is for you if you are a WordPress user, that is, if
    you are either a developer, a site implementer, a webmaster, a site owner,
    or a decision maker for a web presence powered by WordPress. The goal of the
    section is to serve as a guided entry point to answers to this fundamental
    question: What are the factors involved in building successful content
    strategies on the web, and how can you do that sustainably? And more
    specifically, how can we approach the building of such content strategies
    on the WordPress platform?`,
    topics: [
      {
        title: "Success factors",
        pathItems: [
          "success-on-the-web-in-context",
          "the-wordpress-ecosystem",
          "the-cms-space",
        ],
      },
      {
        title: "Performance",
        pathItems: ["performance-in-context", "amp-in-wordpress"],
      },
      {
        title: "Feature richness",
        pathItems: [
          "feature-richness-in-context",
          "pwa-building-blocks",
          "baseline-pwa-patterns",
          "advanced-pwa-patterns",
        ],
      },
      {
        title: "Monitoring Success",
        pathItems: [
          "monitoring-in-context",
          "state-of-wordpress",
          "lighthouse-and-wordpress",
          "monitoring-tools-in-wordpress",
        ],
      },
      {
        title: "Content quality",
        pathItems: ["content-quality-in-context", "storytelling-in-the-web"],
      },
      {
        title: "Monetization",
        pathItems: ["monetization-in-context"],
      },
      {
        title: "Security",
        pathItems: ["security-in-context"],
      },
    ],
  },
};
