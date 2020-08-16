import React from "react";
import "../assets/tailwind.css";

import { showSidebar } from "../actions";
import FenXLogo from "../assets/svgs/FenXLogo";

import { connect } from "react-redux";

class Header extends React.Component {
  render() {
    return (
      <header className="w-full bg-gray-900 shadow-lg">
        <div className="max-w-6xl w-full mx-auto px-6 flex justify-between items-center text-white">
          <FenXLogo />
          <svg
            onClick={() => {
              console.log(this.props);
              this.props.showSidebar();
            }}
            className="h-10 text-white cursor-pointer"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13 18H20M4 6H20H4ZM4 12H20H4Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </header>
    );
  }
}

export default connect(null, {
  showSidebar,
})(Header);
