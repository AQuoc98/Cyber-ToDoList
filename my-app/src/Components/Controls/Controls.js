import React, { Component } from "react";

// import components
import AddNewTask from "./AddNewTask";
import InitializeTask from "./InitializeTask";
import FilterProgress from "./FilterProgress";
import FilterLabel from "./FilterLabel";
import FilterPriority from "./FilterPriority";
import Sort from "./Sort";

class Controls extends Component {
  render() {
    return (
      <div className="col-md-3 text-center px-0">
        <div className="header header--left d-flex align-items-center">
          <img src="./img/user_2.jpg" className="ml-2 user" alt="user" />
          <h3 className="text-white d-inline font-weight-light ml-2">
            Nguyễn Đình Anh Quốc
          </h3>
        </div>

        {/* <AddNewTask clearBeforeAddNewTask={this.props.clearBeforeAddNewTask} /> */}
        <AddNewTask />

        {/* <InitializeTask generateData={this.props.generateData} /> */}

        {/* Filter */}
        {/* <div className="px-3">
          <FilterProgress
            changeFilterProgress={this.props.changeFilterProgress}
          />

          <FilterLabel changeFilterLabel={this.props.changeFilterLabel} />

          <FilterPriority
            changeFilterPriority={this.props.changeFilterPriority}
          /> */}

        {/* Sort */}
        {/* <Sort changeSortType={this.props.changeSortType} /> */}
        {/* </div> */}
      </div>
    );
  }
}

export default Controls;
