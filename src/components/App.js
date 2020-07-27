import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

// Pages
import Landing from './Landing';
import Dashboard from './Dashboard';
import Vaults from './Vaults';

class App extends Component {
    render() {
    
      return (
        <div style={styles.appContainer}>
            <BrowserRouter>
            <div>
                <Route path='/' exact component={Landing}/>
                <Route path="/dashboard" component={Dashboard}/>
                <Route path="/vaults" component={Vaults}/>
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

export default App;