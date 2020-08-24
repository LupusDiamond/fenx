import React, { Component } from 'react'
import LogsSVG from '../../../assets/svgs/Logs';
import {connect} from 'react-redux';
import {fetchTransactions} from '../../../actions';

import Transaction from './Transaction';
class Logs extends Component {

   componentDidUpdate(prevProps) {
      if (prevProps.vaultId !== this.props.vaultId) {
        this.props.fetchTransactions(this.props.vaultId);
      }
   }

    renderTransactions = () => {
      if (this.props.vaultId !== null)
      return this.props.transactions.map(transaction => {
        return (
          <Transaction amount={transaction.amount} type={transaction.type} date={transaction.date}
            username={transaction.username} imageURL={transaction.imageURL}
          />
        )
      })
    }

    render() {
        return (
            <div className="flex-1 bg-white flex flex-col justify-between rounded-lg shadow-lg relative overflow-hidden">
        <div className="w-full flex flex-col">
          {/* Title */}
          <div className="flex justify-between items-start mb-3 px-6 pt-6">
            <div className="flex items-center">
              <LogsSVG />
              <p className="text-gray-700 font-semibold md:text-xl uppercase tracking-wide">
                Recent Logs
              </p>
            </div>
          </div>
          {/* Content */}
          <div className="w-full flex flex-col relative px-6 mb-6">
            {/* Absolute line */}
            <div className="absolute w-full h-px bg-white bottom-0 left-0" />
            {/*Transactions here*/}
           {this.renderTransactions()}
          </div>
        </div>
        {/* View All */}
        <div className="w-full h-12 bg-gray-100 flex items-center justify-end px-4">
          <a
            href="#"
            className="text-gray-700 font-semibold focus:outline-none focus:shadow-outline px-2 rounded-full"
          >
            View All
          </a>
        </div>
      </div>
        )
    }
}

const mapStateToProps = (state) => {
  return {
    userId: state.auth.userId,
    vaultId: state.vaultDetails.vaultId,
    transactions: state.vaultDetails.transactions
  };
}

export default connect(mapStateToProps, {
  fetchTransactions
})(Logs);