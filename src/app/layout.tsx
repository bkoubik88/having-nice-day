import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Navigation from "./Navigation";
import ClerkProviderPro from "../../providers/ClerkProviderPro";
import { EdgeStoreProvider } from "@/lib/edgestore";
import { Toaster } from "sonner";
import AddNewPost from "./components/AddNewPost";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <EdgeStoreProvider>
          <ClerkProviderPro>
            <Navigation></Navigation>
            {children}
            <AddNewPost></AddNewPost>
            <Toaster position="bottom-center" />
          </ClerkProviderPro>
        </EdgeStoreProvider>
      </body>
    </html>
  );
}
