import { useState } from "react";
// ky
import ky from "ky";
// env 
// ?components
import MainLayout from "../components/MainLayout";
import PostForm from "../sections/NewPostPage/PostForm";
import MarkdownFormatter from "../components/MarkdownFormatter";

//?? setting date
const date = new Date();
const fullDate = {
    day: date.getDate(),
    month: date.getMonth() + 1,
    year: date.getFullYear(),
}
// !data posting with objects 
const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());
    ky.post(`${process.env.NEXT_PUBLIC_LOCAL_API}/api/posts`, {
        json: {
            title: formJson.title,
            description: formJson.description,
            content: formJson.content,
            tags: formJson.tags.split(" "),
            date: fullDate,
        }
    });
}


// 

export default function New() {
    // ?jsx
    return (
        <MainLayout>
            {/* post form */}
            <PostForm submitData={handleSubmit} />

        </MainLayout>
    )
}