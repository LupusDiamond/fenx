import React from 'react';

const VaultHeader = () => {
    return (
        <div
        class="flex flex-col sm:flex-row justify-between sm:items-center mb-6 pb-4 border-b-2 border-gray-400"
      >
        <div class="flex justify-between items-center pb-4 sm:pb-0">
          <h1
            class="text-3xl md:text-4xl font-bold uppercase pr-4 leading-tight"
          >
            Your Vaults
          </h1>
          <div class="flex flex-col sm:border-l-2 border-gray-400 pl-4">
            <label
              class="text-xs md:text-sm font-bold uppercase tracking-wide -mb-1 text-gray-700"
            >
              Savings
            </label>
            <h6
              class="text-gray-900 text-lg md:text-2xl font-bold uppercase tracking-wide flex items-baseline"
            >
              <span>$2000</span>
              <img
                class="w-6 h-6 ml-2 transform translate-y-1 sm:translate-y-px cursor-pointer"
                src={require("../../assets/svgs/Edit.svg")}
                alt="edit"
              />
            </h6>
          </div>
        </div>
        <button
          class="focus:outline-none focus:shadow-outline py-3 px-6 rounded-md bg-gray-900 text-white text-sm md:text-lg uppercase"
        >
          New Vault
        </button>
      </div>
    )
}

export default VaultHeader;