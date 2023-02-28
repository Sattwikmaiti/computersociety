import React from "react";
import "./Home.css";

import { useNavigate } from "react-router-dom";
import { useState } from "react";
import p1 from "../images/p2.png";
import p2 from "../images/p1.png";
import p3 from "../images/p3.png";
import p4 from "../images/p4.png";

import p from "./1.png";
const Home = () => {
  return (
    <> 
      <div className="imageslider container">
        KKKK
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

      <div className="motto ">
        <h2>OUR MOTTO</h2>
        <p style={{ fontSize: "30px" }}>
          TOGETHER WE ARE THE CSS FAMILY. WE STAND ALL UNITED .
        </p>
      </div>


      <div className="body">
        <h1 className="black-lives-matter"># COMPUTER SCIENCE SOCIETY </h1>
      </div>

<div className="we">
 <h1 className="container " style={{padding:'20px'}}>ABOUT US</h1>
<body>
	<section>
		<div class="pica">
			<div class="card">
				<div class="content">
					<div class="imgBx">
						<img src={p1}/>
					</div>
					<div class="contentBx">
						<h3>Lion<span>Happy Birthday</span></h3>
					</div>
				</div>
				<ul class="sci">
					<li>
						<a href="">happy</a>
					</li>
					<li>
						<a href="">birth</a>
					</li>
					<li>
						<a href="">day</a>
					</li>
				</ul>
			</div>
			<div class="card">
				<div class="content">
					<div class="imgBx">
          <img src={p1}/>
					</div>
					<div class="contentBx">
						<h3>Frog<span>Happy Birthday</span></h3>
					</div>
				</div>
				<ul class="sci">
					<li>
						<a href="">happy</a>
					</li>
					<li>
						<a href="">birth</a>
					</li>
					<li>
						<a href="">day</a>
					</li>
				</ul>
			</div>
			<div class="card">
				<div class="content">
					<div class="imgBx">
          <img src={p1}/>
					</div>
					<div class="contentBx">
						<h3>Giraffe<span>Happy Birthday</span></h3>
					</div>
				</div>
				<ul class="sci">
					<li>
						<a href="">happy</a>
					</li>
					<li>
						<a href="">birth</a>
					</li>
					<li>
						<a href="">day</a>
					</li>
				</ul>
			</div>
		</div>
	</section>
</body>
</div>
     

      <div className="services part">
        <div
          className="lol"
          style={{ fontSize: "35px", fontWeight: "bolder", color: "white" }}
        >
          OUR FACULTY ADVISOR
        </div>
        <div className="cont">
          <div className="p1" style={{ padding: "20px" }}>
            <img className="h" src={p1} alt="g" />
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
            <img className="h" src={p1} alt="g" />
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
            <img className="h" src={p1} alt="g" />
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
            <img className="h" src={p1} alt="g" />
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

      <div className="hod container" style={{display:'flex',flexDirection:'row'}}>
        <div className="picture" style={{padding:'30px'}}>
          <img
            src={p}
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
          <p style={{padding:'5px' ,fontSize:'17px',fontWeight:'bolder',}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          eum ex iure. Harum eius voluptatibus libero exercitationem alias
          doloribus, similique unde placeat sit quia hic praesentium quisquam
          eligendi enim. Nostrum.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          eum ex iure. Harum eius voluptatibus libero exercitationem alias
          doloribus, similique unde placeat sit quia hic praesentium quisquam
         
          </p>
        </div>
      </div>

      <div className="MAP">
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
