import NavBarComponent from "./NavBar";
import { HalfMoon, SunLight } from "iconoir-react";
import { useTheme as useNextTheme } from "next-themes";
import { Switch, useTheme } from "@nextui-org/react";

export interface LayoutProps {
  children: any;
}

export function LayoutElement({ children }: LayoutProps) {
  const { setTheme } = useNextTheme();
  const { isDark, type } = useTheme();
  return (
    <main
      style={{
        maxWidth: "100%",
        boxSizing: "border-box",
        position: "relative",
        minHeight: "100vh",
      }}
    >
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
