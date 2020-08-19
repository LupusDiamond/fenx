import React, { Component } from "react";
import { connect } from "react-redux";
import ListItem from "./ListItem";
import EditList from "./EditList";

import {
  addIncome,
  addExpense,
  addIncomeItem,
  addExpenseItem,
  removeExpensesItem,
  removeIncomeItem,
  fetchAssets,
  fetchLiablities,
  setIncome,
  setExpense,
} from "../../actions";

class CashflowTable extends Component {
  state = {
    inputValue: "",
    amountValue: "",
    counter: 0,
    showBoxes: false,
    amount: 0
  };

  newAmount = 0;
  oldAmount = 0;

  componentDidMount() {
    if (this.props.label === "ASSETS")
    this.props.fetchAssets(this.props.userId);
    else this.props.fetchLiablities(this.props.userId);
  }

  onTextChange = (e) => {
    this.setState({ inputValue: e.target.value });
  };

  onAmountChange = (e) => {
    this.setState({ amountValue: e.target.value });
  };

  onAddClick = (e) => {
    this.setState({inputValue: "", amountValue: ""})
    if (this.props.type === "income") {
      this.props.addIncome(parseInt(this.state.amountValue));
      this.props.addIncomeItem(
        this.state.counter,
        this.state.inputValue,
        parseInt(this.state.amountValue),
        this.props.userId
      );
      this.setState({ counter: Math.floor(Math.random() * 10000) });
    } else {
      this.props.addExpense(parseInt(this.state.amountValue));
      this.props.addExpenseItem(
        this.state.counter,
        this.state.inputValue,
        parseInt(this.state.amountValue),
        this.props.userId
      );
      this.setState({ counter: Math.floor(Math.random() * 10000) });
    }
  };

    renderList() {
      this.newAmount = 0;
      return this.props.listItems.map((e) => {
      this.newAmount += e.amount;
      return (
      <ListItem
        key={e._id}
        id={e._id}
        text={e.label}
        amount={e.amount}
        toDelete={this.removeItem}
        showBox={this.state.showBoxes}
      />
    )})
    ;
  };

  updateInformation() {
    
    if (this.oldAmount === this.newAmount) return;
    this.oldAmount = this.newAmount;
    if (this.props.label === "ASSETS") {
      this.props.setIncome(this.newAmount);
    } else this.props.setExpense(this.newAmount);
  }

  removeItem = (e) => {
    
    if (this.props.type === "income") {
      this.props.removeIncomeItem(this.props.userId,e);
    } else {
      this.props.removeExpensesItem(this.props.userId, e);
    }
  };
  showBoxes = (e) => {
    this.setState({ showBoxes: !this.state.showBoxes });
  };

  render() {
    return (
      <div className="flex flex-col justify-between shadow-lg rounded-lg bg-white overflow-hidden">
        <div className="w-full">
          <div className="grid grid-cols-5 gap-2 p-6">
            <div className="relative col-start-1 col-end-4">
              <label
                htmlFor="Assets"
                className="text-xs md:text-sm bg-white uppercase text-gray-900 px-2 ml-3 absolute top-0 left-0 transform -translate-y-1/2"
              >
                {this.props.label}
              </label>
              <input
                className="border-4 text-gray-900 border-gray-900 py-2 px-3 rounded-lg text-base md:text-xl w-full focus:outline-none focus:shadow-outline"
                type="text"
                name="asset"
                autoComplete="off"
                placeholder="Enter an asset..."
                onChange={this.onTextChange}
                value={this.state.inputValue}
              />
            </div>
            <input
              className="border-4 text-gray-900 border-gray-900 py-2 px-3 rounded-lg text-base md:text-xl focus:outline-none focus:shadow-outline col-start-4 col-end-6 sm:col-start-4 sm:col-end-5"
              type="text"
              name="asset-amount"
              placeholder="$000"
              autoComplete="off"
              onChange={this.onAmountChange}
              value={this.state.amountValue}
            />
            <button
              onClick={() => this.onAddClick()}
              className="bg-gray-900 text-white text-base md:text-xl py-2 px-6 rounded-lg focus:outline-none focus:shadow-outline col-start-1 col-end-6 sm:col-start-5 sm:col-end-6"
            >
              Add
            </button>
          </div>
          <div className="grid grid-cols-1 gap-3 px-6 mb-6 sm:mb-12">
            {this.renderList()} {this.updateInformation()}
          </div>
        </div>
        <EditList changeClick={this.showBoxes} />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const list =
    ownProps.type === "income" ? state.incomeList : state.expensesList;
  return { listItems: list, userId: state.auth.userId };
};

export default connect(mapStateToProps, {
  addIncome,
  addExpense,
  addIncomeItem,
  addExpenseItem,
  removeExpensesItem,
  removeIncomeItem,
  fetchAssets,
  fetchLiablities,
  setIncome,
  setExpense,
  
})(CashflowTable);
