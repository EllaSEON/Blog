import { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import PropTypes from "prop-types";

const BlogForm = ({ editing }) => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  // 게시글 수정할 때 기존 데이터 가져오기
  useEffect(() => {
    axios.get(`http://localhost:3001/posts/${id}`).then((res) => {
      setTitle(res.data.title);
      setBody(res.data.body);
    });
  }, [id]);

  // editing이 true 일 경우 게시글 수정, false일때 게시글 업로드
  const onSubmit = () => {
    if (editing) {
      axios
        .patch(`http://localhost:3001/posts/${id}`, {
          title: title,
          body: body,
        })
        .then((res) => {
          console.log(res);
        });
    } else {
      axios
        .post(`http://localhost:3001/posts`, {
          title: title,
          body: body,
          createdAt: Date.now(), // 현재시간 가져오기
        })
        .then((res) => {
          console.log(res);
          navigate("/blogs/");
        });
    }
  };
  return (
    <div>
      <h1>{editing ? "Edit" : "Create"} a blog post</h1>
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
          rows="10"
        />
      </div>
      <button className="btn btn-primary" onClick={onSubmit}>
        {editing ? "Edit" : "Post"}
      </button>
    </div>
  );
};

BlogForm.propTypes = {
  editing: PropTypes.bool,
};

BlogForm.defaultProps = {
  editing: false, // false이면 create true 이면 edit
};

export default BlogForm;
