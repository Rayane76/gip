'use client'

import { useParams, useRouter } from "next/navigation"


export default function Article(props){

    const router = useRouter();
    const params = useParams();
    const cat = params.categorie;
    const href = cat + "/item/" + props.title;
    return (
        <>
        <div onClick={()=>router.push(href)} style={{marginRight:"0px",paddingBottom:"20px",width:"fit-content"}}>
          <img src={props.image} alt="" style={{paddingTop:"10px",paddingBottom:"10px",width:"300px"}}></img>
          <p style={{color:"black",textAlign:"center"}}>{props.title}</p>
          <p style={{color:"black",textAlign:"center"}}>${props.price}</p>
        </div>
        </>
    )

}