import React from "react";
import { LayoutElement } from "../../components/Layout";

const Index = () => {
  return (
    <LayoutElement>
      <div>
        <p>Alexandre mwenze</p>
      </div>
    </LayoutElement>
  );
};

export async function getStaticProps(context: any) {
  return {
    props: {
      protected: true,
    },
  };
}
export default Index;
