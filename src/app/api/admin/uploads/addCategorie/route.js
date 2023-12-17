import mongoose from "mongoose";
import connectToDB from "../../../database";
import { NextResponse } from "next/server";
import Categorie from "../../../models/catgorie";


export async function POST(req){


    try {
        const {cat} = await req.json();

        const result = await Categorie.insertMany({
            title: cat,
            articles: [],
        });
        
        return NextResponse.json({
            success: true,
            message: "Section Added"
          });
       
      } catch (e) {
        console.log(e);
    
        return NextResponse.json({
          success: false,
          message: "Something went wrong!",
        });
      }
    }



