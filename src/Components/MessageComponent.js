import React, { useContext } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../Contexts/AuthProvider";
import logo from "../images/eg-1.png";

const MessageComponent = () => {
  const { user } = useContext(AuthContext);
  // const { register, handleSubmit } = useForm();
  const imageHostKey = process.env.REACT_APP_imgbb_key;
  // console.log(imageHostKey);

  const handleMessage = (event) => {
    if (!user) {
      toast.error("Login first for review");
      return;
    } else {
      event.preventDefault();
      const form = event.target;
      // const email = user?.email || "unregistered";
      const name = user.displayName;
      const text = form.message.value;
      const userImage = user?.photoURL || "null";
      const email = user?.email || "unregistered";
      const image = form.image.files[0] || "no images";
      const like = "10";
      // console.log(image);
      const formData = new FormData();
      formData.append("image", image);
      console.log(formData);
      const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
      fetch(url, {
        method: "POST",
        body: formData,
      })
        .then((res) => res.json())
        .then((imgData) => {
          if (imgData.success) {
            console.log(imgData.data.url);
            const userMessage = {
              text,
              image: imgData.data.url,
              email,
              name,
              userImage,
              like,
            };
            fetch(`${process.env.REACT_APP_API_URL}/messageCollection`, {
              method: "POST",
              headers: { "content-type": "application/json" },
              body: JSON.stringify(userMessage),
            })
              .then((res) => res.json())
              .then((data) => {
                if (data.acknowledged) {
                  toast.success("Your review successfully posted");
                  form.reset();
                }
              })
              .catch((err) => console.error(err));
          }
        });
    }
  };
  return (
    <div className="card max-w-lg bg-base-300 shadow-xl my-10 mx-4 md:mx-auto ">
      <div className="card-body">
        <div className="flex ">
          <div className="avatar mr-4">
            <div className="w-12 rounded-full">
              <img src={logo} alt="" />
            </div>
          </div>
          <h2 className="card-title">{user ? user.displayName : "Name"}</h2>
        </div>
        <form
          onSubmit={handleMessage}
          className="flex flex-col py-6 space-y-6 md:py-0 md:px-6 ng-untouched ng-pristine ng-valid"
        >
          <div className="form-control">
            <label className="block">
              <span className="mb-1 font-bold text-gray-400">
                Whats on your mind?
              </span>
              <textarea
                rows="5"
                name="message"
                className="block w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 p-4"
              ></textarea>
            </label>
          </div>
          <div className="form-control">
            <small>Upload image</small>
            <input
              type="file"
              name="image"
              className="file-input-xs file-input-bordered file-input-info w-full text-info"
            />
          </div>

          <button
            type="submit"
            className="self-center px-8 py-3 text-lg rounded focus:ring hover:ring focus:ring-opacity-75 bg-gradient-to-r from-cyan-500 to-blue-400 dark:text-white focus:ring-violet-400 hover:ring-blue-500"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default MessageComponent;
