import React from 'react'
import './Alumini.scss'
import p1 from '../images/himanshu.jfif'
import p2 from '../images/anurag.jfif'
import p3 from '../images/abhishek.jfif'
import p4 from '../images/ks.jfif'
const Alumini = () => {
  


  return (

    <div>
      <center><h1>Our Alumini...</h1> </center>
     
<div class="timeline"> 
  <div class="timeline__event  animated fadeInUp delay-3s timeline__event--type1">
    <div class="timeline__event__icon ">
      <i class="lni-cake"></i>

    </div>
    <div class="timeline__event__date">
    <img src={p1} style={{height:'190px' ,width:'190px'}}/>
    </div>
    <div class="timeline__event__content ">
      <div class="timeline__event__title">
      <h1>
          HIMANSHU KHAITAN
        </h1>
      </div>
      <div class="timeline__event__description">
       
        <p>
An entrepreneur, A Social Media Manager, A Web Developer, A Graphic Designer, A UI/UX Beginner, and above all a Student 📚 trying to make it through. Hunger stands to be my powerhouse.</p>
      </div>
    </div>
  </div>
  <div class="timeline__event animated fadeInUp delay-2s timeline__event--type2">
    <div class="timeline__event__icon">
      <i class="lni-burger"></i>

    </div>
    <div class="timeline__event__date">
      <img src={p2} style={{height:'190px' ,width:'190px'}}/>
      
    </div>
    <div class="timeline__event__content">
      <div class="timeline__event__title">
        <h1>ANURAG SHARMA</h1>
      </div>
      <div class="timeline__event__description">
        <p>Currently pursuing my B.tech in Computer Science and Engineering from NIT Durgapur.
Interested in development.</p>
      </div>
    </div>
  </div>
  <div class="timeline__event animated fadeInUp delay-1s timeline__event--type3">
    <div class="timeline__event__icon">
      <i class="lni-slim"></i>

    </div>
    <div class="timeline__event__date">
       <img src={p3} style={{height:'190px' ,width:'190px'}}/>
    </div>
    <div class="timeline__event__content">
      <div class="timeline__event__title">
        <h1>ABHISHEK BASU</h1>
      </div>
      <div class="timeline__event__description">
        <p>Trying to balance my time between pushing the limits of computer vision and optimizing solutions for complex programming problems.</p>
      </div>

    </div>
  </div>
 
  
  <div class="timeline__event animated fadeInUp timeline__event--type1">
    <div class="timeline__event__icon">
      <i class="lni-cake"></i>

    </div>
    <div class="timeline__event__date">
       <img src={p4} style={{height:'190px' ,width:'190px'}}/>
    </div>
    <div class="timeline__event__content">
      <div class="timeline__event__title">
        <h1>Kshitij Shrivastava </h1>
      </div>
      <div class="timeline__event__description">
        <p>I am pursuing BTech CSE (Third Year) from NIT Durgapur, interested in machine learning, iOS app development and competitive programming. I am a passionate learner, seeking software development roles.</p>
      </div>
    </div>
  </div>

</div>
    </div>
  )
}

export default Alumini
