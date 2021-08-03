import React from 'react'
import '../App.css';
import { Button } from './Button';
import './HeroSection.css'

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='' autoPlay loop muted />
      <h1>Import Cool Phrase</h1>
      <p>Second Cool Phrase</p>
      <div className='herp-btns'>
        <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>Get Started</Button>

        <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>Watch Trailer<i className='far fa-play-circle' /></Button>
      </div>
    </div>
  )
}


export default HeroSection
