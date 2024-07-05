import { createBrowserRouter } from "react-router-dom";
import Public from "./pages/Public";
import Layout from "./components/Layout";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home/Home";
import UserDashboard from "./pages/dashboard/Userdashboard";
import Single from "./pages/SingleProduct";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Public />,
    index: true,
  },
  {
    path: "/main",

    element: <Layout />,
    children: [
      { element: <Home />, index: true },
      { path: "dashboard", element: <UserDashboard /> },
      { path: "single-product", element: <Single /> },
    ],
  },

  { path: "*", element: <NotFound /> },
]);

export default Router;
