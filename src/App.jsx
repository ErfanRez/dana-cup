import Router from "./Router";
import { RouterProvider } from "react-router-dom";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <>
      <RouterProvider router={Router} />
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 5000,
        }}
      />
    </>
  );
};

export default App;
