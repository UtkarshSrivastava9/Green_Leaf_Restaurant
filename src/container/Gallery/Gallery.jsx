import React from 'react';
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import { SubHeading } from '../../components';
import { images} from '../../constants';

import './Gallery.css';
const galleryImages =[images.gallery01,images.gallery02,images.gallery03,images.gallery04]

const Gallery = () => {
  const scrollref=React.useRef(null);
  const scroll =(direction) => {
    const { current } = scrollref;

    if (direction==='left'){
      current.scrollLeft -= 300;
    }
    else{
      current.scrollLeft +=300;
    }
  }


  return (
    <div className='app__gallery flex__center'>
      <div className='app__gallery-content'>
        <SubHeading title="Instagram"/>
        <br />
        <h1 className='headtext__cormorant'>Photo Gallery</h1>
        <p className='p__opensans' style={{ color:"#AAA", marginTop:"2rem"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum atque excepturi odit laudantium nisi, cupiditate deserunt est laboriosam, obcaecati repellat ab eum esse ullam aut eveniet dolores. Voluptates, labore earum.</p>
        <button className='custom__button' type='button'>View More</button>
      </div>
      <div className='app__gallery-images'>
        <div className='app__gallery-images_container' ref={scrollref}>
          {galleryImages.map((image,index) => (
            <div className='app__gallery-image_card flex__center' key={'gallery_image-${index + 1}'}>
              <img src={image} alt='gallery Image' />
              <BsInstagram className='gallery__image-icon'/>
            </div>
          ))}

        </div>
        <div className='app__gallery-image_arrows'>
          <BsArrowLeftShort className='gallery__arrow-icon' onClick={() => scroll('left')}/>
          <BsArrowRightShort className='gallery__arrow-icon' onClick={() => scroll('right')}/>
        </div>
      </div>
      
    </div>
  )
};

export default Gallery;
