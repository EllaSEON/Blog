import CreatePage from "./Pages/CreatePage";
import EditPage from "./Pages/EditPage";
import HomePage from "./Pages/HomePage";
import ListPage from "./Pages/ListPage";
import AdminPage from "./Pages/AdminPage";
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
    path: "/admin",
    element: <AdminPage />,
  },
  {
    path: "/blogs/create",
    element: <CreatePage />,
  },
  {
    path: "/blogs/:id/edit",
    element: <EditPage />,
  },
  {
    path: "/blogs/:id",
    element: <ShowPage />,
  },
];

export default routes;
