import sass from "@/next-app/styles/components/Footer.module.scss";

const Footer = () => {
    return (
        <main className={`${sass.Main} w-full h-[60px] mt-10`}>
            <hr />
            <div className="el h-full flex items-center justify-between">
                <h6 className={sass.Heading}>Dilya Shukhratova © 2023 (no copyright)</h6>
                <div className={`${sass.Socials} flex items-center justify-center gap-3`}>
                    <a href="https://t.me/dilya_shukhratova"><i className="ri ri-telegram-line sm:text-4xl text-3xl"></i></a>
                    <a href="https://www.instagram.com/its_d1a_____/"><i className="ri ri-instagram-line sm:text-4xl text-3xl"></i></a>
                </div>
            </div>
            <hr />
            <div className="flex justify-center items-center">
               <h6 className={`${sass.WaterMark} opacity-75 my-2 text-[14px]`}> Created & Designed with❤️ by <a href="https://sxnpaii.github.io">Sxnpaii...</a></h6>
            </div>
        </main>
    )
}

export default Footer
