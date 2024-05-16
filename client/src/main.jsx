import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import Home from "./pages/Home";
import Team from "./pages/Team";
import Quizz from "./pages/Quizz";
import NotFound from "./components/NotFound";
import Result from "./components/Result";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/quizz",
        element: <Quizz />,
      },
      {
        path: "/team",
        element: <Team />,
      },
      {
        path: "/results",
        element: <Result />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
