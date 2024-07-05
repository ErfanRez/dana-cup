import { createBrowserRouter } from "react-router-dom";
import Public from "./pages/Public";
import Layout from "./components/Layout";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home/Home";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { element: <Public />, index: true },
      { path: "home", element: <Home /> },
    ],
  },

  { path: "*", element: <NotFound /> },
]);

export default Router;
