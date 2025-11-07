import {projects} from "@/lib/db";

export default async function Project({params}){
    const { slug } = await params;
    const project = projects.find((project) => project.slug === slug);
    if (project === undefined) {
        return (<div>Project not found</div>);
    }

    return (<div>slug: {slug}</div>);
}