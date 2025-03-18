import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Hero from '../Components/Hero/Hero';

const Home = () => {
    return (
        <div className='container mx-auto'> 
            <Navbar></Navbar>
            <Hero></Hero>
        </div>
    );
};

export default Home;