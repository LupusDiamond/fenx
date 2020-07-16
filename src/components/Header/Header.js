import React from 'react';
import styles from "./style";
import '../../assets/tailwind.css'

class Header extends React.Component {
    render() {
        return(
        <header className="w-full bg-blue-800 shadow-lg mb-6">
        <div
            className="max-w-6xl w-full mx-auto px-6 py-3 flex justify-between items-center"
        >
            <div className="logo flex flex-col">
            <p className="text-4xl text-white -ml-px">FenX</p>
            <p
                className="text-xs uppercase text-indigo-200 -mt-1 mb-2 tracking-wider"
            >
                The Financial Manager
            </p>
            </div>
            <p className="w-32 text-indigo-200 text-sm pl-3">
            Made with 💙 by <span className="text-white">Rishi</span> &
            <span className="text-white">Alex</span>.
            </p>
        </div>
        </header>
        )
    }
}

export default Header;