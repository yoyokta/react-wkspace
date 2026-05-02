import React, {useState, useEffect} from 'react';
import ReactDom from 'react-dom/client';

// IMPORT CSS
import './index.css';

function App(){
const [value, setValue] = useState(0);
  useEffect(() => {
    console.log('call useEffect');
    if (value > 0){
        document.title = `New Messages (${value})`;
    }
    
  }, [value]);
  useEffect(() => {
    console.log('first time?');
  }, []);
  console.log('render component');
  return (
    <>
    <h2>{value}</h2>
    <button className='btn' onClick={() => setValue(value + 1)}>Click me!</button>
    </>
  )
}

export default App;