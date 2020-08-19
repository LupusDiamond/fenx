import React, { Component } from 'react';
import {connect} from 'react-redux';
import {searchUnsplashImage, hideUnsplashModal, selectUnplashImage} from '../../actions'

class SelectImageModal extends Component {

    state = {
      searchTerm: ''
    }

    showModal = () => {
      if (this.props.showModal) return null;
      return "hidden";
    }

    onSelectImage = (url) => {
      this.props.selectUnplashImage(url);
      this.props.hideUnsplashModal();
    }

    renderImages = () => {
      return this.props.imageList.map(image => {
        return (
        <div key={image.id} onClick={() => this.onSelectImage(image.urls.small)} className="w-full relative overflow-hidden rounded-md shadow-md cursor-pointer" style={{paddingTop: '56.25%'}}>
          <img src={image.urls.small} alt="" className="absolute top-0 left-0 object-cover w-full h-full" />
        </div>
      )})
    }

    onSubmitClick = (e) => {
      this.props.searchUnsplashImage(this.state.searchTerm);
    }

    onBackClick = () => {
      this.props.hideUnsplashModal();
    }

    render() {
        return (
          <div className={`absolute w-full h-full bg-white p-6 flex flex-col md:flex-row ${this.showModal()}`}>
            {/* Search Bar */}
            <div className="w-full md:max-w-xs mb-4 md:mb-0">
              <button onClick={() => this.onBackClick()} className="flex items-center mb-2 text-gray-700 focus:outline-none focus:shadow-outline">
                <svg className="h-4 w-4 mr-1" width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 19L8 12L15 5" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span>Back</span>
              </button>
              <div className="w-full flex h-auto">
                <input autoComplete="off" onChange={(e) => this.setState({searchTerm: e.target.value})} type="text" className="flex-1 py-3 px-4 text-gray-900 bg-gray-300 focus:outline-none focus:shadow-outline rounded-tl-md rounded-bl-md" placeholder="Seach for Images..." />
                <div onClick={() => this.onSubmitClick()} className="w-12 h-12 bg-gray-900 relative flex-shrink-0 flex items-center justify-center rounded-tr-md rounded-br-md cursor-pointer">
                  <svg className="h-6 w-6 m-2" width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 21L15 15M17 10C17 10.9193 16.8189 11.8295 16.4672 12.6788C16.1154 13.5281 15.5998 14.2997 14.9497 14.9497C14.2997 15.5998 13.5281 16.1154 12.6788 16.4672C11.8295 16.8189 10.9193 17 10 17C9.08075 17 8.1705 16.8189 7.32122 16.4672C6.47194 16.1154 5.70026 15.5998 5.05025 14.9497C4.40024 14.2997 3.88463 13.5281 3.53284 12.6788C3.18106 11.8295 3 10.9193 3 10C3 8.14348 3.7375 6.36301 5.05025 5.05025C6.36301 3.7375 8.14348 3 10 3C11.8565 3 13.637 3.7375 14.9497 5.05025C16.2625 6.36301 17 8.14348 17 10Z" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>
            {/* Images */}
            <div className="w-full md:ml-6 flex flex-col md:grid grid-cols-2 gap-4 overflow-y-auto">
              {this.renderImages()}
            </div>
          </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {showModal: state.vaultsState.showUnsplashModal, imageList: state.vaultsState.images};
}

export default connect(mapStateToProps, {
  searchUnsplashImage, hideUnsplashModal, selectUnplashImage
})(SelectImageModal);