import React from "react";
import styles from "./style";

class CashflowTable extends React.Component {

  state = {
    text: '',
    amount: 0
  }

  onAmountInputChange(e) {
    console.log(e.target.value);
  }

  onAddClick(e) {
    console.log("Add a new list elemnt!");
  }

  render() {
    return (
      <div style={styles.container}>
        <div style={styles.inputContainer}>
          <div style={styles.inputTextContainer}>
            <label style={styles.inputTextLabel}>{this.props.tableTitle}</label>
          <input style={styles.inputText} className="placeholder" type="text" placeholder={this.props.placeholder}
            onChange={e => {
              this.setState({text: e.target.value});
            }}
            value={this.state.term}
          ></input>
          </div>
          <input style={styles.inputAmount} placeholder="$000" 
            onChange={e => {
              this.setState({amount: e.target.value});
            }}
            value={this.state.amount}>

            </input>
          
          <button style={styles.addButton} onClick={this.onAddClick}>Add</button>
        </div>
        
      </div>
    );
  }
}

export default CashflowTable;
