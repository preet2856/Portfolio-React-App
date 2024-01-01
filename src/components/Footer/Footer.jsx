import React from 'react';
import './Footer.css';
import wave from '../../img/wave.png';
import Insta from '@iconscout/react-unicons/icons/uil-instagram';
import Face from '@iconscout/react-unicons/icons/uil-facebook';
import Git from '@iconscout/react-unicons/icons/uil-github';

const Footer = () => {
  	return (
    	<div className='footer'>
      		<img src={wave} alt="" style={{width: '100%'}}/>
      		<div className="f-content">
        		<span>preetgadhiya@gmail.com</span>
        		<div className="f-icons">
          			<a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            			<Insta color='white' size='3rem'/>
          			</a>
          			<a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            			<Face color='white' size='3rem'/>
          			</a>
          			<a href="https://github.com" target="_blank" rel="noopener noreferrer">
            			<Git color='white' size='3rem'/>
          			</a>
        		</div>
      		</div>
    	</div>
  	);
}

export default Footer;

