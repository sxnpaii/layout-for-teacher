import { images } from "@/next-app/pages/api/data";


export default function handler(req, res) {
    res.status(200).json(images);
}
