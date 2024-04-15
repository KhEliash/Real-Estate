import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { ToastContainer } from "react-toastify";

const Root = () => {
  return (
    <div className="bg-gray-50">
      <div className="container  mx-auto ">
        <ToastContainer></ToastContainer>
        <Navbar></Navbar>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;
