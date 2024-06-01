import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { GlobalContextProvider } from "./components/UserProvider";
import { SearchContextProvider } from "./components/SearchProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ShopyShop",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GlobalContextProvider>
          <SearchContextProvider>
            {children}
          </SearchContextProvider>
        </GlobalContextProvider>
      </body>
    </html>
  );
}
