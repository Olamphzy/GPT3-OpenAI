import React from 'react';
import './whatGPT3.css';
import Feature from '../../components/feature/Feature';

const WhatGPT3 = () => {
  return (
    <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="What is GPT-3" text="GPT-3, short for 'Generative Pre-trained Transformer 3,' is a state-of-the-art language processing AI model developed by OpenAI. It belongs to a class of models known as transformers, which are neural network architectures particularly well-suited for natural language processing tasks." />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">Wide range of possibilities view beyond your imagination</h1>
      <p>Explore our Library</p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Chatbots" text="Programs designed to simulate your conversation through text or voice interfaces." />
      <Feature title="Knowledge-base" text="Act as centralized hubs for educational content, resources, and expertise. Support teaching and learning by offering access to curated materials, instructional resources, and expert insights " />
      <Feature title="Education" text="Improve access to educational resources, and support the development of 21st-century skills such as critical thinking, problem-solving, and information literacy " />
    </div>
  </div>
);
}

export default WhatGPT3
