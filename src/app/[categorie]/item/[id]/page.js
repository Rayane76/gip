import Navbar from "../../../components/navbar";
import SpecificArticle from "../../../components/specificArticle";
import connectToDB from "../../../database";
import { NextResponse } from "next/server";
import Categorie from "../../../models/catgorie";



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


export default async function Art({ params }){

    const categorie = params.categorie;
    const id = params.id;

    const article = await getArticle(categorie,id);

    return(
        <>   
            <Navbar />
            <SpecificArticle categorie={categorie} stock={article.stock} sizeInStock={article.sizeInStock} pointureInStock={article.pointureInStock} title={article.title} price={article.price}  mainImage={article.mainImage} images={article.images} id={article._id} />
        </>
    )
}