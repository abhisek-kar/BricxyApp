import React from "react";
import CategoryCard from "./CategoryCard";
import catagoryImage from "../assets/Catlouge/catagory.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import {
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardArrowLeft,
} from "react-icons/md";
import "swiper/css";
import "swiper/css/navigation";

export default function CategorySlider() {
  const categories = [
    {
      planCode: "S01",
      image: catagoryImage,
      sqft: 5000,
      bedrooms: 3,
      bathrooms: 3,
    },
    {
      planCode: "S05",
      image: catagoryImage,
      sqft: 5000,
      bedrooms: 3,
      bathrooms: 3,
    },
    {
      planCode: "S21",
      image: catagoryImage,
      sqft: 5000,
      bedrooms: 3,
      bathrooms: 3,
    },
    {
      planCode: "S06",
      image: catagoryImage,
      sqft: 4200,
      bedrooms: 4,
      bathrooms: 4,
    },
    {
      planCode: "S07",
      image: catagoryImage,
      sqft: 3800,
      bedrooms: 2,
      bathrooms: 2,
    },
  ];

  return (
    <div className="bg-[#f4f4f4] py-12">
      <div className="pl-[185px] pr-[185px] flex justify-between items-center mb-6">
        <h2 className="text-2xl font-[500] text-[#4A3F3B]">
          Browse homes by category
        </h2>
        <div className="flex gap-2">
          <button className="swiper-button-prev-custom w-10 h-10 rounded-[16px] bg-white flex items-center justify-center hover:bg-gray-50 transition-colors cursor-pointer">
            <MdOutlineKeyboardArrowLeft className="w-5 h-5 text-gray-600" />
          </button>
          <button className="swiper-button-next-custom w-10 h-10 rounded-[16px] bg-white flex items-center justify-center hover:bg-gray-50 transition-colors cursor-pointer">
            <MdOutlineKeyboardArrowRight className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>

      <div className="pl-[185px]">
        <Swiper
          modules={[Autoplay, Navigation]}
          spaceBetween={20}
          slidesPerView={2.5}
          loop={true}
          autoplay={{ delay: 2000 }}
          navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
          }}
          breakpoints={{
            320: { slidesPerView: 1.2 },
            768: { slidesPerView: 1.8 },
            1024: { slidesPerView: 2.5 },
          }}
          className="!pb-6 !pr-32"
        >
          {categories.map((item, index) => (
            <SwiperSlide key={index} className="flex">
              <CategoryCard {...item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
