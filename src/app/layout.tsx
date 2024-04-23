import type { Metadata } from "next";
import "./globals.css";
import NavbarMenu from "@/components/NavbarMenu";

export const metadata: Metadata = {
  title: "GreenLife Store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <>
          <NavbarMenu />
          {children}
        </>
      </body>
    </html>
  );
}
