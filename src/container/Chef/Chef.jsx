import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className='app_bg app__wrapper section__padding'>
    <div className='app__wrapper_img app__wrapper_img-reverse'>
      <img src={images.chef} alt="chef" />
    </div>
    <div className='app__wrapper_info'>
      <SubHeading title="Chef's Word"/>
      <h1 className='headtext__cormorant'>What We Believe In</h1>
      <div className='app__chef-content'>
        <div className='app__chef-content_quote'>
          <img src={images.quote} alt="quote" />
          <p className='p__opensans'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum atque excepturi odit laudantium nisi, cupiditate deserunt est laboriosam, obcaecati repellat ab eum esse ullam aut eveniet dolores. Voluptates, labore earum.</p>
        </div>
        <p className='p__opensans'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus commodi a, corporis aut itaque delectus repudiandae aspernatur quis alias dicta sed saepe quaerat atque nam excepturi ratione qui. Suscipit, beatae.</p>


      </div>
      <div className='app__chef-sign'>
        <p>Kevin Luo</p>

      </div>
    </div>
  </div>
);

export default Chef;
