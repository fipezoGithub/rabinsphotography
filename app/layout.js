import { Texturina } from "next/font/google";
import "./globals.css";
import BookPopupModal from "@/components/BookPopupModal";

const texturina = Texturina({ subsets: ["latin"] });

export const metadata = {
  title: "Rabin's Photography",
  description:
    "Rabin's Photography Professional best aesthetic photographers in India bring back your pleasant memories of your special day",
  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    shortcut: ["/favicon-16x16.png"],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={texturina.className}>
        {children}
        <BookPopupModal />
      </body>
    </html>
  );
}
