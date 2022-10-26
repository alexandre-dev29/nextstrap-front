import { BannerEntityResponseCollection } from "../graphql/generated/graphqlTypes";
import Image from "next/image";
import { useECommerceStore } from "../states";
import { GetProductState } from "../utils";
import { StateProduct } from "../UiTypes";
import { useRouter } from "next/router";
import { Col, Container, Row, Text } from "@nextui-org/react";
import { CartAlt } from "iconoir-react";
import DefaultButton from "./DefaultButton";

interface mainBannerProps {
  mainBannersData: BannerEntityResponseCollection | any;
}

export default function MainBanner({ mainBannersData }: mainBannerProps) {
  const { onAdd } = useECommerceStore();
  const router = useRouter();

  async function handleBuyNow(product: StateProduct) {
    onAdd(product, 1);
    await router.push("/Cart");
  }

  const currentBanner = mainBannersData.data[0];

  return (
    <Container
      display={"flex"}
      css={{
        "@smMax": { height: "360px", margin: "$2 auto" },
        "@smMin": { height: "420px", margin: "$15 auto" },
        width: "75vw",
        backgroundColor: "$red50",
        borderRadius: "$md",
      }}
    >
      <Row>
        <Col
          css={{
            "@mdMax": {
              padding: "$12 $4",
            },
            "@mdMin": {
              padding: "$20",
            },
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Text h2 size={"$6xl"} css={{ "@smMax": { fontSize: "$2xl" } }}>
            {currentBanner?.attributes?.productName}
          </Text>
          <Text size={"$xl"} css={{ "@smMax": { fontSize: "$lg" } }}>
            {currentBanner?.attributes?.description}
          </Text>
          <Row align={"center"} css={{ "@smMax": { display: "flex", flexDirection: "column" } }}>
            <Col css={{ display: "flex", "@smMax": { justifyContent: "center" } }}>
              <Text
                color={"$gray900"}
                css={{ fontWeight: "$normal", "@smMax": { fontSize: "$lg" } }}
                size={"$xl"}
              >
                Price
              </Text>
              <Text
                css={{ fontWeight: "$bold", marginLeft: "$sm", "@smMax": { fontSize: "$lg" } }}
                size={"$xl"}
              >{`$ ${currentBanner?.attributes?.bannerPrice}`}</Text>
            </Col>
            <Col css={{ "@smMax": { justifyContent: "center" } }}>
              <Text
                css={{ fontWeight: "$light", marginLeft: "$sm" }}
              >{`(${currentBanner?.attributes?.discount})`}</Text>
              <Text css={{ fontWeight: "$semibold", marginLeft: "$sm" }}>
                Ending {currentBanner?.attributes?.saleTime}
              </Text>
            </Col>
          </Row>

          <Row
            css={{
              "@smMax": {
                marginTop: "1rem",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "$4",
              },
              "@smMin": { marginTop: "2rem", flexDirection: "row", gap: "$0" },
            }}
          >
            <DefaultButton
              textButton={currentBanner?.attributes?.buttonText}
              onClickAction={async () => {
                await handleBuyNow(GetProductState(currentBanner?.attributes?.products?.data[0]));
              }}
              isFilled={false}
              isSmall={false}
              customStyle={"mt-5"}
            />
            <DefaultButton
              textButton={"Add To Card"}
              onClickAction={() => {
                onAdd(GetProductState(currentBanner?.attributes?.products?.data[0]), 1);
              }}
              isFilled={true}
              isSmall={false}
            >
              <CartAlt
                style={{
                  fontSize: "25px",
                  color: "var(--nextui-colors-accents8)",
                  marginRight: "0.7rem",
                }}
              />
            </DefaultButton>
          </Row>
        </Col>
        <Col css={{ "@xsMax": { display: "none" } }}>
          <Image
            src={`${currentBanner?.attributes?.bannerImage?.data?.attributes?.url}`}
            height={600}
            width={850}
            priority={true}
            alt={"headphones"}
          />
        </Col>
      </Row>
    </Container>
  );
}
