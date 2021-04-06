import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import Search from './search.js';
import Results from './results.js';


const App = (props) => {
  let [ input ] = useState('');
  let [ records ] = useState([]);

  handleChange = (e) => {
    this.setState({ input: e.target.value });
    this.getData();
  };

  getData = () => {
    Axios.get(`https://www.boardgamegeek.com/xmlapi2/search?query=${this.state.input}`)
    .then(
      (results) => {
        this.setState({
          records: results.data,
        })
      },
      (error) => {
        console.error(error);
      }
    )
  }

  return(
    <div>
      <Search inputHandler={this.handleChange} />
      <Results data={this.state.records} />
    </div>
  )
}

export default App;
