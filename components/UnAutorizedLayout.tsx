interface LayoutProps {
  children: any;
}

export default function UnAutorizedLayout({ children }: LayoutProps) {
  return (
    <main className={"bg-gray-100 w-screen h-screen"}>
      <div className={""}>{children}</div>
    </main>
  );
}
