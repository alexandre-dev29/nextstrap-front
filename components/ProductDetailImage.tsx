import React, { useState } from "react";
import { UploadFileEntity, UploadFileRelationResponseCollection } from "../graphql/generated/graphqlTypes";
import { Card } from "@nextui-org/react";
import Image from "next/image";

interface ProductDetailImageProps {
  fileValues: UploadFileRelationResponseCollection | any;
}

export default function ProductDetailImage({ fileValues }: ProductDetailImageProps) {
  const [imageIndex, setImageIndex] = useState(0);

  return (
    <>
      <Card>
        <Card.Body css={{ padding: "0" }}>
          <Image
            src={`${fileValues.data[imageIndex]?.attributes?.url || "/other.jpg"}`}
            height={350}
            placeholder={"blur"}
            blurDataURL="/headphone.jpg"
            width={500}
            quality={75}
            priority={true}
            alt={fileValues.data[imageIndex]?.attributes?.name}
            className={"absolute -top-12 -left-14 cursor-pointer"}
          />
        </Card.Body>
      </Card>

      <div className={"mt-4 grid grid-cols-5"}>
        {fileValues.data.map((currentImage: UploadFileEntity, i: number) => (
          <div className={"w-[120px]"} key={currentImage.id}>
            <Card
              className={"h-[110px]"}
              isPressable={true}
              onClick={() => {
                setImageIndex(i);
              }}
            >
              <Card.Body css={{ padding: "0" }}>
                <Image
                  src={`${currentImage.attributes?.url || "/other.jpg"}`}
                  height={110}
                  width="120"
                  alt={"alexandre"}
                  className={"absolute -top-12 -left-14 cursor-pointer"}
                />
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </>
  );
}
