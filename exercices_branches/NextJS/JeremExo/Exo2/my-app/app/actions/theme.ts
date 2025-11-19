"use server"

import { revalidatePath } from "next/cache";
import { db } from "../lib/db/drizzle";
import { themesTable } from "../lib/db/schema";
import { eq } from "drizzle-orm/sql/expressions/conditions";

export const addTheme = async (formdata : FormData) => {
    const title = formdata.get("title")
    
    if (formdata.get("title")===null) {
        throw new Error("Title is required");
    }

    await db.insert(themesTable).values ({
        title: title as string,
    })
    revalidatePath("/");

}

export const deleteTheme = async (formdata : FormData) => {
    const suppr = formdata.get("id")

    await db.delete(themesTable).where(eq(themesTable.id, Number(suppr)));
    
    revalidatePath("/");

}