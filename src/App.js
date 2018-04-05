/**
 * @Author: Ali Ismail
 * @Date:   2018-04-05T20:01:08+02:00
 * @Last modified by:   Ali Ismail
 * @Last modified time: 2018-04-05T20:56:46+02:00
 */
import React, { Component } from 'react';
import Person from './Components/Person';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {

    }
  }
  
  render() {
    return (
      <div className="App">
        <Person />
      </div>
    );
  }
}

export default App;
