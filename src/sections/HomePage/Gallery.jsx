// react hooks
import { useState, useEffect } from "react";
// styles 
import sass from "@/next-app/styles/sections/HomePage/Gallery.module.scss";


const images = [
    `/img/img (20).jpg`,
    `/img/img (2).jpg`,
    `/img/img (3).jpg`,
    `/img/img (4).jpg`,
    `/img/img (5).jpg`,
    `/img/img (6).jpg`,
    `/img/img (7).jpg`,
    `/img/img (8).jpg`,
    `/img/img (9).jpg`,
    `/img/img (10).jpg`,
    `/img/img (11).jpg`,
    `/img/img (12).jpg`,
    `/img/img (13).jpg`,
    `/img/img (14).jpg`,
    `/img/img (15).jpg`,
    `/img/img (16).jpg`,
    `/img/img (17).jpg`,
    `/img/img (18).jpg`,
    `/img/img (19).jpg`,
]


const Gallery = () => {
    const [imgData, setImgData] = useState();
    useEffect(() => {
        const fetchedImg = async () => {
            const res = await fetch(`/api/imgHandler`);
            const img = await res.json();
            setImgData(img);
        }
        fetchedImg();
    }, [])
    return (
        <main className={`${sass.Main} columns-2 md:columns-3 sm:gap-5 items-start`}>
            {imgData?.map((path) => (
                <img src={path} key={path} alt="" className={`${sass.Img} block w-full my-3 sm:my-5  hover:scale-100 transition content-start break-inside-avoid`} data-aos="zoom-in" data-aos-duration={400} />
            ))}
        </main>
    )
}

export default Gallery;