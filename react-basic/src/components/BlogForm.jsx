import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const BlogForm = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const onSubmit = () => {
    axios
      .post("http://localhost:3001/posts", {
        title: title,
        body: body,
      })
      .then(() => {
        navigate("/blogs/");
      });
  };
  return (
    <div>
      <h1>Create a blog post</h1>
      <div className="mb-3">
        <label className="form-label">Title</label>
        <input
          className="form-control"
          type="text"
          value={title}
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Body</label>
        <textarea
          className="form-control"
          type="text"
          value={body}
          onChange={(event) => {
            setBody(event.target.value);
          }}
          rows="20"
        />
      </div>
      <button className="btn btn-primary" onClick={onSubmit}>
        Post
      </button>
    </div>
  );
};

export default BlogForm;
