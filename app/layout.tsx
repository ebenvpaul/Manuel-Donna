import type { Metadata } from "next";
import "./globals.css";

const assetPrefix = process.env.GITHUB_ACTIONS ? "/Manuel-Donna" : "";

export const metadata: Metadata = {
  title: "Manuel & Donna | Wedding Celebration",
  description: "Join Manuel and Donna as they begin their next chapter together.",
  icons: {
    icon: `${assetPrefix}/love.png`,
    shortcut: `${assetPrefix}/love.png`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
