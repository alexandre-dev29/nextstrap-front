import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { DarkTheme, LightTheme } from "../config";
import { NextUIProvider } from "@nextui-org/react";
import Router from "next/router";
import { Toaster } from "react-hot-toast";
import { IconoirProvider } from "iconoir-react";
import NProgress from "nprogress"; //nprogress module
import "nprogress/nprogress.css";

//Route Events.
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div style={{ position: "relative", zIndex: 0 }}>
      <Head>
        <title>Welcome to NextStrap ECommerce</title>
      </Head>
      <NextThemesProvider
        defaultTheme={"light"}
        attribute={"class"}
        value={{ light: LightTheme.className, dark: DarkTheme.className }}
      >
        <NextUIProvider>
          <Toaster />
          <IconoirProvider
            iconProps={{
              color: "#2d2d2d",
              strokeWidth: 1,
              width: "1em",
              height: "1em",
            }}
          >
            <Component {...pageProps} />
          </IconoirProvider>
        </NextUIProvider>
      </NextThemesProvider>
    </div>
  );
}

export default MyApp;
