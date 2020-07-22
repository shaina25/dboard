import React from 'react';
import { bool } from 'prop-types';
import { StyledMenu } from './Menu.styled';

const Menu = ({ open, ...props }) => {
  
  const isHidden = open ? true : false;
  const tabIndex = isHidden ? 0 : -1;

  return (
    <StyledMenu open={open} aria-hidden={!isHidden} {...props}>
      <a href="/" tabIndex={tabIndex}>
        <span  aria-hidden="true" >💡</span>
        Plot Generator
      </a>
      <a href="/" tabIndex={tabIndex}>
        <span aria-hidden="true">🔍 </span>
        Explore
        </a>
      <a href="/" tabIndex={tabIndex}>
        <span aria-hidden="true">📚 </span>
        My Library
        </a>
      <a href="/" tabIndex={tabIndex}>
        <span aria-hidden="true">🤝</span>
        Find Collaborators
      </a>
      <a href="/" tabIndex={tabIndex}>
        <span aria-hidden="true">📝</span>
        Plan Sheet
      </a>
     
     
    </StyledMenu>
  )
}

Menu.propTypes = {
  open: bool.isRequired,
}

export default Menu;
