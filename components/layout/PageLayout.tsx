import { ReactNode } from "react";
import Navbar from "./Navbar";
import { Grid2 as Grid } from "@mui/material";

import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function PageLayout({ children }: { children: ReactNode }) {
  return (
    <div className={inter.className}>
      <Navbar />
      <main>
        <Grid container spacing={2} marginTop="90px" px={5}>
          {children}
        </Grid>
      </main>
    </div>
  );
}
