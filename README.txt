WEBRYXO SEO UPGRADE — DROP-IN FILE SET

WHAT THIS PACKAGE ADDS
- Improved site-wide metadata in app/layout.tsx
- Organization + WebSite JSON-LD structured data
- app/robots.ts
- app/sitemap.ts
- Updated premium homepage with SEO and Local SEO services
- Dedicated /web-design page
- Dedicated /seo page
- Dedicated /local-seo page
- Dedicated /website-redesign page
- /blog index
- Three original starter articles
- Internal links between services and blog content
- No guaranteed ranking claims
- Payment/dashboard/thank-you routes kept out of robots crawling

HOW TO INSTALL
1. Back up your project or make sure your current work is committed to Git.
2. Copy the folders/files from this package into your project.
3. Replace:
   app/layout.tsx
   app/page.tsx
4. Add:
   app/robots.ts
   app/sitemap.ts
   app/components/ServicePage.tsx
   app/components/ArticlePage.tsx
   app/web-design/page.tsx
   app/seo/page.tsx
   app/local-seo/page.tsx
   app/website-redesign/page.tsx
   app/blog/page.tsx
   app/blog/does-my-small-business-need-a-website/page.tsx
   app/blog/local-seo-guide-small-business/page.tsx
   app/blog/website-redesign-signs/page.tsx
5. Keep your existing app/globals.css. This package does not replace it.
6. Run:
   npm run build
7. If the build succeeds:
   git add .
   git commit -m "Add Webryxo SEO services and technical SEO"
   git push

GOOGLE SEARCH CONSOLE
After deployment:
1. Open Google Search Console.
2. Add/verify the property for https://www.webryxo.com.
3. If Google gives you an HTML meta verification token, add it in Vercel:
   Environment Variable:
   GOOGLE_SITE_VERIFICATION=your_token_here
4. Redeploy.
5. Submit:
   https://www.webryxo.com/sitemap.xml
6. Use URL Inspection for important pages:
   /
   /web-design
   /seo
   /local-seo
   /website-redesign

IMPORTANT
A sitemap helps discovery but does not guarantee indexing or rankings.
SEO results are not guaranteed and can take time because competition,
content quality, crawling, indexing, links, demand, and search systems all matter.

NEXT CONTENT IDEAS
- How Much Does a Small Business Website Cost?
- Website vs Facebook Page for a Local Business
- Local SEO for Barbershops
- Local SEO for Auto Repair Shops
- Restaurant Website Checklist
- What Should a Service Business Homepage Include?
- How to Improve a Slow Business Website
- SEO Checklist for a New Business Website
