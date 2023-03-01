import React from 'react'
import Avatar from "./Avatar.js"
import p1 from "./p1.jpeg"
import abhishek from "./abhishek.jfif"
import aditya from "./aditya.jfif"
import anurag from "./anurag.jfif"
import archisman from "./archisman.jfif"
import ayush from "./ayush.jfif"
import gulshan from "./gulshan.jfif"
import harshit from "./harshit.jfif"
import himanshu from "./himanshu.jfif"
import ishan from "./ishan.jfif"
import ks from "./ks.jfif"
import nilashis from "./nilashis.jfif"
import raju from "./raju.jfif"
import satya from "./satya.jfif"
import satyam from "./satyam.jfif"
import shakti from "./shakti.jfif"
import shubham from "./shubham.jfif"
import sindhu from "./sindhu.jfif"
import suddhashil from "./suddhashil.jfif"


import "./Members.css"
const Members = () => {
    const ArchismanDas={
        name: "ArchismanDas",
        motto:"Life is success",
        url:"https://www.linkedin.com/in/archishman-das-4584b21a0/",
        
        
    }
  return (
    <>
   
   
    <div className="wrapper">
 

    <div className="container" style={{padding:'30px',}}>
  <center><div className="year" style={{color:'black',fontWeight:'bolder',fontSize:'40px'}}>
        Office Bearer
      </div>
      </center>
  <div className="box" style={{padding:'10px'}}>
     
              <div className="row att" style={{padding:'10px',}}>
                <div className="col">
                  <img src={ks}  data-toggle="modal" data-target="#exampleModal"/>
                  <Avatar {...ArchismanDas} />
                
                   
                </div>
                <div className="col">
                  <img src={ishan}  data-toggle="modal" data-target="#exampleModal" />
                  <Avatar {...ArchismanDas} />
                </div>
                <div className="col">
                  <img src={abhishek}  data-toggle="modal" data-target="#exampleModal"/>
                  <Avatar {...ArchismanDas} />
                </div>

              </div>
              <div className="row att" style={{padding:'10px'}}>
                <div className="col">
                  <img src={ayush}  data-toggle="modal" data-target="#exampleModal"/>
                  <Avatar {...ArchismanDas} />
                   
                </div>
                <div className="col">
                  <img src={gulshan}  data-toggle="modal" data-target="#exampleModal"/>
                  <Avatar {...ArchismanDas} />
                </div>
                <div className="col">
                  <img src={harshit}  data-toggle="modal" data-target="#exampleModal"/>
                  <Avatar {...ArchismanDas} />
                </div>

              </div>
              

            
  </div>

</div>

<div className="container" style={{padding:'30px',}}>
<center><div className="year" style={{color:'black',fontWeight:'bolder',fontSize:'40px'}}>
        Third Year Inductee
      </div>
      </center>
  <div className="box" style={{padding:'10px'}}>
     
              <div className="row att" style={{padding:'10px',}}>
                <div className="col">
                  <img src={archisman}  data-toggle="modal" data-target="#exampleModal"/>
                  <Avatar {...ArchismanDas} />
                
                   
                </div>
                <div className="col">
                  <img src={aditya}  data-toggle="modal" data-target="#exampleModal"/>
                  <Avatar {...ArchismanDas} />
                
                   
                </div>
                <div className="col">
                  <img src={anurag}  data-toggle="modal" data-target="#exampleModal" />
                  <Avatar {...ArchismanDas} />
                </div>
                <div className="col">
                  <img src={raju}  data-toggle="modal" data-target="#exampleModal"/>
                  <Avatar {...ArchismanDas} />
                </div>

              </div>
              <div className="row att" style={{padding:'10px'}}>
              <div className="col">
                  <img src={satya}  data-toggle="modal" data-target="#exampleModal"/>
                  <Avatar {...ArchismanDas} />
                
                   
                </div>
                <div className="col">
                  <img src={satyam}  data-toggle="modal" data-target="#exampleModal"/>
                  <Avatar {...ArchismanDas} />
                   
                </div>
                <div className="col">
                  <img src={shakti}  data-toggle="modal" data-target="#exampleModal"/>
                  <Avatar {...ArchismanDas} />
                </div>
                <div className="col">
                  <img src={shubham}  data-toggle="modal" data-target="#exampleModal"/>
                  <Avatar {...ArchismanDas} />
                </div>

              </div>
              <div className="row att" style={{padding:'10px'}}>
              <div className="col">
                  <img src={sindhu}  data-toggle="modal" data-target="#exampleModal"/>
                  <Avatar {...ArchismanDas} />
                
                   
                </div>
                <div className="col">
                  <img src={suddhashil}  data-toggle="modal" data-target="#exampleModal"/>
                  <Avatar {...ArchismanDas} />
                   
                </div>
                <div className="col">
                  <img src={nilashis}  data-toggle="modal" data-target="#exampleModal"/>
                  <Avatar {...ArchismanDas} />
                </div>
                <div className="col">
                  <img src={himanshu}  data-toggle="modal" data-target="#exampleModal"/>
                  <Avatar {...ArchismanDas} />
                </div>

              </div>
  </div>

</div>
</div>
</>

  )
}

export default Members
