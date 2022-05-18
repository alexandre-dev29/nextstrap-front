import React, { useEffect, useState } from "react";
import { LayoutElement } from "../../components/Layout";
import { useECommerceStore } from "../../states/ProductStates";
import Image from "next/image";
import {
  AiOutlineCreditCard,
  AiOutlineMinus,
  AiOutlinePlus,
} from "react-icons/ai";
import DefaultButton from "../../components/DefaultButton";
import getStripe from "../../Utils/getStripe";
import toast from "react-hot-toast";

const Index = () => {
  const { cardItems, totalPrice, toggleCartItemQuantity } = useECommerceStore();
  const [isSSR, setIsSSR] = useState(true);
  useEffect(() => {
    setIsSSR(false);
  }, []);
  const handleCheckout = async () => {
    const stripe = await getStripe();
    const response = await fetch("/api/stripe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(cardItems),
    });
    if (response.status === 5000) return;
    const data = await response.json();
    toast.loading("Redirecting...");
    stripe?.redirectToCheckout({ sessionId: data.id });
  };

  return (
    <LayoutElement>
      <h3 className={"font-medium tracking-widest text-3xl"}>Shopping Cart</h3>
      <div className={"w-2/3 mx-auto mt-12 bg-white px-12 py-4"}>
        <div className={"flex justify-between"}>
          <p className={"font-bold"}>Product</p>
          <p className={"font-bold ml-24"}>Quantity</p>
          <p className={"font-bold"}>SubTotal</p>
        </div>
        {!isSSR &&
          cardItems.map((product) => (
            <div className={"p-2 flex items-center"} key={product.productId}>
              <div className={"w-1/2 flex items-center"}>
                <Image
                  src={`http://localhost:1337${product.productImages?.data[0].attributes?.url}`}
                  height={90}
                  width="100px"
                  alt={product.productName}
                  className={"rounded-md"}
                />
                <div className={"flex flex-col ml-3 "}>
                  <p className={"m-0 font-bold"}>{product.productName}</p>
                  <p
                    className={"m-0 font-semibold"}
                  >{`$ ${product.productPrice}`}</p>
                </div>
              </div>
              <div className={"flex justify-between w-1/2"}>
                <div className={"flex items-center"}>
                  <span>
                    <AiOutlineMinus
                      className={"mr-2 cursor-pointer"}
                      onClick={() => {
                        toggleCartItemQuantity(product.productId, "dec");
                      }}
                    />
                  </span>
                  <span className={"bg-gray-300 p-4 rounded-md"}>
                    {product.quantity}
                  </span>
                  <span>
                    <AiOutlinePlus
                      className={"ml-2 cursor-pointer"}
                      onClick={() => {
                        toggleCartItemQuantity(product.productId, "inc");
                      }}
                    />
                  </span>
                </div>
                <div>
                  <p className={"text-lg font-bold"}>
                    $ {product.productPrice * product.quantity}
                  </p>
                </div>
              </div>
            </div>
          ))}
        {!isSSR && (
          <div className={"flex justify-end bg-gray-50 mt-4 items-center "}>
            <p className={"font-bold self-end mr-16"}>Total</p>
            <span className={"text-xl font-bold"}>${totalPrice}</span>
          </div>
        )}
        <DefaultButton
          textButton={"Checkout"}
          onClickAction={async () => {
            await handleCheckout();
          }}
          isFilled={true}
          isSmall={false}
          customStyle={"mt-8 flex mx-auto"}
        >
          <AiOutlineCreditCard className={"text-2xl mr-3"} />
        </DefaultButton>
      </div>
    </LayoutElement>
  );
};

export default Index;
