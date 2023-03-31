import "../styles/globals.css";
import type { AppProps } from "next/app";
import { MantineProvider } from "@mantine/core";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider
      theme={{
        colors: {
          primary: [
            "#e7dfc6",
            "#e9e2cc",
            "#ece5d1",
            "#eee9d7",
            "#f1ecdd",
            "#f3efe3",
            "#f5f2e8",
            "#f8f5ee",
            "#faf9f4",
            "#fdfcf9",
          ],
          secondary: [
            "#630063",
            "#b38ed2",
            "#bc9ad7",
            "#c4a7dc",
            "#cdb3e1",
            "#d5c0e6",
            "#ddcdeb",
            "#e6d9f0",
            "#eee6f5",
            "#f7f2fa",
          ],
          tertiary: [
            "#0047ab",
            "#1a59b3",
            "#336cbc",
            "#4d7ec4",
            "#6691cd",
            "#80a3d5",
            "#99b5dd",
            "#b3c8e6",
            "#ccdaee",
            "#e6edf7",
          ],
        },
        primaryShade: 0,
      }}
    >
      <Component {...pageProps} />
    </MantineProvider>
  );
}
