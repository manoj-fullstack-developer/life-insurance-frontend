import React, { ReactNode } from "react";
import Navbar from "./navbar";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Navbar />
      <br />
      {children}
    </div>
  );
};

export default Layout;
