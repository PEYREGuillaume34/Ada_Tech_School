"use client";

import { useState } from "react";
import { FormEvent } from "react"

export const CreatePost = () => {
const [newPost, setNewPost] = useState({
    title: "",
    content: "",
})
    const handleSubmit = async (e : FormEvent) => {
        e.preventDefault();
        const response = await fetch("http://localhost:3000/api/posts", {
            method: "POST",
            headers: {"Content-Type": "application/json",},
            body: JSON.stringify(newPost),
        })
        const data = await response.json();
        console.log(data);
    }

    return (
        <form onSubmit={(e) =>handleSubmit(e)}>
            <input placeholder="title" onChange={(e) => setNewPost({...newPost, title: e.target.value})} />
            <input placeholder="content" onChange={(e) => setNewPost({...newPost, content:e.target.value})}/>
            <button type="submit">push</button>
        </form>
    )
};