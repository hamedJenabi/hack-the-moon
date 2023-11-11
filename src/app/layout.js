/* eslint-disable @next/next/no-page-custom-font */
import "./globals.scss";
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
      <body className={classNames(inter.className, ruda.className)}>
        {children}
      </body>
    </html>
  );
}
