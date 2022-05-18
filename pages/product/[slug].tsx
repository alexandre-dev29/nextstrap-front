import React, { useState } from "react";
import { LayoutElement } from "../../components/Layout";
import { useRouter } from "next/router";
import { useProductQuery } from "../../graphql/generated/graphqlTypes";
import { Card } from "@nextui-org/react";
import { AiOutlineHeart, AiOutlineStar } from "react-icons/ai";
import DefaultButton from "../../components/DefaultButton";
import ProductSuggestion from "../../components/ProductSuggestion";
import { useECommerceStore } from "../../states/ProductStates";
import { GetProductState } from "../../Utils/UtilFunc";
import { StateProduct } from "../../UiTypes/StateProduct";

const ProductDetails = () => {
  const router = useRouter();
  const { slug } = router.query;
  const { onAdd } = useECommerceStore();
  const { data, loading } = useProductQuery({
    fetchPolicy: "cache-and-network",
    errorPolicy: "all",
    variables: { id: `${slug}` },
  });
  async function handleBuyNow(product: StateProduct) {
    onAdd(product, 1);
    await router.push("/Cart");
  }
  const [imageIndex, setImageIndex] = useState(0);
  return (
    <LayoutElement>
      <div className={"p-12 bg-white flex justify-between shadow-md"}>
        <div className="w-2/5">
          <Card cover>
            <Card.Body>
              <Card.Image
                src={`http://localhost:1337${data?.product?.data?.attributes?.productImages?.data[imageIndex]?.attributes?.url}`}
                height={350}
                width="100%"
                alt={
                  data?.product?.data?.attributes?.productImages?.data[
                    imageIndex
                  ]?.attributes?.name
                }
              />
            </Card.Body>
          </Card>

          <div className={"mt-4 grid grid-cols-5"}>
            {data?.product?.data?.attributes?.productImages?.data.map(
              (currentImage, i: number) => (
                <div className={"w-[120px]"} key={currentImage.id}>
                  <Card
                    cover
                    className={"h-[110px]"}
                    onClick={() => {
                      setImageIndex(i);
                    }}
                  >
                    <Card.Body>
                      <Card.Image
                        src={`http://localhost:1337${currentImage.attributes?.url}`}
                        className={"cursor-pointer"}
                        height={110}
                        width="120"
                        alt={"alexandre"}
                      />
                    </Card.Body>
                  </Card>
                </div>
              )
            )}
          </div>
        </div>
        <div className={"w-1/2 p-8"}>
          <div className={"flex items-center justify-between"}>
            <h2 className={"text-3xl m-0 font-bold tracking-widest"}>
              {data?.product?.data?.attributes?.productName}
            </h2>
            <AiOutlineHeart
              className={
                "text-5xl bg-gray-200 rounded-full p-2 cursor-pointer hover:text-teal-400 hover:shadow-xl transition-all duration-500"
              }
            />
          </div>
          <p className={"font-light text-lg w-3/4"}>
            {data?.product?.data?.attributes?.description}
          </p>
          <p
            className={"font-semibold text-4xl mt-5"}
          >{`$  ${data?.product?.data?.attributes?.productPrice}`}</p>

          <div className={"flex items-center"}>
            <AiOutlineStar className={"text-3xl"} />
            <AiOutlineStar className={"text-3xl"} />
            <AiOutlineStar className={"text-3xl"} />
            <AiOutlineStar className={"text-3xl"} />
            <AiOutlineStar className={"text-3xl"} />
            <p className={"ml-4 text-xl font-semibold"}>
              {data?.product?.data?.attributes?.reviews?.data.length}{" "}
              {`${
                (data?.product?.data?.attributes?.reviews?.data?.length ?? 0) >
                1
                  ? "reviews"
                  : "review"
              }`}
            </p>
          </div>
          <div className={"mt-2"}>
            <DefaultButton
              textButton={"Buy Now"}
              onClickAction={async () => {
                await handleBuyNow(GetProductState(data?.product?.data));
              }}
              isFilled={false}
              isSmall={false}
              customStyle={"mr-8"}
            />
            <DefaultButton
              textButton={"Add To Card"}
              onClickAction={() => {
                onAdd(GetProductState(data?.product?.data), 1);
              }}
              isFilled={true}
              isSmall={false}
            />
          </div>
        </div>
      </div>
      {loading ? (
        <p>Loading</p>
      ) : (
        <ProductSuggestion currentProduct={data?.product?.data} />
      )}
    </LayoutElement>
  );
};

export default ProductDetails;
