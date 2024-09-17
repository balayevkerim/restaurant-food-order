import React from "react";
import Title from "../ui/Title";
import CustomerItem from "./CustomerItem";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css/navigation";
const Customers = () => {
  return (
    <div className="container mx-auto mb-20 mt-12">
      <Title
        className="text-[40px] text-center"
        title="What Says Our Customers"
      />

      <div className="swiper-container">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={50}
          slidesPerView={2}
          breakpoints={{
            340: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            900: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
           
          }}
          pagination={{ clickable: true, dynamicBullets: true }}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
        >
          <SwiperSlide>
            <CustomerItem imgSrc="/images/user1.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <CustomerItem imgSrc="/images/user2.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <CustomerItem imgSrc="/images/user1.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <CustomerItem imgSrc="/images/user2.jpg" />
          </SwiperSlide>
        </Swiper>
      
      </div>
    </div>
  );
};

export default Customers;
