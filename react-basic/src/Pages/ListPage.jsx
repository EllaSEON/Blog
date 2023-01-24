import axios from "axios";
import { useState, useEffect } from "react";
import Card from "../components/Card";

const ListPage = () => {
  const [posts, setPosts] = useState([]);
  const getPosts = () => {
    axios.get("http://localhost:3001/posts").then((res) => {
      setPosts(res.data);
    });
  };

  useEffect(() => {
    getPosts();
  }, []);
  return (
    <div>
      <h1>Blogs</h1>
      {posts.map((post) => {
        return (
          <Card key={post.id} title={post.title} />
          // <div className="card mb-3" key={post.id}>
          //   <div className="card-body">{post.title}</div>
          // </div>
        );
      })}
    </div>
  );
};
export default ListPage;
