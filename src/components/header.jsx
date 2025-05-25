import React, { useState } from "react";

function Header() {
  const [hoveringDropdown, setHoveringDropdown] = useState(false);
  const dropDown = React.useRef(null);
  const connectLink = React.useRef(null);

  const hoveringDropdownRef = React.useRef(hoveringDropdown);

  const activateUnderline = (e) => {
    const link = e.target.closest("a");
    link.querySelector("span").classList.add("underline");
  };

  const disableUnderline = (e) => {
    const link = e.target.closest("a");
    link.querySelector("span").classList.remove("underline");
  };

  const enableDropdown = () => {
    dropDown.current.classList.remove("hidden");
  };

  const disableDropdown = () => {
    dropDown.current.classList.add("hidden");
  };

  const disableConnectUnderline = () => {
    connectLink.current.querySelector("span").classList.remove("underline");
  };

  React.useEffect(() => {
    hoveringDropdownRef.current = hoveringDropdown;
  }, [hoveringDropdown]);

  React.useEffect(() => {
    if (hoveringDropdown === false) {
      setTimeout(() => {
        if (hoveringDropdownRef.current === false) {
          disableDropdown();
          disableConnectUnderline();
        }
      }, 110);
    }
  }, [hoveringDropdown]);

  return (
    <header>
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-between gap-6 py-8 md:flex-row md:gap-0 md:py-16">
          <div className="flex w-full flex-col items-center gap-8 md:w-auto md:flex-row md:gap-18">
            <a
              href="/"
              className="text-3xl font-bold text-gray-50 md:text-[2.5rem]"
            >
              Blogr
            </a>

            <nav className="flex flex-col items-center space-y-2 text-gray-200 md:flex-row md:space-y-0 md:space-x-8">
              <a
                onMouseLeave={disableUnderline}
                href=""
                className="flex items-center gap-1 font-bold hover:text-white"
              >
                <span className="hover:underline">Product</span>{" "}
                <i
                  className="fa-solid fa-angle-down"
                  onMouseEnter={activateUnderline}
                ></i>
              </a>
              <a
                onMouseLeave={disableUnderline}
                href=""
                className="flex items-center gap-1 font-bold hover:text-white"
              >
                <span className="hover:underline">Company</span>{" "}
                <i
                  className="fa-solid fa-angle-down"
                  onMouseEnter={activateUnderline}
                ></i>
              </a>
              <div
                className="relative flex w-full flex-col items-center md:w-auto"
                onMouseEnter={() => {
                  setHoveringDropdown(true);
                  enableDropdown();
                }}
                onMouseLeave={() => {
                  setHoveringDropdown(false);
                }}
              >
                <a
                  onMouseLeave={disableUnderline}
                  ref={connectLink}
                  className="flex cursor-pointer items-center gap-1 font-bold hover:text-white"
                >
                  <span className="hover:underline">Connect</span>{" "}
                  <i
                    className="fa-solid fa-angle-down"
                    onMouseEnter={activateUnderline}
                  ></i>
                </a>

                <div
                  ref={dropDown}
                  className="mt-2 flex hidden w-full flex-col gap-3 rounded-[4px] bg-gray-100 p-6 text-gray-900 shadow-lg md:absolute md:top-full md:left-0 md:z-10 md:w-[10rem]"
                >
                  <a
                    href=""
                    className="w-fit hover:font-bold hover:text-blue-900"
                  >
                    Contact
                  </a>
                  <a
                    href=""
                    className="w-fit hover:font-bold hover:text-blue-900"
                  >
                    Newsletter
                  </a>
                  <a
                    href=""
                    className="w-fit hover:font-bold hover:text-blue-900"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </nav>
          </div>

          <div className="flex w-full items-center justify-center space-x-2 text-center md:w-auto md:justify-end md:space-x-4">
            <button className="cursor-pointer px-6 py-2 font-bold text-gray-200 md:px-8 md:py-3">
              Login
            </button>
            <button className="cursor-pointer rounded-4xl bg-white px-7 py-2 text-center font-bold text-red-500 hover:bg-red-400 hover:text-gray-50 md:px-9 md:py-3">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
