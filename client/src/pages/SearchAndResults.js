import React, { Component } from "react";
import SearchForm from '../components/SearchForm/SearchForm'
import API from "../utils/API";

class SearchAndResults extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: {},
      topic: "",
      syear: "",
      eyear: ""
    }
  }

  searchArticles = query => {
    API.search(query)
      .then(res => this.setState({ result: res.data }))
      .catch(err => console.log(err));
    console.log("query: " + query);
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
    console.log("state: " + this.state.eyear);
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.searchArticles(this.state.topic + "&begin_date=" + this.state.syear + "0101&end_date=" + this.state.eyear + "0101");
  };

  render() {
    return (
        <SearchForm
          value1={this.state.topic}
          value2={this.state.syear}
          value3={this.state.eyear}
          handleInputChange={this.handleInputChange}
          handleFormSubmit={this.handleFormSubmit}
        />
    )
  }
}

export default SearchAndResults;
