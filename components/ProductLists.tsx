import React from "react";
import DefaultButton from "./DefaultButton";
import {
  useCategoriesQuery,
  useProductsQuery,
} from "../graphql/generated/graphqlTypes";
import ProductCard from "./ProductCard";

interface ProductListsProps {}
const ProductLists = (props: ProductListsProps) => {
  const { data } = useCategoriesQuery({
    fetchPolicy: "cache-and-network",
    errorPolicy: "all",
  });
  const { data: productData } = useProductsQuery({
    fetchPolicy: "cache-and-network",
    errorPolicy: "all",
  });

  return (
    <div className={"mx-auto flex items-center flex-col p-16"}>
      <h3 className={"font-medium text-4xl"}>Product List</h3>
      <div className={""}>
        <ul className={"flex items-start"}>
          <li key="all">
            <DefaultButton
              textButton={"All"}
              onClickAction={() => {}}
              isFilled={false}
              isSmall={true}
            />
          </li>
          {data?.categories?.data.map((category) => (
            <li key={category.id}>
              <DefaultButton
                textButton={category.attributes?.category ?? ""}
                onClickAction={() => {}}
                isFilled={false}
                isSmall={true}
                customStyle={"ml-3"}
              />
            </li>
          ))}
        </ul>
      </div>

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

export default ProductLists;
