import "./globals.css";
import type { Metadata } from "next";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "@/component/Home/Footer/Footer";


export const metadata: Metadata = {
  title: "Housing Quest",
  description: "Trusted Real Estate Experts Delivering Results",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        
        {children}
        <Footer />
      </body>
    </html>
  );
}
