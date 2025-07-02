import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Header, Footer } from "@/components/layout";

export const metadata: Metadata = {
  title: "סופ\"ש של נוכחות ושקט | Be Meditation",
  description: "ריטריט מדיטציה במדבר יהודה, 26-27 בספטמבר. חוויה מיוחדת של שקט פנימי, תנועה ונוכחות במצוקי דרגות.",
  keywords: "מדיטציה, ריטריט, מדבר יהודה, נוכחות, שקט, אושו, מצוקי דרגות",
  authors: [{ name: "Be Meditation" }],
  creator: "Be Meditation",
  openGraph: {
    title: "סופ\"ש של נוכחות ושקט | Be Meditation",
    description: "ריטריט מדיטציה במדבר יהודה, 26-27 בספטמבר",
    type: "website",
    locale: "he_IL",
  },
  twitter: {
    card: "summary_large_image",
    title: "סופ\"ש של נוכחות ושקט | Be Meditation",
    description: "ריטריט מדיטציה במדבר יהודה, 26-27 בספטמבר",
  },
  robots: "index, follow",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-screen bg-background text-foreground antialiased">
        <div className="flex flex-col min-h-screen">
          <Header />
          
          <main className="flex-1 pt-16 lg:pt-20" role="main">
            {children}
          </main>
          
          <Footer />
        </div>
      </body>
    </html>
  );
}
