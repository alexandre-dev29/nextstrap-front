import {
  AiOutlineDelete,
  AiOutlineHeart,
  AiOutlineMenu,
  AiOutlineSearch,
  AiOutlineShopping,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import DefaultButton from "./DefaultButton";
import Link from "next/link";
import { useECommerceStore } from "../states/ProductStates";
import { Button, Card, Popover, Text } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import CardItem from "./CardItem";
import getStripe from "../Utils/getStripe";
import toast from "react-hot-toast";
import { useRouter } from "next/router";

export default function NavBarComponent() {
  const { totalQuantities, cardItems, onRemove } = useECommerceStore();
  const [isSSR, setIsSSR] = useState(true);
  useEffect(() => {
    setIsSSR(false);
  }, []);

  const router = useRouter();

  return (
    <div className={"w-full bg-white h-[7vh] flex items-center px-12"}>
      <span className={"cursor-pointer"}>
        <AiOutlineMenu className={"text-2xl"} />
      </span>
      <Link href={"/"}>
        <h1 className={"text-xl m-0 ml-8 flex-1 cursor-pointer"}>NextStrap.</h1>
      </Link>
      <div className={"flex items-center w-1/5 justify-around"}>
        <button className={"m-0"}>
          <AiOutlineSearch size={24} />
        </button>
        <button className={"m-0"}>
          <AiOutlineHeart size={24} />
        </button>
        <Popover>
          <Popover.Trigger>
            <Button
              animated={true}
              auto
              flat
              color={"warning"}
              className={"m-0 relative"}
            >
              <AiOutlineShopping size={24} />
              <p
                className={
                  "absolute  top-1 right-1 bg-orange-500 rounded-full px-[5px] text-sm text-white"
                }
              >
                {!isSSR && totalQuantities}
              </p>
            </Button>
          </Popover.Trigger>
          <Popover.Content>
            <div className={"flex flex-col justify-between"}>
              <div className={"max-h-[500px]"}>
                {cardItems.length == 0 ? (
                  <p className={"p-8"}>The Card is Empty</p>
                ) : (
                  cardItems.map((item) => (
                    <CardItem
                      key={item.productId}
                      item={item}
                      onClick={() => {
                        onRemove(item);
                      }}
                    />
                  ))
                )}
              </div>
              <div className={"bg-gray-900 flex justify-center z-50"}>
                <button
                  className={
                    "p-2 w-full text-white flex items-center justify-center"
                  }
                  onClick={async () => {
                    await router.push("/Cart");
                  }}
                >
                  <AiOutlineShoppingCart className={"mr-4"} size={20} />
                  View Card
                </button>
              </div>
            </div>
          </Popover.Content>
        </Popover>

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
