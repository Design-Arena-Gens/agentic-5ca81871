import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "MD Siam Islam Messenger Bot",
  description:
    "Interactive overview of the MD Siam Islam Facebook Messenger bot with features, quick replies, and project details."
};

export default function RootLayout({
  children
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
