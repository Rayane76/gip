'use client'

import { useState,useEffect} from 'react'
import Navbar from '../navbar';
import Container from 'react-bootstrap/Container';
import "../../styles/specificarticle.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';




// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import 'swiper/css/pagination';


import { FreeMode, Navigation, Thumbs, Pagination } from 'swiper/modules';


export default function SpecificArticle(){


  const [article,setArticle] = useState(null); 

  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const [color,setColor] = useState("");
  const onColorSelect = (e)=>{
    setColor(e.target.value);
  }
  const [size,setSize] = useState("");
  const onSizeSelect = (e)=>{
    setSize(e.target.value);
  }


  return (
    <>
    {/* Mobile Navigatiom */}
    <div className='d-md-none' style={{paddingTop:"30px",backgroundColor:"white"}}>
    <Container className='d-flex justify-content-center mobile'>
    <Swiper 
         pagination={{
          clickable: true,
           }} 
        modules={[Pagination]} >
        
            <SwiperSlide style={{justifyContent:"center",alignItems:"center",display:"flex"}}>
        <img src="/pull1.jpg" alt='product' style={{width:"400px"}}></img>
        </SwiperSlide>
        <SwiperSlide style={{justifyContent:"center",alignItems:"center",display:"flex"}}>
        <img src="/pull1.jpg" alt='product' style={{width:"400px"}}></img>
        </SwiperSlide>
        <SwiperSlide style={{justifyContent:"center",alignItems:"center",display:"flex"}}>
        <img src="/pull1.jpg" alt='product' style={{width:"400px"}}></img>
        </SwiperSlide>
      </Swiper>
    </Container>
    <p style={{textAlign:"center",marginTop:"20px"}}>pull</p>
    <p style={{textAlign:"center",marginTop:"10px"}}>100$</p>
    {/* <p style={{marginLeft:"20px"}}>Color</p>
    <Form.Select value={color} onChange={onColorSelect}>
            <option>Select Color</option>   
            <option value="black">Black</option>
            <option value="gray">Gray</option>
            <option value="purple">Purple</option>
          </Form.Select> */}
    <p style={{marginLeft:"20px",marginTop:"20px"}}>Size</p>
    <Form.Select value={size} onChange={onSizeSelect}>
       <option>Select Size</option>   
      <option value="s">S</option>
      <option value="m">M</option>
      <option value="l">L</option>
      <option value="xl">XL</option>
      <option value="xxl">XXL</option>
      </Form.Select>
    <div className="d-grid gap-2" style={{marginTop:"20px"}}>
      <Button variant="light" size="lg" style={{marginLeft:"10px",marginRight:"10px",marginBottom:"10px",borderRadius:"0",borderWidth:"2px"}}>
        Add to Cart
      </Button>
      <a href='/checkout' style={{marginLeft:"10px",marginRight:"10px",marginBottom:"10px"}}>
      <Button variant="dark" size="lg" style={{borderRadius:"0",borderWidth:"2px",width:"-webkit-fill-available"}}>
        Buy Now
      </Button>
      </a>
    </div>
    </div>

    {/* DESKTOP NAVIGATION */}
    <div className='d-none d-md-block' style={{paddingTop:"30px",paddingBottom:"40px",backgroundColor:"white"}}>
    <Container style={{display:"flex"}}>
    <Container>
      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >

            <SwiperSlide>
          <img src="/pull1.jpg" alt='phot' />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/pull1.jpg" alt='phot' />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/pull1.jpg" alt='phot' />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/pull1.jpg" alt='phot' />
        </SwiperSlide>
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
            <SwiperSlide>
          <img src="/pull1.jpg" alt='phot' />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/pull1.jpg" alt='phot' />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/pull1.jpg" alt='phot' />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/pull1.jpg" alt='phot' />
        </SwiperSlide>
      </Swiper>
      </Container>
      <Container>
        <h1>Pull</h1>
        <h3>100$</h3>
        <form>
        {/* <p style={{marginLeft:"20px"}}>Color</p>
          <div className='d-flex justify-content-start'>
          <Form.Select value={color} onChange={onColorSelect}>
            <option>Select Color</option>   
            <option value="black">Black</option>
            <option value="gray">Gray</option>
            <option value="purple">Purple</option>
          </Form.Select>
          </div> */}
          <p style={{marginLeft:"20px",marginTop:"20px"}}>Size</p>
          <div className='d-flex justify-content-start'>
          <Form.Select value={size} onChange={onSizeSelect}>
       <option>Select Size</option>   
      <option value="s">S</option>
      <option value="m">M</option>
      <option value="l">L</option>
      <option value="xl">XL</option>
      <option value="xxl">XXL</option>
      </Form.Select>
          </div>
          <div className="d-grid gap-2" style={{marginTop:"20px"}}>
            <Button variant="light" size="lg" style={{marginLeft:"10px",marginRight:"10px",marginBottom:"10px",borderRadius:"0",borderWidth:"2px"}}>
             Add to Cart
            </Button>
            <a href='/checkout' style={{marginLeft:"10px",marginRight:"10px",marginBottom:"10px"}}>
             <Button variant="dark" size="lg" style={{borderRadius:"0",borderWidth:"2px",width:"-webkit-fill-available"}}>
              Buy Now
             </Button>
            </a>
          </div>
        </form>
      </Container>
      </Container>
    </div>
    </>
  )
}