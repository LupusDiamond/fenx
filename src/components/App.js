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
      console.log(this.props.showSidebar);
      if (!this.props.showSidebar) {
        return null;
      }
      return <SideBar />
    }

    checkLogin = () => {
      if (!this.props.isSignedIn) {
        return <Redirect to="/"/>
      }
    }

    render() {
      
      return (
        <div style={styles.appContainer}>
          
            <BrowserRouter>
            <div>
                {this.checkLogin()}
                <Route path='/' exact component={Landing}/>
                <Route path="/">
                  <Header />
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
      showSidebar: state.showSidebar
    }
  }

export default connect(mapStateToProps)(App);