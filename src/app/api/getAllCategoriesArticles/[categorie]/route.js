import mongoose from "mongoose";
import connectToDB from "../../database"
import { NextResponse } from "next/server";
import Categorie from "../../models/catgorie"


export async function GET(){
    try {
        await connectToDB();
        const categorie = req.query;
        const result = await Categorie.findOne({title: categorie});

        return NextResponse.json({
            data: result.articles,
            success: true,
            message: "success !",
          });
        
       
      } catch (e) {
        console.log(e);
    
        return NextResponse.json({
          success: false,
          message: "Something went wrong!",
        });
      }
    


}