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
        <div style={{ display: "flex" }}>
          <CashflowTable />
          <CashflowTable />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
