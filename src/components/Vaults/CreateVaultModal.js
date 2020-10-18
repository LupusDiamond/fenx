import React, { Component } from 'react';
import ImagePreview from './ImagePreviewModal';
import InputFields from './InputFieldsModal';
import { connect } from 'react-redux';

class CreateVaultModal extends Component {
    render() {
        if (this.props.showModal === false) return null;

        return (
        <div className="max-w-4xl w-full mx-auto bg-white rounded-lg shadow-xl p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-6 flex-shrink-0 relative overflow-hidden">
            <ImagePreview />
            <InputFields />
        </div> 
        )
    }
}

const mapStateToProps = (state) => {
    return {
        showModal: state.ui.showCreateModal
    }
}

export default connect(mapStateToProps)(CreateVaultModal);