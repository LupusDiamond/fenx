import React from "react";
import { BrowserRouter, Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import "./Landing.css";
import GoogleAuth from "./GoogleAuth";
import GoogleIcon from '../assets/svgs/GoogleIcon';
import FenXLogo from "../assets/svgs/FenXLogo";
import Footer from "./Footer";
import GoogleLoginButton from "./GoogleLoginButton";

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
            <FenXLogo />
          </a>

          <div class="side-image lg:absolute top-0 right-0 bg-white w-full lg:h-full lg:w-1/2 lg:min-h-screen h-64 mb-8 lg:mb-0"></div>

          <div class="w-full px-8 md:px-16lg:pl-8">
            <h1 class="text-3xl lg:text-5xl leading-snug md:leading-tight font-semibold mb-4">
              A Brand New way to <span class="italic">SEE</span> your money.
            </h1>
            <p class="text-gray-500 text-sm lg:text-lg font-normal max-w-md tracking-wide mb-8">
              See your monthly expenses, income and cashflow, all at one place.
            </p>
            <GoogleAuth signInComponent={<GoogleLoginButton />}/>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps)(Landing);
