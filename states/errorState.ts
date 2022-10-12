import createWithHooks from "zustand";
import { devtools, persist } from "zustand/middleware";
import create from "zustand/vanilla";
import { ErrorTypeGraphQl } from "../graphql/ConfigTypes";

interface IGraphqlErrorState {
  errorType: ErrorTypeGraphQl;
  messagesError: Array<string>;
  isOpen: boolean;
  setErrorType: (errorType: ErrorTypeGraphQl) => any;
  setIsOpen: (isOpen: boolean) => any;
  setMessagesError: (errorMessages: Array<string>) => any;
}

export const GraphqlErrorState = create<IGraphqlErrorState, any>(
  devtools(
    persist(
      (setState, getState) => ({
        errorType: ErrorTypeGraphQl.Request,
        messagesError: [""],
        isOpen: true,
        setIsOpen: (opened: boolean) => {
          setState(() => ({
            isOpen: opened,
          }));
        },
        setMessagesError: (errorMessages: Array<string>) => {
          setState(() => ({
            messagesError: errorMessages,
          }));
        },
        setErrorType: (typeError: ErrorTypeGraphQl) => {
          setState(() => ({
            errorType: typeError,
          }));
        },
      }),
      { name: "ApplicationStore" }
    )
  )
);

export const useGraphqlErrorState = createWithHooks(GraphqlErrorState);
