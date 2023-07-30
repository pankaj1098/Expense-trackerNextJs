import "./globals.css";
import { Inter } from "next/font/google";
import Header from "./components/Sidebar";
import Sidebar from "./components/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Expense",
  description: "Track Your Expense",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex">
          {" "}
          <Sidebar />
          {children}
        </div>
      </body>
    </html>
  );
}
