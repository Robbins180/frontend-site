import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

const STYLES = ['btn--primary', ' btn--outline']

const SIZES = ['btn--medium', 'btn--large']

export const Buttons = ({
   children,
   type,
   onClick,
   buttonStyle,
   buttonSize}) => {
  const checkButton Style = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];

  const checkButtonSIze = SIZES.includes(buttonSize ? buttonSize : SIZES[0];

    return (
      <Link to='/sign-up' className='btn-mobile'>
        <button
        className={'btn ${checkButtonStyle}
        ${checkButtonSize}'}
        onCLick={onClick}
        type={type}>
          {children}
        </button>

      </Link>
    )
};
