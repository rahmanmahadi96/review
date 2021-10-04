import React from 'react';

const Testimonials = () => {
    return (
        <div className="testimonial p-5">
            <div className="headings text-center">
                <h5 className="text-info my-2">Our Testimonials</h5>
                <h1>What Our Clients Think About Us</h1>
            </div>


            <div className="card-group container my-5">

                <div className="card shadow-lg">
                    <img src="./images/client1.jpeg" className="card-img-top" alt="client 1"/>
                    <div className="card-body">
                        <div className="d-flex justify-content-between">
                            <h5 className="card-title">Nuno Gueye</h5>
                            <small className="text-warning"><i className="fas fa-star"></i><i className="fas fa-star"></i><i             className="fas fa-star"></i><i className="fas fa-star"></i><i className="far fa-star"></i></small>
                        </div>
                        <p className="card-text">It's useful course for learning how to blend and develop learning and teaching experience to be more interactive with the help of multi-technology.</p>
                    </div>
                </div>

                <div className="card mx-3 shadow-lg">
                    <img src="./images/client2.jpeg" className="card-img-top" alt="client 2"/>
                    <div className="card-body">
                        <div className="d-flex justify-content-between">
                            <h5 className="card-title">Ellysa Hili</h5>
                            <small className="text-warning"><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i></small>
                        </div>
                        <p className="card-text">This was a very immersive and interesting course -- a lot of self-learning to be done on your own to really understand and put together into practice the technology into your own course and workflow.</p>
                    </div>
                </div>

                <div className="card shadow-lg">
                    <img src="./images/client3.jpeg" className="card-img-top" alt="client 3"/>
                    <div className="card-body">
                        <div className="d-flex justify-content-between">
                            <h5 className="card-title">Allison Becker</h5>
                            <small className="text-warning"><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star "></i></small>
                        </div>
                        <p className="card-text">Thank you for this course. I get know experience and knowledge in using different kinds of online tools which are useful and effective. I'll use some of them during my lessons. And lots of thanks.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;