import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../../prisma/client";



// This is for GET METHOD
export async function GET(request:NextRequest)
{
  const user =await prisma.app.findMany()
  
    return NextResponse.json(user)}

    // 
    export async function POST(request:NextRequest){
        const body= await request.json()
        const app = await prisma.app.create({
            data: {
                tittle:body.tittle,
                description:body.description
            }
        });
       
        return NextResponse.json(app)
    }
