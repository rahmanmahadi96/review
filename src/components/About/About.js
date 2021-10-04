import React from 'react';
import Footer from '../Footer/Footer';
import Instructor from '../Instructor/Instructor';
import Menubar from '../Menubar/Menubar';

const About = () => {
    return (
        <div className="about">
            <Menubar></Menubar>
            <div className="about-details container p-5">
                <h5 className="text-info text-center">About LearnBridge</h5>
                <div className="intro">
                    <h1 className="my-4  text-center">Who We Are</h1>
                    <p>LearnBridge is an online learning platform aiming to provide educations to those students who may not be able to enroll in a traditional classroom course and support students who need to work on their own schedule and at their own pace.</p>
                </div>
                <div className="mission">
                    <h1 className="text-center mb-4">Our Mission</h1>
                    <ul>
                        <li>Increase access to high quality education for everyone, everywhere</li>
                        <li>Offer affordable and flexible education</li>
                        <li>Build personal and professional skills with applied learning</li>
                    </ul>
                </div>
                <div className="team">
                    <h1 className="text-center mb-4">Our Popular Instructor</h1>
                    <Instructor></Instructor>
                </div>
            </div>
            <Footer></Footer>
            
        </div>
    );
};

export default About;