import React from "react";
import BackToTop from "./BackToTop";
import Header from "./Header";
import SideBar from "./SideBar";
type LayoutPageProps = {
  children?: React.ReactNode;
};
const Layout = ({ children }: LayoutPageProps) => {
  return (
    <div className="flex flex-row w-screen h-screen">
      <SideBar />
      <div className="w-1/6" />
      <div className="flex flex-col w-5/6">
        <Header />
        {children}
        <BackToTop />
      </div>
    </div>
  );
};

export default Layout;
