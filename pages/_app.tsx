import "../styles/globals.css";
import type { AppProps } from "next/app";
import {
  ApolloClient,
  ApolloProvider,
  from,
  InMemoryCache,
} from "@apollo/client";
import {
  authLinkApp,
  ErrorTypeGraphQl,
  httpLinkApp,
} from "../graphql/ConfigTypes";
import { onError } from "@apollo/client/link/error";
import { useEffect, useState } from "react";
import ErrorPopup from "../components/ErrorPopup";
import Head from "next/head";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { DarkTheme, LightTheme } from "../config/ThemeConfig";
import { NextUIProvider } from "@nextui-org/react";
import { UserContext } from "../config/UserContext";

function MyApp({ Component, pageProps }: AppProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [errorType, setErrorType] = useState(ErrorTypeGraphQl.Request);
  const [currentUser, setCurrentUser] = useState(null);
  const [messagesError, setMessagesError] = useState([""]);

  useEffect(() => {
    if (localStorage.getItem("currentUser")) {
      setCurrentUser(JSON.parse(localStorage.getItem("currentUser") || ""));
    }
  }, []);

  function closeModal() {
    setIsOpen(false);
  }

  const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors) {
      setMessagesError(graphQLErrors.map((a) => a.message));
      setErrorType(ErrorTypeGraphQl.Request);
      setIsOpen(true);
    }
    if (networkError) {
      setErrorType(ErrorTypeGraphQl.Network);
      setMessagesError([
        "Connection Issue Please check Your internet connection and try again",
      ]);
      setIsOpen(true);
    }
  });

  const client = new ApolloClient({
    link: from([errorLink, authLinkApp, httpLinkApp]),
    cache: new InMemoryCache({
      typePolicies: {
        CategoryEntity: {
          keyFields: ["id", "attributes"],
        },
      },
    }),
  });

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
          <ApolloProvider client={client}>
            <UserContext.Provider value={currentUser}>
              <Component {...pageProps} />
            </UserContext.Provider>
          </ApolloProvider>
        </NextUIProvider>
      </NextThemesProvider>
    </div>
  );
}

export default MyApp;
