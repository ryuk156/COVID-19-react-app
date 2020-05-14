import React, { Component } from "react";

const api_address = "https://covid19.mathdro.id/api/countries";
class Country extends Component {
  state = { scountry: "", confirmed: [], recovered: [], deaths: [] };

  searchedcountry = (event) => {
    this.setState({
      scountry: event.target.value,
    });
  };

  searchcountry = () => {
    fetch(`${api_address}/${this.state.scountry}`)
      .then((response) => response.json())
      .then((json) =>
        this.setState({
          confirmed: json.confirmed.value,
          recovered: json.recovered.value,
          deaths: json.deaths.value,
        })
      );
  };

  render() {
    const { confirmed, recovered, deaths } = this.state;
    return (
      <div>
        <h3>
          <b>Search here to see cases in specific country</b>
        </h3>
        <br />
        <center>
          <div className="container ">
            <input
              className="form-control border-1 border-dark"
              onChange={this.searchedcountry}
              placeholder="Search country"
              style={{ width: "200px" }}
            />
            <br />

            <button
              className="btn btn-outline-dark rounded-5"
              onClick={this.searchcountry}
            >
              Search
            </button>
          </div>
          <br />
          <div className="container">
            <div className="  my-3">
              <div className="container" style={{ display: "flex" }}>
                <div
                  className="card text-white bg-warning mb-3 mx-5"
                  style={{ width: "18rem" }}
                >
                  <div className="card-header"> {confirmed}</div>
                  <div className="card-body">
                    <h5 className="card-title">Confirmed</h5>
                  </div>
                </div>

                <div
                  className="card text-white bg-primary mb-3 mx-5"
                  style={{ width: "18rem" }}
                >
                  <div className="card-header"> {recovered}</div>
                  <div className="card-body">
                    <h5 className="card-title">recovered</h5>
                  </div>
                </div>

                <div
                  className="card text-white bg-danger mb-3 mx-5"
                  style={{ width: "18rem" }}
                >
                  <div className="card-header"> {deaths}</div>
                  <div className="card-body">
                    <h5 className="card-title"> Deaths</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </center>
      </div>
    );
  }
}

export default Country;
