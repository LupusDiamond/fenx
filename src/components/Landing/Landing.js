import React from "react";
import { BrowserRouter, Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import "./Landing.css";
import GoogleAuth from "./GoogleAuth";
import FenXLogo from "../../assets/svgs/FenXLogo";
import Footer from "./Footer";
import GoogleLoginButton from "./GoogleLoginButton";
import {hideSidebar} from '../../actions';

const Landing = (props) => {
  props.hideSidebar();
  if (props.isSignedIn) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <div className="relative w-full min-h-screen bg-gray-900 text-white flex flex-col justify-between">
      <main className="w-full max-w-screen-xl mx-auto mb-8 py-4 md:py-8">
        <div className="w-full lg:w-1/2">
          <a
            href="./index.html"
            className="w-full mb-4 lg:mb-16 inline-block px-8 md:px-16lg:pl-8"
          >
            <FenXLogo />
          </a>

          <div className="side-image lg:absolute top-0 right-0 bg-white w-full lg:h-full lg:w-1/2 lg:min-h-screen h-64 mb-8 lg:mb-0"></div>

          <div className="w-full px-8 md:px-16lg:pl-8">
            <h1 className="text-3xl lg:text-5xl leading-snug md:leading-tight font-semibold mb-4">
              A brand new way to <span className="italic">SEE</span> your money.
            </h1>
            <p className="text-gray-500 text-sm lg:text-lg font-normal max-w-md tracking-wide mb-8">
              See your monthly expenses, income and cashflow, all at one place.
            </p>
            <GoogleAuth signInComponent={<GoogleLoginButton />} />
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

export default connect(mapStateToProps, {
  hideSidebar
})(Landing);
