import React from "react";
import GoogleIcon from "../assets/svgs/GoogleIcon";

const GoogleLoginButton = () => {
  return (
    <div className="w-full flex">
      <a
        href="#"
        className="flex items-center overflow-hidden rounded-md bg-white text-gray-900"
      >
        <p className="py-2 px-6 md:py-4 font-bold">Login with google</p>
        <div className="bg-gray-300 p-4 h-full flex items-center">
          <GoogleIcon />
        </div>
      </a>
    </div>
  );
};

export default GoogleLoginButton;
