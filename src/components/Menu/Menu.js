import React from 'react';
import { bool } from 'prop-types';
import { StyledMenu } from './Menu.styled';

const Menu = ({ open}) => {

  return (
    <StyledMenu open={open}>
      <h1 style={{ color: 'blue' }}>CONNECT</h1>
      <h2 style={{ color: 'blue' }}>QUICK LINK</h2>
      <h3 style={{ color: 'blue' }}>PATH'S PROGRAM</h3>
      <h4 style={{ color: 'blue' }}>CONTACT</h4>
    </StyledMenu>
  )
}

Menu.propTypes = {
  open: bool.isRequired,
}

export default Menu;