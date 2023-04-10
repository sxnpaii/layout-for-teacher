// styles
import sass from "@/next-app/styles/sections/PostAddingPage/AddPost.module.scss";


const PostForm = ({ states }) => {
    return (
        <>
            <legend
                data-aos="fade-in"
                className={`${sass.Heading} text-3xl sm:text-6xl mb-10 sm:mb-20`}>
                Let's describe a new history, D1a !!
            </legend>
            <form
                method="post"
                // onSubmit={submitData}
                className={`${sass.Form} w-[90%] m-auto flex flex-col`}
                data-aos="fade-in"
            >
                <input
                    type="text"
                    name="title"
                    placeholder="Title of History..."
                    className={`${sass.SettingTitle}  h-15 p-5 text-xl mb-8`}
                    value={states.post.title}
                    onChange={e => states.setPost({ title: e.target.value })}
                />
                <input
                    type="text"
                    name="description"
                    placeholder="Description of the History..."
                    className={`${sass.SettingTitle}  h-26 p-5 text-xl mb-8 resize-none`}
                    value={states.post.description}
                    onChange={e => states.setPost({ description: e.target.value })}
                />
                <textarea
                    name="content"
                    placeholder="Memories..."
                    className={`${sass.SettingContent} min-h-[400px] p-5 resize-y text-xl`}
                    value={states.post.content}
                    onChange={e => states.setPost({ content: e.target.value })}
                />
                <p className={`${sass.Text} mb-8`}>Note: All content on this site is formatted in the MarkDown markup language, so I recommend that you first read <a href="https://www.markdownguide.org/basic-syntax/" className="border-b">the instructions for use</a>.</p>
                <input
                    type="text"
                    name="tags"
                    placeholder="Tags.. "
                    className={`${sass.SettingTags} w-1/4 p-5`}
                    value={states.post.tags}
                    onChange={e => states.setPost({ tags: e.target.value })}
                />
                <p className={`${sass.Text} mb-5`}>Note: separate tags with spaces..</p>
                <button
                    type="submit"
                    className={`${sass.SubmitBtn}`}
                    onClick={(e) => {
                        e.preventDefault()
                        // move to modal 
                        states.setModal(true)
                    }}
                >
                    Submit
                </button>
            </ form>
        </>
    )
}

export default PostForm     