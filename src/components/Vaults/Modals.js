import React, { Component } from 'react';
import CreateVaultModal from './CreateVaultModal';
import SelectImageModal from './SelectImageModal'
import DeleteModal from './Details/DeleteModal';

class Modals extends Component {


    render() {
        return (
        <div className="fixed top-0 left-0 w-full h-screen bg-black bg-opacity-25 flex justify-center items-end md:items-center p-6">
        <div className="max-w-6xl w-full mx-auto px-6">
        <CreateVaultModal />
        <SelectImageModal />
        <DeleteModal />
      </div>
      </div>
        )
    }
}

export default Modals;