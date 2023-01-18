import CreatePage from "./Pages/CreatePage";
import EditPage from "./Pages/EditPage";
import HomePage from "./Pages/HomePage";
import ListPage from "./Pages/ListPage";

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
];

export default routes;
