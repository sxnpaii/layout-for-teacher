// react 

// styles
import sass from "@/next-app/styles/sections/PostAddingPage/AddPost.module.scss";


const PostForm = ({ submitData }) => {
    return (
        <>
            <legend className={`${sass.Heading} text-3xl sm:text-6xl mb-10 sm:mb-20`}>
                Let's describe a new history, D1a !!
            </legend>
            <form
                method="post"
                onSubmit={submitData}
                className={`${sass.Form} w-[90%] m-auto flex flex-col`
                }
            >
                <input
                    type="text"
                    name="title"
                    placeholder="Title of History..."
                    className={`${sass.SettingTitle}  h-15 p-5 text-xl mb-8`}
                />
                <input
                    type="text"
                    name="description"
                    placeholder="Description of the History..."
                    className={`${sass.SettingTitle}  h-26 p-5 text-xl mb-8 resize-none`}
                />
                <textarea
                    name="content"
                    placeholder="Memories..."
                    className={`${sass.SettingContent} min-h-[400px] p-5 resize-y mb-8 text-xl
                    `}
                />
                <input
                    type="text"
                    name="tags"
                    placeholder="Tags.. "
                    className={`${sass.SettingTags} w-1/4 p-5 mb-5`}
                />
                <button
                    type="submit"
                    className={`${sass.SubmitBtn}`}
                >
                    Submit
                </button>
            </ form>


        </>
    )
}

export default PostForm     