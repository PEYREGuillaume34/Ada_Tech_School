import { projects } from "@/lib/db";
import Link from "next/link";

export default function Home() {

    return (
        <div className="p-4">
            <h1 className="text-2xl">Mes projects</h1>
            <ul>
                {projects.map((project) => (
                    <li key={project.slug} className="text-blue-400">
                        <Link href={`/project/${project.slug}`}>{project.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}