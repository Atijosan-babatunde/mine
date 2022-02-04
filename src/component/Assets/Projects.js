import React from 'react';
import './Style.css';
import pang from '../Assets/pang.png';
import hatchways from '../Assets/hatchways.png';
import layor from '../Assets/layor.png';
import avila from '../Assets/avila.png';



const Projects=()=>{
    return(
        <div id="projects">
            <div className="container">
                <div className="row section-title justify-content-center text-center">
                    <h1 className="section-title-heading">My Projects</h1>
                    <p>Some of my latest works are shown below</p>
                </div>


                <div className="row">
                    <div className="col-md-12 mt-4">
                        <div className="overlay-image"><a href="https://romantic-engelbart-4d7b96.netlify.app/">
                        <img className="image" src={pang} alt="Alt text" width="100%"/>
                    
                        </a>
                            
                            
                        </div>
                    </div>

                    <div className="col-md-12 mt-4">
                        <div className="overlay-image"><a href="https://amazing-goldstine-39082c.netlify.app/">
                        <img className="image" src={hatchways} alt="Alt text" width="100%"/>
                    
                        </a>
                            
                            
                        </div>
                    </div>

                    <div className="col-md-12 mt-4">
                        <div className="overlay-image"><a href="https://competent-chandrasekhar-99ae79.netlify.app/">
                        <img className="image" src={layor} alt="Alt text" width="100%"/>
                    
                        </a>
                            
                            
                        </div>
                    </div>

                    <div className="col-md-12 mt-4">
                        <div className="overlay-image"><a href="https://romantic-engelbart-4d7b96.netlify.app/">
                        <img className="image" src={avila} alt="Alt text" width="100%"/>
                    
                        </a>
                            
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}




export default Projects