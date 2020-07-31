import React from "react";
import { BrowserRouter, Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import "./Landing.css";
import GoogleAuth from "./GoogleAuth";

const Landing = (props) => {
  if (props.isSignedIn) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <div className="relative w-full min-h-screen bg-gray-900 text-white flex flex-col justify-between">
      <main class="w-full max-w-screen-xl mx-auto mb-8 py-4 md:py-8">
        <div class="w-full lg:w-1/2">
          <a
            href="./index.html"
            class="w-full mb-4 lg:mb-16 inline-block px-8 md:px-16lg:pl-8"
          >
            <svg
              class="w-24"
              width="205"
              height="86"
              viewBox="0 0 205 86"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M33.336 28.176V41.808H54.968V48.848H33.336V66H25.016V21.2H57.72V28.176H33.336ZM96.1885 49.104C96.1885 49.6587 96.1458 50.448 96.0605 51.472H69.2445C69.7138 53.9893 70.9298 55.9947 72.8925 57.488C74.8978 58.9387 77.3725 59.664 80.3165 59.664C84.0712 59.664 87.1645 58.4267 89.5965 55.952L93.8845 60.88C92.3485 62.7147 90.4072 64.1013 88.0605 65.04C85.7138 65.9787 83.0685 66.448 80.1245 66.448C76.3698 66.448 73.0632 65.7013 70.2045 64.208C67.3458 62.7147 65.1272 60.6453 63.5485 58C62.0125 55.312 61.2445 52.2827 61.2445 48.912C61.2445 45.584 61.9912 42.5973 63.4845 39.952C65.0205 37.264 67.1325 35.1733 69.8205 33.68C72.5085 32.1867 75.5378 31.44 78.9085 31.44C82.2365 31.44 85.2018 32.1867 87.8045 33.68C90.4498 35.1307 92.4978 37.2 93.9485 39.888C95.4418 42.5333 96.1885 45.6053 96.1885 49.104ZM78.9085 37.84C76.3485 37.84 74.1725 38.608 72.3805 40.144C70.6312 41.6373 69.5645 43.6427 69.1805 46.16H88.5725C88.2312 43.6853 87.1858 41.68 85.4365 40.144C83.6872 38.608 81.5112 37.84 78.9085 37.84ZM123.265 31.44C127.574 31.44 131.03 32.6987 133.633 35.216C136.236 37.7333 137.537 41.4667 137.537 46.416V66H129.537V47.44C129.537 44.4533 128.833 42.2133 127.425 40.72C126.017 39.184 124.012 38.416 121.409 38.416C118.465 38.416 116.14 39.312 114.433 41.104C112.726 42.8533 111.873 45.392 111.873 48.72V66H103.873V31.824H111.489V36.24C112.812 34.6613 114.476 33.4667 116.481 32.656C118.486 31.8453 120.748 31.44 123.265 31.44Z"
                fill="currentColor"
              />
              <path
                d="M4 82H198.013L152.21 4H4V82Z"
                stroke="currentColor"
                stroke-width="8"
              />
              <path
                d="M184 21L192 21L165.999 66.0001L158.001 66.0001L184 21Z"
                fill="currentColor"
              />
            </svg>
          </a>

          <div class="side-image lg:absolute top-0 right-0 bg-white w-full lg:h-full lg:w-1/2 lg:min-h-screen h-64 mb-8 lg:mb-0"></div>

          <div class="w-full px-8 md:px-16lg:pl-8">
            <h1 class="text-3xl lg:text-5xl leading-snug md:leading-tight font-semibold mb-4">
              A Brand New way to <span class="italic">SEE</span> your money.
            </h1>
            <p class="text-gray-500 text-sm lg:text-lg font-normal max-w-md tracking-wide mb-8">
              See your monthly expenses, income and cashflow, all at one place.
            </p>

            <div class="w-full flex">
              <a
                href="#"
                class="flex items-center overflow-hidden rounded-md bg-white text-gray-900"
              >
                <p class="py-2 px-6 md:py-4 font-bold">
                  <GoogleAuth />
                </p>
                <div class="bg-gray-300 p-4 h-full flex items-center">
                  <svg
                    class="h-6 w-6 flex-shrink-0"
                    width="534"
                    height="545"
                    viewBox="0 0 534 545"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0)">
                      <path
                        d="M533.5 278.4C533.5 259.9 532 241.3 528.8 223.1H272.1V327.9H419.1C413 361.7 393.4 391.6 364.7 410.6V478.6H452.4C503.9 431.2 533.5 361.2 533.5 278.4Z"
                        fill="#4285F4"
                      />
                      <path
                        d="M272.1 544.3C345.5 544.3 407.4 520.2 452.5 478.6L364.8 410.6C340.4 427.2 308.9 436.6 272.2 436.6C201.2 436.6 141 388.7 119.4 324.3H28.8999V394.4C75.0999 486.3 169.2 544.3 272.1 544.3V544.3Z"
                        fill="#34A853"
                      />
                      <path
                        d="M119.3 324.3C107.9 290.5 107.9 253.9 119.3 220.1V150H28.9002C-9.6998 226.9 -9.6998 317.5 28.9002 394.4L119.3 324.3V324.3Z"
                        fill="#FBBC04"
                      />
                      <path
                        d="M272.1 107.7C310.9 107.1 348.4 121.7 376.5 148.5L454.2 70.7998C405 24.5998 339.7 -0.800215 272.1 -0.000214817C169.2 -0.000214817 75.0999 57.9998 28.8999 150L119.3 220.1C140.8 155.6 201.1 107.7 272.1 107.7V107.7Z"
                        fill="#EA4335"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0">
                        <rect width="533.5" height="544.3" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </div>
      </main>
      <footer class="w-full bg-gray-800">
        <div class="max-w-screen-xl w-full mx-auto">
          <div class="w-full lg:w-1/2 py-8 px-8 md:px-16lg:pl-8">
            <h3 class="text-base md:text-lg uppercase font-semibold tracking-wide text-gray-500 mb-4">
              Designed & Developed by
            </h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8">
              <div class="flex flex-col">
                <h6 class="font-medium text-base md:text-lg tracking-wide">
                  Tepes Alexandru
                </h6>
                <p class="text-xs md:text-sm text-gray-500">Eclipse#0956</p>
              </div>
              <div class="flex flex-col">
                <h6 class="font-medium text-base md:text-lg tracking-wide">
                  Rishi
                </h6>
                <p class="text-xs md:text-sm text-gray-500">Rishi#6304</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps)(Landing);
