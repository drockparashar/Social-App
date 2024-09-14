import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

const prisma=new PrismaClient();

export async function POST(req:Request) {
    const {username,password}=await req.json();
    const user=await prisma.user.findFirst({
        where:{
            username
        }
    });

    if(!user){
        return NextResponse.json(
            {message:"User not found"},
            {status:404}
        );
    }

    const isPasswordValid=await bcrypt.compare(password,user.password);

    if(!isPasswordValid){
        return NextResponse.json(
            {message:"Invalid password"},
            {status:401}
        );
    }

    return NextResponse.json(
        {message:"Login successful",user},
        {status:200}
    );
}