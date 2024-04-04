import React from 'react';
import './possibility.css';
import possibilityImage from '../../assets/possibility.png';

const Possibility = () => {
  return (
    <div className="gpt3__possibility section__padding" id="possibility">
    <div className="gpt3__possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="gpt3__possibility-content">
      <h4>Have a Quick view on How to Get Started</h4>
      <h1 className="gradient__text">The possibilities are <br /> are endless beyond your thoughts</h1>
      <p>Since ages of evolving technologies. Here comes what the future hold and the need of indulging assistance. Weavering with unravel mystery of oblivious. All you need is get on  and seek the intervention of GPT-3 OpenAI and get it solved.</p>
      <h4>Have a Quick view on How to Get Started</h4>
    </div>
  </div>
  )
};

export default Possibility;
