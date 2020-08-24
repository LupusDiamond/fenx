import React, { Component } from 'react'
import LogsSVG from '../../../assets/svgs/Logs';
export default class Logs extends Component {
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
            {/* Repeatable Start */}
            <div className="flex justify-between py-3 border-b border-gray-300">
              {/* Image + Name */}
              <div className="flex">
                <img
                  src="./images/tepes.jpg"
                  alt
                  className="h-10 w-10 object-cover border-2 border-gray-300 rounded-full shadow flex-shrink-0 mr-2"
                />
                <flex className="flex-col justify-between">
                  <h3 className="text-gray-900 md:text-lg font-semibold -mt-px truncate w-32 xl:w-48">
                    Tepes Alexandru
                  </h3>
                  <p className="text-xs text-gray-700 uppercase">
                    August 12, 2020
                  </p>
                </flex>
              </div>
              {/* Amount */}
              <p className="md:text-xl font-semibold text-green-800 -mt-1 flex-shrink-0 pl-6">
                $200
              </p>
            </div>
            {/* End */}
            {/* Repeatable Start */}
            <div className="flex justify-between py-3 border-b border-gray-300">
              {/* Image + Name */}
              <div className="flex">
                <img
                  src="./images/tepes.jpg"
                  alt
                  className="h-10 w-10 object-cover border-2 border-gray-300 rounded-full shadow flex-shrink-0 mr-2"
                />
                <flex className="flex-col justify-between">
                  <h3 className="text-gray-900 md:text-lg font-semibold -mt-px truncate w-32 xl:w-48">
                    Rishi
                  </h3>
                  <p className="text-xs text-gray-700 uppercase">
                    August 11, 2020
                  </p>
                </flex>
              </div>
              {/* Amount */}
              <p className="md:text-xl font-semibold text-red-800 -mt-1 flex-shrink-0 pl-6">
                -$2000
              </p>
            </div>
            {/* End */}
            {/* Repeatable Start */}
            <div className="flex justify-between py-3 border-b border-gray-300">
              {/* Image + Name */}
              <div className="flex">
                <img
                  src="./images/tepes.jpg"
                  alt
                  className="h-10 w-10 object-cover border-2 border-gray-300 rounded-full shadow flex-shrink-0 mr-2"
                />
                <flex className="flex-col justify-between">
                  <h3 className="text-gray-900 md:text-lg font-semibold -mt-px truncate w-32 xl:w-48">
                    Iron Man
                  </h3>
                  <p className="text-xs text-gray-700 uppercase">
                    August 11, 2020
                  </p>
                </flex>
              </div>
              {/* Amount */}
              <p className="md:text-xl font-semibold text-green-800 -mt-1 flex-shrink-0 pl-6">
                $3000
              </p>
            </div>
            {/* End */}
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
