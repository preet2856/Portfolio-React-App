import React from 'react'
import './Services.css'
import HeartEmoji from '../../img/heartemoji.png'
import Glasses from '../../img/glasses.png'
import Humble from '../../img/humble.png' 
import Card from '../Card/Card'
import Resume from './Preet Gadhiya-FD.pdf'

const Services = () => {
  return (
    <div className='services'>
        {/* left side */}
        <div className="awesome">
            <span>My Awesome</span>
            <span>services</span>
            <span>Lorem Ispum is simply dummy text of printing of printing Lorem Ispum is simply dummy text of printing</span>
            <a href={Resume} download>
                <button className="button s-button">Download CV</button>
            </a>
            <div className="blur s-blur1" style={{background: "#abf1ff94"}}></div>
        </div>

        {/* right side */}
        <div className="cards">
            <div style={{left: '14rem'}}>
                <Card
                    emoji = {HeartEmoji}
                    heading = {'Design'}
                    detail = {"Figma, Sketch, Photoshop, Adobe, Adobe xd"}
                />
            </div>
            <div style={{ top: '12rem', left: '-4rem'}}>
                <Card
                    emoji = {Glasses}
                    heading = {'Developer'}
                    detail = {"Html, Css, Javascript, React"}
                />
            </div>
            <div style={{top: '19rem', left: '12rem'}}>
                <Card
                    emoji = {Humble}
                    heading = {'UI/UX'}
                    detail = {"Lorem ispum dummy text are usually use in section where we need some random text"}
                />
            </div>
            <div className="blur s-blur2" style={{background: "var(--purple)"}}></div>
        </div>
    </div>
  )
}

export default Services;
