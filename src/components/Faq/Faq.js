import React from 'react';
import Menubar from '../Menubar/Menubar';
import Footer from '../Footer/Footer';

const Faq = () => {
    return (
        <div className="faq text-center">
            {/* navbar */}

            <Menubar></Menubar>
            <div className="container faq">
                <h4 className="text-info mt-4 mb-2">FAQs</h4>
                <h1>We've Got Answers</h1>

                {/* accordion */}

                <div className="accordion my-5" id="accordionExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Can I just enroll in a single course?
                        </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                            Yes! To get started, click the course card that interests you and enroll. You can enroll and complete the course to earn a shareable certificate, or you can audit it to view the course materials for free. When you subscribe to a course that is part of a Certificate, you’re automatically subscribed to the full Certificate. 
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item my-3">
                        <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        What if English is not my First Language?
                        </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                            Our courses are provided 100% in English. However, due to the digital nature of our training, you can take your time studying the material and making use of tools such as google translate and Grammarly to help assist you. You will have access to 24/7 tutor, student and technical support teams. If you need to ask a course question or just need general support? Simply reach out any time through our live chat on our website, via our learning platform, email learnbridge@example.com, or call 1234567890.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Are there assessment or exams in the course?
                        </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                            Yes, you will be required to complete a self-assessment quiz that includes both single and multiple-choice questions. You will be able to attempt this test as many times as you require, however you will need to receive a 100% score by answering all the answers correctly. This is to ensure you have read and understood all your resource/learning pages.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item my-3">
                        <h2 className="accordion-header" id="headingFour">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                        Am I guaranted to get a job with this certificate?
                        </button>
                        </h2>
                        <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                            Discussing your career path is exciting! Whether you need assistance securing skills for your first job or you are wanting to upskill, reskill or explore new skills, LearnBridge have the right course for you! Our courses are designed to give you the skills you require to help you discover a new career, obtain employment or progress in your existing career. We cannot guarantee you a job, gaining employment will be between you, your employer and whether you meet the required skills and the desired personality and culture fit.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingfive">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                        How long is the certificate valid for?
                        </button>
                        </h2>
                        <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                            Our Certificates are valid for a lifetime!  You can share the certificate with your friends, relatives, co-workers and employers. You can also include it in your resume/CV, professional social media profiles and job applications. Our completion Certificates are extremely valuable. It will demonstrate to your employers how committed you are to upskilling.
                        </div>
                    </div>
                </div>
            </div>
            </div>
            {/* footer  */}
            <Footer></Footer>
        </div>
    );
};

export default Faq;