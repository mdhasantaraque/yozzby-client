import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Home";
import Login from "../Components/Login";
import Media from "../Components/Media";
import SignUp from "../Components/SignUp";
import Main from "../Layout/Main";
import Error from "../Share/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/media",
        element: <Media></Media>,
      },
    ],
  },
  {
    path: "*",
    element: <Error></Error>,
  },
]);
export default router;
