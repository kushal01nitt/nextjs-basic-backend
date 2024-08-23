import { NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";
const client = new PrismaClient();

export function GET() {
    return  Response.json({
        email : "kushallunkad456@gmail.com",
        name : "kushal"
    })
}

export async function POST(req : NextRequest) {
    const body = await req.json();

    await client.user.create({
        data:{
            username : body.username,
            password: body.password
        }
    })
    return Response.json({
        message : "You are logged in"
    })
}