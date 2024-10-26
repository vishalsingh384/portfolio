import { Inter } from "next/font/google";
import "./globals.css";
import TransitionProvider from "@/components/transitionProvider";
import { AudioProvider } from "@/context/AudioContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Vishal Singh Portfolio",
  description: "Generated with Generator",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AudioProvider>
          <TransitionProvider>{children}</TransitionProvider>
        </AudioProvider>
      </body>
    </html>
  );
}
