import { BannerEntityResponseCollection } from "../graphql/generated/graphqlTypes";
import DefaultButton from "./DefaultButton";
import Image from "next/image";
import { useECommerceStore } from "../states";
import { GetProductState } from "../utils";
import { StateProduct } from "../UiTypes";
import { useRouter } from "next/router";
import { Col, Container, Row, Text } from "@nextui-org/react";
import { CartAlt } from "iconoir-react";

interface mainBannerProps {
  mainBannersData: BannerEntityResponseCollection | any;
}

const MainBanner = ({ mainBannersData }: mainBannerProps) => {
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
        width: "75vw",
        margin: "$15 auto",
        backgroundColor: "$red50",
        height: "45vh",
        borderRadius: "$md",
      }}
    >
      <Row>
        <Col
          css={{
            padding: "$24",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Text h2 size={"$6xl"}>
            {currentBanner?.attributes?.productName}
          </Text>
          <Text size={"$xl"}>{currentBanner?.attributes?.description}</Text>
          <Row align={"center"}>
            <Text color={"$gray900"} css={{ fontWeight: "$normal" }} size={"$xl"}>
              Price
            </Text>
            <Text
              css={{ fontWeight: "$bold", marginLeft: "$sm" }}
              size={"$xl"}
            >{`$ ${currentBanner?.attributes?.bannerPrice}`}</Text>
            <Text
              css={{ fontWeight: "$light", marginLeft: "$sm" }}
            >{`(${currentBanner?.attributes?.discount})`}</Text>
            <Text css={{ fontWeight: "$semibold", marginLeft: "$sm" }}>
              Ending {currentBanner?.attributes?.saleTime}
            </Text>
          </Row>

          <div style={{ display: "flex", marginTop: "2rem" }}>
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
          </div>
        </Col>
        <div>
          <Image
            src={`${currentBanner?.attributes?.bannerImage?.data?.attributes?.url}`}
            height={600}
            width={850}
            priority={true}
            alt={"headphones"}
          />
        </div>
      </Row>
    </Container>
  );
};
export default MainBanner;
