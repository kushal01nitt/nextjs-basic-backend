import axios from "axios";
import { PrismaClient } from "@prisma/client";
import client from "@/db"
import { NextResponse } from "next/server";

async function getUserDetails() {
   const user = await client.user.findFirst();

   return {
    email : user?.username,
    name : "kushal"
   }
}

export default async function Home() {
  const userDetails = await getUserDetails(); 
  return (
    <div className="flex flex-col justify-center h-screen">
    <div className="flex justify-center">
        <div className="border p-8 rounded">
            <div>
                Name: {userDetails?.name}
            </div>
            {userDetails?.email}
        </div>
    </div>
</div>
  );
}
