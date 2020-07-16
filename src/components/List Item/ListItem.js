import React from "react";
import styles from "./style";

class ListItem extends React.Component {
  
  state = {
    isBoxDisplayed: true
  }

  deleteItem = e => {
    this.props.toDelete(this.props.id);
  }

  changeBoxDisplay = e => {
    this.setState({isBoxDisplayed: e})
  }
  
  render() {

    const isBoxDisplayed = this.props.showBox;
    let box;

    if (isBoxDisplayed) {
      box = <div
      onClick={this.deleteItem}
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
    </div>;
    } else box = '';

    return <div
    className="flex items-center text-xl text-gray-800 transition duration-100"
  >

    
    {box}
    <div className="flex justify-between flex-1">
      <span className="truncate">{this.props.text}</span>
      <span className="truncate">${this.props.amount}</span>
    </div>
  </div>
  }
}

export default ListItem;
