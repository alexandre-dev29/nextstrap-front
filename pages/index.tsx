import type { NextPage } from "next";
import { LayoutElement } from "../components/Layout";
import DefaultButton from "../components/DefaultButton";

const Home: NextPage = () => {
  return (
    <LayoutElement>
      <div>
        <h1>Testing</h1>
        <DefaultButton
          textButton={"Click Here"}
          onClickAction={() => {}}
          isFilled={false}
          isSmall={false}
        />
      </div>
    </LayoutElement>
  );
};

export default Home;
