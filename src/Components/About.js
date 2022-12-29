import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Contexts/AuthProvider";
import photo from "../images/taraque.jpg";
import EditModal from "./EditModal";

const About = () => {
  const { user } = useContext(AuthContext);
  const [aboutMe, setAboutMe] = useState([]);
  //   console.log(aboutMe);
  const { name, email, address, university, _id } = aboutMe;
  // message API call

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/about`)
      .then((res) => res.json())
      .then((data) => setAboutMe(data[0]));
  }, []);
  return (
    <div className="w-full">
      <div className="max-w-lg p-8 sm:flex sm:space-x-6 dark:bg-blue-400 dark:text-gray-800 my-32 items-center mx-4 md:mx-auto">
        <div className="flex-shrink-0 w-full mb-6 h-44 sm:h-32 sm:w-32 sm:mb-0">
          <img
            src={photo}
            alt=""
            className="object-cover object-center w-full h-full rounded dark:bg-gray-500"
          />
        </div>
        <div className="flex flex-col space-y-4">
          <div className="flex justify-between">
            <div>
              <h2 className="text-2xl font-semibold">{name}</h2>
              <span className="dark:text-gray-700">{university}</span>
            </div>
            <label htmlFor="booking-modal" className="btn btn-sm btn-accent">
              Edit
            </label>
          </div>
          <div className="space-y-1">
            <span className="flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                aria-label="Email address"
                className="w-4 h-4"
              >
                <path
                  fill="currentColor"
                  d="M274.6,25.623a32.006,32.006,0,0,0-37.2,0L16,183.766V496H496V183.766ZM464,402.693,339.97,322.96,464,226.492ZM256,51.662,454.429,193.4,311.434,304.615,256,268.979l-55.434,35.636L57.571,193.4ZM48,226.492,172.03,322.96,48,402.693ZM464,464H48V440.735L256,307.021,464,440.735Z"
                ></path>
              </svg>
              <span className="dark:text-gray-800">{email}</span>
            </span>

            <p className="flex ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-8 h-8 mr-3"
              >
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="dark:text-gray-800">{address}</span>
            </p>

            <EditModal key={_id} aboutMe={aboutMe}></EditModal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
