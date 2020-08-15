import React, { Component } from 'react';
import {BrowserRouter, Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

import Header from './Header';
import SideBar from './Sidebar/Sidebar';

// Pages
import Landing from './Landing/Landing';
import Dashboard from './Dashboard/Dashboard';
import Vaults from './Vaults/Vaults';
import Revenues from './Revenues';

class App extends Component {

    showSidebar = () => {
      if (!this.props.isSignedIn || this.props.userId == null) return null;
      return <SideBar />
    }

    checkLogin = () => {
      if (!this.props.isSignedIn || this.props.userId == null || this.props.userId == undefined) {
        return <Redirect to="/"/>
      }
    }

    showHeader = () => {
      if (!this.props.isSignedIn || this.props.userId == null) {
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
                  <Route path="/vaults" component={Vaults}/>
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
      isSignedIn: state.auth.isSignedIn,
      showSidebar: state.showSidebar,
      userId: state.auth.userId
    }
  }

export default connect(mapStateToProps)(App);