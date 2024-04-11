import { useEffect, useState } from "react";
import Header from "./Header";
import { useLoaderData } from "react-router-dom";
import StateCards from "./StateCards";
import { Helmet } from "react-helmet";

const Home = () => {
  // const information = useLoaderData();
  // console.log(information);

  const [states, setStates] = useState([]);

  useEffect(() => {
    fetch("information.json")
      .then((res) => res.json())
      .then((data) => setStates(data));
  }, []);
  console.log(states);

  return (
    <div>
      <Helmet>
        <title>Home - Factory Fusion</title>
      </Helmet>
      <Header></Header>

      <div className="mt-12">
        <h1 className="text-2xl font-bold">Discover Industrial Estates</h1>
        <p className="mt-3 px-5 text-gray-500">
          Explore our curated selection of industrial estates tailored to meet
          the diverse needs of manufacturing, warehousing, and production. From
          state-of-the-art factories to expansive warehouse facilities, find the
          perfect location for your industrial operations. Each estate offers a
          range of amenities and features designed to optimize efficiency and
          productivity in your industrial endeavors
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-4 items-center justify-center">
          {states.map((cardItem, id) => (
            <StateCards key={id} cardItem={cardItem}></StateCards>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
