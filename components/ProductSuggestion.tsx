import React from "react";
import {
  ProductEntity,
  useCategoriesQuery,
  useProductsQuery,
} from "../graphql/generated/graphqlTypes";
import DefaultButton from "./DefaultButton";
import ProductCard from "./ProductCard";
import { GetProductState } from "../Utils/UtilFunc";
import { useECommerceStore } from "../states/ProductStates";

interface productSuggestionProps {
  currentProduct: ProductEntity | any;
}
const ProductSuggestion = (props: productSuggestionProps) => {
  const { data: productData } = useProductsQuery({
    fetchPolicy: "cache-and-network",
    errorPolicy: "all",
  });
  const { onAdd } = useECommerceStore();

  return (
    <div className={"mx-auto flex items-center flex-col p-16"}>
      <h3 className={"font-medium text-4xl"}>Other you may like</h3>
      <div
        className={
          "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-10/12 gap-5"
        }
      >
        {productData?.products?.data
          .filter((a) => a.id != props.currentProduct.id)
          .map((product) => (
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
    </div>
  );
};

export default ProductSuggestion;
