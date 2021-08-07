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
              src='/images/StreetArt.jpeg'
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              label='Classic'
              path='/services'
            />
            <CardItem
              src='/images/PaintingArt.jpeg'
              text='Art that does not attempt to represent an accurate depiction of a visual reality but instead use shapes, colours, forms and gestural marks to achieve its effect'
              label='Abstract'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='/images/B:WArt.jpeg'
              text='White often represents innocence, purity, and new beginnings. Black, on the other hand, can be seen as conservative or intimidating, but it is also often associated with sophistication, luxury, confidence, and strength.'
              label='Black & White'
              path='/services'
            />
            <CardItem
              src='/images/RealismArt.jpeg'
              text='Artworks painted in a realistic almost photographic way.'
              label='Realism'
              path='/products'
            />
            <CardItem
              src='/images/CatArt.jpeg'
              text='Artwork with an animal theme.'
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
