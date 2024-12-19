import React from 'react';
import {images} from '../../constants';
import './Header.css';
import { SubHeading } from '../../components';

const Header = () => (
  <div className='app__header app__wrapper selection__padding' id='home'>
    <div className='app__wrapper_info'>
      <SubHeading title="Chase the new flavour"/>
      <h1 className='app__header-h1'>The key to fine dining</h1>
      <p className='p__opensans' style={{margin:'2rem 0'}}>Where Good Food Meets Great Memories.</p>
      <button type='button' className='custom__button'> Explore Menu</button>
    </div>
    <div className='app__wrapper_img'>
      <img src={images.welcome} alt="header img" />

    </div>
    Header
  </div>
);

export default Header;
