import React, { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { SubmitHandler, useForm } from "react-hook-form";
import { Button, Loading } from "@nextui-org/react";
import { LoginFormElement } from "../../../UiTypes/GlobalTypes";
import { FooterRegister, HeadingLogin, LoginInputs } from "./UtilsLogin";
import DefaultButton from "../../../components/DefaultButton";
import { useLoginMutation } from "../../../graphql/generated/graphqlTypes";

type Props = {};

export default function LoginForm({}: Props) {
  const [loadingActive, setLoadingActive] = useState("none");
  const [loginMutation] = useLoginMutation({
    fetchPolicy: "network-only",
    errorPolicy: "all",
  });
  //handling submit event on the form
  const onSubmitLogin: SubmitHandler<LoginFormElement> = async ({
    username,
    password,
  }) => {
    setLoadingActive("block");
    const { data, errors } = await loginMutation({
      variables: { input: { identifier: username, password: password } },
    });

    if (!errors) {
      localStorage.setItem("accessToken", `${data?.login.jwt}`);
      localStorage.setItem("currentUser", JSON.stringify(data?.login.user));
      window.location.assign("/");
    }
    setLoadingActive("none");
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormElement>();

  return (
    <div style={{ zIndex: 10 }} className="flex flex-col px-12 py-6">
      <Toaster />
      <div className={"flex flex-1 justify-center items-center flex-col"}>
        <HeadingLogin />
        <form
          className={"py-12 flex flex-col gap-5 w-full sm:w-1/2 xl:w-1/4"}
          onSubmit={handleSubmit(onSubmitLogin)}
        >
          <Loading
            type="default"
            size={"lg"}
            hidden={true}
            style={{ display: loadingActive }}
            className={"mx-auto"}
          />

          <LoginInputs
            errors={errors}
            useFormRegisterReturn={register("username", {
              required: true,
            })}
            useFormRegisterReturn1={register("password", {
              required: true,
            })}
          />
          <DefaultButton
            textButton={"Login to Your Account"}
            isFilled={true}
            isSmall={false}
            onClickAction={() => {}}
            buttonType={"submit"}
          >
            <span className={"mr-6"}> </span>
          </DefaultButton>

          <FooterRegister />
        </form>
      </div>
    </div>
  );
}
