import type { Metadata } from "next";
import HomeClient from "./home-client";

const siteUrl = "https://securesight.smartbiz365.site";
const description =
  "CCTV installation in Kenya for homes, shops, offices and commercial properties. Explore security cameras, remote viewing, access control and maintenance, and request a quotation.";

export const metadata: Metadata = {
  title: "CCTV Installation Kenya | SecureSight CCTV",
  description,
  alternates: { canonical: "/" },
  openGraph: {
    title: "CCTV Installation Kenya | SecureSight CCTV",
    description,
    url: siteUrl,
    siteName: "SecureSight CCTV",
    type: "website",
    locale: "en_KE"
  },
  twitter: {
    card: "summary",
    title: "CCTV Installation Kenya | SecureSight CCTV",
    description
  }
};

export default function HomePage() {
  return <HomeClient />;
}
