import { cookies } from 'next/headers'
import { NextResponse } from 'next/server';


export async function POST(req){

    try {
        const { title, id } = await req.json();

        console.log(title);
        console.log(id);


        cookies().set(title,id);
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