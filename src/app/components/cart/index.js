'use client'

import CartItem from "../cartItem"
import Navbar from "../navbar";
import "../../styles/checkout.css"
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useEffect, useState } from "react";
import axios from "axios";

export default function Cart(){
    
    const [articles,setArticles] = useState(null);
    const [price,setPrice] = useState(0);

    const getArticles = async () =>{
        const result = await axios.get("/api/cartItems");
        setArticles(result.data.data);
        setPrice(result.data.price);
    }

    useEffect(()=>{
      getArticles();
    },[])




    return (
        <>
         <Navbar />
         <div className='main' style={{marginTop:"40px"}}>
         <div className='tab'>
         <Table>
          <thead>
            <tr>
              <th>Produit</th>
              <th>Prix</th>
              <th>Sous-total</th>
            </tr>
          </thead>
          <tbody>
          {articles === null || articles.length === 0 ? "" :
          articles.map((item)=>{
            return(
            <CartItem image={item.mainImage} title={item.title} price={item.price}/>
            )
          })
          }
          </tbody>
        </Table>
        </div>
        <div>
        <Card className='commande'>
          <Card.Body>
            <Card.Title>Total Panier</Card.Title>
            <hr></hr>
            <div style={{display:"flex"}}>
            <p style={{marginRight:"auto"}}>Sous Total</p>
            <p>{price}</p>
            </div>
            <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
            <a href='/checkout'>
            <Button variant="primary">Commander</Button>
            </a>
            </div>
            
          </Card.Body>
        </Card>
        </div>
         </div>   
        </>
      )
}