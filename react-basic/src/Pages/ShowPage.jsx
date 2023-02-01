import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import LoadingSpinner from "../components/LoadingSpinner";

const ShowPage = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  const getPost = (id) => {
    axios.get(`http://localhost:3001/posts/${id}`).then((response) => {
      setPost(response.data);
      setLoading(false);
    });
  };

  // 한번만 실행시킬 것이기 때문에 []
  useEffect(() => {
    getPost(id);
  }, []);

  //로딩 스피너
  if (loading) {
    return <LoadingSpinner />;
  } else {
    return (
      <div>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
      </div>
    );
  }
};
export default ShowPage;
