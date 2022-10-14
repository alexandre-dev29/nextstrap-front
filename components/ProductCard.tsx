import React from "react";
import { Button, Card, Col, Row, Text } from "@nextui-org/react";
import Link from "next/link";
import Image from "next/image";

interface ProductCardProps {
  productName?: string;
  productId?: string;
  productPrice?: number;
  buttonText?: string;
  productImage: any;
  productSlug: string;
  onClickButton: () => void;
}

export default function ProductCard({
  productId,
  productImage,
  productPrice,
  productName,
  buttonText,
  onClickButton,
  productSlug,
}: ProductCardProps) {
  return (
    <Card key={productId}>
      <Card.Body css={{ padding: "0" }}>
        <Link href={`/product/${productSlug}`} className={"cursor-pointer"}>
          <a>
            <Image
              src={`${productImage.url}`}
              objectFit={"cover"}
              layout={"responsive"}
              height={400}
              width={400}
              alt={"headphones"}
            />
          </a>
        </Link>
      </Card.Body>
      <Card.Footer
        css={{
          position: "absolute",
          bgBlur: "#ffffff",
          borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
          bottom: 0,
          zIndex: 1,
        }}
      >
        <Row>
          <Col>
            <Text color="#000" size={12}>
              {productName}
            </Text>
            <Text color="#000" size={16} className={"font-bold"}>
              {`$ ${productPrice}`}
            </Text>
          </Col>
          <Col>
            <Row justify="flex-end">
              <Button flat auto css={{ borderRadius: "5px" }} color="success" onClick={onClickButton}>
                <Text css={{ color: "black" }} size={12} weight="bold" transform="uppercase">
                  {buttonText}
                </Text>
              </Button>
            </Row>
          </Col>
        </Row>
      </Card.Footer>
    </Card>
  );
}
