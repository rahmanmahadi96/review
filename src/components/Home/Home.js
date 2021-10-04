import React from 'react';
import Achievements from '../Achievements/Achievements';
import Footer from '../Footer/Footer';
import Hero from '../Hero/Hero';
import HomeCourses from '../HomeCourses/HomeCourses';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <HomeCourses></HomeCourses>
            <Achievements></Achievements>
            <Testimonials></Testimonials>
            <Footer></Footer>
        </div>
    );
};

export default Home;