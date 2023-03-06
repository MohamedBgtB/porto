import React from 'react';
import Card from '../components/Card';
import Hero from '../components/Hero';
import Nav from '../components/Nav';

const Home = () => {
    return (
        <div className='relative'>
            <Nav />
            <Hero />
            <Card />
        </div>
    );
}

export default Home;
