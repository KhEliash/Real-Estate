import { Link } from "react-router-dom";

const Login = () => {

    e.preventDefault();
    const form = new FormData(e.currentTarget);
    console.log(form);
   }

  return (
    <div className="hero min-h-screen bg-base-200">
    <div className="hero-content flex-col lg:flex-row-reverse">
      <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <h1 className="font-bold text-2xl">Login Here</h1>
        <form className="card-body" onSubmit={handleLogin}>
         
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
            <button className="btn btn-primary">Login</button>
          </div>
        </form>
        <p>
          Do not have an account?
          <Link to={"/register"} className="btn btn-link font-bold ">
            Register
          </Link>
        </p>
      </div>
    </div>
  </div>
  );
};

export default Login;
