import { useContext } from "react";
import { Helmet } from "react-helmet";
import { AuthContext } from "./Provider/AuthProvider";

const UpdateProfile = () => {
  const { user, updateUserProfile } = useContext(AuthContext);
  console.log(user);
  const handleUpdateProfile = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const photo = form.get("photo");
    console.log(name, photo);

    updateUserProfile(name, photo).then(() => {
      // logOut();
      // navigate("/login");
      alert("Update successfully");
    });
  };

  return (
    <div>
      <Helmet>
        <title>Update Profile - Factory Fusion</title>
      </Helmet>

      <div className="  flex w-2/3   mx-auto mt-5 bg-gray-100 rounded-xl shadow-lg flex-col lg:flex-row">
        <div className="flex-1 border-r-2 flex justify-center items-center py-3">
          <img
            src={user.photoURL}
            alt="User photo"
            className="w-64 h-64 rounded-full"
          />
        </div>

        <div className="flex-1 flex  flex-col items-center justify-center space-y-4 p-5 bg-gray-900 mx-2 text-center text-white rounded-xl">
          <h1 className="text-2xl font-bold">Name: {user.displayName}</h1>
          <h1>
            <span className="font-bold">Email: </span> {user.email}
          </h1>
          <h1 className=" ">
            <span className="font-bold">Photo URL: </span> {user.photoURL}
          </h1>
        </div>
      </div>
      {/* form update */}

      <div className="   mt-12  mb-5">
        <div className="text-center  ">
          <h1 className="text-xl font-bold mb-3"> Update Your Profile</h1>
        </div>
        <div className="  mx-auto rounded-xl shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body" onSubmit={handleUpdateProfile}>
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
                placeholder="Photo url"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-gray-900 text-white">Update</button>
            </div>
            <p className="text-red-500">Please refresh the page after Update</p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
