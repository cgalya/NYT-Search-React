import React from 'react';
import './SearchForm.css';

const SearchForm = props => (
  <div className="searchForm">
    <div className="title">Enter topic and years.</div>
    <form className="search">
      <div className="form-group">
        <label>Topic</label>
        <input
          value={props.value1}
          onChange={props.handleInputChange}
          name="topic"
          type="text"
          className="form-control"
          id="topic"
        />
        <label>Start Year</label>
        <input
          value={props.value2}
          onChange={props.handleInputChange}
          name="syear"
          type="text"
          className="form-control"
          id="syear"
        />
        <label>End Year</label>
        <input
          value={props.value3}
          onChange={props.handleInputChange}
          name="eyear"
          type="text"
          className="form-control"
          id="eyear"
        />
        <button
          type="submit"
          onClick={props.handleFormSubmit}
          className="button"
        >
          Search
        </button>
      </div>
    </form>
  </div>
);

export default SearchForm;

{/*<label>Start Year</label>*/}
{/*<input*/}
{/*value={props.value}*/}
{/*onChange={props.handleInputChange}*/}
{/*name="startYear"*/}
{/*type="text"*/}
{/*className="form-control"*/}
{/*id="startYear"*/}
  {/*/>*/}
  {/*<label>End Year</label>*/}
{/*<input*/}
  {/*value={props.value}*/}
  {/*onChange={props.handleInputChange}*/}
  {/*name="endYear"*/}
  {/*type="text"*/}
  {/*className="form-control"*/}
  {/*id="endYear"*/}
{/*/>*/}