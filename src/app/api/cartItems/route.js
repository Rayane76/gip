import { NextResponse } from "next/server";
import { cookies } from 'next/headers'
import Categorie from "../../models/catgorie"
import connectToDB from "../../database";


export async function GET(req){

    try {

        await connectToDB();
        const cookieStore = cookies()
        let sizes = [];
        let array = []
        let data = [];
        let found = 0;
        let price = 0;
        cookieStore.getAll().map((cookie) => {
            if(cookie.name.length === 24){
               sizes.push({size:cookie.value,id: cookie.name})
            }
            if (cookie.value.length === 24){
            //   if(cookie.value ===  '658852484ae65c0fc3a81ad7'){
            //     cookies().delete(cookie.name)
            //   } 
            //   else if(cookie.value ===  '658852b54ae65c0fc3a81ae3'){
            //     cookies().delete(cookie.name)
            //   } 
            //   else{
              array.push(cookie.value)
            //  }
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

            if(result.length != 0){

            let specific = result[0].articles.find(x => x._id.toString() === array[i]);
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