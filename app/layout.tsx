import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ShopSyStore | Artificial Jewelry, Beautifully Yours",
  description: "Shop refined artificial jewelry for everyday style, weddings, Eid and gifting, with nationwide delivery across Pakistan.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-PK">
      <body className="antialiased">{children}</body>
    </html>
  );
}
