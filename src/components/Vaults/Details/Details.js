import React, { Component } from 'react'
import IdentitySVG from '../../../assets/svgs/IdentityCard';

import UnsplashSVG from '../../../assets/svgs/Unsplash';
import { connect } from 'react-redux';
import {updateVault} from '../../../actions';
import { showUnsplashModal, showCreateModal, hideCreateModal, hideUnsplashModal} from '../../../features';

class Details extends Component {

    state = {
      input: '',
      amount: '',
      imageURL: '',
    }

    componentDidUpdate(prevProps) {
      if (prevProps.label !== this.props.label) {
        this.setState({input: this.props.label});
      };
      if (prevProps.amount !== this.props.amount) {
        this.setState({amount: this.props.amount});
      }
      if (prevProps.imageURL !== this.props.imageURL && this.props.imageURL !== '') {
        this.setState({imageURL: this.props.imageURL});
      }
      if (prevProps.unsplashImage !== this.props.unsplashImage && this.props.unsplashImage !== '') {
        this.setState({imageURL: this.props.unsplashImage})
        this.props.hideCreateModal();
      }
    }

    onSaveChangesClick = () => {
      this.props.updateVault(this.props.userId, this.props.vaultId, this.state.input, parseInt(this.state.amount), this.state.imageURL);
      this.setState({
        input: '',
        amount: ''
      })
    }

    onUnsplashClick = () => {
      this.props.showUnsplashModal();
    }

    

