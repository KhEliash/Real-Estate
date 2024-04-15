import React from "react";
import { Link, useRouteError } from "react-router-dom";
import img from "../assets/404.jpg";
import { Helmet } from "react-helmet";

const Error = () => {
  const error = useRouteError();
  console.error(error);
  return (
    <div>
      <Helmet>
        <title>Error - Factory Fusion</title>
      </Helmet>

      <h1 className="text-3xl font-bold text-red-500">Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <Link>
        <button className="btn bg-green-600 text-white hover:bg-green-400">
          Go Home
        </button>
      </Link>
      <img src={img} alt="" className="w-full h-[500px]" />
    </div>
  );
};

export default Error;
