'use client'
import Categorie from "../categorie"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import {Navigation } from 'swiper/modules';


export default function HomeCategories(){
    return(
        <>
        <h5 style={{marginTop:"50px",marginBottom:"50px"}}>Categories</h5>   
     <div>
    <Swiper
        slidesPerView={1}
        spaceBetween={30}
        navigation={true}
        modules={[Navigation]}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 2,
            spaceBetween:30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        className="mySwiper"
      >
       <SwiperSlide><Categorie kind="LIVING"  image="landing1.png"/></SwiperSlide>
        <SwiperSlide><Categorie kind="DINING"  image="landing1.png"/></SwiperSlide>
        <SwiperSlide><Categorie kind="BEDROOM"  image="landing1.png"/></SwiperSlide>
        <SwiperSlide><Categorie kind="OFFICE"  image="landing1.png"/></SwiperSlide>
        <SwiperSlide><Categorie kind="DECOR"  image="landing1.png"/></SwiperSlide>
        <SwiperSlide><Categorie kind="LIGHTING"  image="landing1.png"/></SwiperSlide>
      </Swiper>
      </div>    
        </>
    )
}