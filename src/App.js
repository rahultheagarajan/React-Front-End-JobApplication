import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./Login";
import JobList from "./JobList";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App container">
          <div>
            <Route exact path="/" component={Login} />
            <Route exact path="/joblist/" component={JobList} />
            {/* <Route exact path = "/predict" component = {JobSeeker} /> */}
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
