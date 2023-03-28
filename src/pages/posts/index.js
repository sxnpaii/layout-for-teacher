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
            <div className={sass.AllPosts}>
                {Posts.map(({ id, title, content, date, tags }) => (
                    <Link href={`/posts/${id}`} className={`${sass.Post} block p-5 mb-5`} key={id} data-aos="fade-up">
                        <div className="heading flex flex-wrap-reverse sm:flex-nowrap justify-between items-center gap-5 sm:max-h-[30px] ">
                            <h3 className={`${sass.Head} text-3xl mb-3`}>{title}</h3>
                            <div className={`${sass.date} text-sm`}>
                                published:<b> {date.day}.{date.month}.{date.year}</b>
                            </div>
                        </div>
                        <p className={`${sass.Content} text-lg mb-10`}>{content.substring(1, 500)}...</p>
                        <div >
                            {tags.map((tag, index) => (
                                <b key={index + 1} href={`tags/${tag}`} className={`${sass.Tags} py-1 px-2 m-1 text-sm`} >{tag}
                                </b>
                            ))}
                        </div>
                    </Link>
                ))}
            </div>
        </MainLayout>
    )
}
