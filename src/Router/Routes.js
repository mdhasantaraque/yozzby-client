import { createBrowserRouter } from "react-router-dom";
import EditModal from "../Components/EditModal";
import Home from "../Components/Home";
import Login from "../Components/Login";
import SignUp from "../Components/SignUp";
import Main from "../Layout/Main";

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
    ],
  },
]);
export default router;
