import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../components/Card";
import LoadingSpinner from "../components/LoadingSpinner";

const BlogList = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  // 게시물 보여주기
  const getPosts = () => {
    axios.get("http://localhost:3001/posts").then((res) => {
      setPosts(res.data);
      setLoading(false); // 응답이 오면 로딩페이지를 false로 바꿔서 post 보여주기
    });
  };

  // 삭제 버튼
  const deleteBlog = (e, id) => {
    e.stopPropagation(); // 이벤트 버블링 막기
    axios.delete(`http://localhost:3001/posts/${id}`).then(() => {
      setPosts((prevPosts) => {
        return prevPosts.filter((post) => post.id !== id);
        // 화면에서도 삭제된걸 보여주기 위해서 설정
      });
    });
  };

  useEffect(() => {
    getPosts();
  }, []);

  // 로딩페이지 if문
  if (loading) {
    return <LoadingSpinner />;
  }
  if (posts.length === 0) {
    return <div>No blog posts found</div>;
  }
  return posts
    .filter((post) => {
      return post.publish;
    })
    .map((post) => {
      return (
        <Card
          key={post.id}
          title={post.title}
          onClick={() => navigate(`/blogs/${post.id}`)}
        >
          <div>
            <button
              className="btn btn-danger btn-sm"
              onClick={(e) => deleteBlog(e, post.id)}
            >
              Delete
            </button>
          </div>
        </Card>
      );
    });
};

export default BlogList;
