import React from "react";
import { useRouteError } from "react-router-dom";
import img from "../assets/404.jpg";

const Error = () => {
  const error = useRouteError();
  console.error(error);
  return (
    <div>
      <h1 className="text-3xl font-bold text-red-500">Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <img src={img} alt="" className="w-full h-[500px]" />
    </div>
  );
};

export default Error;
