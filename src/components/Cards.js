import React from 'react';
import CardItem from './CardItem'
import './Cards.css';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these Epic Cards</h1>
      <div className='cards_container'>
        <div className='cards_wrapper'>
          <ul className='cards_items'>
            <CardItem src='/images/Cover.jpeg'
            text='Creative images displayed'
            label='Abstract'
            path='/services'/>
            <CardItem src='/images/Cover.jpeg'
            text='Creative images displayed'
            label='Abstract'
            path='/services'/>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Cards;
