import React from "react";
import { Button, Container, Text } from "@nextui-org/react";
import { useRouter } from "next/router";

const Index = () => {
  const router = useRouter();
  return (
    <Container
      display={"flex"}
      direction={"column"}
      justify={"center"}
      alignItems={"center"}
      css={{ height: "100vh" }}
    >
      <Text h2>Your order has been canceled 😥😥</Text>
      <Button
        onClick={async () => {
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
