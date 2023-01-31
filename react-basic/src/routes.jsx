import CreatePage from "./Pages/CreatePage";
import EditPage from "./Pages/EditPage";
import HomePage from "./Pages/HomePage";
import ListPage from "./Pages/ListPage";
import ShowPage from "./Pages/ShowPage";

const routes = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/blogs",
    element: <ListPage />,
  },
  {
    path: "/blogs/create",
    element: <CreatePage />,
  },
  {
    path: "/blogs/edit",
    element: <EditPage />,
  },
  {
    path: "/blogs/:id",
    element: <ShowPage />,
  },
];

export default routes;
