import { data } from "@/next-app/pages/api/posts";

export default function handler(req, res) {
  res.status(200).json(data)
}
