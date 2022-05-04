import type { NextPage } from "next";
import { LayoutElement } from "../components/Layout";
import MainBanner from "../components/MainBanner";

const Home: NextPage = () => {
  return (
    <LayoutElement>
      <div className={"h-full"}>
        <MainBanner />
      </div>
    </LayoutElement>
  );
};

export default Home;
