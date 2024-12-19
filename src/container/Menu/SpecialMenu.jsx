import React from 'react';
import {SubHeading,MenuItem} from '../../components'
import {images,data} from '../../constants'
import './SpecialMenu.css';
const wines=data.wines;
const cocktails = data.cocktails;
const SpecialMenu = () => (
  <div className='app__specialMenu flex__center section__padding' id='menu'>
    <div className='app__specialMenu-title'>
      <SubHeading title="Menu that fits your palatte"/>
      <h1 className='headtext__cormorant'>Today's Special</h1>
    </div>
    <div className='app__specialMenu-menu'>
      <div className='app__specialMenu-menu_wine flex__center'>
        <p className='app__specialMenu-menu_heading'>Wine & Beer</p>
        <div className='app__specialMenu-menu_items'>
        {wines.map((wine,index)=> (
          <MenuItem key={wine.title + index} title={wine.title} price={wine.price} tags={wine.tags}/>
          // <MenuItem key={`${wine.title}-${index}`} title={wine.title} price={wine.price} tags={wine.tags} />

        ))}
        </div>
      </div>
      <div className='app__specialMenu-menu_img'>
        <img src={images.menu} alt='menu img'/>
      </div>
      <div className='app__specialMenu-menu_cocktails flex__center'>
        <p className='app__specialMenu-menu_heading'>Cocktails</p>
        <div className='app__specialMenu-menu_items'>
        {cocktails.map((cocktails,index)=> (
          <MenuItem key={cocktails.title+index} title={cocktails.title} price={cocktails.price} tags={cocktails.tags}/>
          // <MenuItem key={`${cocktail.title}-${index}`} title={cocktail.title} price={cocktail.price} tags={cocktail.tags} />
          
        ))}
        </div>
      </div>
    </div>

    <div style={{marginTop:'15px'}}>
      <button type="button" className='custom_button'>view more</button>

    </div>

  </div>
);

export default SpecialMenu;
