import axios from 'axios';
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './search_bar';
import Display from './display';

const API_KEY = 'cc82051bcf3d4f5888886ffb5de2c77d';

// this.handleKeyPress = this.handleKeyPress.bind(this)

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      term: '',
      diplay: null
    }
    this.handleInput = this.handleInput.bind(this)
  }

  handleInput = function(event){
    this.setState({term: event.target.value })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Giphy Search</h2>
        </div>
        <div>
          <SearchBar />
          <Display />
        </div>
      </div>
    );
  }
}

export default App;
