import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Visa-Service Qazaqstan | Premium Visa Advisory",
  description: "Профессиональная визовая поддержка в Казахстане. Визы в США, Шенген, Великобританию. Помощь после отказов. | Қазақстандағы кәсіби визалық қолдау. АҚШ, Шенген, Ұлыбритания визалары.",
  metadataBase: new URL("https://visa-service.kz"),
  keywords: [
    "Визовый центр Алматы", "Визовый центр Астана", "Оформить визу в США в РК",
    "Шенгенская виза Казахстан 2026", "Визовая поддержка Алматы",
    "Виза орталығы Алматы", "Виза орталығы Астана", "АҚШ-қа виза рәсімдеу Қазақстан",
    "Шенген визасы Қазақстан 2026", "Визалық қолдау Алматы"
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Visa-Service Qazaqstan | Визы в США и Европу без отказа",
    description: "Гарантированная визовая поддержка для граждан Казахстана. Оформление виз в США, Шенген, Великобританию. Работаем со сложными случаями.",
    url: "https://visa-service.kz",
    siteName: "Visa-Service Qazaqstan",
    locale: "ru_KZ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Visa-Service Qazaqstan",
    description: "Премиальный визовый сервис в Казахстане. Одобряем 98% заявок.",
  },
  authors: [{ name: "Visa-Service Team" }],
  category: "Visa Consulting",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="dark scroll-smooth">
      <head>
        <link rel="preconnect" href="https://lh3.googleusercontent.com" crossOrigin="anonymous" />
      </head>
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
