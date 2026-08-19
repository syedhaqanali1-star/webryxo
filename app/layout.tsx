import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://www.webryxo.com";
const googleVerification = process.env.GOOGLE_SITE_VERIFICATION;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Webryxo | Web Design, SEO & Local SEO for Small Businesses",
    template: "%s | Webryxo",
  },

  description:
    "Webryxo builds modern business websites and provides SEO, local SEO, website redesign, performance optimization, and ongoing website support for growing businesses.",

  applicationName: "Webryxo",
  category: "Web Design and SEO",

  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },

  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Webryxo",
    title: "Webryxo | Web Design, SEO & Local SEO for Small Businesses",
    description:
      "Modern websites, SEO, local search optimization, website redesign, and digital growth services for businesses that want to look professional and get found online.",
    images: [
      {
        url: "/icon.png",
        width: 1024,
        height: 1024,
        alt: "Webryxo logo",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Webryxo | Web Design, SEO & Local SEO",
    description:
      "Modern websites and search visibility services for growing businesses.",
    images: ["/icon.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  verification: googleVerification
    ? {
        google: googleVerification,
      }
    : undefined,
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${siteUrl}/#organization`,
  name: "Webryxo",
  url: siteUrl,
  logo: `${siteUrl}/icon.png`,
  email: "info@webryxo.com",
  description:
    "Webryxo provides web design, web development, SEO, local SEO, website redesign, hosting, and website maintenance services.",
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  url: siteUrl,
  name: "Webryxo",
  publisher: {
    "@id": `${siteUrl}/#organization`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
        {children}
      </body>
    </html>
  );
}
