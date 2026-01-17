import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "대한민국ROTC 비즈니스연합회 - 좌석 배치",
  description: "5대·6대 회장 이·취임식 좌석 배치도",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="antialiased">{children}</body>
    </html>
  );
}
