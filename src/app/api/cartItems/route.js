import { NextResponse } from "next/server";
import { cookies } from 'next/headers'
import Categorie from "../../models/catgorie"


export async function GET(req){

    try {

        const cookieStore = cookies()
        let array = []
        let data = [];
        let price = 0;
        cookieStore.getAll().map((cookie) => {
            if (cookie.value.length === 24){
              array.push(cookie.value)
            }
          }
          )

        for (let i = 0; i < array.length; i++) {
            let result = await Categorie.find({
                articles: {
                    $elemMatch : {
                        _id: array[i]
                    }
                }
            })
            let specific = result[0].articles.find(x => x._id.toString() === array[i]);
            data.push(specific);
            price = price + specific.price;
        }

        
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
            message: "Logged in successfully"
        });
    }
}