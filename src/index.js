import React from "react";
import ReactDOM from "react-dom";
import "./assets/main.css";

import Header from './components/Header/Header';
import BigBoxes from './components/BigBoxes/BigBoxes';
import CashflowTable from "./components/CashflowTable/CashflowTable";

class App extends React.Component {
  render() {
    return (
      <div style={styles.appContainer}>
        <Header />
        <main className="max-w-6xl w-full mx-auto px-6">
          <BigBoxes />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <CashflowTable />
            <CashflowTable />
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
