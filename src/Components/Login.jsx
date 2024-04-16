import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "./Provider/AuthProvider";
import { toast } from "react-toastify";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Helmet } from "react-helmet";

const Login = () => {
  const { signIn, googleLogIn, githubLogIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const google = () => {
    googleLogIn();
    navigate(location?.state ? location.state : "/");
  };
  const github = () => {
    githubLogIn();
    navigate(location?.state ? location.state : "/");
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    console.log(form);
    const email = form.get("email");
    const password = form.get("password");
    // console.log(email, password);

    signIn(email, password)
      .then((result) => {
        console.log(result.user);
        // toast.success('d');
        alert("Log in successfully");
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        // console.log(error.message);
        alert(error.message);
      });
  };

  return (
    <div className="hero min-h-screen bg-base-200">
        <Helmet>
        <title>Login - Factory Fusion</title>
      </Helmet>
      <div className="p-5 rounded-xl shadow-2xl bg-base-100">
        <h1 className="font-bold text-2xl text-center text-orange-500">Login Here</h1>
        <form className="lg:card-body" onSubmit={handleLogin}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
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
              placeholder="password"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-gray-950 text-white hover:text-black">Login</button>
          </div>
        </form>
        <p>
          Do not have an account?
          <Link to={"/register"} className="btn btn-link font-bold ">
            Register
          </Link>
        </p>
        <hr className="mb-3" />
        <div>
          <h1 className="text-xl text-center font-bold">Login with . . .</h1>

          <div className="flex justify-around mt-3">
            <button onClick={google} className="btn btn-sm bg-black text-white hover:text-black">
              <span>
                <FaGoogle />
              </span>
              Google
            </button>
            <button onClick={github} className="btn btn-sm bg-black text-white hover:text-black">
              <span>
                <FaGithub />
              </span>
              GitHub
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
