import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchWeather } from "../actions/index";

class SearchBar extends Component {
  state = { term: "" };
  constructor(props) {
    super(props);
    this.state = { term: "" };
  }
  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.searchWeather(this.state.term);
  };
  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          onChange={(e) => this.setState({ term: e.target.value })}
          className="form-control"
          value={this.state.term}
          placeholder="Get a five-day forecast in your favorite cities"
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">
            search
          </button>
        </span>
      </form>
    );
  }
}

const mapStateToprops = (state) => {
  
  return { report: state };
};
const mapDispatchToProps = (dispatch) => {
  return { searchWeather: (city) => dispatch(fetchWeather(city)) };
};
export default connect(mapStateToprops, mapDispatchToProps)(SearchBar);
