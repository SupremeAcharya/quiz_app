import React from 'react'
import ShowSubject from './ShowSubject';
import image1 from '/image1.png'
import image2 from '/image2.png'
import image3 from '/image3.png'
import image4 from '/image4.png'

const HomePage = ({onClick}) => {
  const handleClick = (subject) => {
    onClick(subject);
  }
  
  return (
    <>
        <div className='welcome-text-area'>
          <p className='text first-line'>
            Welcome to the <br />
            <span className='second-line'><b>Frontend Quiz!</b> </span>
            </p>
          <p className='text last-line'>
            Pick a subject to get started. 
          </p>
        </div>
        <div className='subject'>
          <ShowSubject subject='HTML' images={image1} OnClick={handleClick}/>
          <ShowSubject subject='CSS' images={image2} OnClick={handleClick} />
          <ShowSubject subject='JavaScript' images={image3} OnClick={handleClick} />
          <ShowSubject subject='Accessibility' images={image4} OnClick={handleClick}/>
        </div>
    </>
  )
}
export default HomePage;
