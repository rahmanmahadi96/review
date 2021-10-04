import React from 'react';
import Menubar from '../Menubar/Menubar';

const Hero = () => {
    return (
        <div className="hero-container">
            <div className="row d-flex align-items-center justify-content-center">
                <Menubar></Menubar>
                <div className="col-md-6 p-5">
                    <h5 className="text-info">Welcome to LearnBridge</h5>
                    <h1 className="title">
                    Learn to set the bridge of your success
                    </h1>
                    <p className=" my-3">
                    Learn Bridge is an online platform where you can learn and develop all your desired skills which will set the bridge of success for you.
                    </p>
                    <button className=" btn btn-primary">Sign Up</button>
                </div>
                <div className="col-md-6 p-5 text-center">
                    <img className="w-75 rounded" src="./images/course.jpeg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Hero;