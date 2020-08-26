import React, { Component } from 'react';
import {BrowserRouter, Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {signIn, signOut} from '../features';

import Header from './Header';
import SideBar from './Sidebar/Sidebar';

// Pages
import Landing from './Landing/Landing';
import Dashboard from './Dashboard/Dashboard';
import Vaults from './Vaults/Vaults';
import VaultDetails from './Vaults/Details';
import Revenues from './Revenues';

class App extends Component {

    componentDidMount() {
      window.gapi.load('client:auth2', () => {
        window.gapi.client.init({
            clientId: '265605334965-05kmlnr85a9u0jo223s836e3iu3jr84u.apps.googleusercontent.com',
            scope: "email profile"
        }).then(() => {
            this.auth = window.gapi.auth2.getAuthInstance();
            this.currentUser = this.auth.currentUser.get().getBasicProfile();
            this.onAuthChange(this.auth.isSignedIn.get());
            this.auth.isSignedIn.listen(this.onAuthChange);
        })
    })
    }

    onAuthChange = async (isSignedIn) => {
      console.log("helo1")
      if (isSignedIn) {
          let userid = await this.auth.currentUser.get().getId();
          let username = await this.auth.currentUser.get().getBasicProfile().getName();
          let profilepic = await this.auth.currentUser.get().getBasicProfile().getImageUrl();
          if (username === undefined) return;
          const information = {
            userId: userid,
            username,
            profilePicture: profilepic
          }
          this.props.signIn(information);
      } else {
          this.props.signOut();
      }
    }

    showSidebar = () => {
      if (!this.props.isSignedIn || this.props.userId == null) return null;
      return <SideBar />
    }

    checkLogin = () => {
      if (!this.props.isSignedIn || this.props.userId == null || this.props.userId === undefined) {
        return <Redirect to="/"/>
      }
    }

    showHeader = () => {
      if (!this.props.isSignedIn || this.props.userId === null) {
        return null;
      }
      return <Header />
    }

    render() {
      
      return (
        <div style={styles.appContainer}>
            <BrowserRouter>
            <div>
                {this.checkLogin()}
                <Route path='/' exact component={Landing}/>
                <Route path="/">
                  {this.showHeader()}
                  <Route path="/dashboard" component={Dashboard}/>
                  <Route path="/vaults" exact component={Vaults}/>
                  <Route path="/vaults/details" component={VaultDetails} />
                  <Route path="/revenues" component={Revenues} />
                </Route>
                
                {this.showSidebar()}
            </div>   
            </BrowserRouter>
            
        </div>
      );
    }
  }
  
  const styles = {
    appContainer: {
      minHeight: "100vh",
      width: "100%",
    },
  };

  const mapStateToProps = (state) => {
    return {
      isSignedIn: state.user.isSignedIn,
      showSidebar: state.ui.showSidebar,
      userId: state.user.userId
    }
  }

export default connect(mapStateToProps, {
  signIn, signOut
})(App);