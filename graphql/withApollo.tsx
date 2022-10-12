import { NextPage } from "next";
import Head from "next/head";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ApolloProvider } from "@apollo/client";
import { getApolloClient } from "./graphqlConfig";
import { Toaster } from "react-hot-toast";
import { useGraphqlErrorState } from "../states";
import ErrorPopup from "../components/ErrorPopup";
import { DarkTheme, LightTheme } from "../config";

// eslint-disable-next-line react/display-name
export const withApollo = (Comp: NextPage) => (props: any) => {
  const { isOpen, setIsOpen, errorType, messagesError } =
    useGraphqlErrorState();

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div style={{ position: "relative", zIndex: 0 }}>
      <ErrorPopup
        errorType={errorType}
        messages={messagesError}
        onCloseEvent={closeModal}
        openStatus={isOpen}
      />
      <Head>
        <title>Welcome to NextStrap ECommerce</title>
      </Head>
      <NextThemesProvider
        defaultTheme={"system"}
        attribute={"class"}
        value={{ light: LightTheme.className, dark: DarkTheme.className }}
      >
        <NextUIProvider>
          <ApolloProvider
            client={getApolloClient(undefined, props.apolloState)}
          >
            <Toaster />
            <Comp />
          </ApolloProvider>
        </NextUIProvider>
      </NextThemesProvider>
    </div>
  );
};
