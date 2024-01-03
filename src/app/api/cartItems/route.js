import { NextResponse } from "next/server";
import { cookies } from 'next/headers'
import Categorie from "../../models/catgorie"
import connectToDB from "../../database";
import middleware from "../../../middleware";
export const dynamic = "force-dynamic";


export async function GET(req){

    try {
        let sizes = [];
        let data = [];
        let found = 0;
        let price = 0;
        await connectToDB();
        const cookieStore = cookies();
       await Promise.all(
        cookieStore.getAll().map(async (cookie) => {
            if(cookie.name.length === 24){
               sizes.push({size:cookie.value,id: cookie.name})
            }
            if (cookie.value.length === 24){
                let result = await Categorie.find({
                    articles: {
                        $elemMatch : {
                            _id: cookie.value
                        }
                    }
                })
        
                if(result.length != 0){
                    let specific = await result[0].articles.find(x => x._id.toString() === cookie.value);
                    for (let j = 0; j < sizes.length; j++){
                        if (sizes[j].id === specific._id.toString()){
                           data.push({article: specific,size:sizes[j].size})
                           found = found + 1;
                        }
                       }
                       if(found === 0){
                       data.push({article: specific , size: null});
                       }
                       else{
                           found = 0;
                       }
                       price = price + specific.price;
                }
            }
        })
       )

        return NextResponse.json({
            data: data,
            price: price,
            success: true,
            message: "Logged in successfully"
        });




    } catch (error) {
        console.log(error)
        return NextResponse.json({
            success: false,
            message: "something wrong occured"
        });
    }
}