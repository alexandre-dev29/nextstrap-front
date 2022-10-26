import React from "react";
import { Button, Container, Text } from "@nextui-org/react";
import { useRouter } from "next/router";
import { useECommerceStore } from "../../states";
import Confetti from "react-confetti";
import useWindowSize from "react-use/lib/useWindowSize";

const Index = () => {
  const router = useRouter();
  const { clearAllCart } = useECommerceStore();
  const { width, height } = useWindowSize();

  return (
    <Container
      display={"flex"}
      direction={"column"}
      justify={"center"}
      alignItems={"center"}
      css={{ height: "100vh" }}
    >
      <Confetti width={width} height={height} />
      <Text h2>Your Order has been processed successfully 🔥🎇🎇🎇🎆🎆🎆</Text>
      <Text h2>Check your email for Information</Text>
      <Button
        onClick={async () => {
          clearAllCart();
          await router.push("/");
        }}
        color={"default"}
      >
        Return To Shopping 😋
      </Button>
    </Container>
  );
};

export default Index;
