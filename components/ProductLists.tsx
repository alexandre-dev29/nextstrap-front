import React, { useState } from "react";
import {
  CategoryEntity,
  CategoryEntityResponseCollection,
  ProductEntity,
  ProductEntityResponseCollection,
} from "../graphql/generated/graphqlTypes";
import { GetProductState } from "../utils";
import { useECommerceStore } from "../states";
import { Container, Grid, Text } from "@nextui-org/react";
import ProductCard from "./ProductCard";
import DefaultButton from "./DefaultButton";

interface ProductListsProps {
  categoriesData: CategoryEntityResponseCollection | any;
  productsData: ProductEntityResponseCollection | any;
}

export default function ProductLists({ productsData, categoriesData }: ProductListsProps) {
  const { onAdd } = useECommerceStore();
  const [category, setCategory] = useState("all");
  return (
    <>
      <Container
        style={{ margin: "0 auto" }}
        display={"flex"}
        alignItems={"center"}
        direction={"column"}
        css={{ "@smMax": { padding: "1rem" }, "@mdMin": { padding: "4rem" } }}
      >
        <Text h2 size={"$4xl"} css={{ fontWeight: "$semibold" }}>
          Product List
        </Text>
        <div className={""}>
          <ul style={{ display: "flex", justifyItems: "center" }}>
            <li key="all">
              <DefaultButton
                textButton={"All"}
                onClickAction={() => {
                  setCategory(`all`);
                }}
                isFilled={false}
                isSmall={true}
              />
            </li>
            {categoriesData.data.map((category: CategoryEntity) => (
              <li key={category.id}>
                <DefaultButton
                  textButton={`${category.attributes?.category}`}
                  onClickAction={() => {
                    setCategory(`${category.attributes?.category}`);
                  }}
                  isFilled={false}
                  isSmall={true}
                  customStyle={"0 1rem"}
                />
              </li>
            ))}
          </ul>
        </div>

        <Grid.Container justify={"center"} gap={5}>
          {productsData.data
            .filter((value: any) => {
              return category === "all"
                ? `${value.attributes?.category?.data?.attributes?.category}` !== category
                : `${value.attributes?.category?.data?.attributes?.category}` == category;
            })
            .map((product: ProductEntity) => (
              <Grid xs={12} sm={6} md={3} key={product.id} style={{ padding: "0.5rem" }}>
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
              </Grid>
            ))}
        </Grid.Container>
      </Container>
    </>
  );
}
