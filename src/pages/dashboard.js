// react next modules/packages
import Head from "next/head";
import { useState } from "react";
// ky
import ky from "ky";
// env 
// ?components
import MainLayout from "../components/MainLayout";
import PostForm from "../sections/NewPostPage/PostForm";
import MarkdownFormatter from "../components/MarkdownFormatter";
import Modal from "../components/Modal";
//styles
import sass from "@/next-app/styles/sections/PostAddingPage/AddPost.module.scss";

//?? setting date
const date = new Date();
const fullDate = {
    day: date.getDate(),
    month: date.getMonth() + 1,
    year: date.getFullYear(),
}
// !data posting with objects 
// const handleSubmit = (e) => {
//     e.preventDefault();
//     const form = e.target;
//     const formData = new FormData(form);
//     const formJson = Object.fromEntries(formData.entries());
//     ky.post(`${process.env.NEXT_PUBLIC_LOCAL_API}/api/posts`, {
//         json: {
//             title: formJson.title,
//             description: formJson.description,
//             content: formJson.content,
//             tags: formJson.tags.split(" "),
//             date: fullDate,
//         }
//     });
// }


// 

export default function Dashboard() {
    const [post, setPost] = useState({
        title: '',
        description: '',
        content: '',
        tags: '',
        date: null,
    })
    // !data posting with states
    const handleSubmit = () => {
        try {
            ky.post(`${process.env.NEXT_PUBLIC_LOCAL_API}/api/posts`, {
                json: {
                    title: post.title,
                    description: post.description,
                    content: post.content,
                    tags: post.tags.split(" "),
                    date: fullDate,
                }
            });

            setPost({
                title: '',
                description: '',
                content: '',
                tags: '',
                date: null,
            })
        } catch (err) {
            console.error(err);
        }

    }
    //  modal state
    const [modal, setModal] = useState(false)
    // ?jsx
    return (
        <MainLayout >
            <Head>
                <title>Dashboard || Its D1a`s Blog 💙</title>
            </Head>
            {/* post form */}
            <PostForm submitData={handleSubmit} states={{ post, setPost, setModal }} />
            {/* modal */}
            <Modal states={{ modal, setModal }} func={handleSubmit} />

        </MainLayout>
    )
}