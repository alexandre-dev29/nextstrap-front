import { HalfMoon, SunLight } from "iconoir-react";
import { useTheme as useNextTheme } from "next-themes";
import { Switch, useTheme } from "@nextui-org/react";
import NavBarComponent from "./NavBar";

export interface LayoutProps {
  children: any;
}

export default function LayoutElement({ children }: LayoutProps) {
  const { setTheme } = useNextTheme();
  const { isDark, type } = useTheme();
  return (
    <main>
      <Switch
        checked={!isDark}
        color={"warning"}
        size="xl"
        onChange={(e) => setTheme(e.target.checked ? "light" : "dark")}
        iconOn={<SunLight />}
        iconOff={<HalfMoon />}
        css={{
          position: "fixed",
          bottom: "45%",
          zIndex: 500,
          right: 0,
        }}
        style={{ rotate: "-90deg" }}
      />
      <NavBarComponent />
      <div className={"p-10"}>{children}</div>
    </main>
  );
}
