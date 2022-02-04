import React from 'react';
import './Style.css';



const Skills =()=>{
    return(
        <div id="skills">
            <div className="container">
                <div className="row section-title justify-content-center text-center">
                    <h1 className="section-title-heading">My Skills</h1>
                </div>


                <div className="row">
                    <div className="col-md-6">
                        <h2 className="head">HTML/CSS</h2>
                        <div className="progress">
                            <div className="role" role="progressbar" aria-valuenow="95" aria-valuemin="0"aria-valuemax="100" style={{width:'85%'}}>85</div>
                        </div>

                        <h2 className="head">Backend and API</h2>
                        <div className="progress">
                            <div className="role" role="progressbar" aria-valuenow="95" aria-valuemin="0"aria-valuemax="100" style={{width:'50%'}}>50</div>
                        </div>

                        <h2 className="head">SEO</h2>
                        <div className="progress">
                            <div className="role" role="progressbar" aria-valuenow="95" aria-valuemin="0"aria-valuemax="100" style={{width:'50%'}}>50</div>
                        </div>
                    </div>

                    <div className="col-md-6">
                       <h2 className="head">Javascript (ReactJS)</h2>
                        <div className="progress">
                            <div className="role" role="progressbar" aria-valuenow="95" aria-valuemin="0"aria-valuemax="100" style={{width:'70%'}}>70</div>
                        </div>

                        <h2 className="head">Wordpress</h2>
                        <div className="progress">
                            <div className="role" role="progressbar" aria-valuenow="95" aria-valuemin="0"aria-valuemax="100" style={{width:'50%'}}>50</div>
                        </div>

                        <h2 className="head">Photoshop</h2>
                        <div className="progress">
                            <div className="role" role="progressbar" aria-valuenow="95" aria-valuemin="0"aria-valuemax="100" style={{width:'30%'}}>30</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Skills