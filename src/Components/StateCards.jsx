import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";

const StateCards = ({ cardItem }) => {
  const { status, id, price, segment_name, estate_title, image, location } = cardItem;
  // console.log(cardItem);
  return (
    <div className="card card-compact h-[]  bg-base-100 shadow-xl p-3 ">
      <figure>
        <img
          src={image}
          alt="card-img"
          className="w-full h-[250px] md:h-[250px] lg:h-[300px]"
        />
      </figure>
      <div className="space-y-3 mt-2 ">
        <h2 className="card-title"> {estate_title}</h2>
        <div className="font-bold flex justify-end text-lg text-green-500">
          {price}
        </div>

        <div className="flex  justify-between">
          <p>#{segment_name}</p>
          <p className="font-bold">
            For: <span className="text-red-600">{status}</span>
          </p>
        </div>
        <p className="flex items-center gap-2 text-gray-500">
          <FaLocationDot className="text-red-500" /> {location}
        </p>
        <div className="card-actions justify-end">
          <Link to={`/cardDetails/${id}`}>
            <button className="btn bg-gray-800 hover:text-black text-white">
              View Property
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default StateCards;
