import React from 'react';
import HeroSection from '../home/HeroSection.jsx';
import Hero from '../home/Hero.jsx';
import Trending from '../home/Trending.jsx';
import Devotaional from '../home/Devotional.jsx';
import PopularCreators from '../home/PopularCreators.jsx';
import CTASection from '../home/CTASection.jsx';
import FeatureHighlights from '../home/FeatureHighlights.jsx';
import CreatorsFeedback from '../home/CreatorsFeedback.jsx';
const Home = () => {
  
  return (
    <div>
      <HeroSection/>
      <Hero />
      <Trending />
      <Devotaional />
      <PopularCreators />
      <CTASection />
      <FeatureHighlights />
      <CreatorsFeedback />
    </div>
  )
}

export default Home