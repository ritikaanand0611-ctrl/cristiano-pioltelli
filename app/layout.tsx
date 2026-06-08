import type { Metadata } from "next";
import { Cormorant_Garamond, Josefin_Sans } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/app/context/CartContext";
import CartDrawer from "@/app/components/CartDrawer";

const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const josefin = Josefin_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["100", "300", "400", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Cristiano Pioltelli — Lookbook SS25",
  description:
    "A high-end fashion runway lookbook. Six curated editorial looks.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${josefin.variable} h-full antialiased`}
    >
      <body className="h-full">
        <CartProvider>
          {children}
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  );
}
