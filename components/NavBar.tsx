import { AiOutlineMenu } from "react-icons/ai";
import DefaultButton from "./DefaultButton";

export default function NavBarComponent() {
  return (
    <div className={"w-full bg-white h-[6vh] flex items-center px-12"}>
      <span className={"cursor-pointer"}>
        <AiOutlineMenu className={"text-2xl"} />
      </span>
      <h1 className={"text-xl m-0 ml-8 flex-1"}>NextStrap.</h1>
      <div>
        <DefaultButton
          textButton={"Login"}
          onClickAction={() => {}}
          isFilled={true}
          isSmall={true}
        />
      </div>
    </div>
  );
}
