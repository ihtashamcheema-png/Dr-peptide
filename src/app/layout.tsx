import type { Metadata } from "next";
import "@/globals.css";

export const metadata: Metadata = {
  title: "Dr. Peptide - Premium Research Peptides",
  description: "High-quality research peptides for scientific investigation and study",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}