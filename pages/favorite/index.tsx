import React, { useEffect, useState } from "react";
import { LayoutElement } from "../../components/Layout";
import {
  FavoriteEntityResponseCollection,
  ProductEntity,
  useFavoritesQuery,
} from "../../graphql/generated/graphqlTypes";

const Index = () => {
  const [currentUser, setCurrentUser] = useState({ username: "", email: "" });
  useEffect(() => {
    if (localStorage.getItem("currentUser")) {
      const parsedObject = JSON.parse(
        localStorage.getItem("currentUser") || ""
      );
      setCurrentUser(parsedObject);
    }
  }, []);

  const { data } = useFavoritesQuery({
    fetchPolicy: "cache-first",
    errorPolicy: "all",
    variables: {
      filters: { user: { email: { eq: currentUser.email } } },
    },
  });
  let allProducts: ProductEntity[] = [];
  if (data?.favorites !== undefined)
    allProducts = getProductsFromFavorite(data?.favorites);
  console.log(allProducts);

  return (
    <LayoutElement>
      <div>
        <p>Alexandre mwenze</p>
      </div>
    </LayoutElement>
  );
};

const getProductsFromFavorite = (
  favoriteData: FavoriteEntityResponseCollection | any
): ProductEntity[] => {
  return favoriteData?.data[0].attributes.products.data;
};

export async function getStaticProps(context: any) {
  return {
    props: {
      protected: true,
    },
  };
}
export default Index;
