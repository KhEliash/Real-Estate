import { useContext } from "react";
import { AuthContext } from "../Components/Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivetRouts = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  // console.log(location);
  if (loading) {
    return (
      <div
       className="w-full h-screen flex items-center justify-center"
       >
        <span className="loading loading-spinner text-info loading-lg"></span>
      </div>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate state={location.pathname} to={"/login"}></Navigate>;
};

export default PrivetRouts;
