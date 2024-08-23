"use server"
import client from "@/db"

export async function signup(email : string , password : string) {
    try{
        await client.user.create({
            data:{
                username : email,
                password : password
            }
        });
        return true
    }catch(e){
        return false
    }
}