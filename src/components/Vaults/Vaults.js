import React from 'react'
import VaultCard from './VaultCard';
import VaultHeader from './VaultHeader';
import {fetchVaults,selectVault} from '../../actions'
import {connect} from 'react-redux';
import Modals from './Modals';

class Vaults extends React.Component {

    componentDidMount() {
        this.props.fetchVaults(this.props.userId);
    }

    renderModals() {
        if (this.props.showCreateModal || this.props.showUnsplashModal) {
            return <Modals />
        }
        return null;
    }  

    renderVaults() {
        const sortedVaults = this.props.vaults.sort((e1, e2) => {
            return e2.favorite - e1.favorite
        });

        return sortedVaults.map(vault => {
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
    return {showCreateModal: state.vaultsState.showCreateModal, vaults:state.vaultsState.vaults, userId: state.auth.userId,
        showUnsplashModal: state.vaultsState.showUnsplashModal
    };
}

export default connect(mapStateToProps, {
    fetchVaults, selectVault
})(Vaults);