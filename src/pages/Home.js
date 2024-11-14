import React from 'react';
import Navbar from '../components/Navbar';
import Card from '../components/Card';
import './Home.css'; // Import your custom CSS file

function Home() {
  return (
    <div className="home-container">
      <Navbar />
      <div className="main-content">
        <div className="card-container">
          <h1 className="title">Sustainable Agriculture Hub</h1>
          <div className="cards-grid">
            <Card
              title="Job Matching"
              description="Connect agricultural workers with farmers needing labor."
              buttonText="Explore Job Matching"
              cardStyle="job-matching-card"
              buttonStyle="job-matching-button"
            />
            <Card
              title="Resource Sharing"
              description="Rent out or share farming equipment, machinery, and resources."
              buttonText="Explore Resource Sharing"
              cardStyle="resource-sharing-card"
              buttonStyle="resource-sharing-button"
            />
            <Card
              title="Sustainable Marketplace"
              description="Buy and sell climate-friendly farming products and supplies."
              buttonText="Explore Marketplace"
              cardStyle="sustainable-marketplace-card"
              buttonStyle="sustainable-marketplace-button"
            />
            <Card
              title="Educational Resources"
              description="Learn about sustainable farming techniques and regenerative agriculture."
              buttonText="Explore Education"
              cardStyle="educational-resources-card"
              buttonStyle="educational-resources-button"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
