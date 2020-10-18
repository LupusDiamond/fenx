import React, { Component } from "react";
import { connect } from "react-redux";
import { hideCreateModal } from "../../features";
import { createVault } from "../../features";
import { v4 as uuidv4 } from "uuid";

class InputFieldsModal extends Component {
  state = {
    label: "",
    amount: 0,
  };

  showModal() {
    if (this.props.showModal) {
      return null;
    }
    return "hidden";
  }

  onCancelClick = () => {
    this.props.hideCreateModal();
  };

  onSaveClick = () => {
    this.counter++;
    let vaultId = uuidv4();
    const information = {
      userId: this.props.userId,
      id: this.counter,
      label: this.state.label,
      amount: this.state.amount,
      imageUrl: this.props.imageUrl,
      vaultId: vaultId,
    };
    this.props.createVault(information);
    this.props.hideCreateModal();
  };

  render() {
    return (
      <div
        className={`flex flex-col justify-between flex-1 ${this.showModal()}`}
      >
        <div className="w-full mb-6">
          {/* Input*/}
          <label
            htmlFor="name"
            className="text-xs md:text-sm uppercase text-gray-700 mb-1 flex"
          >
            Name
          </label>
          <div className="w-full relative mb-3">
            <input
              className="border-2 text-gray-900 border-gray-300 bg-gray-200 py-2 pl-4 pr-12 rounded-lg md:text-lg w-full focus:outline-none focus:shadow-outline"
              type="text"
              name="name"
              id="name"
              placeholder="Car, House etc"
              autoComplete="off"
              onChange={e => this.setState({label: e.target.value})}
              value={this.state.label}
            />
          </div>
          {/* Input*/}
          <label
            htmlFor="Amount"
            className="text-xs md:text-sm uppercase text-gray-700 mb-1 flex"
          >
            Amount
          </label>
          <div className="relative w-full">
            <input
              className="border-2 text-gray-900 border-gray-300 bg-gray-200 py-2 px-4 rounded-lg md:text-lg w-full focus:outline-none focus:shadow-outline"
              type="text"
              name="Amount"
              id="Amount"
              placeholder="$000"
              autoComplete="off"
              onChange={e => this.setState({amount: +e.target.value})}
              value={this.state.amount}
            />
          </div>
        </div>
        {/* Buttons */}
        <div className="w-full grid gap-3 sm:flex">
          <button onClick={() => this.onSaveClick()} className="bg-gray-900 text-white hover:bg-gray-800 text-base font-semibold py-2 px-6 uppercase tracking-wider rounded-lg focus:outline-none focus:shadow-outline border-2 border-gray-900">
            Save Changes
          </button>
          <button onClick={() => this.onCancelClick()} className="text-gray-700 hover:bg-gray-200 text-base font-semibold py-2 px-6 uppercase tracking-wider rounded-lg focus:outline-none focus:shadow-outline border-2 border-gray-900">
            Cancel
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    showModal: state.ui.showCreateModal,
    imageUrl: state.ui.selectedUnsplashImage,
    userId: state.user.userId,
  };
};

export default connect(mapStateToProps, {
  hideCreateModal,
  createVault,
})(InputFieldsModal);
