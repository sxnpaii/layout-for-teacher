import Link from "next/link";
// styles
import sass from "@/next-app/styles/sections/HomePage/RecentPosts.module.scss";




const Blogs = ({ posts }) => {
    return (
        <main className={`${sass.Main}`}>
            <h2 className={`${sass.Heading} text-4xl my-10`} posts-aos="fade-up">Random Posts</h2>
            <div className={`${sass.RecentPosts} flex flex-col items-center mb-8 `}>
                <div className={`${sass.col} grid sm:grid-cols-2 md:grid-cols-4 gap-5 mb-10 w-full`}>
                    {posts.length !== 0 ?
                        posts.reverse().filter(post => post.id < 5).map(({ id, title, description, date }) => (
                            <Link href={`posts/${id}`} key={id} className={`${sass.post} p-3 w-full`} posts-aos="fade-up">
                                <div className={`${sass.postHead} flex justify-between flex-wrap lg:flex-nowrap `} >
                                    <h4 className={`${sass.postTitle} text-2xl`}>{title}</h4>
                                    <b className={`${sass.publishedDate}`}>{date.day}.{date.month}.{date.year}</b>
                                </div>
                                <p className={`${sass.postBody} text-lg break-words`}>{description}</p>
                            </Link>
                        ))
                        : <h1 className={`${sass.NotFound} text-center`}>There is nothing here yet...</h1>
                    }
                </div>
                <Link
                    href="/posts"
                    className={`${sass.Btn}`}
                    data-aos="fade-up"
                    data-aos-duration="700"
                >
                    See More
                </Link>
            </div>
        </main>
    )
}

export default Blogs;