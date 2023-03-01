import React from "react";
import "./Home.css";

import { useNavigate } from "react-router-dom";
import { useState } from "react";
import p1 from "../images/p2.png";
import p2 from "../images/p1.png";
import p3 from "../images/p3.png";
import p4 from "../images/p4.png";
import subrata from "../images/subrata.jpeg"
import sajal from "../images/sajal.jpeg"
import parag from "../images/parag.jpeg"
import animesh from "../images/animesh.jpeg"
import pp1 from "../images/1.png"
import pp2 from "../images/2.png"
import pp3 from "../images/3.png"
import p from "./1.png";
const Home = () => {
  function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);
  
  return (
    <> 
      <div className="imageslider container ">
        
        <div
          id="carouselExampleIndicators"
          class="carousel slide"
          data-ride="carousel"
          data-wrap="true"
          data-interval="2000"
        >
          <ol class="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="0"
              class="active"
            ></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img class="cara d-block w-100" src={p3} alt="First slide" />
            </div>
            <div class="carousel-item">
              <img class="cara d-block w-100" src={p2} alt="Second slide" />
            </div>
            <div class="carousel-item">
              <img class="cara d-block w-100" src={p3} alt="Third slide" />
            </div>
            <div class="carousel-item">
              <img class=" cara d-block w-100" src={p4} alt="Fourth slide" />
            </div>
          </div>

          <a
            class="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>

      <div className=" reveal motto ">
        <h2>OUR MOTTO</h2>
        <p style={{ fontSize: "30px" }}>
          TOGETHER WE ARE THE CSS FAMILY. WE STAND ALL UNITED .
        </p>
      </div>


      <div className=" reveal body">
        <h1 className="black-lives-matter"># COMPUTER SCIENCE SOCIETY </h1>
      </div>

<div className=" reveal we">
 <h1 className="pica" style={{padding:'20px' }}>ABOUT US</h1>
<body>
	<section>
		<div class="pica">
			<div class="card">
				<div class="content">
					<div class="imgBx">
						<img src={pp1}/>
					</div>
					<div class="contentBx">
						MOTTO
					</div>
				</div>
				<ul class="sci">
					<li>
						WE WILL DO IT ALL HEARTS TOGETHER.
					</li>
				
				</ul>
			</div>
			<div class="card">
				<div class="content">
					<div class="imgBx">
          <img src={pp2}/>
					</div>
					<div class="contentBx">
					MISSION
					</div>
				</div>
				<ul class="sci">
          <li>
          TOGETHER WE BUILD IT .
          </li>
					
				</ul>
			</div>
			<div class="card">
				<div class="content">
					<div class="imgBx">
          <img src={pp3}/>
					</div>
					<div class="contentBx">
					VALUE
					</div>
				</div>
				<ul class="sci">
					<li >
             KEEP CALM .KEEP CSSS
					</li>
				
				</ul>
			</div>
		</div>
	</section>
</body>
</div>


      <div className="reveal services part">
        <div
          className="lol"
          style={{ fontSize: "35px", fontWeight: "bolder", color: "white" }}
        >
          OUR FACULTY ADVISOR
        </div>
        <div className="cont">
          <div className="p1" style={{ padding: "20px" }}>
            <img className="h" src={parag} alt="g" />
            <svg>
              <path
                d="M 87 1 A 86 86 0 1 1 86.9 1"
                stroke="white"
                stroke-width="2"
                fill="none"
              />
            </svg>
          </div>
        </div>
        <div className="cont">
          <div className="p1" style={{ padding: "20px" }}>
            <img className="h" src={sajal} alt="g" />
            <svg>
              <path
                d="M 87 1 A 86 86 0 1 1 86.9 1"
                stroke="white"
                stroke-width="2"
                fill="none"
              />
            </svg>
          </div>
        </div>
        <div className="cont">
          <div className="p1" style={{ padding: "20px" }}>
            <img className="h" src={subrata} alt="g" />
            <svg>
              <path
                d="M 87 1 A 86 86 0 1 1 86.9 1"
                stroke="white"
                stroke-width="2"
                fill="none"
              />
            </svg>
          </div>
        </div>
        <div className="cont">
          <div className="p1" style={{ padding: "20px" }}>
            <img className="h" src={animesh} alt="g" />
            <svg>
              <path
                d="M 87 1 A 86 86 0 1 1 86.9 1"
                stroke="white"
                stroke-width="2"
                fill="none"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className="reveal hod container" style={{display:'flex',flexDirection:'row'}}>
        <div className="picture" style={{padding:'30px'}}>
          <img
            src={subrata}
            style={{
              height: "400px ",
              width: "30vw",
              padding: "0px 0px 50px 10px",
            }}

            class="floating-img" alt="my floating image"
          />
        </div>
        <div className="lecture" >
          <h1 style={{fontSize:'40px'}}>HOD PERCEPTION </h1>
          <p style={{padding:'5px' ,fontSize:'17px',fontWeight:'bolder',}}>
          The CSE Department at NIT Durgapur has a rich legacy of producing successful alumni. To continue this legacy, the department is proud to announce the formation of CSS (CSE Student's Society). This society will provide students with opportunities for networking, skill development, and talent showcase. The society will host regular events involving alumni, industry experts, and notable academicians. Follow this space for updates and exciting opportunities!
          </p>
        </div>
      </div>

      <div className="reveal MAP">
        <div
          className="g"
          style={{
            fontSize: "35px",
            fontWeight: "bolder",
            color: "white",
            padding: "10px 20px 0 500px",
          }}
        >
          GET IN TOUCH
        </div>

        <img
          src={p}
          style={{
            height: "500px ",
            width: "80vw",
            padding: "0px 0px 0 200px",
          }}
        />
      </div>
    </>
  );
};

export default Home;
