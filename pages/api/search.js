import { getPosts } from "@/lib/wordpress";

export default async function handler(req, res) {
  if (res.status(200)) {
    const data = await getPosts(40, "date", "asc", req.body);
    res.json(data);
  }
}
