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

  // id 가 변경 될때마다 의존성 배열 실행
  useEffect(() => {
    console.log("hello");
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
