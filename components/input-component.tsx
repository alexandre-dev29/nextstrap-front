import { FieldError, FieldErrors, UseFormRegisterReturn } from "react-hook-form";
import { LoginFormElement, RegisterFormElement } from "../UiTypes/GlobalTypes";

/* eslint-disable-next-line */
export interface InputComponentProps {
  errors: FieldErrors<RegisterFormElement | LoginFormElement | any>;
  useFormRegisterReturn: UseFormRegisterReturn;
  placeHolder: string;
  autocomplete?: string;
  type?: string;
  elementToCheck: FieldError | any;
  customStyle?: string;
}

export default function InputComponent(props: InputComponentProps) {
  return (
    <input
      placeholder={props.placeHolder}
      type={props.type ?? "text"}
      autoComplete={props.autocomplete}
      style={{ zIndex: "10", color: "$mainTextColor" }}
      className={`outline-1 border-2 rounded-md px-6 py-4 w-full ${props.customStyle} ${
        props.elementToCheck && "border-red-200"
      }`}
      {...props.useFormRegisterReturn}
    />
  );
}
