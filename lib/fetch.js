import axios from "axios";

export async function loadPosts(param) {
  const query = param ? `/${param}` : ``;
  const result = await axios.get(`js-framworks-qsc453fmy-yupp76.vercel.app/api/posts${query}`);
  const data = result.data;

  if (data.posts) return data.posts;

  return data;
}
