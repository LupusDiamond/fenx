import React from "react";
import styles from "./style";

class CashflowTable extends React.Component {
  render() {
    return (
      <div style={styles.container}>
        <div style={styles.inputContainer}>
          <div style={styles.inputTextContainer}>
            
          <input style={styles.inputText} className="placeholder" type="text" placeholder={this.props.placeholder}></input>
          </div>
          <input style={styles.inputAmount} placeholder="$000"></input>
          
          <button style={styles.addButton}>Add</button>
        </div>
        
      </div>
    );
  }
}

export default CashflowTable;
