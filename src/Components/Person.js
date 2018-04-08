/**
 * @Author: Ali Ismail
 * @Date:   2018-04-05T20:00:01+02:00
 * @Last modified by:   Ali Ismail
 * @Last modified time: 2018-04-08T17:40:39+02:00
 */
 import React from 'react';
 import PersonItem from './PersonItem'
 //import PropTypes from 'prop-types';

  const Person = (props) => {
    const cards = props.cards;
    const theList = cards.map((card) => {
     return (
       <div key={card.id}>
         {card.name}
         <img src={card.avatar} alt="nn" className="img" />
         {card.color}
       </div>
       );
       });
    return(
     <div className="person">
       <PersonItem contacts={theList}/>
       {theList}
     </div>
     )
  }

export default Person;
