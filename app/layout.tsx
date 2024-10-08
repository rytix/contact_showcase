import type { Metadata } from "next";
import "./globals.css";
import Menu from "../components/menu/Menu";
import { Providers } from "@/components/Providers";

export const metadata: Metadata = {
  title: "Teste",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Providers>
      <html lang="en">
        <body>
          <div className="font-montserrat flex flex-col h-screen w-screen md:flex-row">
            <div className="order-2 sticky bottom-0 md:order-1">
              <Menu />
            </div>
            <div className="order-1 h-full w-screen overflow-scroll md:order-2">
              {children}
            </div>
          </div>
        </body>
      </html>
    </Providers>
  );
}
