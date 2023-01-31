import axios from "axios";
import { useState, useEffect } from "react";
import Card from "../components/Card";
import { Link, useNavigate } from "react-router-dom";

const ListPage = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);

  // 게시물 보여주기
  const getPosts = () => {
    axios.get("http://localhost:3001/posts").then((res) => {
      setPosts(res.data);
    });
  };

  useEffect(() => {
    getPosts();
  }, []);

  // 삭제 버튼
  const deleteBlog = (e, id) => {
    e.stopPropagation();
    axios.delete(`http://localhost:3001/posts/${id}`).then(() => {
      setPosts((prevPosts) => {
        return prevPosts.filter((post) => post.id !== id);
        // 화면에서도 삭제된걸 보여주기 위해서 설정
      });
    });
  };
  return (
    <div>
      <div className="d-flex justify-content-between">
        <h1>Blogs</h1>
        <div>
          <Link to="/blogs/create" className="btn btn-success">
            Create New
          </Link>
        </div>
      </div>
      {posts.map((post) => {
        return (
          <Card
            key={post.id}
            title={post.title}
            onClick={() => navigate("/blogs/edit")}
          >
            <div
              className="btn btn-danger btn-sm"
              onClick={(e) => deleteBlog(e, post.id)}
            >
              Delete
            </div>
          </Card>
        );
      })}
    </div>
  );
};
export default ListPage;
