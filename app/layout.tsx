import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import "./globals.css";


const robotoMono = Roboto_Mono({
	subsets:["latin"]
})
export const metadata: Metadata = {
  title: "Cusco Digital Studio",
  description: "Web, marketing y crecimiento digital.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${robotoMono.className}  antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

