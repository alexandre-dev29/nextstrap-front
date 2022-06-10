import Image from "next/image";
import { AiOutlineDelete } from "react-icons/ai";
import { StateProduct } from "../UiTypes/StateProduct";

function CardItem(props: { item: StateProduct | any; onClick: () => void }) {
  return (
    <div className={"p-2 flex items-start min-w-[350px] pr-4"}>
      {" "}
      <Image
        src={`${props.item.productImages?.data[0].attributes?.url}`}
        alt={"Image from source"}
        width={60}
        height={50}
        className={"rounded-xl"}
      />
      <div className={"flex flex-col ml-4 flex-1"}>
        <p className={"m-0 font-semibold"}>{props.item.productName}</p>
        <p className={"m-0 font-light"}>
          $ {props.item.productPrice} * {props.item.quantity}
        </p>
      </div>
      <div className={"flex items-center "}>
        <p className={"m-0 mt-3"}>
          $ {props.item.productPrice * props.item.quantity}
        </p>
      </div>
      <AiOutlineDelete
        className={
          "mt-3 ml-3 text-red-600 text-xl transition-all duration-500 transform hover:scale-125 cursor-pointer"
        }
        onClick={props.onClick}
      />
    </div>
  );
}

export default CardItem;
