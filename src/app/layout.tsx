import { Analytics } from "@vercel/analytics/react"
import type { Metadata } from "next";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL('https://portfolio.khushalsharma.in'),
  title: "Khushal Sharma — AI & Robotics Portfolio",
  description: "Interactive AI portfolio of Khushal Sharma — Master's student in Robotics & AI at ASU. Explore projects in SLAM, NeRF, autonomous systems, and machine learning.",
  keywords: [
    "Khushal Sharma",
    "Portfolio",
    "AI Developer",
    "Robotics Engineer",
    "Machine Learning Engineer",
    "ASU",
    "Arizona State University",
    "Computer Vision",
    "SLAM",
    "NeRF",
    "ROS2",
    "DREAMS Lab",
    "Drone",
    "Flutter",
    "Python",
    "C++",
    "Interactive",
  ],
  authors: [{ name: "Khushal Sharma" }],
  creator: "Khushal Sharma",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Khushal Sharma — AI & Robotics Portfolio",
    description: "Interactive AI portfolio of Khushal Sharma — robotics researcher and AI developer at ASU.",
    siteName: "Khushal Sharma Portfolio",
    images: [{ url: '/landing-memojis.png', width: 2000, height: 2000, alt: 'Khushal Sharma AI Portfolio' }],
  },
  icons: {
    icon: [
      {
        url: "/logo.png",
        sizes: "any",
      }
    ],
    shortcut: "/logo.png?v=2",
    apple: "/apple-touch-icon.svg?v=2",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <link rel="icon" href="/logo.png" sizes="any" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Khushal Sharma",
              url: "https://portfolio.khushalsharma.in",
              email: "khushalrrs@gmail.com",
              sameAs: [
                "https://github.com/khushalrs",
                "https://www.linkedin.com/in/sharma-khushal",
              ],
              jobTitle: "Robotics & AI Researcher",
              alumniOf: [
                { "@type": "EducationalOrganization", name: "Arizona State University" },
                { "@type": "EducationalOrganization", name: "NMIMS MPSTME" },
              ],
              knowsAbout: ["Robotics", "SLAM", "NeRF", "Computer Vision", "Machine Learning", "ROS2", "Drone Autonomy"],
            }),
          }}
        />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
        >
          <main className="flex min-h-screen flex-col">
            {children}
          </main>
          <Toaster />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
