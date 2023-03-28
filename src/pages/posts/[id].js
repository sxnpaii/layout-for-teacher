// next modules
import Head from "next/head";
import ky from "ky";
// ?components
import MainLayout from "@/next-app/components/MainLayout";
import MarkdownFormatter from "@/next-app/components/MarkdownFormatter";
// ?styles
import sass from "@/next-app/styles/sections/PostsPage/Post.module.scss"
// !data fetching
export const getServerSideProps = async (context) => {
  const response = await ky.get(`${process.env.LOCAL_API}/posts/${context.query.id}`).json();
  return {
    props: {
      response
    }
  }

}

const Post = ({ data }) => {
  return (
    <MainLayout>
      <Head>
        <title>
          {data.title} || D1a's Blog 💙
        </title>
      </Head>
      <div className={`${sass.Post} w-[90%] m-auto`}>
        <h3 className={`${sass.Heading} text-4xl mb-8`}>
          {data.title}
        </h3>
        <div className={`${sass.Content} text-2xl mb-20`}>
          <MarkdownFormatter markdown={data.content} />
        </div>
        <div className={`${sass.Tags} font-bold`}>
          Tags:
          {data.tags.map((tag, index) => (
            <a key={index + 1} href={`/tags/${tag}`} className={`${sass.Tag} py-1 px-2 m-1 text-sm`}>{tag}</a>
          ))}
        </div>
      </div>
    </MainLayout>
  )
}

export default Post;
