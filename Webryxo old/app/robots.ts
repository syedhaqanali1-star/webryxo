import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/api/",
        "/dashboard/",
        "/planpayment/",
        "/hostingpayment/",
        "/plan-thank-you/",
        "/hosting-thank-you/",
        "/thank-you/",
        "/planthankyou/",
        "/hostingthankyou/",
        "/payment/",
        "/hosting/",
      ],
    },
    sitemap: "https://www.webryxo.com/sitemap.xml",
    host: "https://www.webryxo.com",
  };
}
