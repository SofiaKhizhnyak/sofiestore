import type { Metadata } from "next";
import { Inter, Nunito, Fascinate } from "next/font/google";
import "@/assets/styles/globals.css";
import { APP_DESCRIPTION, APP_NAME } from "@/lib/constants";
import { ThemeProvider } from "next-themes";

//basic
const inter = Inter({ subsets: ["latin"] });

//my choice
const nunito = Nunito({ subsets: ["latin"] });

//for titles
const fascinate = Fascinate({
  weight: "400", // Specify the weight
  subsets: ["latin"], // Specify the subset
});

export const metadata: Metadata = {
  title: {
    // Dynamic Title Template
    template: `%s | SofieStore`,
    default: APP_NAME,
  },
  description: APP_DESCRIPTION,
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${nunito.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
