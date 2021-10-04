import React from 'react';

const Footer = () => {
    return (
        <div className="bg-dark text-light">
            <div className="row">
            <div className="col-md-3 p-5">
                    <h3>Learn<span className="text-info">Bridge</span></h3>
                    <ul className="navbar-nav">
                        <li>001 Elizabeth Ave Str, Brooklyn, CA, 001</li>
                        <li>+1234567890</li>
                        <li>learnbridge@example.com</li>
                    </ul>
                </div>
                <div className="col-md-3 p-5">
                    <h3>About Us</h3>
                    <ul className="navbar-nav">
                        <li>Latest Courses</li>
                        <li>Mission and vission</li>
                        <li>Our Approach</li>
                        <li>Join a Career</li>
                    </ul>
                </div>
                <div className="col-md-6 p-5">
                    <h3>Subscribe to Our NewsLetter</h3>
                    <input type="email" placeholder="Enter Your Email" className="form-control w-75 mt-3" /><br />
                    <button className="btn btn-warning">Subscribe now</button>
                </div>
            </div>
            <p className="text-center border-top">Copyright LearnBridge &copy; 2021. All Rights Reserved</p>
        </div>
    );
};

export default Footer;