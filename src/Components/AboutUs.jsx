import React from "react";

const AboutUs = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row mt-12 mb-12 gap-5 relative mx-3 lg:mx-0">
        <h1 className="absolute left-0 lg:left-[40%] text-3xl lg:text-6xl font-extrabold text-orange-600 top-3">About Us</h1>
      <div className="flex-1">
        <img
          src="https://i.ibb.co/bP7SSDJ/house-investments-elements-assortment.jpg"
          alt="house-investments-elements-assortment"
          className="w-full"
        />
      </div>
      <div className="flex-1 mt-24 text-gray-600">
        <p>
          At FactoryFusion, we are passionate about connecting businesses with
          the perfect industrial spaces to thrive. With years of experience in
          the real estate industry, our team is dedicated to providing <br />
          <br />
          unparalleled service and expertise to our clients. Our mission is to
          streamline the process of finding and securing industrial estates,
          whether you're looking for a state-of-the-art factory, a spacious
          warehouse, or a cutting-edge production plant. We understand the
          unique needs of businesses in the industrial sector and work
          tirelessly to match them with the ideal properties. Driven by
          innovation and a commitment to excellence, we leverage the latest
          technology and industry insights to deliver personalized solutions
          <br />
          <br />

          tailored to your specific requirements. Whether you're expanding your
          operations, relocating your business, or starting a new venture,
          FactoryFusion is your trusted partner every step of the way. Partner
          with us and discover the perfect industrial estate to propel your
          business forward.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
