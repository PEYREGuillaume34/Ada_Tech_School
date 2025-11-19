import {db} from "@/app/lib/db/drizzle";
import {skillsTable, themesTable} from "@/app/lib/db/schema";
import {eq, sql} from "drizzle-orm";

const statusEmojis = {undetermined: "🤷", not_aquired: "❌", in_progress: "⌛", acquired: "✅"};

export default async function Home() {
    const themes = await db
        .select({
            themeId: themesTable.id,
            themeTitle: themesTable.title,
            skills: sql<(typeof skillsTable.$inferSelect)[]>`json_agg(json_build_object(
      'id', ${skillsTable.id},
      'description', ${skillsTable.description},
      'status', ${skillsTable.status}
    ))`.as("skills"),
        })
        .from(themesTable)
        .leftJoin(skillsTable, eq(skillsTable.themeid, themesTable.id))
        .groupBy(themesTable.id, themesTable.title);
    return (
        <div>
            <h1 className="text-2xl">My skillzzzz</h1>
            {themes.map((theme) => {
                return (
                    <div key={theme.themeId}>
                        <h2>{theme.themeTitle}</h2>
                        {theme.skills.map((skill) => (
                            <div key={skill.id} className="p-2 border border-gray-500 rounded">
                                {statusEmojis[skill.status]}
                                {skill.description}
                            </div>
                        ))}
                    </div>
                );
            })}
        </div>
    );
    // return (
    //     <div className="flex flex-col p-4 w-lg mx-auto gap-4">
    //         <SkillForm />
    //         {skills.map((skill) => (
    // <div key={skill.id} className="p-2 border border-gray-500 rounded">
    //     {skill.name} ({skill.level})
    // </div>;
    //         ))}
    //     </div>
    // );
}