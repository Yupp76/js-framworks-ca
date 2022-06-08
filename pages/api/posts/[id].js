// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { posts } from "../../../constants";

export default function handler(req, res) {
  const {
    query: { id },
  } = req;

  const post = posts.find((post) => post.id === parseInt(id));

  if (!post) {
    return res.status(404).json({
      status: 404,
      message: "Not Found",
    });
  }

  res.status(200).json({ ...post });
}
