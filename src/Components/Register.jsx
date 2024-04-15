import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "./Provider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";

const Register = () => {
  const { createUser, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const photo = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");
    // console.log(name, photo, email, password);

    if( !/[A-Z]/.test(password)){
      alert('Password should have a CAPITAL latter')
      return
    }
    if( ! /[a-z]/.test(password)){
      alert('Password should have a SMALL latter')

      return
    }
    if( !password.length >= 6){
      // alert('error')
      // return
    }

    // user create
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        // toast('success')
        logOut();
        navigate("/login");
        alert('Registered successfully')
      })
      .catch((error) => {
        console.log(error);
        alert(error.message)
        // toast(error);
      });
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      {/* <ToastContainer/> */}
      <div className="p-5 rounded-xl shadow-2xl bg-base-100">
        <h1 className="font-bold text-2xl text-primary">Register Here</h1>
        <form className=" lg:card-body " onSubmit={handleRegister}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="Photo URL"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Register</button>
          </div>
        </form>
        <p>
          Already have an account?
          <Link to={"/login"} className="btn btn-link font-bold ">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
