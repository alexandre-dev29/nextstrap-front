import React, { useLayoutEffect, useState } from "react";
import { LayoutElement } from "../../components/Layout";
import { useRouter } from "next/router";
import {
  ProductEntity,
  useCreateFavoriteMutation,
  useFavoritesQuery,
  useProductQuery,
  useUpdateFavoriteMutation,
} from "../../graphql/generated/graphqlTypes";
import { Card } from "@nextui-org/react";
import { AiOutlineHeart, AiOutlineStar } from "react-icons/ai";
import DefaultButton from "../../components/DefaultButton";
import ProductSuggestion from "../../components/ProductSuggestion";
import { useECommerceStore } from "../../states/ProductStates";
import { getProductsFromFavorite, GetProductState } from "../../Utils/UtilFunc";
import { StateProduct } from "../../UiTypes/StateProduct";
import Image from "next/image";
import { toast } from "react-hot-toast";

const ProductDetails = () => {
  const [currentUser, setCurrentUser] = useState({
    username: "",
    email: "",
    id: "",
  });
  const router = useRouter();
  const { slug } = router.query;
  const { onAdd } = useECommerceStore();

  useLayoutEffect(() => {
    if (localStorage.getItem("currentUser")) {
      const parsedObject = JSON.parse(
        localStorage.getItem("currentUser") || ""
      );
      setCurrentUser(parsedObject);
    }
  }, []);

  const { data, loading } = useProductQuery({
    fetchPolicy: "cache-and-network",
    errorPolicy: "all",
    variables: { id: `${slug}` },
  });

  const { data: dataFavorite } = useFavoritesQuery({
    fetchPolicy: "cache-first",
    errorPolicy: "all",
    variables: {
      filters: { user: { email: { eq: currentUser.email } } },
    },
  });
  const [createFavoriteMutation] = useCreateFavoriteMutation({
    fetchPolicy: "network-only",
    errorPolicy: "all",
  });
  const [updateFavoriteMutation] = useUpdateFavoriteMutation({
    fetchPolicy: "network-only",
    errorPolicy: "all",
  });

  let allProducts: ProductEntity[] = [];
  if (dataFavorite?.favorites !== undefined)
    allProducts = getProductsFromFavorite(dataFavorite?.favorites);

  var favoriteConfig =
    allProducts.filter((a) => a.id == data?.product?.data?.id).length !== 0;

  const addToFavorite = async () => {
    let allProductIds = allProducts!.map((a) => `${a.id}`);
    if (favoriteConfig) {
      const { data: dataUpdated } = await updateFavoriteMutation({
        variables: {
          id: `${dataFavorite?.favorites?.data[0].id}`,
          data: {
            products: allProductIds.filter(
              (a) => a !== `${data?.product?.data?.id}`
            ),
            user: currentUser.id,
          },
        },
      });
      toast.success(`Product has been remove from favorite`, {
        position: "top-right",
      });
    } else {
      if (dataFavorite && dataFavorite!.favorites!.data!.length > 0) {
        allProductIds.push(`${data?.product?.data?.id}`);
        const { data: dataUpdated } = await updateFavoriteMutation({
          variables: {
            id: `${dataFavorite?.favorites?.data[0].id}`,
            data: {
              products: allProductIds,
              user: currentUser.id,
            },
          },
        });
        toast.success(`Product has been add to favorite`, {
          position: "top-right",
        });
      } else {
        const { data: dataInserted } = await createFavoriteMutation({
          variables: {
            data: {
              products: [`${data?.product?.data?.id}`],
              user: currentUser.id,
            },
          },
        });
        if (dataInserted?.createFavorite?.data?.id) {
          toast.success(`Product has been add to favorite`, {
            position: "top-right",
          });
        }
      }
    }
  };

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
              <Image
                src={`${
                  data?.product?.data?.attributes?.productImages?.data[
                    imageIndex
                  ]?.attributes?.url || "/other.jpg"
                }`}
                height={350}
                placeholder={"blur"}
                blurDataURL="/headphone.jpg"
                width={500}
                quality={75}
                alt={
                  data?.product?.data?.attributes?.productImages?.data[
                    imageIndex
                  ]?.attributes?.name
                }
                className={"absolute -top-12 -left-14 cursor-pointer"}
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
                      <Image
                        src={`${currentImage.attributes?.url || "/other.jpg"}`}
                        height={110}
                        width="120"
                        alt={"alexandre"}
                        className={"absolute -top-12 -left-14 cursor-pointer"}
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
              onClick={() => addToFavorite()}
              className={`text-5xl ${
                favoriteConfig ? "bg-red-500 text-white" : "bg-gray-200"
              } rounded-full p-2 cursor-pointer hover:text-teal-400 hover:shadow-xl transition-all duration-500`}
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
