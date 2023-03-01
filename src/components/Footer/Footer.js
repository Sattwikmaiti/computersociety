import React from 'react'
import './Footer.css'
import GoogleIcon from '@mui/icons-material/Google';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import NavigationIcon from '@mui/icons-material/Navigation';
import emailjs from '@emailjs/browser';
import { useState } from 'react';
import pp from "./CSS.mp4"
import p1 from "../Home/p3.png"

const Footer = () => {
  const [name, setname] = useState('');
  const [emailid, setemailid] = useState('');
  const [message, setmessage] = useState('');
  const [isopen, setisopen] = useState(true);

      
  const sendEmail=(e)=> {
    e.preventDefault();
 
  console.log(name);
  console.log(emailid);
  console.log(message)
  setmessage('');
  setemailid('');
  setname('');
  setisopen(false)

    
  
      
emailjs.send( 'service_mw422g6', 'template_thnxeur', {
       
        from_name: name,
        message: message,
         reply_to :emailid,
           
  
  
    }, 'UHku05c1fsztWeJut')
      .then((result) => {
  
          console.log(result.text);
          setname('');
    setemailid('');
    setmessage('');
    window.alert("Your Email Has Been Succesfully sent to CSS Team. Thanks For it!!")
   
      }, (error) => {
          console.log(error.text);
      }); 

    }
  return (
    <>
    
    <div className="connect"  style={{padding :'10px'}}>
             
             <center className="container all" style={{padding:'100px'}}>

               <h3 style={{padding:'10px',fontWeight:'bolder'}}>Connect Us</h3>
               
             <div className="ic" >
              
              <div className="p1">
             <a href="https://mui.com/material-ui/icons/"><GoogleIcon className="opl" sx={{ fontSize: 40 ,color:'white'}} /></a>
             </div>
             <div className="p2">
             <TwitterIcon className="opl" sx={{ fontSize: 40 ,color:'white'}}/>
             </div>
             <div className="p3">
             <GitHubIcon className="opl" sx={{ fontSize: 40 ,color:'white'}}/>
             </div>
             <div className="p4">
             <LinkedInIcon className="opl" sx={{ fontSize: 40 ,color:'white'}}/>
             </div>
             <div className="p5">
             <FacebookIcon className="opl" sx={{ fontSize: 40 ,color:'white'}}/>
             </div>
               </div>
               
               </center>
               
       </div>

   <center>
        <div className="containerr cont" id="gg">
  <div className="pay">
Want To Join CSS ? Fill it UP!!
  </div>
 

   <div className="bodyy">
    
   <div className="forms">
   <form >

   <div className="txt">
  <input
    type="text"
    id="name"
    name="name"
    value={name}
    placeholder="NAME"
    onChange={(event) =>
      setname(event.target.value)
    } required
  
  />
</div>
 
<div className="txt">
  <input 
    type="email"
    id="emailid"
    name="emailid"
    value={emailid}
    placeholder="EMAIL"
    onChange={(event) => {
      setemailid(event.target.value);
    }}
    required
  />
  </div>
 <div className="txt">


<textarea 
    type="text"
    id="message"
    rows="4" cols="50"
    name="message"
    value={message}
    placeholder="LEAVE A MESSAGE FOR US"
    
   style={{opacity:'1',fontSize:'14px'}}
    onChange={(event) => {
      setmessage(event.target.value);
    }}
    required
  />
</div>
  
     <div className="txt">
  <button type="submit"  className="btn btn-two" onClick={sendEmail 
}>Submit</button>
</div>
 
  
</form>     


                                
    </div>
    </div>
    
    </div>
            
    </center>
    </>
  )
}

export default Footer
