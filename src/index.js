import React from "react";
import ReactDOM from "react-dom";
import CashflowTable from "./components/Cashflow Table/CashflowTable";
import Header from './components/Header/Header'
import BigBox from './components/BigBox/BigBox'

class App extends React.Component {
  render() {
    return (
      <div style={styles.appContainer}>
        <Header />
        <div style={styles.boxContainer}>
          <BigBox title="Income" color="#2C5282"/>
          <BigBox title="Expenses" color="#B7791F"/>
          <BigBox title="Cashflow" color="#2F855A"/>
        </div>
       
        <div style={styles.tablesContainer}>
          <CashflowTable
            tableText="Expenses"
            totalAmount="100"
            placeholder="Enter an expense..."
          />
          <CashflowTable
            tableText="Income"
            totalAmount="200"
            placeholder="Enter an income..."
          />
        </div>
      </div>
    );
  }
}

const styles = {
  appContainer: {
    padding: "0",
    margin: "0",
    display: "box-container",
    background: "#F0F0F0"
  },
  tablesContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  boxContainer: {
    justifyContent: "space-around",
    display: "flex",
    marginTop: 40
  }
};

ReactDOM.render(<App />, document.querySelector("#root"));
