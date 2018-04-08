/**
 * @Author: Ali Ismail
 * @Date:   2018-04-05T20:42:57+02:00
 * @Last modified by:   Ali Ismail
 * @Last modified time: 2018-04-08T19:01:04+02:00
 */
 import React, { Component } from 'react';

 class PersonItem extends Component {
   constructor(){
     super();
     this.state = {
       search: ''
     }
     this.handleChange = this.handleChange.bind(this);
   }
   handleChange(e) {
     const search = e.target.value;
     this.setState({search: e.target.value});
   }

   render() {

   return (
       <div className="PersonItem">
         <input
           type="text"
           value={this.state.search}
           onChange={this.handleChange} />
         <br />
            
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
