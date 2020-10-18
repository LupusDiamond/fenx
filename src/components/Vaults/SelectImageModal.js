import React, { Component } from "react";
import { connect } from "react-redux";
import {
  hideUnsplashModal,
  searchUnsplash,
  selectUnplashImage,
  showCreateModal
} from "../../features";

class SelectImageModal extends Component {
  state = {
    searchTerm: "",
    showPlaceholder: true,
  };

  showModal = () => {
    if (this.props.showModal) return null;
    return "hidden";
  };

  onSelectImage = (url) => {
    this.props.selectUnplashImage(url);
    this.props.hideUnsplashModal();
    this.props.showCreateModal();
  };

  renderImages = () => {
    return this.props.imageList.map((image) => {
      return (
        <div
          key={image.id}
          onClick={() => this.onSelectImage(image.urls.small)}
          className="relative overflow-hidden rounded-lg shadow-md cursor-pointer"
          style={{ paddingTop: "56.25%" }}
        >
          <img
            className="absolute top-0 left-0 object-cover object-center h-full w-full flex-1 flex-shrink-0 rounded-lg"
            src={image.urls.small}
            alt=""
          />
        </div>
      );
    });
  };

  onSubmitClick = (e) => {
    this.setState({ showPlaceholder: false });
    this.props.searchUnsplash(this.state.searchTerm);
  };

  onBackClick = () => {
    this.props.hideUnsplashModal();
  };

  renderPlaceholder = () => {
    if (this.state.showPlaceholder === false) return;
    console.log("hello");
    return (
      <img
        className="w-full h-full"
        style={{ maxHeight: "50vh" }}
        src={require("../../assets/svgs/UnsplashPlaceholder.svg")}
        alt=""
      />
    );
  };

  render() {
    if (this.props.showModal === false) return null;

    return (
      <div className="max-w-4xl w-full mx-auto bg-white rounded-lg shadow-xl p-6 md:p-8 flex flex-col overflow-hidden">
        {/* Header */}
        <div className="flex justify-between items-baseline mb-6">
          <div className="flex items-baseline">
            <button
              onClick={() => this.onBackClick()}
              className="p-1 mr-3 rounded-full border-2 hover:bg-gray-300 border-gray-300 focus:outline-none focus:shadow-outline"
            >
              <svg
                className="h-3 w-3 md:h-4 md:w-4 text-gray-700"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 19L3 12M3 12L10 5M3 12H21"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <h1 className="text-gray-900 uppercase font-semibold text-xl md:text-2xl tracking-wide">
              Unsplash Search
            </h1>
          </div>
        </div>
        <form className="w-full flex mb-6">
          <input
            onChange={(e) => this.setState({ searchTerm: e.target.value })}
            type="text"
            className="flex-1 py-2 px-4 text-gray-900 bg-gray-200 border-2 border-gray-300 focus:outline-none focus:shadow-outline rounded-tl-md rounded-bl-md"
            placeholder="Seach for Images..."
          />
          <div className="w-12 h-12 bg-gray-900 relative flex-shrink-0 flex items-center justify-center rounded-tr-md rounded-br-md">
            <svg
              className="h-6 w-6 m-2"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21 21L15 15M17 10C17 10.9193 16.8189 11.8295 16.4672 12.6788C16.1154 13.5281 15.5998 14.2997 14.9497 14.9497C14.2997 15.5998 13.5281 16.1154 12.6788 16.4672C11.8295 16.8189 10.9193 17 10 17C9.08075 17 8.1705 16.8189 7.32122 16.4672C6.47194 16.1154 5.70026 15.5998 5.05025 14.9497C4.40024 14.2997 3.88463 13.5281 3.53284 12.6788C3.18106 11.8295 3 10.9193 3 10C3 8.14348 3.7375 6.36301 5.05025 5.05025C6.36301 3.7375 8.14348 3 10 3C11.8565 3 13.637 3.7375 14.9497 5.05025C16.2625 6.36301 17 8.14348 17 10Z"
                stroke="white"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <input
              onClick={() => this.onSubmitClick()}
              type="button"
              className="w-full h-full absolute top-0 left-0 bg-gray-900 bg-opacity-0 focus:outline-none focus:shadow-outline rounded-r-md cursor-pointer"
            />
          </div>
        </form>
        {/* Placeholder SVG */}
        {this.renderPlaceholder()}

        {/* Images */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full h-full overflow-auto"
          style={{ maxHeight: "50vh" }}
        >
          {this.renderImages()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    showModal: state.ui.showUnsplashModal,
    imageList: state.ui.unsplashImages,
  };
};

export default connect(mapStateToProps, {
  searchUnsplash,
  hideUnsplashModal,
  selectUnplashImage,
  showCreateModal
})(SelectImageModal);
