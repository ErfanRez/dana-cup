import { createBrowserRouter } from "react-router-dom";
import Public from "./pages/Public";
import Login from './pages/Login';
import Layout from "./components/Layout";
import NotFound from "./pages/NotFound";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [{ element: <Public />, index: true },
  {path : '/login', element : <Login/>}],
  },

  { path: "*", element: <NotFound /> },
]);

export default Router;
