import NavBarComponent from "./NavBar";

export interface LayoutProps {
  children: any;
}

export function LayoutElement({ children }: LayoutProps) {
  return (
    <main className={"bg-gray-100 h-screen w-screen"}>
      <NavBarComponent />
      <div className={"p-10"}>{children}</div>
    </main>
  );
}
