import React from "react";
import { Link } from "react-router-dom";

const EditModal = () => {
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
          <form onSubmit={""} className="grid grid-cols-1 gap-3 mt-10">
            <input
              name="name"
              type="text"
              defaultValue={""}
              placeholder="Your Name"
              className="input w-full input-bordered"
              required
            />
            <input
              name="email"
              type="email"
              defaultValue={""}
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
            {"".uid ? (
              <input
                className="btn btn-accent w-full"
                type="submit"
                value="Submit"
              />
            ) : (
              <Link to="/login">
                <p className="text-info text-xl font-semibold text-center ">
                  For booking login please
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
