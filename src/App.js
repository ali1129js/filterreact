/**
 * @Author: Ali Ismail
 * @Date:   2018-04-05T20:01:08+02:00
 * @Last modified by:   Ali Ismail
 * @Last modified time: 2018-04-08T17:09:28+02:00
 */
import React, { Component } from 'react';
import Person from './Components/Person';
import './App.css';
let endpoint ='http://localhost:3000/myCard';

class App extends Component {
  constructor(){
    super();
    this.state = {
      data:[]
    }
  }

  componentWillMount() {
    fetch(endpoint, {method:"GET"})
    .then(d => d.json())
    .then(d => {
        console.log('Parsed json success ')
        this.setState({data:d})
      }).catch(ex => {
        console.log('Parsing failed: ', ex)
      });
  }

  render() {
    return (
      <div className="App">
        <Person cards={this.state.data} />
      </div>
    );
  }
}

export default App;
