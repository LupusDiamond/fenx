import React from 'react'
import VaultCard from './VaultCard';
import Header from '../Header';
import VaultEditModal from './VaultEditModal'
import VaultHeader from './VaultHeader';

import {connect} from 'react-redux';

class Vaults extends React.Component {
    renderCreateModal() {
        if (this.props.showCreateModal) {
            return <VaultEditModal />
        }
        return null;
    }
    render() {
        return (
        <div>
            <div className="max-w-6xl w-full mx-auto px-6">
            <VaultHeader />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            <VaultCard label="House" amount={200}/>
            <VaultCard label="College" amount={300}/>
            <VaultCard label="Private Jet" amount={500}/>
            </div>
            </div>
            {this.renderCreateModal()}
        </div>
        )
    }
    
}

const mapStateToProps = (state) => {
    return {showCreateModal: state.vaults.showCreateModal};
}

export default connect(mapStateToProps)(Vaults);