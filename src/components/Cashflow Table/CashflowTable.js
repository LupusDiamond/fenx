import React from "react";
import styles from "./style";

class CashflowTable extends React.Component {

  state = {
    text: '',
    amount: 0
  }

  onTextInputChange = e => {
    console.log(e.target.value);
    this.setState({text: e.target.value});
  }

  onAmountInputChange = (e) => {
    console.log(e.target.value);
    this.setState({amount: e.target.value});
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
            onChange={this.onTextInputChange}
            value={this.state.text}
          ></input>
          </div>
          <input style={styles.inputAmount} placeholder="$000" 
            onChange={this.onAmountInputChange}
            value={this.state.amount}>

            </input>
          
          <button style={styles.addButton} onClick={this.onAddClick}>Add</button>
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
