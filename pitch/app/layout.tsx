import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Business Canvas | Investment Pitch",
  description: "A business model canvas for investor pitching",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans">{children}</body>
    </html>
  );
}
