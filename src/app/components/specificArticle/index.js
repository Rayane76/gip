'use client'

import { useState,useEffect} from 'react'
import Container from 'react-bootstrap/Container';
import "../../styles/specificarticle.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';




// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import 'swiper/css/pagination';


import { FreeMode, Navigation, Thumbs, Pagination } from 'swiper/modules';
import axios from 'axios';
import { useRouter } from 'next/navigation';


// href={'/' + props.categorie + '/item/' + props.id + '/checkout'}

export default function SpecificArticle(props){

  const router = useRouter();

  const [modalShow, setModalShow] = useState(false);

  const [message,setMessage] = useState(null);

  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const [size,setSize] = useState("");
  const onSizeSelect = (e)=>{
    setSize(e.target.value);
  }

  const url = "https://res.cloudinary.com/dsyvhttva/image/upload/v1703432812/gip/";


  const addToBuy = async () =>{
    if(props.sizeInStock.existing === true || props.pointureInStock.existing === true){
      if(size === "" || size === "Select size"){
        setMessage("Please select a size !")
        return
      }
      else{
        const result = await axios.post("/api/addToPurchase",{
          size: size,
      })
      .then(function (response) {
        router.push('/' + props.categorie + '/item/' + props.id + '/checkout');
          console.log(response.data.success);
        })
        .catch(function (error) {
          console.log(error);
        });
      }
    }
  }

  const addToCart = async () =>{
    // if(props.sizeInStock.existing === true || props.pointureInStock.existing === true){

        setMessage("Successfully added to cart !")
        const result = await axios.post("/api/addToCart",{
          title: props.title,
          id: props.id,
          size: size,
      })
      .then(function (response) {
          console.log(response.data.success);
          setModalShow(false);
        })
        .catch(function (error) {
          console.log(error);
        });
      
    }

  function MyVerticallyCenteredModal() {
    return (
      <Modal
        show={modalShow}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Add item to cart
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
         {(props.sizeInStock.existing === true || props.pointureInStock.existing === true) && (size === "" || size === "Select size") && <h4>Please select a size !</h4>}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={()=>setModalShow(false)}>Close</Button>
          {(((props.sizeInStock.existing === true || props.pointureInStock.existing === true) && (size != "" && size != "Select size")) || (props.sizeInStock.existing === false && props.pointureInStock.existing === false)) && <Button onClick={addToCart}>Confirm</Button>}
        </Modal.Footer>
      </Modal>
    );
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
        <img src={url + props.mainImage} alt='product' style={{width:"400px"}}></img>
        </SwiperSlide>
        {props.images.map((image)=>{
          return(
            <SwiperSlide style={{justifyContent:"center",alignItems:"center",display:"flex"}}>
        <img src={url + image} alt='product' style={{width:"400px"}}></img>
        </SwiperSlide>
          )
        })}
      </Swiper>
    </Container>
    <p style={{textAlign:"center",marginTop:"20px"}}>{props.title}</p>
    <p style={{textAlign:"center",marginTop:"10px"}}>{props.price}</p>
   
    {props.sizeInStock.existing === false ? ""
    :
    <>
    <p style={{marginLeft:"20px",marginTop:"20px"}}>Size</p>
      <Form.Select value={size} onChange={onSizeSelect}>
       <option>Select size</option>   
       {props.sizeInStock.num.s > 0 && <option value="s">S</option>}
       {props.sizeInStock.num.m > 0 && <option value="m">M</option>}
       {props.sizeInStock.num.l > 0 && <option value="l">L</option>}
       {props.sizeInStock.num.xl > 0 && <option value="xl">XL</option>}
       {props.sizeInStock.num.xxl > 0 && <option value="xxl">XXL</option>}
      </Form.Select>
    </>
    }
    {props.pointureInStock.existing === false ? ""
    :
    <>
    <p style={{marginLeft:"20px",marginTop:"20px"}}>Size</p>
      <Form.Select value={size} onChange={onSizeSelect}>
      <option>Select size</option>   
       {props.pointureInStock.num.point35 > 0 && <option value="35">35</option>}
       {props.pointureInStock.num.point36 > 0 && <option value="36">36</option>}
       {props.pointureInStock.num.point37 > 0 && <option value="37">37</option>}
       {props.pointureInStock.num.point38 > 0 && <option value="38">38</option>}
       {props.pointureInStock.num.point39 > 0 && <option value="39">39</option>}
       {props.pointureInStock.num.point40 > 0 && <option value="40">40</option>}
       {props.pointureInStock.num.point41 > 0 && <option value="41">41</option>}
       {props.pointureInStock.num.point42 > 0 && <option value="42">42</option>}
       {props.pointureInStock.num.point43 > 0 && <option value="43">43</option>}
       {props.pointureInStock.num.point44 > 0 && <option value="44">44</option>}
       {props.pointureInStock.num.point45 > 0 && <option value="45">45</option>}
      </Form.Select>
    </>
    }
    <div className="d-grid gap-2" style={{marginTop:"20px"}}>
      <Button onClick={() => setModalShow(true)} variant="light" size="lg" style={{marginLeft:"10px",marginRight:"10px",marginBottom:"10px",borderRadius:"0",borderWidth:"2px"}}>
        Add to Cart
      </Button>
      <MyVerticallyCenteredModal
      />
      <Button onClick={addToBuy} variant="dark" size="lg" style={{borderRadius:"0",borderWidth:"2px",width:"-webkit-fill-available",margin:"10px"}}>
        Buy Now
      </Button>
    </div>
    <div style={{display:"flex",justifyContent:"center",alignItems:"center",marginTop:"15px"}}>
    <p>{message}</p>
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
          <img src={url + props.mainImage} alt='phot' />
        </SwiperSlide>
      {props.images.map((image)=>{
        return(
          <SwiperSlide>
          <img src={url + image} alt='phot' />
        </SwiperSlide>
        )
      })}
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
          <img src={url + props.mainImage} alt='phot' />
        </SwiperSlide>
      {props.images.map((image)=>{
        return(
          <SwiperSlide>
          <img src={url + image} alt='phot' />
        </SwiperSlide>
        )
      })}
      </Swiper>
      </Container>
      <Container>
        <h1>{props.title}</h1>
        <h3>{props.price}</h3>
        <form>
          <p style={{marginLeft:"20px",marginTop:"20px"}}>Size</p>
          <div className='d-flex justify-content-start'>
      {props.sizeInStock.existing === false ? ""
    :
    <>
      <Form.Select value={size} onChange={onSizeSelect}>
       <option>Select size</option>   
       {props.sizeInStock.num.s > 0 && <option value="s">S</option>}
       {props.sizeInStock.num.m > 0 && <option value="m">M</option>}
       {props.sizeInStock.num.l > 0 && <option value="l">L</option>}
       {props.sizeInStock.num.xl > 0 && <option value="xl">XL</option>}
       {props.sizeInStock.num.xxl > 0 && <option value="xxl">XXL</option>}
      </Form.Select>
    </>
    }

    {props.pointureInStock.existing === false ? ""
    :
    <>
      <Form.Select value={size} onChange={onSizeSelect}>
      <option>Select size</option>    
       {props.pointureInStock.num.point35 > 0 && <option value="35">35</option>}
       {props.pointureInStock.num.point36 > 0 && <option value="36">36</option>}
       {props.pointureInStock.num.point37 > 0 && <option value="37">37</option>}
       {props.pointureInStock.num.point38 > 0 && <option value="38">38</option>}
       {props.pointureInStock.num.point39 > 0 && <option value="39">39</option>}
       {props.pointureInStock.num.point40 > 0 && <option value="40">40</option>}
       {props.pointureInStock.num.point41 > 0 && <option value="41">41</option>}
       {props.pointureInStock.num.point42 > 0 && <option value="42">42</option>}
       {props.pointureInStock.num.point43 > 0 && <option value="43">43</option>}
       {props.pointureInStock.num.point44 > 0 && <option value="44">44</option>}
       {props.pointureInStock.num.point45 > 0 && <option value="45">45</option>}
      </Form.Select>
    </>
    }
          </div>
          <div className="d-grid gap-2" style={{marginTop:"20px"}}>
            <Button onClick={() => setModalShow(true)} variant="light" size="lg" style={{marginLeft:"10px",marginRight:"10px",marginBottom:"10px",borderRadius:"0",borderWidth:"2px"}}>
             Add to Cart
            </Button>
            <MyVerticallyCenteredModal
      />
             <Button onClick={addToBuy} variant="dark" size="lg" style={{borderRadius:"0",borderWidth:"2px",width:"-webkit-fill-available",margin:"10px"}}>
              Buy Now
             </Button>

          </div>
        </form>
        <p style={{marginTop:"30px"}}>{message}</p>
      </Container>
      </Container>
    </div>
    </>
  )
}