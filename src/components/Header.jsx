import sass from "@/next-app/styles/Home.module.scss"
const Header = () => {
    return (
        <main className="Main flex max-[660px]:flex-wrap justify-center items-center gap-4 sm:justify-between max-[660px]:flex-col h-24 overflow-hidden  w-full" style={{transition: "all 330ms"}} >
            <div className="TopLvl flex items-center justify-between gap-3 w-full">
                <div className="Logo flex items-center justify-between gap-3">
                    <img src="/logo.svg" alt="" />
                    <h6
                        className={`${sass.Text} text-2xl font-bold`}>Dild<span className=" text-zinc-600">ora</span><br /> Shukhratova</h6>
                </div>
                <i className="ri ri-menu-line text-3xl sm:hidden"  onClick={() => {
                    document.querySelector('.Main').classList.toggle('h-auto')
                }}></i>
            </div>
            <ul className="flex gap-6 max-[660px]:flex-col max-[660px]:w-full" style={{transition: "330ms"}}>
                <li className="">
                    <a href="https://www.instagram.com/its_d1a_____/" className=" flex items-center gap-3">
                        <i className="ri ri-instagram-line sm:text-4xl text-3xl "></i>
                        <h6 className={`sm:hidden ${sass.Text} text-2xl`}>Instagram</h6>
                    </a>
                </li>
                <li className="">
                    <a href="https://t.me/dilya_shukhratova" className=" flex items-center gap-3">
                        <i className="ri ri-telegram-line sm:text-4xl text-3xl "></i>
                        <h6 className={`sm:hidden ${sass.Text} text-2xl`}>Telegram</h6>
                    </a>
                </li>
                <li className="">
                    <a href="" className=" flex items-center gap-3">
                        <i className="ri ri-behance-line sm:text-4xl text-3xl "></i>
                        <h6 className={`sm:hidden ${sass.Text} text-2xl`}>Behance</h6>
                    </a>
                </li>
                <li className="">
                    <a href="" className=" flex items-center gap-3">
                        <i className="ri ri-linkedin-line sm:text-4xl  text-3xl"></i>
                        <h6 className={`sm:hidden ${sass.Text} text-2xl`}>Linkedin</h6>
                    </a>
                </li>
            </ul>
        </main>
    )
}

export default Header;
