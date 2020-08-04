import React from 'react'
import VaultCard from './VaultCard';

class Vaults extends React.Component {
    render() {
        return (
        <div className="max-w-6xl w-full mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          <VaultCard label="House" amount={200}/>
          <VaultCard label="College" amount={300}/>
          <VaultCard label="Private Jet" amount={500}/>
        </div>
    </div>
        )
    }
    
}

export default Vaults;