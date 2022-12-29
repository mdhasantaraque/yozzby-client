import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/eg-1.png";

const MediaCard = ({ message }) => {
  const { _id, text, image, email, name, userImage, like } = message;

  return (
    <div className="flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-300 dark:text-gray-900 mx-auto my-6">
      <div className="flex space-x-4">
        <label className="btn btn-ghost btn-circle avatar">
          <div className="w-14 rounded-full">
            <img src={logo} alt="" />
          </div>
        </label>

        <div className="flex flex-col space-y-1">
          <Link
            rel="noopener noreferrer"
            href="#"
            className="text-sm font-semibold"
          >
            {name}
          </Link>
          <span className="text-xs dark:text-gray-500">4 hours ago</span>
        </div>
      </div>
      <div>
        <img
          src={image}
          alt=""
          className="object-cover w-full mb-4 h-60 sm:h-96 dark:bg-gray-500"
        />

        <p className="text-sm dark:text-gray-600">{text}</p>
      </div>
      <div className="flex flex-wrap justify-center">
        <div>
          <Link to={`/messageDetails/${_id}`}>
            <button className="btn  btn-info">Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MediaCard;
