import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../../../prisma/client";



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

    export async function PUT(request:NextRequest,{params}: {params:{id: string}}){
        const body = await request.json();
       const app = await prisma.app.findUnique({
        where: {id: parseInt(params.id)}
       });

       if(!app)
        return NextResponse.json(
    {
        error:"User not found"
    },
    {status:404}
    );

    const updateApp = await prisma.app.update({
        where: {id: app.id},
        data: {
            tittle:body.tittle,
            description:body.description
        }
    })
    return NextResponse.json(updateApp);
    }


    export async function DELETE(request:NextRequest,{params}: {params:{id: string}}){
        const body = await request.json();
       const app = await prisma.app.findUnique({
        where: {id: parseInt(params.id)}
       });

       if(!app)
        return NextResponse.json(
    {
        error:"User not found"
    },
    {status:404}
    );

    await prisma.app.delete({
        where: {id: app.id},
       
    });
    return NextResponse.json({});

    }