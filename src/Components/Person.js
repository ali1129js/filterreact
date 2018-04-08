/**
 * @Author: Ali Ismail
 * @Date:   2018-04-05T20:00:01+02:00
 * @Last modified by:   Ali Ismail
 * @Last modified time: 2018-04-08T12:55:35+02:00
 */
 import React, { Component } from 'react';
 import PersonItem from './PersonItem'
 import PropTypes from 'prop-types';

 class Person extends Component {

   render() {
     const cards = this.props.cards;
     const theList = cards.map((card) => {
      return (
        <li key={card.id}>
          {card.name}
          {card.avatar}
          {card.color}
        </li>
        );
        });
    console.log(cards);
    return(
      <ul className="person">
        <PersonItem theList={theList}/>
      </ul>
      )
  }
}
export default Person;
