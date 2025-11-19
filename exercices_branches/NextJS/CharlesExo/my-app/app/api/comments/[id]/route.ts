"use server";
import { db } from "@/app/lib/db/drizzle";
import { comments } from '@/app/lib/db/schema';
import { eq } from 'drizzle-orm';
import { NextRequest } from "next/server";


export const GET = async (id = Number) => {
    const userData = await db.select().from(comments).where(eq(comments.post_id, Number(id)));
    return Response.json(userData);
};


export const POST = async (request: Request) => {
    const body = await request.json();
    const postData = await db.insert(comments).values({
        post_id: 3,
        content: body.content,
    });
    return Response.json(postData)
}
