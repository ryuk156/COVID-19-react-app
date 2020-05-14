import React, { Component } from "react";
import Navbar from "./navbar";
import Country from "./country";
class App extends Component {
  state = { cases: [] };

  componentDidMount() {
    fetch("https://api.covid19api.com/summary")
      .then((response) => response.json())
      .then((json) => this.setState({ cases: json.Global }));
  }

  render() {
    const {
      NewConfirmed,
      TotalConfirmed,
      NewDeaths,
      TotalDeaths,
      NewRecovered,
      TotalRecovered,
    } = this.state.cases;
    return (
      <div>
        <h2 className="my-2">
          <b>COVID-19 Global Cases</b>
        </h2>
        <div className=" my-5">
          <div className="container" style={{ display: "flex" }}>
            <div
              className="card text-white bg-warning mb-3 mx-1"
              style={{ width: "18rem" }}
            >
              <div className="card-header">{NewConfirmed}</div>
              <div className="card-body">
                <h5 className="card-title">Confirmed Cases </h5>
              </div>
            </div>

            <div
              className="card text-white bg-warning mb-3 mx-1"
              style={{ width: "18rem" }}
            >
              <div className="card-header"> {TotalConfirmed}</div>
              <div className="card-body">
                <h5 className="card-title">TotalConfirmed Cases</h5>
              </div>
            </div>

            <div
              className="card text-white bg-danger mb-3 mx-1"
              style={{ width: "18rem" }}
            >
              <div className="card-header"> {NewDeaths}</div>
              <div className="card-body">
                <h5 className="card-title">NewDeaths Cases</h5>
              </div>
            </div>

            <div
              className="card text-white bg-danger mb-3 mx-1"
              style={{ width: "18rem" }}
            >
              <div className="card-header"> {TotalDeaths}</div>
              <div className="card-body">
                <h5 className="card-title">TotalDeaths Cases </h5>
              </div>
            </div>

            <div
              className="card text-white bg-primary mb-3 mx-1"
              style={{ width: "18rem" }}
            >
              <div className="card-header"> {NewRecovered}</div>
              <div className="card-body">
                <h5 className="card-title">NewRecovered Cases</h5>
              </div>
            </div>

            <div
              className="card text-white bg-primary mb-3 mx-1"
              style={{ width: "18rem" }}
            >
              <div className="card-header"> {TotalRecovered}</div>
              <div className="card-body">
                <h5 className="card-title">TotalRecovered Cases </h5>
              </div>
            </div>
          </div>
        </div>

        <div>
          <Country />
        </div>
      </div>
    );
  }
}

export default App;
