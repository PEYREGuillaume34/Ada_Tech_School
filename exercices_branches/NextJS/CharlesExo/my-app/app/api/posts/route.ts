"use server";
import {db} from "@/app/lib/db/drizzle";
import {posts} from '@/app/lib/db/schema';



export const GET = async () => {
    const userData = await db.select().from(posts);
    return Response.json(userData);
};


export const POST = async (request: Request) => {
    const body = await request.json();
    const postData = await db.insert(posts).values({
        user_id: 3,
        content: body.content,
        title: body.title
    });
    return Response.json(postData)
}

