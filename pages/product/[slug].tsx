import React from "react";
import { useRouter } from "next/router";
import { useECommerceStore } from "../../states";
import { GetProductState } from "../../utils";
import { StateProduct } from "../../UiTypes";
import { PageProductBySlugComp, ssrProductBySlug, ssrProducts } from "../../graphql/generated/graphqlPages";
import { GetStaticProps } from "next";
import { withApollo } from "../../graphql/withApollo";
import LayoutElement from "../../components/Layout";
import ProductDetailImage from "../../components/ProductDetailImage";
import ProductReviews from "../../components/ProductReviews";
import DefaultButton from "../../components/DefaultButton";
import ProductSuggestion from "../../components/ProductSuggestion";

const ProductDetails: PageProductBySlugComp = ({ data, error }) => {
  const currentProduct = data?.products?.data[0];

  const router = useRouter();
  const { onAdd } = useECommerceStore();

  async function handleBuyNow(product: StateProduct) {
    onAdd(product, 1);
    await router.push("/Cart");
  }

  return (
    <LayoutElement>
      <div className={"p-12 bg-white flex justify-between shadow-md"}>
        <div className="w-2/5">
          {data && <ProductDetailImage fileValues={currentProduct?.attributes?.productImages} />}
        </div>
        <div className={"w-1/2 p-8"}>
          <div className={"flex items-center justify-between"}>
            <h2 className={"text-3xl m-0 font-bold tracking-widest"}>
              {currentProduct?.attributes?.productName}
            </h2>
          </div>
          <p className={"font-light text-lg w-3/4"}>{currentProduct?.attributes?.description}</p>
          <p className={"font-semibold text-4xl mt-5"}>{`$  ${currentProduct?.attributes?.productPrice}`}</p>

          {data && <ProductReviews productReviews={currentProduct?.attributes?.reviews} />}
          <div className={"mt-2"}>
            <DefaultButton
              textButton={"Buy Now"}
              onClickAction={async () => {
                await handleBuyNow(GetProductState(currentProduct));
              }}
              isFilled={false}
              isSmall={false}
              customStyle={"mr-8"}
            />
            <DefaultButton
              textButton={"Add To Card"}
              onClickAction={() => {
                onAdd(GetProductState(currentProduct), 1);
              }}
              isFilled={true}
              isSmall={false}
            />
          </div>
        </div>
      </div>
      {data && <ProductSuggestion allOtherProducts={data?.allOtherProducts} />}
    </LayoutElement>
  );
};

// @ts-ignore
export const getStaticPaths: GetStaticPaths = async () => {
  const { props } = await ssrProducts.getServerPage({}, { cookies: {}, req: undefined });
  const paths =
    props?.data.products?.data.map((value) => ({
      params: { slug: value.attributes?.productSlug },
    })) || [];

  return { paths, fallback: false };
};
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const res = await ssrProductBySlug.getServerPage(
    { variables: { slugValue: { eq: params?.slug?.toString() || "" } } },
    // @ts-ignore
    { cookies: undefined }
  );
  if (res.props.error || !res.props.data?.products?.data?.length) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      ...res,
    },
  };
};

export default withApollo(
  ssrProductBySlug.withPage((arg) => ({
    variables: { slugValue: { eq: arg?.query?.slug?.toString() || "" } },
  }))(ProductDetails)
);
