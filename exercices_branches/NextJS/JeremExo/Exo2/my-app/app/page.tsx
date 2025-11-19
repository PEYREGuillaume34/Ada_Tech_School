

import {db} from "@/app/lib/db/drizzle";
import {themesTable} from "@/app/lib/db/schema";
import { AddTheme } from "./components/AddTheme";
import { DeleteTheme } from "./components/DeleteTheme";

export default async function Home() {
    const themes = await db.select().from(themesTable);
    return (
        <div>
            <h1 className="text-2xl">Mes thèmes</h1>
            <AddTheme />
            {themes.map((theme) => {
                return <div key={theme.id}>{theme.title}<DeleteTheme themeId={theme.id} /></div>;
            })}
        </div>
    );
}