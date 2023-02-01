import { useParams, Link } from "react-router-dom";
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
    getPost(id);
  }, []);

  // createdAt을 알아볼 수 있는 시간으로 바꾸기
  const printDate = (timestamp) => {
    return new Date(timestamp).toLocaleString();
  };

  //로딩 스피너
  if (loading) {
    return <LoadingSpinner />;
  } else {
    return (
      <div>
        <div className="d-flex">
          <h1 className="flex-grow-1">{post.title}</h1>
          <div>
            <Link className="btn btn-primary" to={`/blogs/${id}/edit`}>
              Edit
            </Link>
          </div>
        </div>
        <small className="text-muted">
          Created At : {printDate(post.createdAt)}
        </small>
        <hr />
        <p>{post.body}</p>
      </div>
    );
  }
};
export default ShowPage;
