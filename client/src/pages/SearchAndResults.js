import React, { Component } from "react";
import SearchForm from '../components/SearchForm/SearchForm'
import API from "../utils/API";

class SearchAndResults extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: {},
      search: ""
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  searchArticles = query => {
    API.search(query)
      .then(res => this.setState({ result: res.data }))
      .catch(err => console.log(err));
    console.log(this.state.result);
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.searchArticles(this.state.search);
  };

  render() {
    return (
        <SearchForm
          value={this.state.search}
          handleInputChange={this.handleInputChange}
          handleFormSubmit={this.handleFormSubmit}
        />
    )
  }
}

export default SearchAndResults;


// // Start Year
// startYear = $("#start-year").val().trim();
// // End Year
// endYear = $("#end-year").val().trim();
// // If the user provides a startYear -- the startYear will be included in the queryURL
// if (parseInt(startYear)) {
//   queryURL = queryURL + "&begin_date=" + startYear + "0101";
// }
// // If the user provides a startYear -- the endYear will be included in the queryURL
// if (parseInt(endYear)) {
//   queryURL = queryURL + "&end_date=" + endYear + "0101";
// }