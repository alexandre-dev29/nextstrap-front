import { HttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

export const httpLinkApp = new HttpLink({
  uri: process.env.NEXT_PUBLIC_API_URL,
});

export const authLinkApp = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("accessToken");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

export enum ErrorTypeGraphQl {
  Network,
  Request,
}
