import React from 'react';

const Achievements = () => {
    return (
        <div className="achievements container p-5">
            <div className="headings text-center mb-5">
                <h5 className="text-info">Why Choose Us</h5>
                <h1 className=" my-3">King of the Learning Skill</h1>
                <p><small>We offer affordable and flexible courses to help you achieve your desired goals.</small></p>
            </div>
         
            <div className="row shadow-lg bg-dark text-warning text-center">
                <div className="col-md-3 p-5">
                    <h3>100k+</h3>
                    <p>Students Enrolled</p>
                </div>
                <div className="col-md-3 p-5">
                    <h3>100+</h3>
                    <p>Courses</p>
                </div>
                <div className="col-md-3 p-5">
                    <h3>100% </h3>
                    <p>Satisfied Parents</p>
                </div>
                <div className="col-md-3 p-5">
                    <h3>24/7 </h3>
                    <p>Support</p>
                </div>
            </div>
        </div>
    );
};

export default Achievements;