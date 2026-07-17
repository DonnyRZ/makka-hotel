import type { Metadata } from "next";
import "./globals.css";
import { VisitorTracker } from "./components/VisitorTracker";

export const metadata: Metadata = {
  title: {
    default: "Mecca Boutique Hotel & Restaurant",
    template: "%s | Mecca Boutique Hotel",
  },
  description:
    "Contemporary boutique halal hospitality opposite the Islamic Civilization Centre in Tashkent.",
  applicationName: "Mecca Boutique Hotel & Restaurant",
  keywords: ["boutique hotel Tashkent", "halal hotel Tashkent", "Mecca Boutique Hotel", "Tashkent rooftop"],
  openGraph: {
    type: "website",
    siteName: "Mecca Boutique Hotel & Restaurant",
    title: "Mecca Boutique Hotel & Restaurant",
    description: "A quieter way to experience Tashkent.",
    images: [{ url: "/og.png", width: 1735, height: 907, alt: "Mecca Boutique Hotel & Restaurant" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mecca Boutique Hotel & Restaurant",
    description: "A quieter way to experience Tashkent.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <VisitorTracker />
        {children}
      </body>
    </html>
  );
}
