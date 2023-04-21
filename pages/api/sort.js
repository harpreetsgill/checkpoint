import { getPosts } from "@/lib/wordpress";

export default async function handler(req, res) {
  if (res.status(200)) {
    let data;
    switch (req.body) {
      case "oldest":
        data = await getPosts(40, "date", "asc");
        break;
      case "az":
        data = await getPosts(40, "title", "asc");
        break;
      case "za":
        data = await getPosts(40, "title", "desc");
        break;
      default:
        data = await getPosts(40);
    }
    res.json(data);
  }
}
