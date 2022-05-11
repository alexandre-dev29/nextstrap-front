import React from "react";
import {
  useCategoriesQuery,
  useProductsQuery,
} from "../graphql/generated/graphqlTypes";
import DefaultButton from "./DefaultButton";
import ProductCard from "./ProductCard";

const ProductSuggestion = () => {
  const { data: productData } = useProductsQuery({
    fetchPolicy: "cache-and-network",
    errorPolicy: "all",
  });

  return (
    <div className={"mx-auto flex items-center flex-col p-16"}>
      <h3 className={"font-medium text-4xl"}>Other you may like</h3>
      <div
        className={
          "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-10/12 gap-5"
        }
      >
        {productData?.products?.data.map(({ id, attributes }) => (
          <ProductCard
            productName={attributes?.productName}
            productPrice={attributes?.productPrice}
            productImage={attributes?.productImages?.data[0]?.attributes}
            key={id}
            productSlug={attributes?.productSlug}
            productId={id ?? "0"}
            buttonText={"Add To Card"}
            onClickButton={() => {}}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductSuggestion;
