import connectToDB from "../database";
import { NextResponse } from "next/server";
import Categorie from "../models/catgorie";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbar from "../components/navbar";
import Article from "../components/article";



async function getArticles(props){
    try {

        await connectToDB();

        const result = await Categorie.findOne({title: props});

        return result.articles;
        
       
      } catch (e) {
        console.log(e);
    
        return NextResponse.json({
          success: false,
          message: "Something went wrong!",
        });
      }
    


}


export default async function CatArticles({ params }){

  const articles = await getArticles(params.categorie);

   return(
    <>
        <>
        <Navbar />
        <div className="d-none d-md-block" style={{marginTop:"40px",height:"auto"}}>
        <Container>
          <Row>
          {articles.map((article)=>{
            return(
              <Col>
              <Article image={article.mainImage} title={article.title} price={article.price} id={article._id} />
            </Col>
            )
          })
          }
          </Row>
        </Container>
        </div>
        <div className="d-md-none" style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",marginTop:"30px"}}>
        {articles.map((article)=>{
          return(
            <Article image={article.mainImage} title={article.title} price={article.price} id={article._id} />
          )
        })
        }
        </div>
        </>
    </>
   )
}