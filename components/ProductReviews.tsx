import React from "react";
import { AiOutlineStar } from "react-icons/ai";
import { ReviewRelationResponseCollection } from "../graphql/generated/graphqlTypes";

type productReviewsProps = {
  productReviews: ReviewRelationResponseCollection | any;
};
export default function ProductReviews({ productReviews }: productReviewsProps) {
  return (
    <div className={"flex items-center"}>
      <AiOutlineStar className={"text-3xl"} />
      <AiOutlineStar className={"text-3xl"} />
      <AiOutlineStar className={"text-3xl"} />
      <AiOutlineStar className={"text-3xl"} />
      <AiOutlineStar className={"text-3xl"} />
      <p className={"ml-4 text-xl font-semibold"}>
        {productReviews.data.length} {`${(productReviews.data?.length ?? 0) > 1 ? "reviews" : "review"}`}
      </p>
    </div>
  );
}
