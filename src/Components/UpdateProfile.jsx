import { useContext } from "react";
import { Helmet } from "react-helmet";
import { AuthContext } from "./Provider/AuthProvider";
import swal from "sweetalert";

const UpdateProfile = () => {
  const { user, updateUserProfile } = useContext(AuthContext);
   
  const handleUpdateProfile = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const photo = form.get("photo");

    updateUserProfile(name, photo).then(() => {
      swal({
        text: "Update successfully",
        icon: "success",
      });
    });
  };

  return (
    <div className="mt-12 text-sm lg:text-neutral">
      <Helmet>
        <title>Update Profile - Factory Fusion</title>
      </Helmet>

      <div className="card lg:card-side bg-base-100 shadow-xl w-2/3 mx-auto">
        <figure className="bg-orange-500 p-8">
          <img
            src={user.photoURL}
            alt="Album"
            className="rounded-full w-36 h-36 "
          />
        </figure>
        <div className="card-body bg-gray-900 text-white">
          <h1 className="text-2xl font-bold ">
            <span className="text-orange-500">Name:</span> {user.displayName}
          </h1>
          <h1>
            <span className="font-bold text-orange-500">Email: </span>{" "}
            {user.email}
          </h1>
          <h1 className="">
            <span className="font-bold text-orange-500">Photo URL: </span>{" "}
            {user.photoURL}
          </h1>
        </div>
      </div>

      {/* form update */}

      <div className="   mt-12  mb-5">
        <div className="text-center  ">
          <h1 className="text-xl font-bold mb-3 text-orange-600">
            {" "}
            Update Your Profile
          </h1>
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
