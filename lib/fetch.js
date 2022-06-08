import axios from "axios";

export async function loadPosts(param) {
  const query = param ? `/${param}` : ``;
  const result = await axios.get(`http://localhost:3000/api/posts${query}`);
  const data = result.data;

  if (data.posts) return data.posts;

  return data;
}
