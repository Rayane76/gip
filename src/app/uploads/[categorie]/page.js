'use client'

import { UserButton } from "@clerk/nextjs";
import "../../styles/global.css"
import { useEffect , useState } from "react";
import axios from "axios";
import Link from "next/link";
import { useParams } from "next/navigation";


export default function CategorieAdmin(){
    const params = useParams();
    const categorie = params.categorie;
   return(
   <>

  <h1>{categorie}</h1>
   </>
   )
}