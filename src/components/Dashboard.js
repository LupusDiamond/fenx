import React, {Component} from 'react';
import {connect} from 'react-redux';

import Header from './Header';
import BigBoxes from './BigBoxes';
import CashflowTable from "./CashflowTable";

class Dashboard extends Component {
    render() {
      return (
        <div className="bg-gray-200 min-h-screen">
            <Header />
            <main className="max-w-6xl w-full mx-auto px-6">
            <BigBoxes/>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
              <CashflowTable label="ASSETS" type="income"/>
              <CashflowTable label="LIABILITIES" type="expenses"/>
            </div>
            </main>
        </div>
      );
    }
  }

  const mapStateToProps = (state) => {
    return { 
      income: state.income,
      expenses: state.expenses
    }
  }

export default connect(mapStateToProps)(Dashboard);