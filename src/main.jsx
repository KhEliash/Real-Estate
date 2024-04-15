import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Components/Root.jsx";
import Error from "./Components/Error.jsx";
import Home from "./Components/Home.jsx";
import UpdateProfile from "./Components/UpdateProfile.jsx";
import CardsDetails from "./Components/CardsDetails.jsx";
import Login from "./Components/Login.jsx";
import Register from "./Components/Register.jsx";
import AuthProvider from "./Components/Provider/AuthProvider.jsx";
import PrivetRouts from "./Routs/PrivetRouts.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/information.json"),
      },
      {
        path: "/updateProfile",
        element: (
          <PrivetRouts>
            <UpdateProfile></UpdateProfile>
          </PrivetRouts>
        ),
      },

      {
        path: "/cardDetails/:id",
        element: (
          <PrivetRouts>
            <CardsDetails></CardsDetails>
          </PrivetRouts>
        ),
        // element: <CardsDetails></CardsDetails>,
        loader: () => fetch("/information.json"),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
