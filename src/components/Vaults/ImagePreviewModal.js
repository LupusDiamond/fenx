import React, { Component } from 'react';
import {connect} from 'react-redux';
import {showUnsplashModal} from '../../actions';

class ImagePreviewModal extends Component {

    showModal() {
      if (this.props.showModal) return null;
      //return "hidden";
    }

    onUnsplashClick = () => {
      this.props.showUnsplashModal()
    }

    render() {
        return (
            <div className={`${this.showModal()}`}>
            {/* Image Box */}
          <div className="grid grid-cols-1 gap-3">
          {/* Image */}
          <div className="relative overflow-hidden rounded-lg shadow-md" style={{paddingTop: '56.25%'}}>
            <div className="absolute w-full h-full top-0 left-0 bg-gray-300 flex items-center justify-center">
              <p className="text-gray-600 text-2xl font-bold">No Image</p>
            </div>
            <img className="absolute top-0 left-0 object-cover h-full w-full flex-1 flex-shrink-0" src={this.props.imageUrl} alt="" />
            <div onClick={() => this.onUnsplashClick()} className="absolute bottom-0 right-0 m-2 p-1 bg-white rounded-full shadow-base cursor-pointer">
              <svg className="h-8 w-8" width={40} height={40} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                <rect width={40} height={40} rx={20} fill="url(#pattern0)" />
                <defs>
                  <pattern id="pattern0" patternContentUnits="objectBoundingBox" width={1} height={1}>
                    <use xlinkHref="#image0" transform="scale(0.00390625)" />
                  </pattern>
                  <image id="image0" width={256} height={256} xlinkHref="data:image/png;base64,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" />
                </defs>
              </svg>
            </div>
          </div>
          {/* Caption */}
          <p className="flex text-sm">
            <svg className="mr-2 w-5 h-5 text-gray-500" width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13 16H12V12H11M12 8H12.01M21 12C21 13.1819 20.7672 14.3522 20.3149 15.4442C19.8626 16.5361 19.1997 17.5282 18.364 18.364C17.5282 19.1997 16.5361 19.8626 15.4442 20.3149C14.3522 20.7672 13.1819 21 12 21C10.8181 21 9.64778 20.7672 8.55585 20.3149C7.46392 19.8626 6.47177 19.1997 5.63604 18.364C4.80031 17.5282 4.13738 16.5361 3.68508 15.4442C3.23279 14.3522 3 13.1819 3 12C3 9.61305 3.94821 7.32387 5.63604 5.63604C7.32387 3.94821 9.61305 3 12 3C14.3869 3 16.6761 3.94821 18.364 5.63604C20.0518 7.32387 21 9.61305 21 12Z" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="text-gray-600">Tap to choose an image from Unsplash.</span>
          </p>
        </div>
        </div>
        )
    }
}

const mapStateToProps = (state) => {
  return {showModal: state.vaultsState.showCreateModal, imageUrl: state.vaultsState.modalPreviewImage};
}

export default connect(mapStateToProps, {
  showUnsplashModal
})(ImagePreviewModal);