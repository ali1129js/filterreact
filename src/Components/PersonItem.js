/**
 * @Author: Ali Ismail
 * @Date:   2018-04-05T20:42:57+02:00
 * @Last modified by:   Ali Ismail
 * @Last modified time: 2018-04-05T21:44:10+02:00
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
     return (
       <div className="PersonItem">
         <input
           type="text"
           value={this.state.text}
           onChange={this.handleChange}/>
         <div>
           <hr />
           <h3>
             {this.state.text}
           </h3>
         </div>
       </div>
     );
   }
 }

 export default PersonItem;
