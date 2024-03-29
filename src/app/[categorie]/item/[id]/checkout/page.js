export const dynamic = "force-dynamic";
export const revalidate = 0;


import CheckoutComponent from "../../../../components/checkout"
import Categorie from "../../../../models/catgorie"
import connectToDB from "../../../../database"
import { NextResponse } from "next/server";
import { cookies } from 'next/headers'



async function getArticle(categorie,id){
    try {

        await connectToDB();
        const result = await Categorie.findOne({title: categorie});

        const allArticles = result.articles;

        const specific = await allArticles.find(x => x._id.toString() === id);

        return specific;
        
       
      } 
      catch (e) {
        console.log(e);
    
        return NextResponse.json({
          success: false,
          message: "Something went wrong!",
        });
      }
    
}


export default async function Checkout({ params }){

    const cookieStore = cookies()

    const size = cookieStore.get('purchasedItem')
    


  

    const categorie = params.categorie;
    const id = params.id;

    const article = await getArticle(categorie,id);

    return (
        <>
        <CheckoutComponent sizeChose={size.size} categorie={categorie} stock={article.stock} sizeInStock={article.sizeInStock} pointureInStock={article.pointureInStock} title={article.title} price={article.price}  mainImage={article.mainImage} images={article.images} id={article._id} />
        </>
      )

}