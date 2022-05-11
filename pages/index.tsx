import type { NextPage } from "next";
import { LayoutElement } from "../components/Layout";
import MainBanner from "../components/MainBanner";
import ProductLists from "../components/ProductLists";

const Home: NextPage = () => {
  return (
    <LayoutElement>
      <div className={"h-full"}>
        <MainBanner />
        <ProductLists />
      </div>
    </LayoutElement>
  );
};

export default Home;
