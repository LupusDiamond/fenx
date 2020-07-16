import React from "react";
import ReactDOM from "react-dom";
import "./assets/main.css";

import Header from './components/Header/Header';
import BigBoxes from './components/BigBoxes/BigBoxes';
import CashflowTable from "./components/CashflowTable/CashflowTable";

class App extends React.Component {

  state = {
    income: '',
    expenses: '',
  }

  onIncomeModified = (e) => {
    let total = 0;
    e.forEach(element => {
      let STRtoINT = parseInt(element.aValue, 10);
      total += STRtoINT;
    });
    this.setState({income: total}, () => {
      console.log(this.state.income)
    });
  }

  onExpenseModified = e => {
    let total = 0;
    e.forEach(element => {
      let STRtoINT = parseInt(element.aValue, 10);
      total += STRtoINT;
    });
    this.setState({expenses: total}, () => {
      console.log(this.state.income)
    });
  }

  render() {
    return (
      <div style={styles.appContainer}>
        <Header />
        <main className="max-w-6xl w-full mx-auto px-6">
          <BigBoxes income={this.state.income} expenses={this.state.expenses}/>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <CashflowTable label="ASSETS" onModify={this.onIncomeModified}/>
            <CashflowTable label="LIABILITIES" onModify={this.onExpenseModified}/>
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
