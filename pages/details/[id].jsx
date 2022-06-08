import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Container } from "react-bootstrap";

import SpinnerNotch from "../../components/SpinnerNotch";
import PageCard from "../../components/PostCard";
import { loadPosts } from "../../lib/fetch";

const Details = (props) => {
  const [post, setPost] = useState(null);

  const router = useRouter();
  const { id } = router.query;

  useEffect(async () => {
    const requestedPost = await loadPosts(id);
    if (!!requestedPost) {
      setPost(requestedPost);
    }
  }, []);

  return (
    <Container>
      <div className="my-5">
        {!!post ? (
          <PageCard
            key={post.id}
            number={post.id}
            title={post.title}
            text={post.body}
          />
        ) : (
          <div className="d-flex align-items-center w-100 justify-content-center my-5">
            <SpinnerNotch />
          </div>
        )}
      </div>
    </Container>
  );
};

export default Details;
