import React from "react";

function Feature() {
  return (
    <section className="rounded-tr-[3rem] rounded-bl-[3rem] bg-[#3a3b59] bg-[url('/images/bg-pattern-circles.svg')] bg-[center_top] bg-no-repeat py-16 text-gray-50 md:rounded-tr-[6rem] md:rounded-bl-[6rem] md:bg-[-20%_80%] md:py-32">
      <div className="container mx-auto px-4">
        <div className="relative flex flex-col md:flex-row md:items-center md:justify-end">
          <img
            src="/images/illustration-phones.svg"
            className="mx-auto w-1/2 max-w-xs md:absolute md:left-0 md:mx-0 md:max-w-none"
            alt="Phones Illustration"
          />
          <div className="mt-10 w-full md:mt-0 md:ml-auto md:w-1/2">
            <h3 className="mb-4 text-2xl md:text-4xl">
              State of the Art infrastructure
            </h3>
            <p className="text-base md:text-lg">
              With reliability and speed in mind, worldwide data centers provide
              the backbone for ultra-fast connectivity. This ensures your site
              will load instantly, no matter where your readers are, keeping
              your site competitive.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Feature;
