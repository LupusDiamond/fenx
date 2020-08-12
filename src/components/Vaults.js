import React from 'react'
import VaultCard from './VaultCard';
import Header from './Header';
import VaultEditModal from './VaultEditModal'
import VaultHeader from './VaultHeader';

class Vaults extends React.Component {
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
            <VaultEditModal />
        </div>
        )
    }
    
}

export default Vaults;