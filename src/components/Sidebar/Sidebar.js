import React, { createRef } from "react";
import {connect} from 'react-redux';
import "../../assets/tailwind.css";
import { signOut, signIn } from "../../actions";
import GoogleAuth from "../Landing/GoogleAuth";
import Cross from "../../assets/svgs/Cross";
import SideBarLink from "./SideBarLink";
import {hideSidebar} from '../../features';


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

  componentDidMount() {
    document.body.addEventListener("click", this.onBodyClick);
  }


  componentWillUnmount() {
    document.body.removeEventListener("click", this.onBodyClick);
  }

  onSignOutClick = () => {
    window.gapi.auth2.getAuthInstance().signOut();
  };

  sideBarValue = () => {
    if (this.props.showSidebar) return "translate-x-0";
    return "translate-x-full";
  }

  renderBackground = () => {
    if (this.props.showSidebar) return null;
    return {
      pointerEvents: "none"
    };
  }

  backgroundOpacity = () => {
    if (this.props.showSidebar) return "bg-opacity-50";
    return "bg-opacity-0";
  }

  render() {
      return (
        <div  className={`fixed w-full top-0 right-0 h-screen transform transition-transform duration-300`} style={this.renderBackground()}>
          <div className={`fixed w-full h-full bg-black ${this.backgroundOpacity()} z-10`} style={{transitionDuration: "0.3s"}}></div>

          <div ref={this.ref} className={`${this.sideBarValue()} transform transition-transform duration-300 fixed max-w-xs w-full top-0 right-0 h-screen bg-gray-900 p-8 z-20 flex flex-col justify-between items-center`}>
            <div className="relative w-full flex flex-col">
              <Cross />
              <img alt="profilepicture" className="mt-24 w-32 h-32 bg-white rounded-full overflow-hidden mx-auto mb-4" src={this.props.profilePicture} />
              
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
                <p className="text-red-500 font-semibold text-base md:text-xl cursor-pointer">
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
    username: state.auth.username,
    profilePicture: state.auth.profilePicture,
    showSidebar: state.sidebar
  };
}

export default connect(mapStateToProps, {
  signOut, signIn, hideSidebar
})(SideBar);
