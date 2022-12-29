import React, { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../Contexts/AuthProvider";

const GoogleSignIn = () => {
  const { signInWithGoogle } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const handleGoogle = () => {
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        toast.success("successfully login");
        navigate(from, { replace: true });
      })

      .catch((error) => {
        toast.error(error.message);
      });
  };
  return (
    <div>
      <button
        onClick={handleGoogle}
        type="submit"
        className="btn btn-outline border-blue-700 w-full hover:bg-gradient-to-r from-cyan-600 to-blue-600"
      >
        <FaGoogle></FaGoogle> With Google
      </button>
    </div>
  );
};

export default GoogleSignIn;
