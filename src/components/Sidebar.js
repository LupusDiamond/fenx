import React, { useRef, createRef } from "react";
import {connect} from 'react-redux';
import "../assets/tailwind.css";
import { signOut, signIn } from "../actions";

import GoogleAuth from "./GoogleAuth";
import Cross from "../assets/svgs/Cross";

import {hideSidebar} from '../actions';
import SideBarLink from "./SideBarLink";


class SideBar extends React.Component {

  constructor() {
    super();
    this.ref = createRef();
  }

  onBodyClick = (event) => {
    if (this.ref.current !== null) {
      if (this.ref.current.contains(event.target)) {
        return;
      }
    } 
    this.props.hideSidebar();
  }

  componentWillMount() {
    document.body.addEventListener("click", this.onBodyClick);
  }

  componentDidMount() {
    this.auth = window.gapi.auth2.getAuthInstance();
    this.onAuthChange(this.auth.isSignedIn.get());
    this.auth.isSignedIn.listen(this.onAuthChange);
  }

  componentWillUnmount() {
    document.body.removeEventListener("click", this.onBodyClick);
  }

  onAuthChange = (isSignedIn) => {
    if (isSignedIn) {
      this.props.signIn(this.auth.currentUser.get().getId());
    } else {
      this.props.signOut();
    }
  };

  onSignInClick = () => {
    this.auth.signIn();
  };

  onSignOutClick = () => {
    this.auth.signOut();
  };

  render() {
      if (!this.props.showSidebar) return null;
      return (
        <div  className="fixed w-full top-0 right-0 h-screen transform transition-transform duration-300">
          <div className="fixed w-full h-full bg-black bg-opacity-50 z-10"></div>

          <div ref={this.ref} className="translate-x-full  fixed max-w-xs w-full top-0 right-0 h-screen bg-gray-900 p-8 z-20 flex flex-col justify-between items-center">
            <div className="relative w-full flex flex-col">
              <Cross />
              <img className="mt-24 w-32 h-32 bg-white rounded-full overflow-hidden mx-auto mb-4" src={this.props.profilePicture} />
              
              <p className="textbase md:text-xl text-white mx-auto mb-8 lg:mb-16">
                {this.props.username}
              </p>
              <div className="w-full grid grid-cols-1 gap-4 text-white text-left text-lg md:text-2xl font-semibold pl-1">
                <SideBarLink destination="/" text="Dashboard"/>
                <SideBarLink destination="/vaults" text="Vaults"/>
                <SideBarLink destination="/revenues" text="Revenues"/>
              </div>
            </div>

            <GoogleAuth
              signOutComponent={
                <p className="text-red-500 font-semibold text-base md:text-xl">
                  Log Out
                </p>
              }
            />
          </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isSignedIn: state.auth.isSignedIn,
    showSidebar: state.showSidebar,
    username: state.auth.username,
    profilePicture: state.auth.profilePicture
  };
}

export default connect(mapStateToProps, {
  signOut, signIn, hideSidebar
})(SideBar);
