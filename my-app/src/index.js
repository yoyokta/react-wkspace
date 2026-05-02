import React, {useState} from 'react';
import ReactDom from 'react-dom/client';

// IMPORT CSS
import './index.css';

// IMPORT 
//import { books } from './books';
//import Book from './Book';
//import {greeting} from './testing/testing';

// JSX RULES:
// 1. you can only return one element, but that element can have many children
// 2. div / section / article or Fragment
// 3. you can use JavaScript expressions inside JSX by wrapping them in curly braces
// 4. class becomes className, for becomes htmlFor, etc. (because class and for are reserved keywords in JavaScript)
// 5. camelCase for event handlers and other attributes (onClick, onMouseOver, etc.)
// 6. close all tags, even self-closing ones (e.g. <img />, <input />, etc.)
// 7. formatting: use parentheses to wrap multi-line JSX for better readability
// 8. don't kill yourself writing too much code all at once. play a video game.

/* function Booklist() {
  console.log(useState(greeting));
  const value = useState(1)[0];
  const handler = useState(1)[1];
  console.log(value, handler);
  return (
  <section className="booklist">
    {books.map((book) => {
      return (
        <Book key={book.id} book={book} />
      );
    })}
  </section>
  );
} */

function UseStateBasics(){
  const [value, setValue] = useState(0);
  const reset = () => {
    setValue(0);
  }
  const complexIncrease = () => {
    setTimeout(() => {
      //setValue(value + 1);
      setValue((prevValue) => { return prevValue + 1; });
    }, 1500);
  }
  return (
    <>
    <section style = {{ padding: '2rem' }}>
      <h2>regular counter</h2>
      <h1>{value}</h1>
      <button className='btn' onClick={() => setValue(value - 1)}>
        decrease
      </button>
      <button className='btn' onClick={() => setValue(value + 1)}>
        increase
      </button>
      <button className='btn' onClick={reset}>
        reset
      </button>
    </section>

    <section style = {{ padding: '2rem' }}>
      <h2>more complex counter</h2>
      <h1>{value}</h1>
      <button className='btn' onClick={() => complexIncrease()}>
        increase
      </button>
    </section>
    </>
  )
}

const root = ReactDom.createRoot(document.getElementById('root'));
root.render(<UseStateBasics />);