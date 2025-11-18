"use client"

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { usePathname } from "next/navigation";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export default function RootLayout({ children }) {

  const pathname = usePathname()
  console.log(pathname);


  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <nav className="w-full h-[60px] bg-green-800 flex justify-between items-center px-5 select-none fixed top-0 left-0 ">
          <div className="text-white font-bold text-2xl tracking-[2px]" >LOGO</div>
          <ul className="w-max flex justify-center items-center gap-5 text-white text-md capitalize">
            <li className={` ${pathname == "/" && "text-yellow-400"} `}><Link href={"/"}>home</Link></li>
            <li className={` ${pathname == "/services" && "text-yellow-400"} `}><Link href={"/services"}>services</Link></li>
            <li className={` ${pathname == "/prd_detail" && "text-yellow-400"} `}><Link href={"/prd_detail"}>product</Link></li>
          </ul>
        </nav>
        <main>{children}</main>
        <footer className="select-none w-full h-[50px] bg-green-800 text-center text-white py-2 text-2xl fixed bottom-0 left-0 "> Footer </footer>
      </body>
    </html>
  );
}
