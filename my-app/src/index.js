import React from 'react';
import ReactDOM from 'react-dom/client';

// CSS
import './index.css';


function Booklist() {
  return (
    <section class='booklist'>
      <Book/>
    </section>
  );
}

const Book = () => {
  return(
    <article class='book'>
      <Image/>
      <Title/>
      <Author/>
    </article>
  );
};

const Image = () => (<img src="https://m.media-amazon.com/images/I/71vIFzQbtbL._AC_UY218_.jpg" alt = ""/>);
const Author = () => <h4>Scott McCloud</h4>
const Title = () => <h1>Understanding Comics</h1>

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Booklist />);  