"use client";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { useMemo } from "react";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const themeSelector = (mode: "dark" | "light"): any => {
  const palette =
    mode === "dark"
      ? {
          mode: "dark",
          primary: {
            main: "#9767f1",
          },
          secondary: {
            main: "#c1f167",
          },
          background: {
            default: "#1a1a1a",
          },
        }
      : {
          mode: "light",
        };

  return {
    typography: {
      fontFamily: roboto.style.fontFamily,
    },
    palette: {
      ...palette,
    },
  };
};

export default function Theme({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const mode = "dark";

  const theme = useMemo(() => createTheme(themeSelector(mode)), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>{children}</CssBaseline>
    </ThemeProvider>
  );
}
