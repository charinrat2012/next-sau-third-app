import type { Metadata } from "next";
// เปลี่ยนชื่อ import Kanit เป็น KanitFont เพื่อไม่ให้ชื่อซ้ำกับตัวแปรด้านล่าง
import { Kanit as KanitFont } from "next/font/google";
import "./globals.css";

// ประกาศตัวแปรฟอนต์โดยใช้ชื่อใหม่ที่ชัดเจน
const kanit = KanitFont({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "DTI-SAU-Calculator Varity",
  description: "เว็บรวบรวมเครื่องมือในการคำนวณ",
  // แก้ไขคำสะกดผิดจาก "เคื่รองมือคำนวณ" เป็น "เครื่องมือคำนวณ"
  keywords: ["เครื่องมือคำนวณ"],
  icons: {
    icon: "/next.svg",
  },
  authors: [{ name: "DTI-SAU", url: "https://sautechnology.com" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // เปลี่ยนภาษาในแท็ก html จาก "en" เป็น "th" เพื่อให้สอดคล้องกับเนื้อหาเว็บ
    <html lang="th">
      <body
        // ใช้ตัวแปร kanit ที่ประกาศใหม่
        className={`${kanit.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}