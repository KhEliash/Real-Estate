import { useEffect, useState } from "react";
import Header from "./Header";
// import { useLoaderData } from "react-router-dom";
import StateCards from "./StateCards";
import { Helmet } from "react-helmet";
import Aos from "aos";
import "aos/dist/aos.css";

const Home = () => {
  // const information = useLoaderData();
  // console.log(information);
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const [states, setStates] = useState([]);

  useEffect(() => {
    fetch("information.json")
      .then((res) => res.json())
      .then((data) => setStates(data));
  }, []);

  return (
    <div className="mx-3 lg:mx-0 ">
      <Helmet>
        <title>Home - Factory Fusion</title>
      </Helmet>
      <Header></Header>

      <div className="mt-12 text-center mb-12">
        <div data-aos="fade-left">
          <h1 className="text-2xl font-bold text-orange-500">
            Discover Industrial Estates
          </h1>
          <p className="mt-3 px-5 text-gray-500">
            Explore our curated selection of industrial estates tailored to meet
            the diverse needs of manufacturing, warehousing, and production.
            From state-of-the-art factories to expansive warehouse facilities,
            find the perfect location for your industrial operations. Each
            estate offers a range of amenities and features designed to optimize
            efficiency and productivity in your industrial endeavors
          </p>
        </div>
        <div
          data-aos="fade-right"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-4 items-center justify-center"
        >
          {states.map((cardItem, id) => (
            <StateCards key={id} cardItem={cardItem}></StateCards>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
