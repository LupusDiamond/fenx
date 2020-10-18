import React, {Component} from 'react';
import {connect} from 'react-redux';
import BigBoxes from './BigBoxes';
import CashflowTable from "./CashflowTable";
import {signIn} from '../../actions'

class Dashboard extends Component {

    componentDidMount() {
      //this.props.signIn(this.props.userId, this.props.username, this.props.profilePicture)
    }

    render() {
      return (
        <div className="bg-gray-200 min-h-screen pt-6">
            <main className="max-w-6xl w-full mx-auto px-6">
            <BigBoxes/>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
              <CashflowTable label="ASSETS" type="income" placeholder="Enter an asset . . ."/>
              <CashflowTable label="LIABILITIES" type="expenses" placeholder="Enter a liablity . . ."/>
            </div>
          </main>
        </div>
      );
    }
  }

  const mapStateToProps = (state) => {
    return { 
      income: state.blitz.income,
      expenses: state.blitz.expenses,
      userId: state.user.userId,
      username: state.user.username,
      profilePicture: state.user.profilePicture
    }
  }

export default connect(mapStateToProps, {
  signIn
})(Dashboard);