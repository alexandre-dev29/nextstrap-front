import type { GetServerSideProps } from "next";
import MainBanner from "../components/MainBanner";
import ProductLists from "../components/ProductLists";

import { PageMainAllDataComp, ssrMainAllData } from "../graphql/generated/graphqlPages";
import { withApollo } from "../graphql/withApollo";
import LayoutElement from "../components/Layout";

const Home: PageMainAllDataComp = ({ data, error }) => {
  return (
    <LayoutElement>
      <div className={"h-full"}>
        <MainBanner mainBannersData={data?.banners} />
        <ProductLists productsData={data?.products} categoriesData={data?.categories} />
      </div>
    </LayoutElement>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ res, req }) => {
  res.setHeader("Cache-Control", "public, s-maxage=30, stale-while-revalidate=100");
  // @ts-ignore
  return await ssrMainAllData.getServerPage({}, { cookies: undefined });
};

export default withApollo(ssrMainAllData.withPage(() => ({}))(Home));
