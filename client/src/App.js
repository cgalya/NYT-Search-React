import React, { Component } from 'react';
import Header from './components/Header/Header';
import Title from './components/Title/Title';
import SearchAndResults from './pages/SearchAndResults';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Title />
        <SearchAndResults />
      </div>
    );
  }
}

export default App;
