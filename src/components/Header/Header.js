import React from 'react';
import styles from "./style";

class Header extends React.Component {
    render() {
        return(
            <div style={styles.headerContainer}>
                <div style={styles.headerInner}>
                    <div style={styles.logoContainer}>
                        <p style={styles.headerLogo}>FenX</p>
                        <p style={styles.subtitle}>The financial manager</p>
                    </div>
                    <div style={styles.futureBar}></div>
                </div>
            </div>
        )
    }
}

export default Header;