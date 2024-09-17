import About from "@/components/About";
import Carousel from "@/components/Carousel";
import Customer from "@/components/Customers/Customers";
import MenuWrapper from "@/components/products/MenuWrapper";
import Reservation from "@/components/Reservation";
import Campaigns from "@/components/ui/Campaign";
import Footer from "@/components/ui/Footer";
import React from "react";

const Index = () => {
  return (
    <div>
      <Carousel />
      <Campaigns />
      <MenuWrapper />
      <About />
      <Reservation />
      <Customer />
    </div>
  );
};

export default Index;
