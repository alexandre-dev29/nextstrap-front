import React, { useState } from "react";
import { UnAutorizedLayout } from "../../../components/UnAutorizedLayout";
import { SubmitHandler, useForm } from "react-hook-form";
import { RegisterFormElement } from "../../../UiTypes";
import { toast, Toaster } from "react-hot-toast";
import { useRegisterMutation } from "../../../graphql/generated/graphqlTypes";
import { Button, Loading, Text } from "@nextui-org/react";
import InputComponent from "../../../components/input-component";
import { FooterRegister } from "../Login/UtilsLogin";
import { defaultApolloClient } from "../../../graphql";

function Index() {
  const [loadingActive, setLoadingActive] = useState("none");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormElement>();
  const notify = () =>
    toast.success(
      `You have registered successfully please write the OTP code you've just receive.`,
      { position: "top-right" }
    );
  const [registerMutation] = useRegisterMutation({
    errorPolicy: "all",
    fetchPolicy: "network-only",
    client: defaultApolloClient,
  });

  const onSubmitLogin: SubmitHandler<RegisterFormElement> = async ({
    username,
    email,
    password,
  }) => {
    const { data, errors } = await registerMutation({
      variables: { input: { email, password, username } },
      errorPolicy: "all",
      onError: (err) => {
        console.log(err);
      },
    });
    console.log(data);

    if (!errors && data?.register.user.username === username) {
      localStorage.setItem("accessToken", `${data?.register.jwt}`);
      localStorage.setItem("currentUser", JSON.stringify(data?.register.user));
      notify();
      window.location.assign("/");
    }
    setLoadingActive("none");
  };
  return (
    <UnAutorizedLayout>
      <div
        style={{ zIndex: 10 }}
        className="flex flex-col w-screen h-screen px-12 py-6"
      >
        <div>
          <Toaster />
          <Text
            h1
            size={25}
            css={{
              textGradient: "45deg, $gray500 -20%, $gray900 90%",
            }}
            className={"p-4"}
            weight="bold"
          >
            Nextrap
          </Text>
        </div>
        <div className={"flex flex-1 justify-center items-center flex-col"}>
          <Text
            h1
            css={{
              color: "$mainTextColor",
            }}
            weight="bold"
            className={"text-3xl md:text-4xl xl:text-5xl"}
          >
            Register To the platform
          </Text>
          <Text
            h1
            css={{
              color: "$mainTextColor",
              letterSpacing: "$wide",
              mt: 20,
            }}
            className={"text-3xl md:text-4xl xl:text-5xl text-center"}
            weight="thin"
          >
            register and start shopping
          </Text>
          <form
            className={"py-12 flex flex-col gap-5 w-full sm:w-1/2 xl:w-1/3"}
            onSubmit={handleSubmit(onSubmitLogin)}
          >
            <Loading
              type="default"
              size={"lg"}
              hidden={true}
              style={{ display: loadingActive }}
              className={"mx-auto"}
            />
            <div className={"flex flex-col md:grid md:grid-cols-2 gap-4"}>
              <InputComponent
                errors={errors}
                useFormRegisterReturn={register("username", {
                  required: true,
                })}
                placeHolder={"First Name"}
                autocomplete={"username"}
                elementToCheck={errors.username}
              />

              <InputComponent
                errors={errors}
                useFormRegisterReturn={register("email", {
                  required: true,
                })}
                placeHolder={"Email"}
                autocomplete={"email"}
                elementToCheck={errors.email}
              />
            </div>
            <div className={"flex flex-col md:grid md:grid-cols-1 gap-4"}>
              <InputComponent
                errors={errors}
                useFormRegisterReturn={register("password", {
                  required: true,
                })}
                placeHolder={"Password"}
                autocomplete={"current-password"}
                type={"password"}
                elementToCheck={errors.password}
              />
            </div>
            <Button
              shadow
              color={"default"}
              auto
              type={"submit"}
              css={{
                borderRadius: "$xs",
                py: "1.6rem",
                zIndex: "$10",
                bgColor: "$gray900",
              }}
            >
              Register
            </Button>

            <FooterRegister isRegister={true} />
          </form>
        </div>
      </div>
    </UnAutorizedLayout>
  );
}

export default Index;
