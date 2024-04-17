import { FaDotCircle } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { Helmet } from "react-helmet";

import { useLoaderData, useParams } from "react-router-dom";

const CardsDetails = () => {
  const cardInfo = useLoaderData();

  const { id } = useParams();

  const cardInt = parseInt(id);
  const card = cardInfo.find((card) => card.id === cardInt);
  const {
    status,

    price,
    description,
    segment_name,
    estate_title,
    image,
    facilities,
    location,
    area,
  } = card;
  return (
    <div className="mx-3 lg:mx-0">
      <Helmet>
        8 <title>Details - Property details</title>9{" "}
      </Helmet>

      <div className="  h-24 flex items-center justify-center text-3xl font-extrabold text-orange-500 bg-gray-100 rounded-xl">
        Details of this Property
      </div>

      <div className="flex flex-col lg:flex-row mb-12 mt-5 items-center gap-3">
        <div className="flex-1 px-4">
          <img src={image} alt="" className="w-full h-full rounded-xl" />
        </div>
        <div className="flex-1 text-left space-y-5">
          <h1 className="text-2xl font-bold">{estate_title}</h1>
          <p>{description}</p>
          <p>#{segment_name}</p>
          <div className="flex justify-between">
            <p className="font-bold">
              For : <span className="text-red-500"> {status}</span>
            </p>
            <p className="font-extrabold text-xl text-green-500">{price}</p>
          </div>
          <div className="flex justify-between">
            <p className="flex items-center gap-2">
              <FaLocationDot className="text-red-500 text-xl" />
              {location}
            </p>
            <h2 className="font-bold ">{area}</h2>
          </div>
          <div className="space-y-3">
            <h2 className="font-bold text-xl">Facilities of this projects:</h2>
            <ol className="ml-3 space-y-3">
              <li className="flex items-center gap-2">
                <FaDotCircle className="text-green-500" />
                {facilities[0]}
              </li>
              <li className="flex items-center gap-2">
                <FaDotCircle className="text-green-500" />
                {facilities[1]}
              </li>
              <li className="flex items-center gap-2">
                <FaDotCircle className="text-green-500" />
                {facilities[2]}
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardsDetails;
