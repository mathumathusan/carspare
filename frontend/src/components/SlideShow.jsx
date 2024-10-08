import React from 'react'
import { Slide } from 'react-slideshow-image';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import Footer from './Footer';
import NavBar from './NavBar';

const fadeImages = [
    {
      url: 'https://images.unsplash.com/photo-1524102724373-bcf6ed410592?q=80&w=2055&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      caption: 'Slide 1'
    },
    {
      url: 'https://img.freepik.com/free-photo/sports-car-driving-asphalt-road-night-generative-ai_188544-8052.jpg?size=626&ext=jpg&ga=GA1.1.256784782.1719222570&semt=ais_hybrid',
      caption: 'Slide 2'
    },
    {
      url: 'https://img.freepik.com/free-photo/cyberpunk-urban-scenery-with-car_23-2150712310.jpg?size=626&ext=jpg&ga=GA1.2.256784782.1719222570&semt=ais_hybrid',
      caption: 'Slide 3'
    },
  ];

function SlideShow() {
  return (
    <>
 
    <div className="slide-container">
        {/* <Slide>
         {slideImages.map((slideImage, index)=> (
            <div key={index}>
              <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
                <span style={spanStyle}>{slideImage.caption}</span>
              </div>
            </div>
          ))} 
        </Slide> */}
        <Fade>
        {fadeImages.map((fadeImage, index) => (
          <div key={index} style={{display:'flex',flexDirection:'column'}}>
            <img style={{ width: '100vw',height:'100vh' }} src={fadeImage.url} />
          </div>
        ))}
      </Fade>
      </div>
 
      </>
  )
  
}

export default SlideShow