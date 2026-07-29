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

export const metadata: Metadata = {
  metadataBase: new URL("https://www.webryxo.com"),

  title: {
    default: "Webryxo — Modern Websites for Businesses",
    template: "%s | Webryxo",
  },

  description:
    "Webryxo builds premium custom websites designed to help businesses stand out, attract customers, and grow online.",

  applicationName: "Webryxo",

  alternates: {
    canonical: "/",
  },

  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },

  openGraph: {
    type: "website",
    url: "https://www.webryxo.com",
    siteName: "Webryxo",
    title: "Webryxo — Modern Websites for Businesses",
    description:
      "Premium custom websites designed to help businesses stand out, attract customers, and grow online.",
    images: [
      {
        url: "/icon.png",
        width: 1024,
        height: 1024,
        alt: "Webryxo",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Webryxo — Modern Websites for Businesses",
    description:
      "Premium custom websites designed to help businesses stand out, attract customers, and grow online.",
    images: ["/icon.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
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
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}