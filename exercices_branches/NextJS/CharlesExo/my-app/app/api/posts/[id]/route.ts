"use server";
import { db } from "@/app/lib/db/drizzle";
import { posts, comments } from '@/app/lib/db/schema';
import { eq } from 'drizzle-orm';
import { NextRequest } from "next/server";


export const GET = async (_req: NextRequest, res: RouteContext<"/api/posts/[id]">) => {
    const { id } = await res.params; // On va chercher la valeur dans l'url de requête
    const data = await db.select()
        .from(posts)
        .where(eq(posts.id, Number(id)));
    return Response.json(data)
}


export const PUT = async (
    _req: Request,
    {params} : {params: {id: string}}
) => {
    const { id } = await params;
    const data = await db
    .update(posts)
    .set({content : "wouah"}) 
    .where(eq(posts.id, Number(id))); 
    return Response.json(data);
};


export const DELETE = async (
  _req: NextRequest,
  res: RouteContext<"/api/posts/[id]">
) => {
  const { id } = await res.params;
  // comments : id : number / post_id : posts.id / content : string
  await db.delete(comments).where(eq(comments.post_id, Number(id)));
  // comments : id : number / title : string / content : string / ..
  await db.delete(posts).where(eq(posts.id, Number(id)));
  return Response.json("remove post");
};
