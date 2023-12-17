import mongoose from "mongoose";
import connectToDB from "../../database"
import { NextResponse } from "next/server";
import Categorie from "../../models/catgorie"


export async function POST(req){


    try {
      await connectToDB();
        const {art,prix,mainImg,imgs,stock,sizeStock,pointStock,cat} = await req.json();

        const result = await Categorie.findOne({title: cat,});

        result.articles.push({
            
                title: art,
                price: prix,
                mainImage: mainImg,
                stock: stock,
                sizeInStock: {
                s: sizeStock.s,
                m: sizeStock.m,
                l: sizeStock.l,
                xl: sizeStock.xl,
                xxl: sizeStock.xxl,
              },
              pointureInStock: {
                point36: pointStock.point36,
                point37: pointStock.point37,
                point38: pointStock.point38,
                point39: pointStock.point39,
                point40: pointStock.point40,
                point41: pointStock.point41,
                point42: pointStock.point42,
                point43: pointStock.point43,
                point44: pointStock.point44,
              },
             
        });

        result.articles.images.push(imgs);

        result.save();
        
        return NextResponse.json({
            success: true,
            message: "Article Added"
          });
       
      } catch (e) {
        console.log(e);
    
        return NextResponse.json({
          success: false,
          message: "Something went wrong!",
        });
      }
    }