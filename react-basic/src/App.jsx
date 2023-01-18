import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import routes from "./routes";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <div className="container">
        <Routes>
          {routes.map((route) => {
            return (
              <Route
                key={route.path} //고유한 key를 넣기 위해 path를 사용
                path={route.path}
                element={route.element}
              ></Route>
            );
          })}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
