// packages
import React from 'react';
import ReactDOM from 'react-dom/client';

// CSS
import './index.css';

// imports
import data from './books';
import Book from './Book';
import { greeting } from './test';

function Booklist() {
  console.log(greeting);
  return (
    <section className='booklist'>
      {data.map((book) => {
        return (
          <Book key={book.id} {...book} />
        );
      })}
    </section>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Booklist />);