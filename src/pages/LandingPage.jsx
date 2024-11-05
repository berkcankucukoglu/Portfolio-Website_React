import React from 'react';
import Experience from '../components/Experiences/Experience';
import Hero from '../components/Hero/Hero';
import Project from '../components/Projects/Project';
import Mission from '../components/Mission/Mission';
import Layout from '../layout/Layout';

function LandingPage() {
  return (
    <Layout>
      <Hero />
      <Mission />
      <Experience />
      <Project />
    </Layout>
  );
}

export default LandingPage;
