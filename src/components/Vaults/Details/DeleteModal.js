import React, { Component } from "react";
import {connect} from 'react-redux'
import {Link} from 'react-router-dom';
import {hideDeleteModal, deleteVault} from '../../../features';

class DeleteModal extends Component {

    onDeleteClick = () => {
      const information = {
        vaultId: this.props.vaultId,
        userId: this.props.userId
      }
      this.props.deleteVault(information);
    }

    onCancelClick = () => {
        this.props.hideDeleteModal();
    }

  render() {

    if (this.props.showDeleteModal === false) return null;

    return (
      <div className="max-w-lg w-full mx-auto bg-white rounded-lg shadow-xl p-6 md:px-8 flex flex-col md:flex-row flex-shrink-0 relative overflow-hidden items-center md:items-start">
        {/* Icon */}
        <div className="p-4 md:p-3 mb-6 md:mr-6 md:ml-0 md:mb-0 rounded-full border-2 border-red-300 bg-red-200">
          <svg
            className="h-10 w-10 md:h-6 md:w-6 flex-shrink-0 text-red-800"
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
        </div>
        <div className="flex flex-col text-center md:text-left">
          {/* Text */}
          <h3 className="text-xl font-semibold mb-1">Delete Vault</h3>
          <p className="text-gray-700 leading-snug mb-6">
            All of the data and progress will be deleted. Do you wish to
            continue?
          </p>
          {/* Buttons */}
          <div className="flex flex-col md:flex-row">
            <Link to="/vaults">
            <button onClick={() => this.onDeleteClick()} className="w-full md:w-auto text-base text-white bg-red-700 hover:bg-red-600 py-2 px-6 rounded-md mb-3 md:mb-0 md:mr-3 focus:outline-none focus:shadow-outline">
              Delete
            </button>
            </Link>
            <button onClick={() => this.onCancelClick()} className="w-full md:w-auto text-base text-gray-700 bg-gray-300 hover:bg-gray-200 py-2 px-6 rounded-md mb-3 md:mb-0 md:mr-3 focus:outline-none focus:shadow-outline">
              Cancel
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return {
      showDeleteModal: state.ui.showDeleteModal,
      vaultId: state.vault.vaultId,
      userId: state.user.userId
    }
}

export default connect(mapStateToProps, {
    hideDeleteModal, deleteVault
})(DeleteModal);