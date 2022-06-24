import { Link, Text, theme } from "@nextui-org/react";
import { FieldErrors, UseFormRegisterReturn } from "react-hook-form";
import { LoginFormElement } from "../../../UiTypes/GlobalTypes";
import InputComponent from "../../../components/input-component";
import React from "react";

export function HeadingLogin() {
  return (
    <>
      <Text
        h1
        css={{
          color: "$mainTextColor",
        }}
        weight="bold"
        className={"text-3xl md:text-4xl xl:text-5xl"}
      >
        Login to Your Account
      </Text>
      <Text
        h1
        css={{
          color: "$mainTextColor",
          letterSpacing: "$wide",
        }}
        className={"text-3xl md:text-4xl xl:text-5xl text-center "}
        weight="thin"
      >
        login and start shopping
      </Text>
    </>
  );
}

export function LoginInputs(props: {
  errors: FieldErrors<LoginFormElement>;
  useFormRegisterReturn: UseFormRegisterReturn;
  useFormRegisterReturn1: UseFormRegisterReturn;
}) {
  return (
    <>
      <InputComponent
        errors={props.errors}
        useFormRegisterReturn={props.useFormRegisterReturn}
        placeHolder={"username"}
        autocomplete={"current-username"}
        elementToCheck={props.errors.username}
      />
      <InputComponent
        errors={props.errors}
        useFormRegisterReturn={props.useFormRegisterReturn1}
        placeHolder={"Password"}
        autocomplete={"current-password"}
        type={"password"}
        elementToCheck={props.errors.password}
      />
    </>
  );
}

export function FooterRegister() {
  return (
    <p
      style={{
        color: "$mainTextColor",
        textAlign: "center",
      }}
    >
      {"Don't have an account?"}
      <Link href={"/Auth/Register"}>
        <span
          style={{
            color: theme.colors.gray700.value,
            textDecoration: "underline",
            textUnderlineOffset: "0.1rem",
            fontSize: 18,
            fontWeight: "bold",
          }}
        >
          Register
        </span>
      </Link>
    </p>
  );
}
