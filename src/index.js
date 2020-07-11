import React from "react";
import ReactDOM from "react-dom";
import Logo from "./components/Logo/Logo";
import Cashflow from "./components/Cashflow/Cashflow";
import CashflowTable from "./components/Cashflow Table/CashflowTable";

class App extends React.Component {
  render() {
    return (
      <div>
        <Logo />
        <Cashflow />
        <div style={styles.tablesContainer}>
          <CashflowTable tableText="Expenses" totalAmount="100" />
          <CashflowTable tableText="Income" totalAmount="200" />
        </div>
      </div>
    );
  }
}

const styles = {
  tablesContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
};

ReactDOM.render(<App />, document.querySelector("#root"));
