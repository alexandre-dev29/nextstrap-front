import React, { useEffect, useState } from "react";
import { LayoutElement } from "../../components/Layout";
import {
  ProductEntity,
  useFavoritesQuery,
} from "../../graphql/generated/graphqlTypes";
import ProductCard from "../../components/ProductCard";
import { getProductsFromFavorite, GetProductState } from "../../Utils/UtilFunc";
import { useECommerceStore } from "../../states/ProductStates";

const Index = () => {
  const [currentUser, setCurrentUser] = useState({ username: "", email: "" });
  const { onAdd } = useECommerceStore();
  useEffect(() => {
    if (localStorage.getItem("currentUser")) {
      const parsedObject = JSON.parse(
        localStorage.getItem("currentUser") || ""
      );
      setCurrentUser(parsedObject);
    }
  }, []);

  const { data } = useFavoritesQuery({
    fetchPolicy: "cache-first",
    errorPolicy: "all",
    variables: {
      filters: { user: { email: { eq: currentUser.email } } },
    },
  });
  let allProducts: ProductEntity[] = [];
  if (data?.favorites !== undefined)
    allProducts = getProductsFromFavorite(data?.favorites);

  return (
    <LayoutElement>
      <div
        className={
          "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-10/12 gap-5"
        }
      >
        {allProducts?.map((product) => (
          <ProductCard
            productName={product.attributes?.productName}
            productPrice={product.attributes?.productPrice}
            productImage={
              product.attributes?.productImages?.data[0]?.attributes
            }
            key={product.id}
            productSlug={product.attributes?.productSlug}
            productId={product.id ?? "0"}
            buttonText={"Add To Card"}
            onClickButton={() => {
              onAdd(GetProductState(product), 1);
            }}
          />
        ))}
      </div>
    </LayoutElement>
  );
};

export async function getStaticProps(context: any) {
  return {
    props: {
      protected: true,
    },
  };
}
export default Index;
