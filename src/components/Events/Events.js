import React from 'react'
import "./Events.css"

const Events = () => {
  return (
    <div>
      <div class="content">
  <h1><center style={{backgroundColor:'black'}}>TIMELINE</center></h1>
</div>
<div class="timee">
  <div class="x left">
    <p>
      <i class="fa fa-code-fork" aria-hidden="true"></i>
    <div class="content">
      <h2>2-02-2023</h2>
      <p>The Club CSS was officially hosted on campus</p>
    </div>
    </p>
  </div>
  <div class="x right">
    <div class="content">
    <h2>3-02-2023</h2>
      <p>The Office Bearers were inducted</p>
     </div>
  </div>
    <div class="x left">
    <div className="content">
    <h2>4-02-2023</h2>
      <p>The Third year Were inducted</p>
    </div>
  </div>
    <div class="x right">
    <div className="content">
    <h2>5-02-2023</h2>
      <p>Fresher party for 2nd year </p>
    </div>
  </div>
  <div class="x left">
    <div className="content"> <h2>1-03-2023</h2>
      <p>Invitation of induction for 2nd year</p>
      </div>
  </div>
    <div class="x right">
    <div className="content"> <h2>2-03-2023</h2>
      <p>Induction date for second years </p></div>
  </div>
</div>
      
    </div>
  )
}

export default Events
