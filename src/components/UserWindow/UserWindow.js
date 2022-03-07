import React, { useState, useEffect } from 'react'
import Burger from '../Burger'

export default function UserWindow() {
  const [screenSize, getDimension] = useState({
    dynamicWidth: window.innerWidth,
    dynamicHeight: window.innerHeight
  });
  const setDimension = () => {
    getDimension({
      dynamicWidth: window.innerWidth,
      dynamicHeight: window.innerHeight
    })
  }
  
  useEffect(() => {
    window.addEventListener('resize', setDimension);
    
    return(() => {
        window.removeEventListener('resize', setDimension);
    })
  }, [screenSize])

  
  console.log(screenSize.dynamicWidth);
  return (
    <>
      <ul>
        <li>Width: <strong>{screenSize.dynamicWidth}</strong></li>
        <li>Height: <strong>{screenSize.dynamicHeight}</strong></li>
      </ul>    
      {/* <Burger windowWidth={screenSize.dynamicWidth}/> */}
    </>
  )
}