import React from 'react';
import './Style.css';
import pic1 from "../Assets/pic1.jpg";
import personal from '../Assets/personal.pdf';



const About =()=> {
    return(
        <div id="about">
            <div className="container">
                <div className="row main-about-content">
                    <div className="col-md-6">
                       <h1>About Me</h1>
                       <p>Talented in project management, team leadership and independent problem solving. Highly organized 
                           multitasking with expertise in scheduling projects, enhancing designs and verifying code.</p>
                        <ul className="about-info px-md-0 px-2">
                            <li className="d-flex">
                                <span>Name: Atijosan Babatunde Christian</span>
                            </li>
                            <li className="d-flex">
                                <span>Date of birth: January 21 </span>
                            </li>
                            <li className="d-flex">
                                <span>Address: 54, Ile-eja Demurin Street, Ketu Lagos</span>
                            </li>
                            <li className="d-flex">
                                <span>Email: atijosanbabatunde@gmail.com</span>
                            </li>
                            <li className="d-flex">
                                <span>Phone: <span className="num">09034775269,07011300526</span></span>
                            </li>
                        </ul>

                        <div className="about-button">
                             <a href={personal} className="btn-outline-primary btn-white">DOWNLOAD CV</a>
                        </div>
                           
                    </div>

                    <div className="col-md-6 sm-4">
                        <div className="image-box">
                            <img src={pic1} className="img-fluid" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default About