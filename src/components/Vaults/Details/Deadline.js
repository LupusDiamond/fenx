import React, { Component } from 'react';
import {connect} from 'react-redux';
import DownArrowSVG from '../../../assets/svgs/DownArrow';
import CalendarSVG from '../../../assets/svgs/Calendar';
import ReverseSVG from '../../../assets/svgs/Reverse';
import WarningSVG from '../../../assets/svgs/Warning';
import PlusSVG from '../../../assets/svgs/Plus';

import {activateGoal, fetchGoal} from '../../../actions';

class Deadline extends Component {

    componentDidUpdate(prevProps) {
      if (prevProps.vaultId !== this.props.vaultId) {
        this.props.fetchGoal(this.props.vaultId);
      }
    }

    renderInput = () => {
      let disabledCursor;
      if (this.props.hasGoal) {
        disabledCursor = "";
      } else disabledCursor="cursor-not-allowed";
      return (
        <React.Fragment>
          <div className="relative w-full">
        <input
          type="date"
          className={`${disabledCursor} w-full bg-gray-200 py-2 px-4 md:text-lg text-gray-700 rounded-lg border-2 border-gray-400 focus:outline-none focus:shadow-outline`}
          name
          id
          disabled
        />
        <div className="w-12 h-full bg-gray-300 border-t-2 border-r-2 border-b-2 border-gray-400 absolute top-0 right-0 rounded rounded-tr-lg rounded-br-lg pointer-events-none flex justify-center items-center cursor-pointer">
         <CalendarSVG />
        </div>
      </div>
      {/* Per week thing */}
      <div className="relative w-full">
        <input
          type="text"
          className={`${disabledCursor} w-full bg-gray-200 py-2 px-4 md:text-lg text-gray-700 rounded-lg border-2 border-gray-400 focus:outline-none focus:shadow-outline`}
          name
          id
          placeholder="$000"
          disabled
        />
        <div className="w-32 h-full bg-gray-300 border-t-2 border-r-2 border-b-2 border-gray-400 absolute top-0 right-0 rounded-tr-lg rounded-br-lg">
          {/* Arrow */}
          <div className="h-full w-10 absolute top-0 right-0 flex justify-center items-center pointer-events-none">
            <DownArrowSVG />
          </div>
          <select
          disabled
            name
            id
            className={`${disabledCursor} w-full h-full bg-gray-300 rounded-tr-md rounded-br-md focus:outline-none focus:shadow-outline cursor-pointer lowercase text-xs md:text-sm font-semibold tracking-wider text-gray-700 appearance-none pl-3 pr-6`}
          >
            <option value>per week</option>
            <option value selected>
              per month
            </option>
            <option value>per year</option>
          </select>
        </div>
      </div>
        </React.Fragment>
      )
    }

    renderIcon = () => {
      if (this.props.hasGoal) {
        return (
          <button className="rounded-full bg-gray-300 p-2 flex focus:outline-none focus:shadow-outline">
            <ReverseSVG />
          </button>
        )
      }
     return (
      <button onClick={() => this.props.activateGoal()} className="rounded-full bg-gray-300 p-2 flex focus:outline-none focus:shadow-outline">
      <PlusSVG />
    </button>
     )
    }

    render() {
        return (
      <div className="bg-white grid grid-cols-1 gap-3 rounded-lg shadow-lg p-6 relative overflow-hidden">
      {/* Title */}
      <div className="flex justify-between items-start">
        <div className="flex items-center">
          <WarningSVG />
          <p className="text-gray-700 font-semibold md:text-xl uppercase tracking-wide">
            Deadline
          </p>
        </div>
        {/* Icon */}
        {this.renderIcon()}
      </div>
      {/* Deadline */}
      {this.renderInput()}
    </div>
        )
    }
}

const mapStateToProps = (state) => {
  return {
    hasGoal: state.vaultDetails.hasGoal,
    vaultId: state.vaultDetails.vaultId
  }
}

export default connect(mapStateToProps, {
  activateGoal, fetchGoal
})(Deadline);