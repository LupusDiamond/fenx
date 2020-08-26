import React from 'react'
import VaultCard from './VaultCard';
import VaultHeader from './VaultHeader';
import {selectVault} from '../../actions';
import {fetchVaults} from '../../features';
import {connect} from 'react-redux';
import Modals from './Modals';

class Vaults extends React.Component {

    componentDidMount() {
        if (this.props.userId !== null || this.props.userId !== undefined)
        this.props.fetchVaults(this.props.userId);
    }

    renderModals() {
        if (this.props.showCreateModal || this.props.showUnsplashModal) {
            return <Modals />
        }
        return null;
    }  

    renderVaults() {

        return this.props.vaults.map(vault => {
            return <VaultCard 
                key={vault._id}
                id={vault.vaultId}
                label={vault.label}
                amount={vault.totalAmount}
                imageURL={vault.imageURL}
                fav={vault.favorite}
            />
        })
        console.log(this.props.vaults);
    }

    render() {
        return (
        <div className="pt-6">
            <div className="max-w-6xl w-full mx-auto px-6">
            <VaultHeader />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            {this.renderVaults()}
            </div>
            </div>
            {this.renderModals()}
            
        </div>
        )
    }
    
}

const mapStateToProps = (state) => {
    return {showCreateModal: state.ui.showCreateModal, vaults:state.vaults.vaults, userId: state.user.userId,
        showUnsplashModal: state.ui.showUnsplashModal
    };
}

export default connect(mapStateToProps, {
    fetchVaults, selectVault
})(Vaults);