import { cookies } from 'next/headers'
import { NextResponse } from 'next/server';
export const dynamic = "force-dynamic";


export async function POST(req){

   try {
    const {size} = await req.json()

    const cookiesList = cookies()
    const hasCookie = cookiesList.has('purchasedItem')

    if(hasCookie){
        cookies().delete('purchasedItem')
    }

    cookies().set(
        {
            name: "purchasedItem",
            value: size,
            secure: true
        }
    )

    return NextResponse.json({
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