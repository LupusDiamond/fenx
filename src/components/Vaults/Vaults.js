import React from 'react'
import VaultCard from './VaultCard';
import Header from '../Header';
import VaultEditModal from './VaultEditModal'
import VaultHeader from './VaultHeader';
import {fetchVaults} from '../../actions'
import unsplash from '../../apis/unsplash';
import {connect} from 'react-redux';

class Vaults extends React.Component {

    componentDidMount() {
        this.props.fetchVaults(this.props.userId);
    }

    renderCreateModal() {
        if (this.props.showCreateModal) {
            return <VaultEditModal />
        }
        return null;
    }  

    renderVaults() {
        const sortedVaults = this.props.vaults.sort((e1, e2) => {
            console.log(e1);
            return e2.favorite - e1.favorite
        });

        return sortedVaults.map(vault => {
            return <VaultCard 
                key={vault._id}
                id={vault._id}
                label={vault.label}
                amount={vault.totalAmount}
                imageURL={vault.imageURL}
                fav={vault.favorite}
            />
        })
    }

    onUnspashClick = async () => {
        const photos = await unsplash.get("/photos");
        console.log(photos);
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
            {this.renderCreateModal()}
            <button onClick={() => this.onUnspashClick()}>Unsplash</button>
        </div>
        )
    }
    
}

const mapStateToProps = (state) => {
    return {showCreateModal: state.vaultsState.showCreateModal, vaults:state.vaultsState.vaults, userId: state.auth.userId};
}

export default connect(mapStateToProps, {
    fetchVaults
})(Vaults);