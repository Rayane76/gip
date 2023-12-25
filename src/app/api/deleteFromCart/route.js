import { cookies } from 'next/headers'
import { NextResponse } from 'next/server';


export async function POST(req){

    try {
        const {name} = await req.json();
        console.log(name);


        cookies().delete(name);
        return NextResponse.json({
            success: true,
            message: "Logged in successfully"
        });
    } catch (error) {
        console.log(error);

    return NextResponse.json({
      success: false,
      message: "Something went wrong!",
    });
    }

}