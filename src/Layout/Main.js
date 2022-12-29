import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Share/Footer";
import Header from "../Share/Header";
import LeftSideNav from "../Share/LeftSideNav";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <div className="grid grid-cols-6 gap-4">
        <div className="col-span-1 invisible md:visible">
          <LeftSideNav></LeftSideNav>
        </div>
        <div className="col-span-6 mx-3 md:mx-auto md:col-span-5">
          <Outlet></Outlet>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Main;
