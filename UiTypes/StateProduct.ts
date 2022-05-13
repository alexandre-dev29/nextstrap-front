import {
  Scalars,
  UploadFileRelationResponseCollection,
} from "../graphql/generated/graphqlTypes";

export type StateProduct = {
  productId: string;
  description: Scalars["String"];
  productImages: UploadFileRelationResponseCollection | undefined;
  productName: Scalars["String"];
  productPrice: Scalars["Float"];
  productSlug: Scalars["String"];
  quantity: Scalars["Int"];
};
