/* eslint-disable @next/next/no-page-custom-font */
import "./globals.css";
import { Inter, Ruda } from "next/font/google";
import classNames from "classnames";
const ruda = Inter({ subsets: ["latin"] });
const inter = Ruda({ subsets: ["latin"] });

export const metadata = {
  title: "Travel APP",
  description: "Helps you to get the most out of your leasure time",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Ruda:wght@600&display=swap"
        rel="stylesheet"
      /> */}
      <body className={classNames(inter.className, ruda.className)}>
        {children}
      </body>
    </html>
  );
}
