export const dynamic = "force-dynamic";
export const revalidate = 0;

import CartItem from "../components/cartItem";
import Navbar from "../components/navbar";
import "../styles/checkout.css"
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Footer from "../components/Footer";


async function getCartItems(){
  const res = await import("../api/cartItems/route");

  return await (await res.GET()).json()

}


export default async function Cart(){

   const articles = await getCartItems();

    return (
        <>
       {
        articles.data.length === 0 ? 
        <>
          <Navbar />
          <div style={{display:"flex",justifyContent:"center",marginTop:"150px",height:"50vh"}}>
             <h1>Cart is empty</h1>
          </div>
          <Footer />
        </>
         :
           <>
           <Navbar />
         <div className='main' style={{marginTop:"40px",height:"50vh"}}>
         <div className='tab'>
         <Table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Size</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
          {
          articles.data.map((item)=>{
            return(
            <CartItem size={item.size} image={item.article.mainImage} title={item.article.title} price={item.article.price} id={item.article._id} />
            )
          })
          }
          </tbody>
        </Table>
        </div>
        <div>
        <Card className='commande'>
           <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
           <h3 style={{paddingTop:"10px"}}>Total Panier</h3>
           </div>
            <hr></hr>
            <div style={{display:"flex"}}>
            <p style={{marginRight:"auto"}}>Sous Total</p>
            <p>{articles.price}</p>
            </div>
            <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
            <a href='/checkout'>
            <Button variant="primary">Commander</Button>
            </a>
            </div>
        </Card>
        </div>
         </div>  
         <Footer />
           </>
        }
        </>
      )
}