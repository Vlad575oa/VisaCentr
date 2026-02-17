import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  title: "Visa-Service Qazaqstan | Premium Visa Advisory",
  description: "Professional visa advisory services in Kazakhstan. Schengen, USA, UK, and more. Premium support for complex cases.",
  metadataBase: new URL("https://visa-service.kz"), // Placeholder, adjust as needed
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="dark scroll-smooth">
      <body
        className={`${inter.variable} font-sans antialiased bg-background-light dark:bg-background-dark text-slate-900 dark:text-white overflow-x-hidden selection:bg-primary selection:text-background-dark`}
      >
        <div className="relative flex min-h-screen w-full flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}
