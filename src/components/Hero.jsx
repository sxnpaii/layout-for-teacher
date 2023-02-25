import sass from "@/next-app/styles/Home.module.scss";

const Hero = () => {
    return (
        <div className="
        flex 
        lg:flex-nowrap 
        flex-wrap-reverse 
        justify-center 
        items-center
        md:justify-around
         gap-8">
            <main className={` max-[660px]:bottom-0  sm:top-1/3  flex  flex-col  justify-center  items-start  h-96  z-10  w-full  sm:w-2/3   
            ${sass.Hero}`}>
                <h1 className={`${sass.Text} font-bold lg:text-8xl sm:text-7xl mb-5 max-[660px]:text-5xl`} >Мне бы весь этот мир…🌍</h1>
                <p className={`mb-6 text-xl ${sass.TextP}`} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, cumque commodi.</p>
                <button className={`${sass.Btn} text-xl`}>Yeah!</button>
            </main>
            <div className={` ${sass.img} overflow-hidden`}>
                <img src="/its_d1a_____-25022023-0001.jpg" alt="" />
            </div>
        </div>
    )
}
export default Hero
