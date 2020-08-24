import React, { Component } from 'react'
import PeopleSVG from '../../../assets/svgs/People';
import PeoplePlusSVG from '../../../assets/svgs/PeoplePlus';
export default class SharedWith extends Component {

    renderContributor = () => {
      return (
        <img
            className="h-10 w-10 object-cover border-2 border-gray-300 rounded-full -mr-4 shadow flex-shrink-0"
            src="./images/cat.jpg"
            alt
          />
      )
    }

    render() {
        return (
            <div className="bg-white grid grid-cols-1 gap-3 rounded-lg shadow-lg p-6 relative overflow-hidden mb-6">
        {/* Title */}
        <div className="flex justify-between items-start">
          <div className="flex items-center">
            <PeopleSVG />
            <p className="text-gray-700 font-semibold md:text-xl uppercase tracking-wide">
              Shared with
            </p>
          </div>
          {/* Icon */}
          <button className="rounded-full bg-gray-300 p-2 flex focus:outline-none focus:shadow-outline">
            <PeoplePlusSVG />
          </button>
        </div>
        <div className="flex">
          {/*contributors here} */}

          <p className="pl-6 pt-3 md:text-lg text-gray-900">0 contributors</p>
        </div>
      </div>
        )
    }
}
