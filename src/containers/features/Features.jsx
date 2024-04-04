import React from 'react';
import './features.css';
import Feature from '../../components/feature/Feature';

const featuresData = [
  {
    title: 'Creative and Coherent Text Generation',
    text: 'GPT-3 is capable of generating creative and coherent text outputs, including stories, poems, and dialogues. It can produce human-like language with grammatical correctness and logical coherence.',
  },
  {
    title: 'Zero-shot and Few-shot Learning',
    text: 'GPT-3 has the ability to perform zero-shot and few-shot learning, meaning it can generate responses for tasks it has not been explicitly trained on, based on a prompt or a few examples provided by the user.',
  },
  {
    title: 'Contextual Understanding',
    text: 'GPT-3 excels at understanding the context of a given text input, allowing it to generate coherent and contextually relevant responses. It can comprehend nuances, infer meanings, and maintain coherence over longer passages of text.',
  },
  {
    title: 'Multilingual Support',
    text: 'While primarily trained on English data, GPT-3 demonstrates some degree of multilingual capabilities. It can understand and generate text in several languages, albeit with varying proficiency depending on the language.',
  },
];

const Features = () => {
  return (
    <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">The Future is Now and You Just Need to Realize It. Step into Future Today, & Make it Happen!</h1>
      <p>Request Early Access to Get Started</p>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
  )
}

export default Features
