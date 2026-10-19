import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "SecureSight CCTV | Security Solutions Across Kenya", template: "%s | SecureSight CCTV" },
  description: "CCTV installation, IP cameras, video surveillance, access control and security system support across Kenya. Request a site assessment and quote.",
  metadataBase: new URL("https://securesight-cctv.vercel.app"),
  openGraph: { title: "SecureSight CCTV", description: "Clear visibility. Confident security.", type: "website", locale: "en_KE" }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en-KE"><body>{children}</body></html>;
}