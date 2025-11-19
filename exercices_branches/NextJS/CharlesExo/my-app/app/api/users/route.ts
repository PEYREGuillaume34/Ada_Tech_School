"use server";
import {db} from "@/app/lib/db/drizzle";
import {usersTable} from '@/app/lib/db/schema';
import { NextRequest } from "next/server";


export const GET = async () => {
    const userData = await db.select().from(usersTable);
    return Response.json(userData);
};


export const POST = async () => {
    const postData = await db.insert(usersTable).values({
        username: "Xinzhu",
        email: "xinzhu@example.com"
    });
    return Response.json(postData)
}

