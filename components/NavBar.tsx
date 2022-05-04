import {
  AiOutlineHeart,
  AiOutlineMenu,
  AiOutlineSearch,
  AiOutlineShopping,
} from "react-icons/ai";
import DefaultButton from "./DefaultButton";

export default function NavBarComponent() {
  return (
    <div className={"w-full bg-white h-[7vh] flex items-center px-12"}>
      <span className={"cursor-pointer"}>
        <AiOutlineMenu className={"text-2xl"} />
      </span>
      <h1 className={"text-xl m-0 ml-8 flex-1"}>NextStrap.</h1>
      <div className={"flex items-center w-1/5 justify-around"}>
        <button className={"m-0"}>
          <AiOutlineSearch size={24} />
        </button>
        <button className={"m-0"}>
          <AiOutlineHeart size={24} />
        </button>
        <button className={"m-0"}>
          <AiOutlineShopping size={24} />
        </button>

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
