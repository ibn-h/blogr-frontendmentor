import React from "react";

function About() {
  return (
    <section className="pt-16 pb-24 md:pt-24 md:pb-52">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:gap-4">
          <h2 className="mx-auto mb-10 text-center text-3xl font-medium text-blue-900 md:mb-20 md:text-left md:text-5xl">
            Designed for the future
          </h2>

          <div className="relative w-full md:w-1/2">
            <div className="flex flex-col justify-center">
              <div className="mb-10 md:mb-20">
                <h4 className="mb-4 text-xl font-semibold text-blue-900 md:mb-6 md:text-2xl">
                  Introducing an extensible editor
                </h4>

                <p className="text-base font-light text-gray-600 md:text-lg">
                  Blogr features an exceedingly intuitive interface which lets
                  you focus on one thing: creating content. The editor supports
                  management of multiple blogs and allows easy manipulation of
                  embeds such as images, videos, and Markdown. Extensibility
                  with plugins and themes provide easy ways to add functionality
                  or change the looks of a blog.
                </p>
              </div>
              <div>
                <h4 className="mb-4 text-xl font-semibold text-blue-900 md:mb-6 md:text-2xl">
                  Robust content management
                </h4>
                <p className="text-base font-light text-gray-600 md:text-lg">
                  Flexible content management enables users to easily move
                  through posts. Increase the usability of your blog by adding
                  customized categories, sections, format, or flow. With this
                  functionality, you’re in full control.
                </p>
              </div>
            </div>

            <img
              className="absolute top-[-50%] left-[152%] hidden w-[500px] max-w-none md:block"
              src="src/assets/illustration-editor-desktop.svg"
              alt="Editor Illustration"
            />
            <img
              className="mt-10 block w-full md:hidden"
              src="src/assets/illustration-editor-desktop.svg"
              alt="Editor Illustration"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
