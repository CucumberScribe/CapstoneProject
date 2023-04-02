import React from 'react';
import { bool } from 'prop-types';
import { StyledMenu } from './Menu.styled';

const Menu = ({ open}) => {

  const myText = "PATH'S PROGRAM";



  return (
    <StyledMenu open={open}>
      <h1 style={{ color: 'blue' }}>CONNECT</h1>
      <h2 style={{ color: 'blue' }}>QUICK LINK</h2>
      <div >
      <a style={{ color: 'blue'}}>{myText}</a>
      </div>
      <h4 style={{ color: 'blue' }}>CONTACT</h4>

    </StyledMenu>
  )
}



Menu.propTypes = {
  open: bool.isRequired,
}

export default Menu;