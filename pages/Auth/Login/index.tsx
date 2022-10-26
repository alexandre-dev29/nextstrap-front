import React from "react";
import LoginForm from "../../../components/LoginForm";
import UnAutorizedLayout from "../../../components/UnAutorizedLayout";
import { Text } from "@nextui-org/react";

export default function index() {
  return (
    <UnAutorizedLayout>
      <div style={{ zIndex: 10 }} className="flex flex-col w-screen h-screen px-12 py-6">
        <div className={"p-4"}>
          <Text
            h1
            size={25}
            css={{
              textGradient: "45deg, $gray500 -20%, $gray900 90%",
            }}
            weight="bold"
          >
            Nextrap
          </Text>
        </div>
        <LoginForm />
      </div>
    </UnAutorizedLayout>
  );
}
