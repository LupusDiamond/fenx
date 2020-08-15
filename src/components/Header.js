import React from "react";
import "../assets/tailwind.css";

import {showSidebar} from '../actions';

import {connect} from 'react-redux';

class Header extends React.Component {
  render() {
    return (
      <header className="w-full bg-gray-900 shadow-lg">
        <div className="max-w-6xl w-full mx-auto px-6 py-3 flex justify-between items-center">
          <div className="logo flex flex-col">
            <p className="text-4xl text-white -ml-px">FenX</p>
            <p className="text-xs uppercase text-gray-200 -mt-1 mb-2 tracking-wider">
              The Financial Manager
            </p>
          </div>
            <svg onClick={() => {
              console.log(this.props);
              this.props.showSidebar()
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
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
        </div>
      </header>
    );
  }
}

export default connect(null, {
  showSidebar
})(Header);
