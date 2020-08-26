import React, { Component } from 'react';
import {connect} from 'react-redux';
import {hideCreateModal} from '../../actions';
import {createVault} from '../../features';
import {v4 as uuidv4} from 'uuid';

class InputFieldsModal extends Component {

    state = {
      label: '',
      amount: 0
    }

    showModal() {
      if (this.props.showModal) {
        return null;
      }
     // return "hidden";
    }

    onCancelClick = () => {
      this.props.hideCreateModal();
    }

    onSaveClick = () => {
      const information = {
        userId: this.props.userId,
        id: ++this.counter,
        label: this.state.label,
        amount: this.state.amount,
        imageUrl: this.props.imageUrl,
        vaultId: uuidv4()
      }
      this.props.createVault(information);
      this.props.hideCreateModal();
    }

    render() {
        return (
        <div className={`flex flex-col justify-between flex-1 pt-1 ${this.showModal()}`}>
          <div className="w-full mb-6">
            {/* Input Box*/}
            <div className="relative w-full mb-6">
              <label htmlFor="Liabilities" className="text-sm bg-white uppercase text-gray-900 px-2 ml-3 absolute top-0 left-0 transform -translate-y-1/2">Name</label>
              <input autoComplete="off" onChange={(e) => this.setState({label: e.target.value})} className="border-4 text-gray-900 border-gray-900 py-2 px-4 rounded-lg text-xl w-full focus:outline-none focus:shadow-outline" type="text" name="asset" id="asset" placeholder="Car, House etc" />
            </div>
            {/* Input Box*/}
            <div className="relative w-full">
              <label htmlFor="Liabilities" className="text-sm bg-white uppercase text-gray-900 px-2 ml-3 absolute top-0 left-0 transform -translate-y-1/2">Amount</label>
              <input autoComplete="off" onChange={(e) => this.setState({amount: parseInt(e.target.value)})} className="border-4 text-gray-900 border-gray-900 py-2 px-4 rounded-lg text-xl w-full focus:outline-none focus:shadow-outline" type="text" name="asset" id="asset" placeholder="$000" />
            </div>
          </div>
          {/* Buttons */}
          <div className="w-full grid grid-cols-1 gap-3 sm:flex">
            <button onClick={() => this.onSaveClick()} className="bg-gray-900 text-white text-base md:text-xl py-3 px-6 uppercase tracking-wider rounded-lg focus:outline-none focus:shadow-outline">
              Save
            </button>
            <button onClick={() => this.onCancelClick()} className="bg-gray-300 text-gray-700 text-base md:text-xl py-3 px-6 uppercase tracking-wider rounded-lg focus:outline-none focus:shadow-outline">
              Cancel
            </button>
          </div>
        </div>
        )
    }
}

const mapStateToProps = (state) => {
  return {showModal: state.vaultsState.showCreateModal, imageUrl: state.vaultsState.modalPreviewImage,
    userId: state.auth.userId
  };
}

export default connect(mapStateToProps, {
  hideCreateModal, createVault
})(InputFieldsModal);