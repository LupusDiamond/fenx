import React, { Component } from 'react';
import ImagePreviewModal from './ImagePreviewModal';
import InputFieldsModal from './InputFieldsModal'
import SelectImageModal from './SelectImageModal'

class Modals extends Component {


    render() {
        return (
        <div className="fixed top-0 left-0 w-full h-screen bg-black bg-opacity-25 flex justify-center items-end md:items-center p-6">
        <div className="max-w-6xl w-full mx-auto px-6">
        {/* Modal */}
        <div className="max-w-4xl w-full mx-auto bg-white rounded-lg shadow-xl p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-6 flex-shrink-0 relative overflow-hidden">
            <ImagePreviewModal />
            <InputFieldsModal />
            <SelectImageModal />
        </div>
      </div>
      </div>
        )
    }
}

export default Modals;