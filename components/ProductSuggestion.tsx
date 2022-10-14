import React from "react";
import { ProductEntity, ProductEntityResponseCollection } from "../graphql/generated/graphqlTypes";
import { GetProductState } from "../utils";
import { useECommerceStore } from "../states";
import ProductCard from "./ProductCard";

interface productSuggestionProps {
  allOtherProducts: ProductEntityResponseCollection | any;
}

export default function ProductSuggestion({ allOtherProducts }: productSuggestionProps) {
  const { onAdd } = useECommerceStore();

  return (
    <div className={"mx-auto flex items-center flex-col p-16"}>
      <h3 className={"font-medium text-4xl"}>Other you may like</h3>
      <div className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-10/12 gap-5"}>
        {allOtherProducts.data.map((product: ProductEntity) => (
          <ProductCard
            productName={product.attributes?.productName}
            productPrice={product.attributes?.productPrice}
            productImage={product.attributes?.productImages?.data[0]?.attributes}
            key={product.id}
            productSlug={`${product.attributes?.productSlug}`}
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
}
