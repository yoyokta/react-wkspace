import React from 'react';
import ReactDom from 'react-dom/client';

import './index.css';

// JSX RULES:
// 1. you can only return one element, but that element can have many children
// 2. div / section / article or Fragment
// 3. you can use JavaScript expressions inside JSX by wrapping them in curly braces
// 4. class becomes className, for becomes htmlFor, etc. (because class and for are reserved keywords in JavaScript)
// 5. camelCase for event handlers and other attributes (onClick, onMouseOver, etc.)
// 6. close all tags, even self-closing ones (e.g. <img />, <input />, etc.)
// 7. formatting: use parentheses to wrap multi-line JSX for better readability
// 8. don't kill yourself writing too much code all at once. play a video game.

function Booklist() {
  return (
  <section className="booklist">
    <Book/>
    <Book/>
    <Book/>
    <Book/>
    <Book/>
    <Book/>
    <Book/>
  </section>
  );
}

const Book = () => {
  return <article className="book">  
    <Image/>
    <Title/>
    <Author/>
  </article>
}

function Image(){
  return <img src ="https://m.media-amazon.com/images/I/71vIFzQbtbL._AC_UY218_.jpg" alt="Scott McClouds very helpful book"/>
}

const Title = () => <h1>Understanding Comics: The Invisible Art</h1>
const Author = () => <h4 style={{color: '#9984aa',fontSize: '0.75rem', letterSpacing: '0.2rem'}}>Scott McCloud</h4>

const root = ReactDom.createRoot(document.getElementById('root'));
root.render(<Booklist />);