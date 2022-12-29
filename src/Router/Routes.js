import { createBrowserRouter } from "react-router-dom";
import About from "../Components/About";
import Home from "../Components/Home";
import Login from "../Components/Login";
import Media from "../Components/Media";
import MessageDetails from "../Components/MessageDetails";
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
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/messageDetails/:id",
        element: <MessageDetails></MessageDetails>,
        loader: ({ params }) =>
          fetch(`${process.env.REACT_APP_API_URL}/messageDetails/${params.id}`),
      },
    ],
  },
  {
    path: "*",
    element: <Error></Error>,
  },
]);
export default router;
