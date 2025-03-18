import React from "react";
import coffeeImage from "../../../public/Images/coffee_image.png";

const Hero = () => {
  return (
    <div
      className="relative flex h-screen w-full  bg-cover bg-center justify-start items-center"
      style={{ backgroundImage: `url(${coffeeImage})` }}
    >
     

      {/* Text Content */}
      <div className="flex flex-col justify-center gap-y-3 items-start p-10 text-white">
        <h1 className=" ">
          We’ve Got Your Morning Covered with
        </h1>
        <span className="text-yellow-400 text-9xl ben-font">Coffee</span>
        <p className="">
          It is best to start your day with a cup of coffee. Discover the best flavors coffee 
          you will ever have. We provide the best for our customers.
        </p>
        <button className="">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Hero;
