import React from 'react';
import ListItem from '../List Item/ListItem';
import EditList from '../EditList/EditList';

class CashflowTable extends React.Component {
    render() {
        return(
            <div
              className="flex flex-col justify-between shadow-lg rounded-lg bg-white overflow-hidden"
            >
              <div className="w-full">
                <div className="grid grid-cols-5 gap-2 p-6">
                  <div className="relative col-start-1 col-end-4">
                    <label
                      for="Assets"
                      className="text-sm bg-white uppercase text-blue-800 px-2 ml-3 absolute top-0 left-0 transform -translate-y-1/2"
                      >Assets</label
                    >
                    <input
                      className="border-4 text-blue-800 border-blue-800 py-2 px-4 rounded-lg text-xl w-full focus:outline-none focus:shadow-outline"
                      type="text"
                      name="asset"
                      placeholder="Enter an asset..."
                    />
                  </div>
                  <input
                    className="border-4 text-blue-800 border-blue-800 py-2 px-4 rounded-lg text-xl focus:outline-none focus:shadow-outline col-start-4 col-end-6 sm:col-start-4 sm:col-end-5"
                    type="text"
                    name="asset-amount"
                    placeholder="$000"
                  />
                  <button
                    className="bg-blue-800 text-white text-xl py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline col-start-1 col-end-6 sm:col-start-5 sm:col-end-6"
                  >
                    Add
                  </button>
                </div>
                <div className="grid grid-cols-1 gap-3 px-6 mb-6 sm:mb-12">
                  <ListItem />
                  <ListItem />
                  <ListItem />
                </div>
              </div>
              <EditList />
            </div>
        )
    }
}

export default CashflowTable;