/* eslint-disable react/no-unescaped-entities */
import React from "react";

const Hero = () => {
  return (
    <div>
      <div className="hero min-h- h-5/6 bg-sky-200">
        <div className="hero-content flex-col lg:flex-row-reverse px-4 md:px-16 lg:px-20">
          <div className="my-10 ">
            <img
              src="https://img.freepik.com/free-photo/red-shoe-man_74190-3939.jpg?w=740&t=st=1689474790~exp=1689475390~hmac=fba181e789f4f91fbfa7e6d912ae39c3df138f2213827e9a5c496b187a6ce0ea"
              className="max-w-sm rounded-lg shadow-2xl w-full"
            />
          </div>
          <div className="flex flex-col items-start text-start">
            <h1 className="text-5xl font-bold">
              "New Shoes <span className="bg-yellow-400	">Collection!"</span>
            </h1>
            <p className="py-6 w-5/6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn bg-black text-white hover:text-black hover:bg-white duration-500">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
