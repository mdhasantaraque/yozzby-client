import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../Contexts/AuthProvider";

const EditModal = ({ aboutMe }) => {
  const { _id } = aboutMe;
  // const id = _id;
  // console.log(_id);
  const { user } = useContext(AuthContext);

  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;

    const name = form.name.value;
    const email = form.email.value;
    const university = form.university.value;
    const address = form.address.value;

    const upDating = {
      id: _id,
      name: name,
      email: email,
      university: university,
      address: address,
    };
    console.log(upDating);
    fetch(`${process.env.REACT_APP_API_URL}/about/${_id}`, {
      method: "PUT",
      headers: {
        // authorization: `bearer ${localStorage.getItem("accessToken")}`,
        "content-type": "application/json",
      },
      body: JSON.stringify(upDating),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("Update successfully.");
          // console.log(data);
          form.reset();
          window.location.reload(false);
        }
      });
  };

  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{}</h3>
          <form
            onSubmit={handleUpdate}
            className="grid grid-cols-1 gap-3 mt-10"
          >
            <input
              name="name"
              type="text"
              placeholder="Your Name"
              className="input w-full input-bordered"
              required
            />
            <input
              name="email"
              type="email"
              placeholder="Email Address"
              className="input w-full input-bordered"
              required
            />
            <input
              name="university"
              type="text"
              placeholder="Your University"
              className="input w-full input-bordered"
              required
            />
            <input
              name="address"
              type="text"
              placeholder="Address"
              className="input w-full input-bordered"
              required
            />
            <br />
            {user?.uid ? (
              <input
                className="btn btn-accent w-full"
                type="submit"
                value="Submit"
              />
            ) : (
              <Link to="/login">
                <p className="text-info text-xl font-semibold text-center ">
                  Please login for update
                </p>
              </Link>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditModal;
