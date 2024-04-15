 
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";

const StateCards = ({ cardItem }) => {
  const {
    status,
    id,
    price,
    description,
    segment_name,
    estate_title,
    image,
    facilities,
    location,
    area,
  } = cardItem;
  // console.log(cardItem);
  return (
    <div className="card card-compact h-[490px]  bg-base-100 shadow-xl ">
      <figure>
        <img src={image} alt="card-img" className="w-full h-[220px]" />
      </figure>
      <div className="space-y-3 mt-2 ">
        <h2 className="card-title"> {estate_title}</h2>
        <div className="font-bold flex justify-end text-lg">{price}</div>

        <div className="flex  justify-between">
          <p>#{segment_name}</p>
          <p className="font-bold">For: <span className="text-red-600">{status}</span></p>
        </div>
        <p className="flex items-center gap-2 text-gray-500"><FaLocationDot /> {location}</p>
        <div className="card-actions justify-end">
          <Link to={`/cardDetails/${id}`}>
          <button className="btn bg-gray-800 hover:text-black text-white">View Property</button>

          </Link>
        </div>

      </div>
    </div>
  );
};

export default StateCards;
