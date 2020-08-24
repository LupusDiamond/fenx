import React, { Component } from 'react'

import CashSVG from '../../../assets/svgs/Cash';

export default class Contribute extends Component {
    render() {
        return (

      <div className="bg-white flex flex-col rounded-lg shadow-lg p-6 relative overflow-hidden">
      {/* Title */}
      <div className="flex justify-between items-start mb-6">
        <div className="flex items-center">
          <CashSVG />
          <p className="text-gray-700 font-semibold md:text-xl uppercase tracking-wide">
            Contribute
          </p>
        </div>
      </div>
      <input
        className="border-2 text-gray-900 border-gray-400 bg-gray-200 py-2 px-4 rounded-lg md:text-lg w-full focus:outline-none focus:shadow-outline mb-3"
        type="text"
        name="Amount"
        id="Amount"
        placeholder="$000"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <button className="text-white text-base font-semibold p-2 uppercase tracking-wider rounded-lg focus:outline-none focus:shadow-outline bg-gray-900 hover:bg-gray-800 border-2 border-gray-900">
          Deposit
        </button>
        <button className="text-gray-900 text-base font-semibold p-2 uppercase tracking-wider rounded-lg focus:outline-none focus:shadow-outline border-2 border-gray-900">
          Withdraw
        </button>
      </div>
    </div>
        )
    }
}
