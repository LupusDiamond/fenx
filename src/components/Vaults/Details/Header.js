import React from 'react'
import BackSVG from '../../../assets/svgs/Back';
export default function Header() {
    return (
        <div className="lg:col-span-3 flex justify-between items-baseline">
            <div className="flex items-baseline">
              <button className="p-1 md:p-2 mr-4 rounded-full border-2 hover:bg-gray-300 border-gray-400 focus:outline-none focus:shadow-outline">
                <BackSVG />
              </button>
              <h1 className="text-gray-900 uppercase font-semibold text-2xl md:text-3xl tracking-wide">
                Vault Details
              </h1>
            </div>
          </div>
    )
}
