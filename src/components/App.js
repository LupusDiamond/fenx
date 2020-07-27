import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

// Pages
import Landing from './Landing';
import Dashboard from './Dashboard';
import Vaults from './Vaults';

class App extends Component {

    state = {
      income: '',
      expenses: '',
    }
  
    onIncomeModified = (e) => {
      let total = 0;
      e.forEach(element => {
        let STRtoINT = parseInt(element.aValue, 10);
        total += STRtoINT;
      });
      this.setState({income: total}, () => {
        console.log(this.state.income)
      });
    }
  
    onExpenseModified = e => {
      let total = 0;
      e.forEach(element => {
        let STRtoINT = parseInt(element.aValue, 10);
        total += STRtoINT;
      });
      this.setState({expenses: total}, () => {
        console.log(this.state.income)
      });
    }
    Test = () => {
        return <div>"Hello"</div>
    }
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