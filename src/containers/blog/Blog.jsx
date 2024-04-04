import React from 'react';
import './blog.css';
import Article from '../../components/article/Article';
import { blog01, blog02, blog03, blog04, blog05 } from './import';

const Blog = () => {
  return (
    <div className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">There's lot is happening, in evolving World of AI <br /> We are blogging about it all.</h1>
    </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupA">
        <Article imgUrl={blog01} date="January 01, 2024" title="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
      </div>
      <div className="gpt3__blog-container_groupB">
        <Article imgUrl={blog02} date="Febuary 10, 2024" title="GPT-3 and Open  AI gives access to a journey beyond your wild imaginations." />
        <Article imgUrl={blog03} date="Febuary 25, 2024" title="GPT-3 and Open  AI in combine allow us to know what the world entails." />
        <Article imgUrl={blog04} date="March 30, 2024" title=" With GPT-3 and Open  AI you can explore lots of technology activities." />
        <Article imgUrl={blog05} date="April 04, 2024" title="GPT-3 and Open  AI is ultimate result of human evolving trend. From robots, machine vast to wide range of it's implementations." />
      </div>
    </div>
  </div>
  )
}

export default Blog
