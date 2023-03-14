import sass from "@/next-app/styles/sections/HomePage/About.module.scss";

const About = () => {
    return (
        <main className={`my-20 mx-auto flex max-[1024px]:flex-wrap justify-center gap-12 ${sass.About}`}>
            <div className={`${sass.media} sm:max-w-3xl md:max-w-1/3 `} data-aos="fade-up" data-aos-delay="100" data-aos-duration="1200">
                <img src="../its_d1a_____-25022023-0002.jpg" alt="" className="w-full" />
            </div>
            <div className={`${sass.textBlock}`}>
                <h2 className={`${sass.Head} text-4xl mb-8`} data-aos="fade-up" data-aos-duration="1300">About me </h2>
                <p className={`${sass.Text} text-xl mb-10 `} data-aos="fade-up" data-aos-duration="1000">My name is Dildora. I’m 23 and living the best of my life. I was born in a small city called Zaamin which is considered urban-type settlement in Jizzakh region. Surrounded with mountains and hills, it is very interesting place for nature lovers.
                    <br />
                    <br />
                    So back to myself, I am alumni of Uzbekistan State World Languages University, and graduated from the sphere of translation. During my study years , I acquired English, and Russian a little bit.  Meanwhile, I worked as a sales and PR manager for a private agency which offers design services. So I have 2 years of working experience as a manager...   </p>
                <a href="" data-aos="fade-up" data-aos-duration="1500" className={`${sass.Btn}`} >Download CV</a>
            </div>

        </main>
    )
}
export default About;