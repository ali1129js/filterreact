/**
 * @Author: Ali Ismail
 * @Date:   2018-04-05T20:00:01+02:00
 * @Last modified by:   Ali Ismail
 * @Last modified time: 2018-04-08T15:13:06+02:00
 */
 import React, { Component } from 'react';
 import PersonItem from './PersonItem'
 //import PropTypes from 'prop-types';

  const Person = (props) => {
    const cards = props.cards;
    const theList = cards.map((card) => {
     return (
       <PersonItem key={card.id}
         name={card.name}
         avatar={card.avatar}
         color={card.color}
         />

       );
       });
   console.log(cards);
   return(
     <div className="person">
       {theList}
     </div>
     )
  }



export default Person;
