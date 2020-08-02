import React from 'react';
import {Link} from 'react-router-dom';

const SideBarLink = ({destination, text}) => {
    return (
        <Link to={destination} className="flex">
            <svg
                className="h-8 w-8 text-gray-500 mt-1 mr-2"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                d="M9 12L11 14L15 10M20.618 5.984C17.4561 6.15192 14.3567 5.05861 12 2.944C9.64327 5.05861 6.5439 6.15192 3.382 5.984C3.12753 6.96911 2.99917 7.98255 3 9C3 14.591 6.824 19.29 12 20.622C17.176 19.29 21 14.592 21 9C21 7.958 20.867 6.948 20.618 5.984Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                />
            </svg>
            {text}
        </Link>
    )
}

export default SideBarLink;