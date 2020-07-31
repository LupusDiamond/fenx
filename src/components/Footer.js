import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-800">
      <div className="max-w-screen-xl w-full mx-auto">
        <div className="w-full lg:w-1/2 py-8 px-8 md:px-16lg:pl-8">
          <h3 className="text-base md:text-lg uppercase font-semibold tracking-wide text-gray-500 mb-4">
            Designed & Developed by
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8">
            <div className="flex flex-col">
              <h6 className="font-medium text-base md:text-lg tracking-wide">
                Tepes Alexandru
              </h6>
              <p className="text-xs md:text-sm text-gray-500">Eclipse#0956</p>
            </div>
            <div className="flex flex-col">
              <h6 className="font-medium text-base md:text-lg tracking-wide">
                Rishi
              </h6>
              <p className="text-xs md:text-sm text-gray-500">Rishi#6304</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
