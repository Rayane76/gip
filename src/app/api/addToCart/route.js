import { cookies } from 'next/headers'
import { NextResponse } from 'next/server';


export async function POST(req){

    try {
        const { title, id, size } = await req.json();

        const oneDay = 24 * 60 * 60 * 1000

        cookies().set({
            name: title,
            value: id,
            expires: Date.now() + oneDay,
            secure: true,
        });
        cookies().set({
            name: id,
            value: size,
            expires: Date.now() + oneDay,
            secure: true,
        });
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