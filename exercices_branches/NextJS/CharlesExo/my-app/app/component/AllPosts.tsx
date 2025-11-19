"use client"
import { Key, useEffect, useState } from "react";
import Link from "next/dist/client/link";

interface getPostsProps {
    id: Key | null | undefined;
    user_id: number;
    title: string;
    username: string;
    content: string;
}

export const AllPosts = () => {
    const [getPosts, setGetPosts] = useState<getPostsProps[]>([]);

    useEffect(() => {
        try {
            fetch("http://localhost:3000/api/posts")
                .then((res) => res.json())
                .then((data) => setGetPosts(data));
        } catch (error) {
            console.error(error);
        }

    }, []);


    return (
        <div>
            <ul className="flex flex-col items-center" >
                {getPosts.map((post) => {
                    return <Link className="border-2 m-3 p-2 rounded-md" key={post.id} href={`/posts/${post.id}`}>
                        <li>{post.title}</li>
                    </Link>;
                })}
            </ul>
        </div>
    );
}
