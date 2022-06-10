import { useBannersQuery } from "../graphql/generated/graphqlTypes";
import DefaultButton from "./DefaultButton";
import Image from "next/image";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Loading } from "@nextui-org/react";
import { useECommerceStore } from "../states/ProductStates";
import { GetProductState } from "../Utils/UtilFunc";
import { StateProduct } from "../UiTypes/StateProduct";
import { useRouter } from "next/router";

export default function MainBanner() {
  const { loading, data } = useBannersQuery({
    fetchPolicy: "cache-first",
    errorPolicy: "all",
  });
  const { onAdd } = useECommerceStore();
  const router = useRouter();

  async function handleBuyNow(product: StateProduct) {
    onAdd(product, 1);
    await router.push("/Cart");
  }

  const currentBanner = data?.banners?.data[0];
  return (
    <div className={"flex w-3/4 bg-white mx-auto h-1/3"}>
      {loading ? (
        <div
          className={
            "h-[10rem] flex items-center justify-center mx-auto rounded-lg"
          }
        >
          <Loading size="xl" color={"currentColor"} />
        </div>
      ) : (
        <div className={"flex "}>
          <div className={"p-24 w-2/3 flex flex-col items-start "}>
            <h2 className={"font-light text-7xl"}>
              {currentBanner?.attributes?.productName}
            </h2>
            <p>{currentBanner?.attributes?.description}</p>

            <p className={"font-medium text-xl text-gray-500"}>
              Price{" "}
              <span
                className={"font-bold text-gray-900"}
              >{`$ ${currentBanner?.attributes?.bannerPrice}`}</span>{" "}
              <span
                className={"font-light ml-2 text-gray-900"}
              >{`(${currentBanner?.attributes?.discount})`}</span>
              <span className={"font-light text-[1rem] text-gray-900 ml-2"}>
                Ending {currentBanner?.attributes?.saleTime}
              </span>
            </p>

            <div className={"flex"}>
              <DefaultButton
                textButton={currentBanner?.attributes?.buttonText}
                onClickAction={async () => {
                  await handleBuyNow(
                    GetProductState(
                      currentBanner?.attributes?.products?.data[0]
                    )
                  );
                }}
                isFilled={false}
                isSmall={false}
                customStyle={"mt-5"}
              />
              <DefaultButton
                textButton={"Add To Card"}
                onClickAction={() => {
                  onAdd(
                    GetProductState(
                      currentBanner?.attributes?.products?.data[0]
                    ),
                    1
                  );
                }}
                isFilled={true}
                isSmall={false}
                customStyle={"mt-5 ml-5"}
              >
                <AiOutlineShoppingCart size={20} className={"mr-3"} />
              </DefaultButton>
            </div>
          </div>
          <div className={"p-8 relative"}>
            <Image
              src={
                //TODO remove this hard coded url
                `${currentBanner?.attributes?.bannerImage?.data?.attributes?.url}` ||
                ""
              }
              height={600}
              width={850}
              alt={"headphones"}
              className={"absolute -top-12 -left-14"}
            />
          </div>
        </div>
      )}
    </div>
  );
}
