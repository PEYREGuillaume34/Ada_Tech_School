"use client"

import { useParams } from "next/navigation";
import { Key, useEffect, useState } from "react";

interface getPostsProps {
    id: Key | null | undefined;
    content: string;
}

export default function PostsDetails() {
    const params = useParams();
    console.log(typeof params.id);
    const [content, setContent] = useState<getPostsProps[]>([]);

    
    useEffect(() => {
        try {
            fetch("http://localhost:3000/api/posts")
                .then((res) => res.json())
                .then((data) => setContent(data));
            } catch (error) {
                console.error(error);
            }

    }, []);

    const dataFiltered = content.filter(post => post.id === Number(params.id));


    return (
        <div>
            <ul>
                {dataFiltered.map((post) => {
                    return <li key={post.id}>{post.content}</li>;
                })}
            </ul>
        </div>
    );

}