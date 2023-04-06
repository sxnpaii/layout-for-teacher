// react hooks
import { useState, useEffect } from "react";
import ky from "ky";
// styles 
import sass from "@/next-app/styles/sections/HomePage/Gallery.module.scss";

const Gallery = () => {
    const [imgData, setImgData] = useState();
    useEffect(() => {
        const fetchedImg = async () => {
            const handle = await ky.get('api/imgHandler').json();
            setImgData(handle);
        }
        fetchedImg();
    }, [])
    return (
        <main className={`${sass.Main} columns-2 md:columns-3 sm:gap-5 items-start`}>
            {imgData?.map((path) => (
                <img src={path} key={path} alt="" className={`${sass.Img} block w-full my-3 sm:my-5 transition content-start break-inside-avoid`} data-aos="zoom-in" data-aos-duration={400} />
            ))}
        </main>
    )
}

export default Gallery;