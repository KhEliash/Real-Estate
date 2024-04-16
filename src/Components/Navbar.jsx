import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "./Provider/AuthProvider";
import { FaUser } from "react-icons/fa6";
import { FaSignInAlt, FaSignOutAlt } from "react-icons/fa";
import swal from "sweetalert";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  // console.log(user);

  const handleSignOut = () => {
    logOut()
      .then((result) => {
        swal({
          text: 'Logout successfully',
          icon: 'success'
        })
      })
      .catch((error) => {
         swal({
          text: error.message,
          icon: 'warning'
         })
      });
  };

  const links = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/updateProfile"}>Update Profile</NavLink>
      </li>
      <li>
        <NavLink to={"/aboutUs"}>About Us</NavLink>
      </li>

      <li>
        <NavLink to={"/dkdjdj"}>Error</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-gray-50 ">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-sm btn-ghost lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[9] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-sm  btn-ghost text-sm lg:text-2xl font-bold gap-0">
          <span className="text-orange-600">Factory</span>Fusion
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 flex gap-3">{links}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <div className="flex justify-center items-center lg:gap-2">
            <div
              className="tooltip tooltip-left flex items-center"
              data-tip={user.displayName}
            >
              <div className="avatar ">
                <div className="w-7 lg:w-12 rounded-full ">
                  <img src={user.photoURL} alt="Profile" />
                </div>
              </div>
            </div>
            <div />
            <button
              className="btn-sm btn lg:btn lg:bg-gray-800 lg:text-white ml-2  bg-gray-800 text-white hover:text-black"
              onClick={handleSignOut}
            >
              <span>
                <FaSignOutAlt />
              </span>
              Log Out
            </button>
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <FaUser className="border-2 rounded-full w-7 lg:w-10 h-7 lg:h-10" />

            <Link to={"/login"}>
              <a className="btn btn-sm lg:btn-md bg-gray-800 text-white hover:text-black">
               <span><FaSignInAlt/></span> Login
              </a>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
