import React from 'react';
import Navbar from '../components/Navbar';
import Card from '../components/Card';

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="p-8 bg-gray-100 min-h-screen">
        <div className="max-w-4xl mx-auto space-y-6">
          <Card
            title="Job Matching"
            description="Connect agricultural workers with farmers needing labor."
            buttonText="Explore Job Matching"
          />
          <Card
            title="Resource Sharing"
            description="Rent out or share farming equipment, machinery, and resources."
            buttonText="Explore Resource Sharing"
          />
          <Card
            title="Sustainable Marketplace"
            description="Buy and sell climate-friendly farming products and supplies."
            buttonText="Explore Marketplace"
          />
          <Card
            title="Educational Resources"
            description="Learn about sustainable farming techniques and regenerative agriculture."
            buttonText="Explore Education"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
