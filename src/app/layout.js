import "./globals.css";
import { Inter, Hind, Poppins } from "next/font/google";

const inter = Inter({
  style: "normal",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
});
const hind = Hind({
  style: "normal",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-hind",
});
const poppins = Poppins({
  style: "normal",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata = {
  // title:title ? title + "DRAYCONSTRUCTION" : "DRAYCONSTRUCTION",
  title: "DRAYCONSTRUCTION",
  description: "Official Website of DRAYCONSTRUCTION Company",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${hind.variable} ${poppins.variable} font-sans`}
    >
      <body className={inter.className}>{children}</body>
    </html>
  );
}
