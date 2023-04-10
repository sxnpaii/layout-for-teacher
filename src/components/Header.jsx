import sass from "@/next-app/styles/components/Header.module.scss"
import Link from "next/link";
const Header = () => {
    return (
        <main className={`${sass.Main} fn flex max-[660px]:flex-wrap justify-center items-center gap-4 sm:justify-between max-[660px]:flex-col h-24 overflow-hidden  w-full mb-10`}>
            <div className="TopLvl flex items-center justify-between gap-3 w-full">
                <Link href="/" className="Logo flex items-center justify-between gap-3">
                    <img src="/logo.svg" alt="" />
                    <h6
                        className={`${sass.Text} text-2xl font-bold`}>Dild<span className=" text-zinc-600">ora</span><br /> Shukhratova</h6>
                </Link>
                <i className="ri ri-menu-line text-3xl sm:hidden" onClick={() => {
                    document.querySelector(".fn").classList.toggle('h-auto')
                }}></i>
            </div>
            <ul className="flex justify-between w-[300px] sm:h-[32px] max-[660px]:flex-col max-[660px]:w-full max-[660px]:text-center">
                <li>
                    <Link href="/posts" className={`${sass.Text} border-b text-xl font-bold`}>Posts</Link>
                </li>
                <li><
                    Link href="/#About_me" className={`${sass.Text} border-b text-xl font-bold`}>About me</Link>
                </li>
                <li>
                    <Link href="/tags" className={`${sass.Text} border-b text-xl font-bold`}>Tags</Link>
                </li>
            </ul>
            <ul className="flex gap-3 max-[660px]:flex-col ">
                <li className="">
                    <a href="https://www.instagram.com/its_d1a_____/" className=" flex max-w-[660px]:flex-col items-center gap-3">
                        <i className="ri ri-instagram-line text-xl "></i>
                        <h6 className={`sm:hidden ${sass.Text} text-sm`}>Instagram</h6>
                    </a>
                </li>
                <li className="">
                    <a href="https://t.me/dilya_shukhratova" className=" flex max-w-[660px]:flex-col items-center gap-3">
                        <i className="ri ri-telegram-line text-xl "></i>
                        <h6 className={`sm:hidden ${sass.Text} text-sm`}>Telegram</h6>
                    </a>
                </li>

            </ul>
        </main>
    )
}

export default Header;
