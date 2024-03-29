import {
  FavoriteEntityResponseCollection,
  ProductEntity,
} from "../graphql/generated/graphqlTypes";
import { StateProduct } from "../UiTypes/StateProduct";

export const GetProductState = (
  productEntity: ProductEntity | any
): StateProduct => {
  return {
    productId: productEntity.id ?? "",
    description: productEntity.attributes?.description ?? "",
    productImages: productEntity.attributes?.productImages,
    productName: productEntity.attributes?.productName ?? "",
    productSlug: productEntity.attributes?.productSlug ?? "",
    productPrice: productEntity.attributes?.productPrice ?? 0,
    quantity: productEntity.attributes?.quantity ?? 0,
  };
};

export const getProductsFromFavorite = (
  favoriteData: FavoriteEntityResponseCollection | any
): ProductEntity[] => {
  return favoriteData?.data[0].attributes.products.data;
};
