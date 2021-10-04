import React, { useEffect, useState } from 'react';

const HomeCourses = () => {
    const [courses, setCourses] = useState([]);

    // load data 
    useEffect(() =>{
        fetch('/homeCourses.json')
        .then(res=> res.json())
        .then(data => setCourses(data));
    }, [])

    return (
        <div className="container home-courses">
            <div className="heading text-center my-5">
                <h5 className="text-info">Pick a Course to Get Started</h5>
                <h1>Our Featured Courses</h1>
            </div>

            {/* courses data  */}
            <div className="row">
                {courses?.map((courseData) => (
                    <div className="col-md-4">
                    <div className="card m-3">
                
                        <img className="card-img-top" src={courseData.img} alt="" />
                
                        <div className="card-body">
                            <div className="d-flex justify-content-between">
                                <h6>{courseData.instructor}</h6>
                                <h5 className="text-warning">${courseData.price}</h5>
                            </div>
                            <h4 className="card-title">{courseData.title}</h4>
                            <h6>Ratings: <span className="text-warning fs-4">{courseData.ratings}</span> ({courseData.reviews} reviews)</h6>
                            <button className="btn btn-success mt-3">Enroll Now</button>
                        </div>
                    </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HomeCourses;