// ?next modules
import Head from "next/head";
import Link from "next/link";
//ky
import ky from "ky";
// ?components
import MainLayout from "@/next-app/components/MainLayout";
// ?styles
import sass from "@/next-app/styles/sections/PostsPage/Posts.module.scss";
// !data fetching
export const getServerSideProps = async () => {
    const response = await ky.get(`${process.env.NEXT_PUBLIC_LOCAL_API}/api/posts`).json();
    return {
        props: {
            Posts: response
        }
    }
}
// jsx
export default function Posts({ Posts }) {
    return (
        <MainLayout>
            <Head>
                <title>All Posts || D1a's Blog 💙</title>
            </Head>
            <div className={`${sass.AllPosts} max-w-[1720px] m-auto`}>
                {Posts.length !== 0 ? Posts.map(({ id, title, description, date, tags }) => (
                    <Link href={`/posts/${id}`} className={`${sass.Post} block p-5 m-5 `} key={id} data-aos="fade-up">
                        <div className="heading flex flex-wrap-reverse sm:flex-nowrap justify-between items-center gap-5 sm:max-h-[30px] ">
                            <h3 className={`${sass.Head} text-3xl mb-3`}>{title}</h3>
                            <div className={`${sass.date} text-sm`}>
                                published:<b> {date.day}.{date.month}.{date.year}</b>
                            </div>
                        </div>
                        <p className={`${sass.Content} text-lg mb-10 break-words`}>{description}
                        </p>
                        <div >
                            {tags.map((tag, index) => (
                                <b key={index + 1} href={`tags/${tag}`} className={`${sass.Tags} py-1 px-2 m-1 text-sm`} >{tag}
                                </b>
                            ))}
                        </div>
                    </Link>
                ))
                    : <h3 className={`${sass.NotFound} text-center text-3xl my-[30vh]`}>There is nothing here yet...</h3>
                }
            </div>
        </MainLayout>
    )
}
