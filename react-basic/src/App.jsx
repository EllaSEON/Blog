import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import CreatePage from "./Pages/CreatePage";
import EditPage from "./Pages/EditPage";
import HomePage from "./Pages/HomePage";
import ListPage from "./Pages/ListPage";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/blogs" element={<ListPage />}></Route>
          <Route path="/blogs/create" element={<CreatePage />}></Route>
          <Route path="/blogs/edit" element={<EditPage />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
