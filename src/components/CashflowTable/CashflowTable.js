import React from 'react';
import ListItem from '../List Item/ListItem';
import EditList from '../EditList/EditList';

class CashflowTable extends React.Component {

    constructor() {
      super();
      this.listChanged = this.listChanged.bind(this);
    }

    state = {
      inputValue: '',
      amountValue: '',
      listItems: [],
      showBoxes: false
    };

    indexes = 0;

    onTextChange = (e) => {
      this.setState({inputValue: e.target.value});
    }

    onAmountChange = (e) => {
      this.setState({amountValue: e.target.value});
    }

    onAddClick = (e) => {
      this.setState({listItems: this.state.listItems.concat({
        tValue: this.state.inputValue,
        aValue: this.state.amountValue,
        id: ++this.indexes
      })}, () => this.listChanged())
    }

    removeItem = e => {
      this.setState({listItems: this.state.listItems.filter(item => item.id !== e)}, () => this.listChanged());
      
    }

    listChanged = e => {
      this.props.onModify(this.state.listItems);
      console.log(this.state.listItems)
    }

    showBoxes = e => {
      console.log("show the boxes!");
      this.setState({showBoxes: !this.state.showBoxes});
    }


    render() {
        return(
            <div
              className="flex flex-col justify-between shadow-lg rounded-lg bg-white overflow-hidden"
            >
              <div className="w-full">
                <div className="grid grid-cols-5 gap-2 p-6">
                  <div className="relative col-start-1 col-end-4">
                    <label
                      for="Assets"
                      className="text-sm bg-white uppercase text-blue-800 px-2 ml-3 absolute top-0 left-0 transform -translate-y-1/2"
                      >{this.props.label}</label
                    >
                    <input
                      className="border-4 text-blue-800 border-blue-800 py-2 px-4 rounded-lg text-xl w-full focus:outline-none focus:shadow-outline"
                      type="text"
                      name="asset"
                      placeholder="Enter an asset..."
                      onChange={this.onTextChange}
                      value={this.state.inputValue}
                    />
                  </div>
                  <input
                    className="border-4 text-blue-800 border-blue-800 py-2 px-4 rounded-lg text-xl focus:outline-none focus:shadow-outline col-start-4 col-end-6 sm:col-start-4 sm:col-end-5"
                    type="text"
                    name="asset-amount"
                    placeholder="$000"
                    onChange={this.onAmountChange}
                    value={this.state.amountValue}
                  />
                  <button onClick={this.onAddClick}
                    className="bg-blue-800 text-white text-xl py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline col-start-1 col-end-6 sm:col-start-5 sm:col-end-6"
                  >
                    Add
                  </button>
                </div>
                <div className="grid grid-cols-1 gap-3 px-6 mb-6 sm:mb-12">
                  {this.state.listItems.map(e => <ListItem key={e.id} id={e.id} text={e.tValue} amount={e.aValue} toDelete={this.removeItem} showBox={this.state.showBoxes}/>)}
                </div>
              </div>
              <EditList changeClick={this.showBoxes}/>
            </div>
        )
    }
}

export default CashflowTable;