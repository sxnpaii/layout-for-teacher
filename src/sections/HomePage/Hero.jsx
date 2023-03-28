import sass from "@/next-app/styles/sections/HomePage/Hero.module.scss";
import Link from "next/link";

const Hero = () => {
    return (
        <main className={`${sass.Main} flex lg:flex-nowrap flex-wrap-reverse justify-center items-center md:justify-around gap-8 relative mb-10`}>
            <div className={`${sass.Hero} max-[660px]:bottom-0 sm:top-1/3 flex flex-col justify-center  items-start h-96 z-10 w-full sm:w-2/3 relative`}>
                <h1 className={`${sass.Text} font-bold lg:text-8xl sm:text-7xl mb-5 max-[660px]:text-5xl`}>Мне бы весь этот мир…🌍</h1>
                <p className={`${sass.TextP} mb-6 text-xl`} >Life is short, world is wide. I wanna make some memories </p>
                <Link href="posts" className={`${sass.Btn} text-xl`}>Read about my life..</Link>
            </div>
            <div className={` ${sass.img} overflow-hidden`}>
                <img src="/its_d1a_____-25022023-0001.jpg" alt="" />
            </div>
        </main>
    )
}
export default Hero;
