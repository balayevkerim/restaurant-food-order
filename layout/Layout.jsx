import Header from "@/components/layout/Header";
import Footer from "@/components/ui/Footer";
import React from "react";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      {children}
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
