import { AiOutlineLogout, AiOutlineShopping, AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai";
import Link from "next/link";
import { useECommerceStore } from "../states";
import { Button, Input, Navbar, Popover, Switch, Text, useTheme } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useUser } from "../config";
import { useTheme as useNextTheme } from "next-themes";
import { HalfMoon, Search, SunLight } from "iconoir-react";
import CardItem from "./CardItem";
import DefaultButton from "./DefaultButton";

export default function NavBarComponent() {
  const { setTheme } = useNextTheme();
  const { isDark, type } = useTheme();
  const { totalQuantities, cardItems, onRemove } = useECommerceStore();
  const { currentUser } = useUser();
  const [isSSR, setIsSSR] = useState(true);
  useEffect(() => {
    setIsSSR(false);
  }, []);
  const router = useRouter();

  const logoutUser = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("currentUser");
    window.location.reload();
  };

  return (
    <Navbar isBordered variant="static" shouldHideOnScroll={false}>
      <Navbar.Brand css={{ mr: "$4" }}>
        <Link href={"/"}>
          <Text
            size={35}
            css={{ textGradient: "45deg, $purple600 10%, $pink600 100%" }}
            weight="bold"
            style={{ cursor: "pointer" }}
          >
            NexStrap
          </Text>
        </Link>

        <Navbar.Content hideIn="xs" variant="highlight"></Navbar.Content>
      </Navbar.Brand>
      <Navbar.Content css={{ "@xsMax": { w: "100%", jc: "flex-end" } }}>
        <Navbar.Item css={{ "@xsMax": { w: "100%", jc: "center" } }} id={"5"}>
          <Input
            aria-label={"search"}
            id={"currentSearchInput"}
            clearable
            contentLeft={<Search color={"var(--nextui-colors-accents6)"} />}
            contentLeftStyling={false}
            css={{
              w: "100%",
              "@xsMax": {
                mw: "300px",
              },
              "& .nextui-input-content--left": {
                h: "100%",
                ml: "$4",
                dflex: "center",
              },
            }}
            placeholder="Search..."
          />
        </Navbar.Item>
        <Navbar.Item css={{ "@xsMax": { display: "none" } }} id={"6"}>
          <Switch
            checked={!isDark}
            color={"warning"}
            size="xl"
            onChange={(e) => setTheme(e.target.checked ? "light" : "dark")}
            iconOn={<SunLight />}
            iconOff={<HalfMoon />}
          />
        </Navbar.Item>
        <Navbar.Item aria-valuetext={"testing"}>
          <Popover>
            <Popover.Trigger>
              <Button animated={true} auto flat color={"warning"} className={"m-0 relative"}>
                <AiOutlineShopping size={24} />
                <p
                  className={"absolute  top-1 right-1 bg-orange-500 rounded-full px-[5px] text-sm text-white"}
                >
                  {!isSSR && totalQuantities}
                </p>
              </Button>
            </Popover.Trigger>
            <Popover.Content>
              <div className={"flex flex-col justify-between"}>
                <div className={"max-h-[500px]"}>
                  {cardItems.length == 0 ? (
                    <p className={"p-8"}>The Card is Empty</p>
                  ) : (
                    cardItems.map((item) => (
                      <CardItem
                        key={item.productId}
                        item={item}
                        onClick={() => {
                          onRemove(item);
                        }}
                      />
                    ))
                  )}
                </div>
                <div className={"bg-gray-900 flex justify-center z-50"}>
                  <button
                    className={"p-2 w-full text-white flex items-center justify-center"}
                    onClick={async () => {
                      await router.push("/Cart");
                    }}
                  >
                    <AiOutlineShoppingCart className={"mr-4"} size={20} />
                    View Card
                  </button>
                </div>
              </div>
            </Popover.Content>
          </Popover>
        </Navbar.Item>
        <Navbar.Item aria-valuetext={""}>
          {!currentUser ? (
            <DefaultButton
              textButton={"Login"}
              onClickAction={async () => {
                await router.push("/Auth/Login");
              }}
              isFilled={true}
              isSmall={true}
            />
          ) : (
            <Popover>
              <Popover.Trigger>
                <Button animated={true} auto flat color={"warning"} className={"m-0 relative"}>
                  <AiOutlineUser size={24} />
                  <p>{currentUser.username}</p>
                </Button>
              </Popover.Trigger>
              <Popover.Content>
                <div className={"px-8 py-4"}>
                  <button
                    className={"flex items-center"}
                    onClick={() => {
                      logoutUser();
                    }}
                  >
                    <AiOutlineLogout size={20} className={"mr-2"} />
                    Logout
                  </button>
                </div>
              </Popover.Content>
            </Popover>
          )}
        </Navbar.Item>
      </Navbar.Content>
    </Navbar>
  );
}
