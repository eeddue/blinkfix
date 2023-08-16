import Navbar from "@/components/Navbar";
import "./globals.css";
import { Poppins } from "next/font/google";
import ReduxProvider from "@/components/ReduxProvider";

const inter = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "BlinkFix",
  description: "BlinkFix Web app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider>
          <Navbar />
          {children}
        </ReduxProvider>
      </body>
    </html>
  );
}
