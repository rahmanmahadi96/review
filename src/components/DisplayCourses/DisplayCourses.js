import React, { useEffect, useState } from 'react';

const DisplayCourses = () => {
    const [displayCourses, setDisplayCourses] = useState([]);
    useEffect(() =>{
        fetch('/courses.json')
        .then(res=> res.json())
        .then(data => setDisplayCourses(data))
    }, [])
    return (
        <div className="display-course container p-5">
            <div className="headings text-center my-5">
                <h5 className="text-info">Course List</h5>
                <h1 className="mt-2">Enroll the course that fits your life</h1>
            </div>
            
            <div className="row">
                {displayCourses?.map((courseData) => (
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

export default DisplayCourses;