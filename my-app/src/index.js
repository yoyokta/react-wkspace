import React from 'react';
import ReactDom from 'react-dom/client';

// IMPORT CSS
import './index.css';

// IMPORT 
import { books } from './books';
import Book from './Book';
import {greeting} from './testing/testing';

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
  console.log(greeting);
  return (
  <section className="booklist">
    {books.map((book) => {
      return (
        <Book key={book.id} book={book} />
      );
    })}
  </section>
  );
}

const root = ReactDom.createRoot(document.getElementById('root'));
root.render(<Booklist />);