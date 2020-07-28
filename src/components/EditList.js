import React from "react";

class EditList extends React.Component {
  render() {
    return (
      <div className="w-full bg-gray-200 py-4 px-6 flex justify-end">
        <p
          onClick={(e) => this.props.changeClick()}
          className="text-sm md:text-lg text-gray-900 cursor-pointer"
        >
          <svg
            className="inline mr-1 w-3 h-3 md:w-4 md:h-4 transform -translate-y-px"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.232 5.23199L18.768 8.76799L15.232 5.23199ZM16.732 3.73199C17.2009 3.26309 17.8369 2.99966 18.5 2.99966C19.1631 2.99966 19.7991 3.26309 20.268 3.73199C20.7369 4.2009 21.0003 4.83687 21.0003 5.49999C21.0003 6.16312 20.7369 6.79909 20.268 7.26799L6.5 21.036H3V17.464L16.732 3.73199V3.73199Z"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          Edit List
        </p>
      </div>
    );
  }
}

export default EditList;
