import React, { Component } from 'react';
import {connect} from 'react-redux';
import {signIn, signOut} from '../../actions';

class GoogleAuth extends Component {

    renderAuthButton() {
        if (this.props.isSignedIn === null) {
            return null;
        } else if (this.props.isSignedIn) {
            return (
            <div className={this.props.className} onClick={this.onSignOutClick}>{this.props.signOutComponent}</div>
            )
        } else {
            return (
            <div className={this.props.className} onClick={this.onSignInClick}>{this.props.signInComponent}</div>
            )
        }
    }

    onSignInClick = () => {
        window.gapi.auth2.getAuthInstance().signIn();
    }

    onSignOutClick = () => {
        window.gapi.auth2.getAuthInstance().signOut();
    }

    render() {
        return (
            <div>{this.renderAuthButton()}</div>
        )
    }
}

const mapStateToProps = (state) => {
    return {isSignedIn: state.auth.isSignedIn, userId: state.auth.userId};
}

export default connect(mapStateToProps, {
    signIn, signOut
})(GoogleAuth);