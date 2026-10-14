import React from 'react';
import ReactDOM from 'react-dom/client';

// CSS
import './index.css';

const books = [
  {
    id: 1,
    img: "https://m.media-amazon.com/images/I/71vIFzQbtbL._AC_UY218_.jpg",
    title: 'Understanding Comics',
    name: 'Scott McCloud'
  },
  {
    id: 2,
    img: "https://m.media-amazon.com/images/I/91YB3rZKxjL._AC_UY218_.jpg",
    title: 'Making Comics: Storytelling Secrets of Comics, Manga and Graphic Novels',
    name: 'Scott McCloud'
  },
  {
    id: 3,
    img: "https://m.media-amazon.com/images/I/81XqKpR4lzL._AC_UY218_.jpg",
    title: "Reinventing Comics: The Evolution of an Art Form",
    name: 'Scott McCloud'
  }
];

function Book({ img, title, name, children}) {
  const clickHandler = () => {
    console.log(`Button clicked for book: ${title}`);
  };
  const complexExample = (author) => {
    console.log({author});
  };
  return(
    <article className='book' onMouseOver = {
      () => console.log(`Mouse over for book: ${title}`)
    }>
      {children}
      <img src={img} alt="Book Cover" />
      <h1 onClick={() => console.log("what's up")}>{title}</h1>
      <h4>{name}</h4>
      <button type="button" onClick={clickHandler}>Awesome Button!!</button>
      <button type="button" onClick={() =>complexExample(name)}>Another Awesome Button!!</button>
    </article>
  );
};

function Booklist() {
  return (
    <section className='booklist'>
      {books.map((book) => {
        return (
          <Book key={book.id} {...book}/>
        );
      })}
    </section>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Booklist />);  