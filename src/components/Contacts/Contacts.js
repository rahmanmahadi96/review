import React from 'react';
import Footer from '../Footer/Footer';
import Menubar from '../Menubar/Menubar';

const Contacts = () => {
    return (
        <div className="contact">
            {/* navbar  */}

            <Menubar></Menubar>
            <div className="container p-5">
                <h5 className="text-info text-center">Contact Us</h5>
                <div className="row">

                    {/* contact details  */}
                    <div className="col-md-6 p-5">
                        <p>Do you have questions about our courses, or just have a general enquiry? We are Australian owned and operated with an amazing team. Please don't hesitate to contact us with any questions that you may have.</p>
                        <div className="address">
                            <h4>Head Office</h4>
                            <p>001 Elizabeth Ave Str, Brooklyn, CA, 001</p>
                            <h4>Phone Number</h4>
                            <p>+1234567890</p>
                            <h4>Email</h4>
                            <p>learnbridge@example.com</p>
                        </div>
                    </div>

                    {/* contact form  */}
                    <div className="col-md-6 p-5">
                       
                            <label for="exampleFormControlInput1" className="form-label">Name</label>
                            <input type="text" className="form-control"/>
                            <label for="exampleFormControlInput2" className="form-label">Email</label>
                            <input type="email" className="form-control"/>
                            <label for="exampleFormControlInput3" className="form-label">Password</label>
                            <input type="password" className="form-control"/>
                            <label for="exampleFormControlInput2" className="form-label">Email</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            <button className="btn btn-warning mt-2">Enquire</button>
                        
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Contacts;