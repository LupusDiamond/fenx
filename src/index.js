import React from "react";
import ReactDOM from "react-dom";
import "./assets/main.css";

class App extends React.Component {
  render() {
    return (
      <div style={styles.appContainer}>
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

        <main className="max-w-6xl w-full mx-auto px-6">

          <div
            className="bg-white sm:bg-transparent grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-0 sm:gap-6 shadow-lg rounded-lg p-6 sm:shadow-none sm:rounded-none sm:p-0 mb-6"
          >
            <div
              className="bg-white sm:shadow-lg sm:p-6 sm:rounded-lg flex flex-row sm:flex-col justify-between items-end sm:items-start"
            >
              <p
                className="text-base sm:text-sm text-gray-600 uppercase tracking-wider"
              >
                Income
              </p>
              <p className="text-xl sm:text-5xl text-blue-800 font-bold">$630</p>
            </div>
            <div
              className="bg-white sm:shadow-lg sm:p-6 sm:rounded-lg flex flex-row sm:flex-col justify-between items-end sm:items-start"
            >
              <p
                className="text-base sm:text-sm text-gray-600 uppercase tracking-wider"
              >
                Expenses
              </p>
              <p className="text-xl sm:text-5xl text-yellow-800 font-bold">$535</p>
            </div>
            <div
              className="bg-white sm:shadow-lg sm:p-6 sm:rounded-lg flex flex-row sm:flex-col justify-between items-end sm:items-start sm:col-start-1 sm:col-end-3 md:col-start-3 md:col-end-4"
            >
              <p
                className="text-base sm:text-sm text-gray-600 uppercase tracking-wider"
              >
                Cashflow
              </p>
              <p className="text-xl sm:text-5xl text-green-800 font-bold">$95</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">

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
                  <div
                    className="flex items-center text-xl text-gray-800 transition duration-100"
                  >
                    <div
                      className="w-6 h-6 mr-6 opacity-100 border-2 border-gray-600 text-gray-600 rounded cursor-pointer"
                    >
                      <svg
                        className="w-full h-full object-cover"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6 6L18 18M6 18L18 6L6 18Z"
                          stroke="currentColor"
                          stroke-width="3"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                    <div className="flex justify-between flex-1">
                      <span className="truncate">List Item</span>
                      <span className="truncate">$000</span>
                    </div>
                  </div>

                  <div
                    className="flex items-center text-xl text-gray-800 transition duration-100"
                  >
                    <div
                      className="w-6 h-6 mr-6 opacity-100 border-2 border-gray-600 text-gray-600 rounded cursor-pointer"
                    >
                      <svg
                        className="w-full h-full object-cover"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6 6L18 18M6 18L18 6L6 18Z"
                          stroke="currentColor"
                          stroke-width="3"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                    <div className="flex justify-between flex-1">
                      <span className="truncate">List Item</span>
                      <span className="truncate">$380</span>
                    </div>
                  </div>

                  <div
                    className="flex items-center text-xl text-gray-800 transition duration-100"
                  >
                    <div
                      className="w-6 h-6 mr-6 opacity-100 border-2 border-gray-600 text-gray-600 rounded cursor-pointer"
                    >
                      <svg
                        className="w-full h-full object-cover"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6 6L18 18M6 18L18 6L6 18Z"
                          stroke="currentColor"
                          stroke-width="3"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                    <div className="flex justify-between flex-1">
                      <span className="truncate">List Item</span>
                      <span className="truncate">$170</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full bg-gray-200 py-4 px-6 flex justify-end">
                <p className="text-lg text-blue-800 cursor-pointer">
                  <svg
                    className="inline mr-1 w-4 h-4"
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
            </div>


            <div
              className="flex flex-col justify-between shadow-lg rounded-lg bg-white overflow-hidden"
            >
              <div className="w-full">

                <div className="grid grid-cols-5 gap-2 p-6">
                  <div className="relative col-start-1 col-end-4">
                    <label
                      for="Liabilities"
                      className="text-sm bg-white uppercase text-blue-800 px-2 ml-3 absolute top-0 left-0 transform -translate-y-1/2"
                      >Liabilities</label
                    >
                    <input
                      className="border-4 text-blue-800 border-blue-800 py-2 px-4 rounded-lg text-xl w-full focus:outline-none focus:shadow-outline"
                      type="text"
                      name="asset"
                      placeholder="Enter a liability..."
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

                  <div
                    className="flex items-center text-xl text-gray-800 transition duration-100"
                  >
                    <div
                      className="w-6 h-6 mr-6 opacity-100 border-2 border-gray-600 text-gray-600 rounded cursor-pointer"
                    >
                      <svg
                        className="w-full h-full object-cover"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6 6L18 18M6 18L18 6L6 18Z"
                          stroke="currentColor"
                          stroke-width="3"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                    <div className="flex justify-between flex-1">
                      <span className="truncate">List Item</span>
                      <span className="truncate">$000</span>
                    </div>
                  </div>
                  <div
                    className="flex items-center text-xl text-gray-800 transition duration-100"
                  >
                    <div
                      className="w-6 h-6 mr-6 opacity-100 border-2 border-gray-600 text-gray-600 rounded cursor-pointer"
                    >
                      <svg
                        className="w-full h-full object-cover"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6 6L18 18M6 18L18 6L6 18Z"
                          stroke="currentColor"
                          stroke-width="3"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                    <div className="flex justify-between flex-1">
                      <span className="truncate">List Item</span>
                      <span className="truncate">$000</span>
                    </div>
                  </div>

                  <div
                    className="flex items-center text-xl text-gray-800 transition duration-100"
                  >
                    <div
                      className="w-6 h-6 mr-6 opacity-100 border-2 border-gray-600 text-gray-600 rounded cursor-pointer"
                    >
                      <svg
                        className="w-full h-full object-cover"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6 6L18 18M6 18L18 6L6 18Z"
                          stroke="currentColor"
                          stroke-width="3"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                    <div className="flex justify-between flex-1">
                      <span className="truncate">List Item</span>
                      <span className="truncate">$000</span>
                    </div>
                  </div>

                  <div
                    className="flex items-center text-xl text-gray-800 transition duration-100"
                  >

                    <div
                      className="w-6 h-6 mr-6 opacity-100 border-2 border-gray-600 text-gray-600 rounded cursor-pointer"
                    >
                      <svg
                        className="w-full h-full object-cover"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6 6L18 18M6 18L18 6L6 18Z"
                          stroke="currentColor"
                          stroke-width="3"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                    <div className="flex justify-between flex-1">
                      <span className="truncate">List Item</span>
                      <span className="truncate">$000</span>
                    </div>
                  </div>

                  <div
                    className="flex items-center text-xl text-gray-800 transition duration-100"
                  >

                    <div
                      className="w-6 h-6 mr-6 opacity-100 border-2 border-gray-600 text-gray-600 rounded cursor-pointer"
                    >
                      <svg
                        className="w-full h-full object-cover"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6 6L18 18M6 18L18 6L6 18Z"
                          stroke="currentColor"
                          stroke-width="3"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                    <div className="flex justify-between flex-1">
                      <span className="truncate">List Item</span>
                      <span className="truncate">$000</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full bg-gray-200 py-4 px-6 flex justify-end">
                <p className="text-lg text-blue-800 cursor-pointer">
                  <svg
                    className="inline mr-1 w-4 h-4"
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
            </div>
          </div>
        </main>
      </div>
    );
  }
}

const styles = {
  appContainer: {
    minHeight: "100vh",
    width: "100%",
  },
};

ReactDOM.render(<App />, document.querySelector("#root"));
