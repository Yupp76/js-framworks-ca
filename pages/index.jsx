import { Container } from "react-bootstrap";
import Heading from "../components/Heading";
import Link from "next/link";
import { loadPosts } from "../lib/fetch";
import PageCard from "../components/PostCard";

export default function Home({ data }) {
  console.log(data);
  return (
    <Container>
      <div className="my-5">
        <Heading text={"Home"} />
        <ul className="list-unstyled my-5">
          {data.length &&
            data.map((post) => {
              return (
                <li key={post.id}>
                  <Link href={`/details/${(post.id)}}`}>
                    <a>
                      <PageCard
                        number={post.id}
                        title={post.title}
                        text={post.body}
                      />
                    </a>
                  </Link>
                </li>
              );
            })}
        </ul>
      </div>
    </Container>
  );
}

export async function getStaticProps() {
  try {
    const data = await loadPosts();
    return {
      props: {
        data: data,
      },
    };
  } catch (error) {
    console.log(error);
  }
}
