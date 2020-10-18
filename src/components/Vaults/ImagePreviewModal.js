import React, { Component } from "react";
import { connect } from "react-redux";
import { showUnsplashModal, hideCreateModal } from "../../features";

class ImagePreviewModal extends Component {
  showModal() {
    if (this.props.showModal) return null;
    return "hidden";
  }

  onUnsplashClick = () => {
    this.props.showUnsplashModal();
    this.props.hideCreateModal();
  };

  render() {
    if (this.props.showModal === false) return null;

    return (
      <div className={`${this.showModal()}`}>
        {/* Image Box */}
        <div className="grid grid-cols-1">
          <div
            className="relative overflow-hidden rounded-lg shadow-md"
            style={{ paddingTop: "56.25%" }}
          >
            <div className="absolute w-full h-full top-0 left-0 bg-gray-300 flex items-center justify-center">
              <p className="text-gray-600 text-2xl font-bold">No Image</p>
            </div>
            {/* Remove Image tag completely, add it with src to show */}
            <img
              className="absolute top-0 left-0 object-cover h-full w-full flex-1 flex-shrink-0 rounded-lg"
              src={this.props.imageUrl}
              alt=""
            />
            <button
              onClick={() => this.onUnsplashClick()}
              className="absolute bottom-0 right-0 m-2 p-1 bg-white rounded-full shadow-base focus:outline-none focus:shadow-outline cursor-pointer"
            >
              <svg
                className="h-8 w-8"
                width={40}
                height={40}
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <rect width={40} height={40} rx={20} fill="url(#pattern0)" />
                <defs>
                  <pattern
                    id="pattern0"
                    patternContentUnits="objectBoundingBox"
                    width={1}
                    height={1}
                  >
                    <use xlinkHref="#image0" transform="scale(0.00390625)" />
                  </pattern>
                  <image
                    id="image0"
                    width={256}
                    height={256}
                    xlinkHref="data:image/png;base64,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"
                  />
                </defs>
              </svg>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    showModal: state.ui.showCreateModal,
    imageUrl: state.ui.selectedUnsplashImage,
  };
};

export default connect(mapStateToProps, {
  showUnsplashModal,
  hideCreateModal,
})(ImagePreviewModal);
