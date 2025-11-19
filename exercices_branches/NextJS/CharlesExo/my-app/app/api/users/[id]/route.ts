"use server";
import {db} from "@/app/lib/db/drizzle";
import {usersTable} from '@/app/lib/db/schema';
import { eq } from 'drizzle-orm';
import { NextRequest } from "next/server";


export const GET = async () => {
    const userData = await db.select().from(usersTable).where(eq(usersTable.id,1));
    return Response.json(userData);
};




