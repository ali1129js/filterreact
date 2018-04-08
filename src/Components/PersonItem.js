/**
 * @Author: Ali Ismail
 * @Date:   2018-04-05T20:42:57+02:00
 * @Last modified by:   Ali Ismail
 * @Last modified time: 2018-04-08T14:37:48+02:00
 */
 import React, { Component } from 'react';

 class PersonItem extends Component {
   constructor(){
     super();
     this.state = {
       text: ''
     }
     this.handleChange = this.handleChange.bind(this);
   }
   handleChange(e) {
     const text = e.target.value;
     this.setState({text: text});
   }

   render() {
    console.log(this.props);
     return (
       <div className="PersonItem">
         <input
           type="text"
           value={this.state.text}
           onChange={this.handleChange} />
         <br />
         {this.props.name}<br />
         <img src={this.props.avatar} alt="aa" className="aa"></img>
         <hr />
       </div>
     );
   }
 }

 export default PersonItem;
/*

{const theList = this.props;
  const theItemlist =  theList.map((card) =>
    <li key={card.id}>{card.name}</li>
  );
  return (
    <ul>{theItemlist}</ul>
  );
}

*/
