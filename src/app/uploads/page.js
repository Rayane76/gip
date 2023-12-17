'use client'

import { UserButton } from "@clerk/nextjs";
import "../styles/global.css"
import { useEffect , useState } from "react";
import axios from "axios";
import Link from "next/link";

export default function Uploads(){
    const [categories,setCategories] = useState(null);
    const [categorieName,setCategorieName] = useState(null);

    useEffect(()=>{
       getCategories();
    },[]);

    const getCategories = async () => {
        const result = await axios.get("/api/getAllCategories");
        setCategories(result.data.data);
     }

    const handleOnChange = (e) =>{
       setCategorieName(e.target.value);
    }

    const handleSubmit = async ()=>{
        const inputField = document.getElementById("input");
        inputField.value = "";
        const result = await axios.post("/api/admin/uploads/addCategorie",{
            cat: categorieName,
        })
        .then(function (response) {
            console.log(response.data.success);
          })
          .catch(function (error) {
            console.log(error);
          });
        };

        const handleDelete = async (e) =>{
          const del = await axios.post("/api/admin/uploads/deleteCategorie",{
            id : e,
          }).then(function (response) {
            console.log(response.data.success);
          })
          .catch(function (error) {
            console.log(error);
          });
        };
        
    

    return(
        <>
            <UserButton afterSignOutUrl="/"/>
           <div className="fl" style={{flexDirection:"column"}}>
           <div>
           <label style={{marginRight:"20px"}}>Enter new categorie :</label>
           <input id="input" type="text" placeholder="enter categorie name" onChange={handleOnChange} className="mb" style={{marginBottom:"20px"}}></input>
           <button onClick={handleSubmit}>Submit</button>
           </div>
           {categories === null ? "" :
           categories.map((categorie)=>{
            return(
                <>
            <div style={{display:"flex",marginBottom:"15px"}}>
            <Link key={categorie._id} className="mb" href={"/uploads/"+categorie.title}>{categorie.title}</Link>
            <button onClick={(e)=>handleDelete(categorie._id)}>Delete</button>
            </div>
               </>
            )
           })
           }

            </div>
        </>
    )
}