import React, { Component } from "react";
import "./App.css";

// import component
import Controls from "./Components/Controls/Controls";
import TaskList from "./Components/TaskList/TaskList";
import Modal from "./Components/Modal/Modal";

// import data
import listOfTasks from "./Model/getData";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
    };
  }

  // Tao du lieu khoi dau
  // setItem : dua du lieu len localStorage
  // JSON.stringify : khi ma dua du lieu len localStorage thi can nen lai dang chuoi
  generateData = () => {
    localStorage.setItem("tasks", JSON.stringify(listOfTasks.list));
  };

  componentWillMount = () => {
    let tasksJSON = JSON.parse(localStorage.getItem("tasks"));
    this.setState({
      tasks: tasksJSON,
    });
  };

  addNewTask = (data) => {
    let tasksJSON = JSON.parse(localStorage.getItem("task"));
    tasksJSON = [...tasksJSON, data];
    this.setState({
      tasks: tasksJSON,
    });
    localStorage.setItem("tasks", JSON.stringify(tasksJSON));
  };

  render() {
    let { tasks } = this.state;
    return (
      <div className="App">
        <div>
          <h1 className="text-center my-2">QUẢN LÝ CÔNG VIỆC</h1>
          <div className="container-fluid">
            <div className="row">
              {/* PANEL */}
              <Controls />

              {/* DISPLAY */}

              <TaskList tasks={listOfTasks.list} />
            </div>
          </div>
          {/* The Modal */}
          <Modal addNewTask={this.addNewTask} />
        </div>
      </div>
    );
  }
}

export default App;
