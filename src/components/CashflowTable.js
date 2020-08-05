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
} from "../actions";

class CashflowTable extends Component {
  state = {
    inputValue: "",
    amountValue: "",
    counter: 0,
    showBoxes: false,
  };

  onTextChange = (e) => {
    this.setState({ inputValue: e.target.value });
  };

  onAmountChange = (e) => {
    this.setState({ amountValue: e.target.value });
  };

  onAddClick = (e) => {
    if (this.props.type === "income") {
      this.props.addIncome(parseInt(this.state.amountValue));
      this.props.addIncomeItem(
        this.state.counter,
        this.state.inputValue,
        parseInt(this.state.amountValue)
      );
      this.setState({ counter: ++this.state.counter });
    } else {
      this.props.addExpense(parseInt(this.state.amountValue));
      this.props.addExpenseItem(
        this.state.counter,
        this.state.inputValue,
        parseInt(this.state.amountValue)
      );
      this.setState({ counter: ++this.state.counter });
    }
  };

  renderList = () => {
    return this.props.listItems.map((e) => (
      <ListItem
        key={e.id}
        id={e.id}
        text={e.name}
        amount={e.amount}
        toDelete={this.removeItem}
        showBox={this.state.showBoxes}
      />
    ));
  };
  removeItem = (e) => {
    if (this.props.type === "income") {
      this.props.removeIncomeItem(e);
    } else {
      this.props.removeExpensesItem(e);
    }
  };
  showBoxes = (e) => {
    console.log("show the boxes!");
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
            {this.renderList()}
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
  return { listItems: list };
};

export default connect(mapStateToProps, {
  addIncome,
  addExpense,
  addIncomeItem,
  addExpenseItem,
  removeExpensesItem,
  removeIncomeItem,
})(CashflowTable);
