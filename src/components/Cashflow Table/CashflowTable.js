import React from "react";
import styles from "./style";

class CashflowTable extends React.Component {
  render() {
    return (
      <div style={styles.table}>
        <p style={styles.tableHeader}>
          Total Monthly {this.props.tableText} {this.props.totalAmount}$
        </p>
        <input style={styles.input} placeholder="Enter a value"></input>
      </div>
    );
  }
}

export default CashflowTable;
