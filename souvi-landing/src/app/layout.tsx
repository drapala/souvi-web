import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Souvi - AI Creative Factory para PMEs",
  description: "A Souvi cria vídeos, artes e anúncios automaticamente via WhatsApp para PMEs que querem vender mais.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${inter.variable} font-inter antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
