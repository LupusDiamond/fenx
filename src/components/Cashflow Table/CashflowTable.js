import React from "react";
import styles from "./style";

class CashflowTable extends React.Component {
  render() {
    return (
      <div style={styles.container}>
        <p>{this.props.tableTitle}</p>
        <div style={styles.inputContainer}>
          <input type="text" placeholder={this.props.placeholder}></input>
          <input placeholder="$000"></input>
          <button style={styles.addButton}>Add</button>
        </div>
        
      </div>
    );
  }
}

export default CashflowTable;
