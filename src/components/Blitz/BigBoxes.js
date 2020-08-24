import React, { Component } from "react";
import { connect } from "react-redux";
import CountUp from 'react-countup'

class BigBoxes extends Component {

  state = {
    oldIncome: 0,
    oldExpenses: 0,
    oldCashflow: 0
  }

  componentDidUpdate(prevProps) {
      if (this.props.income !== prevProps.income) this.setState({oldIncome: prevProps.income});
      if (this.props.expenses !== prevProps.expenses) this.setState({oldExpenses: prevProps.expenses});
  }

  renderIncomeCount = () => {
    return(
      <CountUp start={this.state.oldIncome} end={this.props.income} prefix="$" duration={2}>
        {({ countUpRef }) => (
          <div>
            <p className="text-xl sm:text-4xl text-gray-900 font-bold" ref={countUpRef}/>
          </div>
        )}
      </CountUp>
    )
  }

  renderExpensesCount = () => {
    return(
      <CountUp start={this.state.oldExpenses} end={this.props.expenses} prefix="$" duration={2}>
        {({ countUpRef }) => (
          <div>
            <p className="text-xl sm:text-4xl text-pink-800 font-bold" ref={countUpRef}/>
          </div>
        )}
      </CountUp>
    )
  }

  renderCashflowCount = () => {
    return(
      <CountUp start={this.state.oldIncome - this.state.oldExpenses} end={this.props.income - this.props.expenses} prefix="$" duration={2}>
        {({ countUpRef }) => (
          <div>
            <p className="text-xl sm:text-4xl text-green-800 font-bold" ref={countUpRef}/>
          </div>
        )}
      </CountUp>
    )
  }

  render() {
    return (
      <div className="bg-white sm:bg-transparent grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-0 sm:gap-6 shadow-lg rounded-lg p-6 sm:shadow-none sm:rounded-none sm:p-0 mb-6">
        <div className="bg-white sm:shadow-lg sm:p-6 sm:rounded-lg flex flex-row sm:flex-col justify-between items-end sm:items-start">
          <p className="text-base sm:text-sm text-gray-600 uppercase tracking-wider">
            Income
          </p>
          {this.renderIncomeCount()}
        </div>

        <div className="bg-white sm:shadow-lg sm:p-6 sm:rounded-lg flex flex-row sm:flex-col justify-between items-end sm:items-start">
          <p className="text-base sm:text-sm text-gray-600 uppercase tracking-wider">
            Expenses
          </p>
          {this.renderExpensesCount()}
        </div>

        <div className="bg-white sm:shadow-lg sm:p-6 sm:rounded-lg flex flex-row sm:flex-col justify-between items-end sm:items-start sm:col-start-1 sm:col-end-3 md:col-start-3 md:col-end-4">
          <p className="text-base sm:text-sm text-gray-600 uppercase tracking-wider">
            Cashflow
          </p>
          {this.renderCashflowCount()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    income: state.income,
    expenses: state.expenses,
  };
};

export default connect(mapStateToProps)(BigBoxes);
