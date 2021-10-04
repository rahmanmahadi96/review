import React from 'react';
import DisplayCourses from '../DisplayCourses/DisplayCourses';
import Footer from '../Footer/Footer';
import Menubar from '../Menubar/Menubar';

const Courses = () => {
    return (
        <div className="courses">
            <Menubar></Menubar>
            <DisplayCourses></DisplayCourses>
            <Footer></Footer>
        </div>
    );
};

export default Courses;