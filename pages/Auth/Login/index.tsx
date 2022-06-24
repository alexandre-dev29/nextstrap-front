import React from "react";
import LoginForm from "./LoginForm";
import { UnAutorizedLayout } from "../../../components/UnAutorizedLayout";
import { Text } from "@nextui-org/react";

export default function index() {
  return (
    <UnAutorizedLayout>
      <div className={"p-4"}>
        <Text
          h1
          size={25}
          css={{
            textGradient: "45deg, $gray500 -20%, $gray900 90%",
          }}
          weight="bold"
        >
          Nextrap Ecommerce
        </Text>
      </div>
      <div className={"text-center p-20"}>
        <LoginForm />
      </div>
    </UnAutorizedLayout>
  );
}
