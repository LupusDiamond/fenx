import React, {useState} from 'react'

const VaultCard = ({label, amount}) => {

    const [showOptions, setShowOptions] = useState(false);

    const renderOptions = () => {
        if (showOptions) {
            return (
            <div className="w-56 bg-white absolute top-0 right-0 transform translate-y-8 -translate-x-2 rounded-md shadow-md py-2">
                <button className="focus:outline-none px-5 w-full text-left flex items-center py-2">
                  <img src={require("../../assets/images/md-pencil-alt.svg")} alt="edit" />
                  <p className="ml-3 font-semibold flex-1 flex-shrink-0">Edit Item</p>
                </button>
                <div className="w-5/6 h-px bg-gray-300 mx-auto" />
                <button className="focus:outline-none px-5 w-full text-left flex items-center py-2">
                  <img src={require("../../assets/images/md-trash.svg")} alt="bin" />
                  <p className="ml-3 font-semibold flex-1 flex-shrink-0">Delete Item</p>
                </button>
                <div className="w-5/6 h-px bg-gray-300 mx-auto" />
                <button className="focus:outline-none px-5 w-full text-left flex items-center py-2">
                  <img src={require("../../assets/images/md-heart.svg")} alt="heart" />
                  <p className="ml-3 font-semibold flex-1 flex-shrink-0">Add to Favourites</p>
                </button>
            </div>
            )
        } else return null;
    }

    return (
        <div   className="bg-gray-900 rounded-lg shadow-lg overflow-hidden">
            <div className="image-box w-full relative bg-white" style={{paddingTop: '56.25%'}}>
              <img className="absolute top-0 left-0 w-full h-full object-center object-cover" src={require("../../assets/images/tepes.jpg")} alt="vault-item" />
              <div className="absolute top-0 left-0">
                <div className="m-4 rounded-full bg-red-300 p-1">
                  <img src={require("../../assets/images/red-heart.svg")} alt="heart" className="h-6 w-6 absolute top-0 left-0 m-5" />
                  <img src={require("../../assets/images/red-heart.svg")} alt="heart" className="h-6 w-6 animate-ping" />
                </div>
              </div>
              <div onMouseEnter={() => {
          setShowOptions(true);
      }} onMouseLeave={() => {
        setShowOptions(false)
      }} className="absolute top-0 right-0">
                <div  className="relative">
                  <button >
                    <img className="focus:outline-none mr-4" src={require("../../assets/images/dots.svg")} alt="dots" />
                  </button>
                  {renderOptions()}
                </div>
              </div>
            </div>
            <div className="flex justify-between py-2 px-6 text-white font-normal">
              <p className="truncate">{label}</p>
              <p className="ml-2 truncate w-24 text-right">{amount}$</p>
            </div>
          </div>
    )
}

export default VaultCard;