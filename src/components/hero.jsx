import React from "react";

function Hero() {
  return (
    <section>
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center pt-10 pb-16 text-center md:pt-16 md:pb-32">
          <h1 className="text-3xl font-medium md:text-5xl">
            A modern publishing platform
          </h1>
          <p className="mt-4 mb-8 text-lg font-light text-gray-200 md:mt-5 md:mb-10 md:text-xl">
            Grow your audience and build your online brand
          </p>

          <div className="flex flex-col items-center gap-3 font-semibold md:flex-row md:gap-4">
            <button className="hover:bg-red w-full cursor-pointer rounded-[60px] bg-white px-5 py-3 text-red-500 hover:bg-red-400 hover:text-gray-50 md:w-auto">
              Start for Free
            </button>
            <button className="mt-2 w-full cursor-pointer rounded-[60px] border-1 border-white px-5 py-3 hover:bg-white hover:text-red-500 md:mt-0 md:w-auto">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
