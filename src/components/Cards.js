import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these Beautiful Cards!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='/images/Cover.jpeg'
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              label='Art'
              path='/services'
            />
            <CardItem
              src='/images/PaintingArt.jpeg'
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Abstract'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='/images/B:WArt.jpeg'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Black & White'
              path='/services'
            />
            <CardItem
              src='/images/RealismArt.jpeg'
              text='Experience Football on Top of the Himilayan Mountains'
              label='Realism'
              path='/products'
            />
            <CardItem
              src='/images/CatArt.jpeg'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Animal'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
