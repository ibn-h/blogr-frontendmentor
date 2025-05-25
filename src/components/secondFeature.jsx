import React from "react";

function SecondFeature() {
  return (
    <section className="py-16 md:py-80">
      <div className="relative container mx-auto flex flex-col items-center px-4 md:flex-row md:justify-end">
        <div className="w-full md:w-1/2">
          <div className="mb-8 md:mb-15">
            <h3 className="mb-2 text-xl text-blue-900 md:mb-4 md:text-3xl">
              Free, open, simple
            </h3>
            <p className="text-base text-gray-600 md:text-lg">
              Blogr is a free and open-source application backed by a large
              community of helpful developers. It supports features such as code
              syntax highlighting, RSS feeds, social media integration,
              third-party commenting tools, and works seamlessly with Google
              Analytics. The architecture is clean and relatively easy to learn.
            </p>
          </div>
          <div>
            <h3 className="mb-2 text-xl text-blue-900 md:mb-4 md:text-3xl">
              Powerful tooling
            </h3>
            <p className="text-base text-gray-600 md:text-lg">
              Batteries included. We built a simple and straightforward CLI tool
              that makes customization and deployment a breeze, but it's capable
              of producing even the most complicated sites.
            </p>
          </div>
        </div>

        <img
          src="src/assets/illustration-laptop-desktop.svg"
          className="right-0 left-0 mt-10 w-full max-w-xs md:absolute md:left-[-40%] md:mt-0 md:w-[80%] md:max-w-none lg:w-auto xl:left-[-31%]"
          alt="Laptop Illustration"
        />
      </div>
    </section>
  );
}

export default SecondFeature;
