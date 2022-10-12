import { Button, Row } from "@nextui-org/react";

interface DefaultButtonProps {
  textButton: string | undefined;
  onClickAction: () => void;
  isFilled: boolean;
  isSmall: boolean;
  customStyle?: string;
  children?: any;
  buttonType?: "reset" | "button" | "submit" | undefined;
}

export default function DefaultButton(props: DefaultButtonProps) {
  return (
    <Button
      css={{
        borderRadius: "0",
        borderColor: "$gray800",
        color: "$accents7",
        margin: props.customStyle,
      }}
      style={
        props.isSmall
          ? { padding: "1rem 2rem", transition: "all" }
          : { padding: "1.5rem 3rem", transition: "all" }
      }
      bordered={true}
      auto={true}
      type={props.buttonType}
      onClick={props.onClickAction}
    >
      <Row justify={"space-between"} align={"center"}>
        {props.children}
        {props.textButton}
      </Row>
    </Button>
  );
}
