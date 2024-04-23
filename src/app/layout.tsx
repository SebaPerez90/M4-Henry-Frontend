import type { Metadata } from 'next';
import './globals.css';
import NavbarMenu from '@/components/NavbarMenu';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'GreenLife Store',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>
        <NavbarMenu />
        {children}
        <Footer />
      </body>
    </html>
  );
}
