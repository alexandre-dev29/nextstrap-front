import { ProductEntity } from "../graphql/generated/graphqlTypes";
import { StateProduct } from "../UiTypes/StateProduct";

const GetProductState = (productEntity: ProductEntity): StateProduct => {
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