// ky
import ky from "ky";
// env 
// ?components
import MainLayout from "../components/MainLayout";
import MarkdownFormatter from "../components/MarkdownFormatter";
// styles
import sass from "@/next-app/styles/sections/PostAddingPage/AddPost.module.scss";

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
export default function New() {
    // ?jsx
    return (
        <MainLayout>
            <legend className={`${sass.Heading} text-3xl sm:text-6xl mb-10 sm:mb-20`}>
                Let's describe a new history, D1a !!
            </legend>
            <form
                method="post"
                onSubmit={handleSubmit}
                className={`${sass.Form} w-[90%] m-auto flex flex-col`}
            >
                <input
                    type="text"
                    name="title"
                    placeholder="Title of History..."
                    className={`${sass.SettingTitle}  h-15 p-5 text-xl mb-8`}
                />
                <textarea
                    type="text"
                    name="description"
                    placeholder="Description of the History..."
                    className={`${sass.SettingTitle}  h-26 p-5 text-xl mb-8 resize-none`}
                />
                <textarea
                    name="content"
                    placeholder="Memories..."
                    className={`${sass.SettingContent} min-h-[400px] p-5 resize-y mb-8 text-xl`}
                />
                <input
                    type="text"
                    name="tags"
                    placeholder="Tags.. "
                    className={`${sass.SettingTags} w-1/4 p-5 mb-5`} />
                <button
                    type="submit"
                    className={`${sass.SubmitBtn}`}>
                    Submit
                </button>
            </form>


            <div className="freshPost">
                {/* <h3>{content}</h3> */}
                {/* <MarkdownFormatter markdown={content} /> */}
            </div>
        </MainLayout>
    )
}

// !===============================================
/** info ?? запрос POST сделано в двух видах:
 * 1) с помошью реакт хук useState
 * 2) с помошью встроенных функций и классов JavaScript
 **/
// !===============================================
