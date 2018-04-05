/**
 * @Author: Ali Ismail
 * @Date:   2018-04-05T20:00:01+02:00
 * @Last modified by:   Ali Ismail
 * @Last modified time: 2018-04-05T20:44:24+02:00
 */
 import React, { Component } from 'react';
 import PersonItem from './PersonItem'
 class Person extends Component {
   render() {
     return (
       <div className="Person">
         <PersonItem />
       </div>
     );
   }
 }

 export default Person;
