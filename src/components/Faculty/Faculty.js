import React from 'react'
import './Faculty.css'
import p from './1.mp4'
import p1 from "../images/p2.png";
const Faculty = () => {
  return (
    <div className="container">
     
     <video poster ={p1}width="800" height="500" controls autoPlay muted>
      <source src={p} type="video/mp4"/>
     </video>
    </div>
  )
}

export default Faculty
