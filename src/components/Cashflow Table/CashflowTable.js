import React from "react";
import styles from "./style";

class CashflowTable extends React.Component {
  render() {
    return (
      <div style={styles.container}>
        <div style={styles.inputContainer}>
          <input style={styles.inputText} className="placeholder" type="text" placeholder={this.props.placeholder}></input>
          
          <input style={styles.inputAmount} placeholder="$000"></input>
          
          <button style={styles.addButton}>Add</button>
        </div>
        <div style={styles.listBox}>
          <div styles={styles.listItem}>
            <span style={styles.itemName}>Wowow</span>
            <span style={styles.itemAmount}>00</span>
          </div>
        </div>
      </div>
    );
  }
}

export default CashflowTable;
