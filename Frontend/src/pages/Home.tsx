import React from 'react';
import Intro from '../components/Intro';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Resume from '../components/Resume';

const Home = () => {
    return (
        <>
            <Intro/>
            <Skills/>
            <Resume/>
            <Projects/>
        </>
    );
};

export default Home;