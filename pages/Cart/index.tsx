import React, { useEffect, useState } from "react";
import { useECommerceStore } from "../../states";
import Image from "next/image";
import { AiOutlineCreditCard, AiOutlineDelete, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { getStripe } from "../../utils";
import toast from "react-hot-toast";
import LayoutElement from "../../components/Layout";
import DefaultButton from "../../components/DefaultButton";
import { Row } from "@nextui-org/react";

const Index = () => {
  const { cardItems, totalPrice, toggleCartItemQuantity, onRemove } = useECommerceStore();
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
      <h3 className={"font-bold tracking-widest text-3xl  text-center"}>Shopping Cart</h3>
      <div className={"lg:w-3/4  mx-auto mt-12  md:px-6 md:px-12 py-4"}>
        <div>
          {!isSSR &&
            cardItems.map((product) => (
              <div
                className={
                  "p-2 grid grid-cols-1 md:grid-cols-3 items-center justify-center  mt-2  px-4 rounded-md"
                }
                key={product.productId}
                style={{ backgroundColor: "var(--nextui-colors-gray50)" }}
              >
                <div className={"md:mb-0 mb-6"}>
                  <p
                    className={
                      "text-lg text-center md:text-start font-bold mb-6 underline underline-offset-4"
                    }
                  >
                    Product
                  </p>
                  <div className={"flex items-center"}>
                    <AiOutlineDelete
                      className={
                        "mr-6 text-red-500 cursor-pointer text-2xl md:text-4xl transition-all duration-500 transform hover:scale-125"
                      }
                      onClick={() => onRemove(product)}
                    />
                    <Image
                      src={`${product.productImages?.data[0].attributes?.url}`}
                      height={90}
                      width={150}
                      alt={product.productName}
                      className={"rounded-md "}
                    />
                    <div className={"flex flex-col ml-3 "}>
                      <p className={"m-0 font-bold"}>{product.productName}</p>
                      <p className={"m-0 font-semibold"}>{`$ ${product.productPrice}`}</p>
                    </div>
                  </div>
                </div>
                <div className={"flex items-center justify-between md:block md:mb-0 mb-6"}>
                  <p className={"text-lg text-center font-bold md:mb-6 underline underline-offset-4"}>
                    Quantity
                  </p>
                  <div className={"flex items-center justify-center"}>
                    <span>
                      <AiOutlineMinus
                        className={"mr-2 cursor-pointer"}
                        onClick={() => {
                          toggleCartItemQuantity(product.productId, "dec");
                        }}
                      />
                    </span>
                    <span
                      style={{ backgroundColor: "var(--nextui-colors-accents2)" }}
                      className={" p-4 rounded-md"}
                    >
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
                </div>
                <div className={"self-center flex justify-between md:block"}>
                  <p className={"text-lg text-end font-bold mb-6 underline underline-offset-4"}>
                    Total Price
                  </p>
                  <p className={"text-lg text-end font-bold"}>$ {product.productPrice * product.quantity}</p>
                </div>
              </div>
            ))}
        </div>
        {!isSSR && (
          <Row
            justify={"flex-end"}
            css={{ marginTop: "$8", padding: "$4" }}
            style={{ backgroundColor: "var(--nextui-colors-accents2)" }}
          >
            <p className={"font-bold self-end mr-16"}>Total</p>
            <span className={"text-xl font-bold"}>${totalPrice}</span>
          </Row>
        )}
        <div className={"mt-8 flex justify-center"}>
          <DefaultButton
            textButton={"Checkout"}
            onClickAction={async () => {
              await handleCheckout();
            }}
            isFilled={true}
            isSmall={false}
            customStyle={"flex mx-auto"}
          >
            <AiOutlineCreditCard className={"text-2xl mr-3"} />
          </DefaultButton>
        </div>
      </div>
    </LayoutElement>
  );
};

export default Index;
