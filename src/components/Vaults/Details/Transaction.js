import React from 'react'

export default function Transaction() {
    return (
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
    )
}
