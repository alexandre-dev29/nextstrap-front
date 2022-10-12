import { BannerEntityResponseCollection } from "../graphql/generated/graphqlTypes";
import DefaultButton from "./DefaultButton";
import Image from "next/image";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useECommerceStore } from "../states";
import { GetProductState } from "../utils";
import { StateProduct } from "../UiTypes";
import { useRouter } from "next/router";

interface mainBannerProps {
  mainBannersData: BannerEntityResponseCollection | any;
}

const MainBanner = ({ mainBannersData }: mainBannerProps) => {
  const { onAdd } = useECommerceStore();
  const router = useRouter();

  async function handleBuyNow(product: StateProduct) {
    onAdd(product, 1);
    await router.push("/Cart");
  }

  const currentBanner = mainBannersData.data[0];
  return (
    <div className={"flex w-3/4 bg-white mx-auto h-1/3"}>
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
                  GetProductState(currentBanner?.attributes?.products?.data[0])
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
                  GetProductState(currentBanner?.attributes?.products?.data[0]),
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
              `${currentBanner?.attributes?.bannerImage?.data?.attributes?.url}` ||
              ""
            }
            height={600}
            width={850}
            priority={true}
            alt={"headphones"}
            className={"absolute -top-12 -left-14"}
          />
        </div>
      </div>
    </div>
  );
};
export default MainBanner;
