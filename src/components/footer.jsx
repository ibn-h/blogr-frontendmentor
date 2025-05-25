import React from "react";

function Footer() {
  return (
    <footer className="rounded-tr-[3rem] bg-gray-900 py-10 text-gray-50 md:rounded-tr-[6rem] md:py-16">
      <div className="container mx-auto flex flex-col items-center justify-start px-4 text-center md:flex-row md:items-start lg:text-left xl:justify-center">
        <a
          href="/"
          className="mb-8 text-3xl font-bold md:mr-24 md:mb-0 md:text-4xl"
        >
          Blogr
        </a>

        <div className="mb-8 md:mr-24 md:mb-0">
          <h6 className="mb-3 md:mb-5">Product</h6>
          <div className="flex flex-col gap-2 text-base text-gray-300">
            <a href="" className="w-full hover:underline">
              Overview
            </a>
            <a href="" className="w-full hover:underline">
              Pricing
            </a>
            <a href="" className="w-full hover:underline">
              Marketplaces
            </a>
            <a href="" className="w-full hover:underline">
              Features
            </a>
            <a href="" className="w-full hover:underline">
              Integrations
            </a>
          </div>
        </div>

        <div className="mb-8 md:mr-24 md:mb-0">
          <h6 className="mb-3 md:mb-5">Company</h6>
          <div className="flex flex-col gap-2 text-base text-gray-300">
            <a href="" className="w-full hover:underline">
              About
            </a>
            <a href="" className="hover:underlin w-full">
              Team
            </a>
            <a href="" className="w-full hover:underline">
              Blog
            </a>
            <a href="" className="w-full hover:underline">
              Careers
            </a>
          </div>
        </div>

        <div>
          <h6 className="mb-3 md:mb-5">Connect</h6>
          <div className="flex flex-col gap-2 text-base text-gray-300">
            <a href="" className="w-full hover:underline">
              Contact
            </a>
            <a href="" className="w-full hover:underline">
              Newletter
            </a>
            <a href="" className="w-full hover:underline">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
