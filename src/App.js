import axios from 'axios';
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './search_bar';
import Display from './display';

const API_KEY = 'cc82051bcf3d4f5888886ffb5de2c77d';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      term: 'soccer',
      display: '' 
    }
    
    this.giphyCall = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${this.state.term}&limit=25&offset=0&rating=G&lang=en`
    this.handleInput = this.handleInput.bind(this)
    this.getGiphy = this.getGiphy.bind(this)
  }

  getGiphy = function(){
    axios.get(this.giphyCall)
      .then((response) => this.setState({display: response}))
      .catch((error) => console.log(error))
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
          <SearchBar term={this.state.term} handleInput={this.handleInput} />
          <Display giphyObject={this.state.display} />
        </div>
      </div>
    );
  }
}

export default App;
