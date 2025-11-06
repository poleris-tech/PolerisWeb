import type { Metadata, Viewport } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { ReCaptchaProvider } from "@/components/providers/recaptcha-provider";
import { SchemaMarkup } from "@/components/seo/schema-markup";
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
  description: "Professional web design and development services for small businesses. Custom websites, SEO optimization, Google Ads management, and reliable hosting. Transform your online presence today.",
  keywords: [
    "web design",
    "custom websites",
    "hand-coded websites",
    "performance optimization",
    "SEO services",
    "Google Ads",
    "website hosting",
    "small business websites",
    "web development",
    "responsive design",
  ],
  authors: [{ name: "Poleris Digital" }],
  creator: "Poleris Digital",
  publisher: "Poleris Digital",
  metadataBase: new URL("https://polerisdigital.com"),
  alternates: {
    canonical: "https://polerisdigital.com",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://polerisdigital.com",
    title: "Poleris Digital - Hand-Coded Websites That Deliver Results",
    description: "Professional web design and development services for small businesses. Custom websites, SEO optimization, Google Ads management, and reliable hosting.",
    siteName: "Poleris Digital",
    images: [
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
    title: "Poleris Digital - Hand-Coded Websites That Deliver Results",
    description: "Professional web design and development services for small businesses. Custom websites, SEO optimization, and more.",
    images: ["/og-image.png"],
    creator: "@polerisdigital", // Add your Twitter handle
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
  // verification: {
  //   google: "your-google-verification-code", // Add your Google Search Console verification code when available
  //   // yandex: "your-yandex-verification-code",
  //   // bing: "your-bing-verification-code",
  // },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#001f3d",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <SchemaMarkup />
      </head>
      <body
        className={`${poppins.variable} antialiased bg-white dark:bg-gray-950`}
        style={{ fontFamily: 'var(--font-poppins)' }}
      >
        <ReCaptchaProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem={false}
            disableTransitionOnChange={false}
          >
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
