import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://securesight.smartbiz365.site";
const siteDescription =
  "CCTV installation in Kenya for homes, shops, offices and commercial properties. Explore security cameras, remote viewing, access control and maintenance, and request a quotation.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "CCTV Installation Kenya | SecureSight CCTV",
    template: "%s | SecureSight CCTV"
  },
  description: siteDescription,
  applicationName: "SecureSight CCTV",
  keywords: [
    "CCTV installation Kenya",
    "CCTV installers Kenya",
    "security cameras Kenya",
    "home CCTV installation",
    "business CCTV systems",
    "IP cameras",
    "remote CCTV viewing",
    "access control systems",
    "CCTV maintenance Kenya"
  ],
  openGraph: {
    title: "CCTV Installation Kenya | SecureSight CCTV",
    description: siteDescription,
    url: siteUrl,
    siteName: "SecureSight CCTV",
    type: "website",
    locale: "en_KE"
  },
  twitter: {
    card: "summary",
    title: "CCTV Installation Kenya | SecureSight CCTV",
    description: siteDescription
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1
    }
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en-KE"><body>{children}</body></html>;
}