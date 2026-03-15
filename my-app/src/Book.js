import React from 'react'

const Book = (props) => {
  // attribute, eventHandler
  const { img, title, author} = props.book;
  const complexExample = (a) => {
    console.log(a);
  }
  return (
  <article className='book' onMouseOver={()=>{
    console.log(title);
  }}>
    <img src = {img} alt="Scott McClouds very helpful book"/>
    <h1 onClick={()=>console.log('get fucked')}>{title}</h1>
    <h4>{author.toUpperCase()}</h4>
    <button onClick={() =>complexExample(author)}>A complex example...</button>
  </article>
  );
}

export default Book