import React from 'react';
import Example from './test';
import './index.css';
// import data from './books';
// import Book from './Book';
// import { greeting } from './test';

// function Booklist() {
//   console.log(greeting);
//   return (
//     <section className='booklist'>
//       {data.map((book) => {
//         return (
//           <Book key={book.id} {...book} />
//         );
//       })}
//     </section>
//   );
// }

function App() {
    return(
        <React.Fragment>
            <Example />
        </React.Fragment>
    );
}
export default App;