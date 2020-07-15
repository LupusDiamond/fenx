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
            tableTitle="Assets"
            placeholder="Enter an asset . . ."
          />
          <CashflowTable
            tableTitle="Liablities"
            placeholder="Enter a liablity . . ."
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
    background: "#F0F0F0",
   },
  tablesContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    marginTop: 60
  },
  boxContainer: {
    justifyContent: "space-around",
    display: "flex",
    marginTop: 40
  }
};

ReactDOM.render(<App />, document.querySelector("#root"));
