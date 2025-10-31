import type { Metadata, Viewport } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { ReCaptchaProvider } from "@/components/providers/recaptcha-provider";
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
  description: "100% hand-coded websites. No page builders, no WordPress. Performance-focused web design with $0 down and $175/month.",
  keywords: ["web design", "custom websites", "hand-coded", "performance optimization", "SEO"],
  authors: [{ name: "Poleris Digital" }],
  creator: "Poleris Digital",
  metadataBase: new URL("https://polerisdigital.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://polerisdigital.com",
    title: "Poleris Digital - Hand-Coded Websites That Deliver Results",
    description: "100% hand-coded websites. No page builders, no WordPress. Performance-focused web design with $0 down and $175/month.",
    siteName: "Poleris Digital",
  },
  twitter: {
    card: "summary_large_image",
    title: "Poleris Digital - Hand-Coded Websites That Deliver Results",
    description: "100% hand-coded websites. No page builders, no WordPress. Performance-focused web design with $0 down and $175/month.",
  },
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
