import type { Metadata, Viewport } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { ReCaptchaProvider } from "@/components/providers/recaptcha-provider";
import { SchemaMarkup } from "@/components/seo/schema-markup";
import { NavigationLoader } from "@/components/ui/navigation-loader";
import { BackToTop } from "@/components/ui/back-to-top";
// import { LiveChat } from "@/components/ui/live-chat"; // Replaced with Tawk.to
import Script from "next/script";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "Poleris Digital - Hand-Coded Websites That Deliver Results",
  description: "Poleris Digital provides professional hand-coded custom websites, SEO services, Google Ads management, and web hosting for small businesses. Get a fast, secure website that ranks.",
  keywords: [
    "Poleris Digital",
    "polerisdigital",
    "web design",
    "custom websites",
    "hand-coded websites",
    "web design agency",
    "small business websites",
    "web development services",
    "performance optimization",
    "SEO services",
    "search engine optimization",
    "Google Ads management",
    "website hosting",
    "responsive design",
    "custom web design",
    "professional web design",
  ],
  authors: [{ name: "Poleris Digital" }],
  creator: "Poleris Digital",
  publisher: "Poleris Digital",
  metadataBase: new URL("https://polerisdigital.com"),
  alternates: {
    canonical: "https://polerisdigital.com",
  },
  icons: {
    icon: [
      { url: "/poleris_logo.png", type: "image/png" },
    ],
    apple: [
      { url: "/poleris_logo.png", type: "image/png" },
    ],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://polerisdigital.com",
    title: "Poleris Digital - Custom Hand-Coded Websites for Small Businesses",
    description: "Poleris Digital creates fast, SEO-optimized custom websites for small businesses. Professional web design, SEO services, Google Ads management, and hosting included.",
    siteName: "Poleris Digital",
    images: [
      {
        url: "/poleris_logo.png",
        width: 512,
        height: 512,
        alt: "Poleris Digital Logo",
      },
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Poleris Digital - Professional Web Design Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Poleris Digital - Custom Hand-Coded Websites",
    description: "Fast, SEO-optimized custom websites for small businesses. Web design, SEO services, Google Ads, and hosting by Poleris Digital.",
    images: ["/og-image.png"],
    creator: "@polerisdigital",
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
  verification: {
    google: "l-Aqsgq8VAYt4Fvzde1yUCoJB24N1hQagRSSsBnGPSo", // Google Search Console verification
    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#1e1b4b", // indigo-950
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Preconnect to external resources for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://cdn.jsdelivr.net" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://assets.vercel.com" />
        {/* Preload critical fonts */}
        <link rel="preload" as="font" href="https://fonts.gstatic.com/s/poppins/v21/pxiGyqcV2IG0H86g.woff2" type="font/woff2" crossOrigin="anonymous" />
        <SchemaMarkup />
      </head>
      <body
        className={`${poppins.variable} antialiased bg-white dark:bg-gray-950`}
        style={{ fontFamily: 'var(--font-poppins)' }}
      >
        <ReCaptchaProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem={true}
            disableTransitionOnChange={false}
          >
            <NavigationLoader />
            <BackToTop />
            {children}
            <SpeedInsights />
          </ThemeProvider>
        </ReCaptchaProvider>

        {/* Tawk.to Live Chat Widget */}
        <Script
          id="tawk-to-init"
          strategy="afterInteractive"
        >
          {`
            var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
          `}
        </Script>
        <Script
          src="https://embed.tawk.to/68ff89356b37cd19503f20d2/1j8j2vv21"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
