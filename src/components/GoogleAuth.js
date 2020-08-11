import React, { Component } from 'react';
import {connect} from 'react-redux';
import {signIn, signOut} from '../actions';

class GoogleAuth extends Component {

    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '265605334965-05kmlnr85a9u0jo223s836e3iu3jr84u.apps.googleusercontent.com',
                scope: "email profile"
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.currentUser = this.auth.currentUser.get().getBasicProfile();
                console.log(this.currentUser);
                this.onAuthChange(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.onAuthChange);
            })
        })
    }

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

    onAuthChange = (isSignedIn) => {
        if (isSignedIn) {
            this.props.signIn(this.auth.currentUser.get().getId(), this.currentUser.getName(), this.currentUser.getImageUrl());
        } else {
            this.props.signOut();
        }
    }

    onSignInClick = () => {
        this.auth.signIn();
    }

    onSignOutClick = () => {
        this.auth.signOut();
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