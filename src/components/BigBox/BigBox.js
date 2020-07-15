import React from 'react';
import styles from './style'

class BigBox extends React.Component {
    render() {
        return (
            <div style={styles.container}>
                <p style={styles.title}>{this.props.title}</p>
                <p style={styles.amount}>$56</p>
            </div>
        )
    }
}

export default BigBox;