'use client'
import CartItem from "../components/cartItem";
import Navbar from "../components/navbar";
import "../styles/checkout.css"
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function Cart(){
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
            <CartItem />
            <CartItem />
            <CartItem />
          </tbody>
        </Table>
        <div  style={{marginTop:"20px",marginLeft:"10px"}}>
        <a href='/'>
          <Button variant="secondary" style={{marginRight:"20px"}}>Poursuivre les achats</Button>
        </a>
          
          <Button variant="primary" disabled>Mettre a jour le panier</Button>
          </div>
        </div>
        <div>
        <Card className='commande'>
          <Card.Body>
            <Card.Title>Total Panier</Card.Title>
            <hr></hr>
            <div style={{display:"flex"}}>
            <p style={{marginRight:"auto"}}>Sous Total</p>
            <p>2000$</p>
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