import { useState } from "react";
import axios from "axios";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const onSubmit = () => {
    axios.post("http://localhost:3001/posts", {
      title: title,
      body: body,
    });
  };
  return (
    <BrowserRouter>
      <nav class="navbar navbar-dark bg-dark" data-bs-theme="dark">
        <div class="container">
          <Link class="navbar-brand" to="/">
            Home
          </Link>
          <ul class="navbar-nav">
            <li class="nav-item">
              <Link class="nav-link active" aria-current="page" to="/blogs">
                Blogs
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<div>Home Page</div>}></Route>
        <Route
          path="/blogs"
          element={
            <div className="container">
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
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
