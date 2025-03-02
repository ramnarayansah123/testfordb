import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../../../prisma/client";



// This is for GET METHODddd
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

    export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
      const { id } = params;  // Get the 'id' from the URL params
      const body = await request.json();
    
      // Ensure that the 'id' is a number, as Prisma expects a number type
      const productId = parseInt(id);
    
      // If the ID is not a valid number, return an error
      if (isNaN(productId)) {
        return NextResponse.json({ error: 'Invalid ID format' }, { status: 400 });
      }
    
      // Find the product by its ID
      const app = await prisma.app.findUnique({
        where: {
          id: productId,
        },
      });
    
      // If no product is found, return an error
      if (!app) {
        return NextResponse.json({ error: 'Product not found' }, { status: 404 });
      }
    
      // Update the product
      const updatedProduct = await prisma.app.update({
        where: { id: app.id },
        data: {
          tittle: body.tittle,
          description: body.description,
        },
      });
    
      return NextResponse.json(updatedProduct);
    }

      // delete method 

      export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
        const { id } = params;
      
        const app = await prisma.app.findUnique({
          where: {
            id: parseInt(id),
          },
        });
      
        if (!app) {
          return NextResponse.json({ error: 'User not found' }, { status: 404 });
        }
      
        await prisma.app.delete({
          where: { id: app.id },
        });
      
        return NextResponse.json({ message: 'User successfully deleted' });
      }