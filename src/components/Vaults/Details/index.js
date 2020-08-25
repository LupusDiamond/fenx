import React, { Component } from 'react';

import Contribute from './Contribute';
import Goals from './Deadline';
import Details from './Details';
import SharedWith from './SharedWith';
import Transactions from './Logs';
import Header from './Header';
import Modals from '../Modals';
import { connect } from 'react-redux';

class VaultDetails extends Component {

  renderModals = () => {
    if (this.props.showUnsplashModal) return <Modals />
    return null;
  }

    render() {
        return (
        <div className="max-w-screen-xl w-full mx-auto px-6 mb-6 pt-6">
        <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Header />
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            <Contribute />
            <Goals />
            <Details />
          </div>
          <div className="flex flex-col">
            <SharedWith />
            <Transactions />
          </div>
        </div>
        {this.renderModals()}
        </div>
        )
    }
}

const mapStateToProps = (state) => {
  return {showUnsplashModal: state.vaultsState.showUnsplashModal}
}

export default connect(mapStateToProps)(VaultDetails);