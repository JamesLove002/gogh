import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter"; // or `v14-appRouter` if you are using Next.js v14
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gogh",
  description: "Let's Gogh!"
};

// const darkTheme = createTheme({
//   palette: {
//     mode: "dark"
//   }
// });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="bg-[#eee]">
      <body className={inter.className}>
        {/* <ThemeProvider theme={darkTheme}> */}
        {/* <CssBaseline /> */}
        <AppRouterCacheProvider>{children}</AppRouterCacheProvider>
        {/* </ThemeProvider> */}
      </body>
    </html>
  );
}
