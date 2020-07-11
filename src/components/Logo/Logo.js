import React from "react";
import styles from "./style";

class Logo extends React.Component {
  render() {
    return (
      <div>
        <h1 style={styles.title}>FenX</h1>
        <p style={styles.subTitle}>The Financial Manager</p>
      </div>
    );
  }
}

export default Logo;
