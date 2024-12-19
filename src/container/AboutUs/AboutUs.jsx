import React from 'react';
import {images} from '../../constants';

import './AboutUs.css';

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center space__section' id='about'>
    <div className='app__aboutus-overlay flex__center'>
      <img src={images.G} alt="G" />
    </div>


    <div className='app__aboutus-content flex__center'>
      <div className='app__abooutus-content_about'>
        <h1 className='headtext__cormorant'>About us</h1>
        <img src={images.spoon} alt="about_spoon" className='spoon__img' />
        <p className='p__opensans'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, accusantium! Doloribus tempore magnam officia, dolorum fugit accusantium facilis dignissimos esse iure quod earum excepturi omnis at voluptates ut! Sapiente, expedita!</p>
        <button type='button' className='custom__button'>Know More</button>
      </div>
    </div>

    <div className='app__aboutus-content_knife flex__center'>

      <img src={images.knife} alt="knnife" />
    </div>

    <div className='app__aboutus-content flex__center'>
      <div className='app__abooutus-content_history'>
        <h1 className='headtext__cormorant'>Our History</h1>
        <img src={images.spoon} alt="about_spoon" className='spoon__img' />
        <p className='p__opensans'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, accusantium! Doloribus tempore magnam officia, dolorum fugit accusantium facilis dignissimos esse iure quod earum excepturi omnis at voluptates ut! Sapiente, expedita!</p>
        <button type='button' className='custom__button'>Know More</button>
      </div>
    </div>
  </div>
);

export default AboutUs;
