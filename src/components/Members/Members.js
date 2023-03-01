import React from 'react'
import Avatar from "./Avatar.js"
import p1 from "./p1.jpeg"
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
     
              <div className="row" style={{padding:'10px',}}>
                <div className="col">
                  <img src={p1}  data-toggle="modal" data-target="#exampleModal"/>
                  <Avatar {...ArchismanDas} />
                
                   
                </div>
                <div className="col">
                  <img src={p1}  data-toggle="modal" data-target="#exampleModal" />
                  <Avatar {...ArchismanDas} />
                </div>
                <div className="col">
                  <img src={p1}  data-toggle="modal" data-target="#exampleModal"/>
                  <Avatar {...ArchismanDas} />
                </div>

              </div>
              <div className="row" style={{padding:'10px'}}>
                <div className="col">
                  <img src={p1}  data-toggle="modal" data-target="#exampleModal"/>
                  <Avatar {...ArchismanDas} />
                   
                </div>
                <div className="col">
                  <img src={p1}  data-toggle="modal" data-target="#exampleModal"/>
                  <Avatar {...ArchismanDas} />
                </div>
                <div className="col">
                  <img src={p1}  data-toggle="modal" data-target="#exampleModal"/>
                  <Avatar {...ArchismanDas} />
                </div>

              </div>
              <div className="row" style={{padding:'10px'}}>
                <div className="col">
                  <img src={p1}  data-toggle="modal" data-target="#exampleModal"/>
                  <Avatar {...ArchismanDas} />
                   
                </div>
                <div className="col">
                  <img src={p1}  data-toggle="modal" data-target="#exampleModal"/>
                  <Avatar {...ArchismanDas} />
                </div>
                <div className="col">
                  <img src={p1}  data-toggle="modal" data-target="#exampleModal"/>
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
     
              <div className="row" style={{padding:'10px',}}>
                <div className="col">
                  <img src={p1}  data-toggle="modal" data-target="#exampleModal"/>
                  <Avatar {...ArchismanDas} />
                
                   
                </div>
                <div className="col">
                  <img src={p1}  data-toggle="modal" data-target="#exampleModal" />
                  <Avatar {...ArchismanDas} />
                </div>
                <div className="col">
                  <img src={p1}  data-toggle="modal" data-target="#exampleModal"/>
                  <Avatar {...ArchismanDas} />
                </div>

              </div>
              <div className="row" style={{padding:'10px'}}>
                <div className="col">
                  <img src={p1}  data-toggle="modal" data-target="#exampleModal"/>
                  <Avatar {...ArchismanDas} />
                   
                </div>
                <div className="col">
                  <img src={p1}  data-toggle="modal" data-target="#exampleModal"/>
                  <Avatar {...ArchismanDas} />
                </div>
                <div className="col">
                  <img src={p1}  data-toggle="modal" data-target="#exampleModal"/>
                  <Avatar {...ArchismanDas} />
                </div>

              </div>
              <div className="row" style={{padding:'10px'}}>
                <div className="col">
                  <img src={p1}  data-toggle="modal" data-target="#exampleModal"/>
                  <Avatar {...ArchismanDas} />
                   
                </div>
                <div className="col">
                  <img src={p1}  data-toggle="modal" data-target="#exampleModal"/>
                  <Avatar {...ArchismanDas} />
                </div>
                <div className="col">
                  <img src={p1}  data-toggle="modal" data-target="#exampleModal"/>
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
