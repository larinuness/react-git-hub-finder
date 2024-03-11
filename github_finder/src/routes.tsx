import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import NotFound from "./components/error/NotFound";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export { router };