    render() {
        return (
            <div className="md:col-span-2 bg-white rounded-lg shadow-lg p-6 grid grid-cols-1 md:grid-cols-2 gap-6 overflow-hidden">
        {/* Title */}
        <div className="md:col-span-2 flex justify-between items-start -mb-3">
          <div className="flex items-center">
            <IdentitySVG />
            <p className="text-gray-700 font-semibold md:text-xl uppercase tracking-wide">
              Edit Details
            </p>
          </div>
          {/* Icon */}
          <button className="rounded-full bg-red-200 p-2 flex focus:outline-none focus:shadow-outline">
            <svg
              className="h-5 w-5 text-red-800"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 11V17M14 11V17M4 7H20M19 7L18.133 19.142C18.0971 19.6466 17.8713 20.1188 17.5011 20.4636C17.1309 20.8083 16.6439 21 16.138 21H7.862C7.35614 21 6.86907 20.8083 6.49889 20.4636C6.1287 20.1188 5.90292 19.6466 5.867 19.142L5 7H19ZM15 7V4C15 3.73478 14.8946 3.48043 14.7071 3.29289C14.5196 3.10536 14.2652 3 14 3H10C9.73478 3 9.48043 3.10536 9.29289 3.29289C9.10536 3.48043 9 3.73478 9 4V7H15Z"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
        {/* Image Box */}
        <div className="grid grid-cols-1 gap-3">
          {/* Image */}
          <div
            className="relative overflow-hidden rounded-lg shadow-md"
            style={{ paddingTop: "56.25%" }}
          >
            <div className="absolute w-full h-full top-0 left-0 bg-gray-300 flex items-center justify-center">
              <p className="text-gray-500 text-2xl font-bold">No Image</p>
            </div>
            <img
              className="absolute top-0 left-0 object-cover h-full w-full flex-1 flex-shrink-0"
              src={this.state.imageURL}
              alt=""
            />
            <div onClick={() => this.onUnsplashClick()} className="absolute bottom-0 right-0 m-2 p-1 bg-white rounded-full shadow-base">
              <UnsplashSVG />
            </div>
          </div>
        </div>
        {/* Inputs & Buttons*/}
        <div className="flex flex-col justify-between flex-1">
          <div className="w-full mb-6">
            {/* Input Box*/}
            <label
              htmlFor="name"
              className="text-xs md:text-sm uppercase text-gray-700 mb-1 flex"
            >
              Label
            </label>
            <div className="w-full relative mb-3">
              <input
                className="border-2 text-gray-900 border-gray-400 bg-gray-200 py-2 pl-4 pr-12 rounded-lg md:text-lg w-full focus:outline-none focus:shadow-outline"
                type="text"
                name="name"
                id="name"
                placeholder={this.props.label}
                value={this.state.input}
                onChange={(e) => this.setState({input: e.target.value})}
                autoComplete="off"
              />
              <div className="w-12 h-full absolute top-0 right-0 flex justify-center items-center rounded-lg">
                <button className="p-2 focus:outline-none focus:shadow-outline rounded-lg">
                  <svg
                    className="w-6 h-6 text-gray-700"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 3.99999V8.99999H4.582M4.582 8.99999C5.24585 7.35812 6.43568 5.9829 7.96503 5.08985C9.49438 4.1968 11.2768 3.8364 13.033 4.06513C14.7891 4.29386 16.4198 5.09878 17.6694 6.35377C18.919 7.60875 19.7168 9.24285 19.938 11M4.582 8.99999H9M20 20V15H19.419M19.419 15C18.7542 16.6409 17.564 18.015 16.0348 18.9073C14.5056 19.7995 12.7237 20.1595 10.9681 19.9309C9.21246 19.7022 7.5822 18.8979 6.33253 17.6437C5.08287 16.3896 4.28435 14.7564 4.062 13M19.419 15H15"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
            {/* Input Box*/}
            <label
              htmlFor="Amount"
              className="text-xs md:text-sm uppercase text-gray-700 mb-1 flex"
            >
              Amount
            </label>
            <div className="relative w-full">
              <input
                className="border-2 text-gray-900 border-gray-400 bg-gray-200 py-2 px-4 rounded-lg md:text-lg w-full focus:outline-none focus:shadow-outline"
                type="text"
                name="Amount"
                id="Amount"
                placeholder={this.props.amount}
                value={this.state.amount}
                onChange={(e) => this.setState({amount: e.target.value})}
                autoComplete="off"
              />
              <div className="w-12 h-full absolute top-0 right-0 flex justify-center items-center rounded-lg">
                <button className="p-2 focus:outline-none focus:shadow-outline rounded-lg">
                  <svg
                    className="w-6 h-6 text-gray-700"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 3.99999V8.99999H4.582M4.582 8.99999C5.24585 7.35812 6.43568 5.9829 7.96503 5.08985C9.49438 4.1968 11.2768 3.8364 13.033 4.06513C14.7891 4.29386 16.4198 5.09878 17.6694 6.35377C18.919 7.60875 19.7168 9.24285 19.938 11M4.582 8.99999H9M20 20V15H19.419M19.419 15C18.7542 16.6409 17.564 18.015 16.0348 18.9073C14.5056 19.7995 12.7237 20.1595 10.9681 19.9309C9.21246 19.7022 7.5822 18.8979 6.33253 17.6437C5.08287 16.3896 4.28435 14.7564 4.062 13M19.419 15H15"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          {/* Buttons */}
          <div className="w-full grid sm:flex">
            <button onClick={() => this.onSaveChangesClick()} className="text-gray-900 text-base font-semibold py-2 px-6 uppercase tracking-wider rounded-lg focus:outline-none focus:shadow-outline border-2 border-gray-900">
              Save Changes
            </button>
          </div>
        </div>
        
      </div>
        )
    }
}

const mapStateToProps = (state) => {
  console.log("map state!")
  return {
    userId: state.auth.userId,
    vaultId: state.vaultDetails.vaultId,
    imageURL: state.vaultDetails.imageURL,
    label: state.vaultDetails.label,
    amount: state.vaultDetails.totalAmount,
    showUnsplashModal: state.vaultsState.showUnsplashModal,
    unsplashImage: state.vaultsState.modalPreviewImage
  }
}

export default connect(mapStateToProps, {
  updateVault, showUnsplashModal, showCreateModal, hideUnsplashModal, hideCreateModal
})(Details);