import React, {useState} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom'
import {deleteVault, selectVault} from '../../features';

const VaultCard = ({label, amount, id, userId, imageURL, selectVault}) => {

    const onVaultClick = () => {
      const information = {
        userId: userId,
        vaultId: id
      }
      selectVault(information);
    }

    return (
        <div onClick={() => onVaultClick()}  className="bg-gray-900 rounded-lg shadow-lg overflow-hidden">
            <div className="image-box w-full relative bg-white" style={{paddingTop: '56.25%'}}>
              <Link to="/vaults/details">
              <div className="absolute w-full h-full top-0 left-0 bg-gray-300 flex items-center justify-center">
              <p className="text-gray-600 text-2xl font-bold">No Image</p>
            </div>
              <img className="absolute top-0 left-0 w-full h-full object-center object-cover" src={imageURL || null} alt="" />
              </Link>
               
            </div>
            <div className="flex justify-between py-2 px-6 text-white font-normal">
              <p className="truncate">{label}</p>
              <p className="ml-2 truncate w-24 text-right">${amount}</p>
            </div>
          </div>
    )
}

const mapStateToProps = (state) => {
  return {userId: state.user.userId}
}


export default connect(mapStateToProps, {
 deleteVault, selectVault
})(VaultCard);