import React from 'react';

import { FooterOverlay, Newsletter } from '../../components';
import { FiFacebook, FiTwitter, FiInstagram} from 'react-icons/fi';

import './Footer.css';
import { ImOpt } from 'react-icons/im';

const Footer = () => (
  <div className='app__footer section__padding'>
    <FooterOverlay/>
    <Newsletter/>
  </div>
);

export default Footer;
