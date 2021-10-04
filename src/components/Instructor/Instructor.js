import React, { useEffect, useState } from 'react';

const Instructor = () => {
    const [instructors, setInstructors] = useState([]);
    useEffect(() =>{
        fetch('/instructor.json')
        .then(res=> res.json())
        .then(data => setInstructors(data))
    }, [])
    return (
        <div className="instructor">
            <div className="row">
            {
            instructors?.map((instructor) => (
                <div className="col-md-3">
                    <div className="card m-1">
                        <img className="card-img-top rounded-circle" src={instructor.img} alt="" />
                
                        <div className="card-body">
                    
                            <h4 className="card-title">{instructor.name}</h4>
                            <h6>Ratings: <span className="text-warning fs-4">{instructor.ratings}</span> ({instructor.reviews} reviews)</h6>
                    
                        </div>  
                    </div>
                </div>
            ))}
            </div>
        </div>
    );
};

export default Instructor;