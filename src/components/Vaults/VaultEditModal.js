import React from 'react'
import {connect} from 'react-redux';
import {hideCreateModal} from '../../actions/vaults/modals';

class VaultEditModal extends React.Component {
    onCancelClick = () => {
      this.props.hideCreateModal();
    }
    render() {
        return (
          <div class="fixed top-0 left-0 w-full h-screen bg-black bg-opacity-25 flex justify-center items-end md:items-center p-6">
            <div className="max-w-4xl w-full mx-auto bg-white rounded-lg shadow-xl p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-6 flex-shrink-0">
            {/* Image Box */}
            <div
              className="relative overflow-hidden rounded-lg shadow-md"
              style={{ paddingTop: "56.25%" }}
            >
              <div className="absolute w-full h-full top-0 left-0 bg-gray-300 flex items-center justify-center">
                <p className="text-gray-600 text-2xl font-bold">No Image</p>
              </div>
              <img
                className="absolute top-0 left-0 object-cover h-full w-full flex-1 flex-shrink-0"
                src
                alt
              />
              <div className="absolute bottom-0 right-0 m-2 p-2 bg-white rounded-full shadow-md">
                <img className="h-6 w-6" src={require("../../assets/svgs/Pencil.svg")} alt="edit" />
              </div>
            </div>
            <div className="flex flex-col justify-between flex-1 pt-1">
              <div className="w-full mb-6">
                {/* Input Box*/}
                <div className="relative w-full mb-6">
                  <label
                    htmlFor="Liabilities"
                    className="text-sm bg-white uppercase text-gray-900 px-2 ml-3 absolute top-0 left-0 transform -translate-y-1/2"
                  >
                    Name
                  </label>
                  <input
                    className="border-4 text-gray-900 border-gray-900 py-2 px-4 rounded-lg text-xl w-full focus:outline-none focus:shadow-outline"
                    type="text"
                    name="asset"
                    id="asset"
                    placeholder="Car, House etc"
                    autoComplete="off"
                  />
                </div>
                {/* Input Box*/}
                <div className="relative w-full">
                  <label
                    htmlFor="Liabilities"
                    className="text-sm bg-white uppercase text-gray-900 px-2 ml-3 absolute top-0 left-0 transform -translate-y-1/2"
                  >
                    Amount
                  </label>
                  <input
                    className="border-4 text-gray-900 border-gray-900 py-2 px-4 rounded-lg text-xl w-full focus:outline-none focus:shadow-outline"
                    type="text"
                    name="asset"
                    id="asset"
                    placeholder="$000"
                    autoComplete="off"
                  />
                </div>
              </div>
              {/* Buttons */}
              <div className="w-full grid grid-cols-1 gap-3 sm:flex">
                <button className="bg-gray-900 text-white text-base md:text-xl py-2 px-6 rounded-lg focus:outline-none focus:shadow-outline">
                  Save
                </button>
                <button 
                onClick={() => this.onCancelClick()}
                className="bg-gray-300 text-gray-700 text-base md:text-xl py-2 px-6 rounded-lg focus:outline-none focus:shadow-outline">
                  Cancel
                </button>
              </div>
            </div>
          </div>
          </div>
    )
    }
    
}

export default connect(null, {
  hideCreateModal
})(VaultEditModal);