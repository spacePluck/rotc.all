import type { Metadata } from "next";
import "./globals.css";
import BottomNav from "@/components/BottomNav";

export const metadata: Metadata = {
  title: "대한민국ROTC 비즈니스연합회",
  description: "5대·6대 회장 이·취임식",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="antialiased pb-20">
        {children}
        <BottomNav />
      </body>
    </html>
  );
}
