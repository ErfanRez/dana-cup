import { createBrowserRouter } from "react-router-dom";
import Public from "./pages/Public";
import Layout from "./components/Layout";
import NotFound from "./pages/NotFound";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [{ element: <Public />, index: true }],
  },

  { path: "*", element: <NotFound /> },
]);

export default Router;
