import React from 'react'
import "./Members.css"
import p1 from "./p1.jpeg"
import Dive from './Button';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Members = () => {
  return (
  <>



  <h1><center>Team CSS</center></h1>
    <div className="container" style={{padding:'30px'}}>
      <div className="box" style={{backgroundColor:'white'}}>
      <div class="row" style={{padding:'10px'}}>
      <div class="col-sm-4" style={{padding:'10px'}} ><img src={p1} value="Archisman" data-toggle="modal" data-target="#exampleModal"/> <div className="name">Archisman   <div>
      <Dive value="Hello, world!" />
    </div></div></div>
  <div class="col-sm-4" style={{padding:'10px'}}><img src={p1} /><div className="name">Archisman</div></div>
  <div class="col-sm-4" style={{padding:'10px'}}><img src={p1} /> <div className="name">Archisman</div> </div>

</div>
<div class="row" style={{padding:'10px'}}>

  <div class="col-sm-4" style={{padding:'10px'}}><img src={p1} /><div className="name">Archisman</div></div>
  <div class="col-sm-4" style={{padding:'10px'}}><img src={p1} /><div className="name">Archisman</div></div>
  <div class="col-sm-4" style={{padding:'10px'}}><img src={p1} /><div className="name">Archisman</div></div>
</div>
<div class="row" style={{padding:'10px'}}>
 
  <div class="col-sm-4" style={{padding:'10px'}}><img src={p1} /><div className="name">Archisman</div></div>
  <div class="col-sm-4" style={{padding:'10px'}}><img src={p1} /><div className="name">Archisman</div> </div>
  <div class="col-sm-4" style={{padding:'10px'}}><img src={p1} /><div className="name">Archisman</div></div>
</div>
      </div>
    </div>
    <div className="container" style={{padding:'30px'}}>
      <div className="box" style={{backgroundColor:'white'}}>
      <div class="row">
  <div class="col-sm-4">.col-sm-4</div>
  <div class="col-sm-4">.col-sm-4</div>
  <div class="col-sm-4">.col-sm-4</div>
</div>
<div class="row">
  <div class="col-sm-4">.col-sm-4</div>
  <div class="col-sm-4">.col-sm-4</div>
  <div class="col-sm-4">.col-sm-4</div>
</div>
<div class="row">
  <div class="col-sm-4">.col-sm-4</div>
  <div class="col-sm-4">.col-sm-4</div>
  <div class="col-sm-4">.col-sm-4</div>
</div>
      </div>
    </div>
    <div className="container" style={{padding:'30px'}}>
      <div className="box" style={{backgroundColor:'white'}}>
      <div class="row">
  <div class="col-sm-4">.col-sm-4</div>
  <div class="col-sm-4">.col-sm-4</div>
  <div class="col-sm-4">.col-sm-4</div>
</div>
<div class="row">
  <div class="col-sm-4">.col-sm-4</div>
  <div class="col-sm-4">.col-sm-4</div>
  <div class="col-sm-4">.col-sm-4</div>
</div>
<div class="row">
  <div class="col-sm-4">.col-sm-4</div>
  <div class="col-sm-4">.col-sm-4</div>
  <div class="col-sm-4">.col-sm-4</div>
</div>
      </div>
    </div>
  </>
  )
}

export default Members
