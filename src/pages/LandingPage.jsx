import React from 'react';
import Hero from '../components/Hero/Hero';
import Mission from '../components/Mission/Mission';
import Layout from '../layout/Layout';

function LandingPage() {
  return (
    <Layout>
      <Hero />
      <Mission />
    </Layout>
  );
}

export default LandingPage;
