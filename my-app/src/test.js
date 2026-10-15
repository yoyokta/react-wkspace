import React, { useState } from 'react';

function Example() {
    const [value, setValue] = useState(0);
    const reset = () => setValue(0);

    const complexIncrease = () => {
        setTimeout(() => {
            setValue((prevState) => {
                return prevState + 1
            });
        }, 2000);
    };
    return (
        <React.Fragment style={{ margin: '4rem 0' }}>
            <section>
                <h2>regular counter</h2>
                <h1>{value}</h1>
                <button className='btn' onClick={() => setValue(value + 1)}>Increment</button>
                <button className='btn' onClick={() => setValue(value - 1)}>Decrement</button>
                <button className='btn' onClick={reset}>Reset</button>
            </section>
            <section>
                <h2>more complex counter</h2>
                <h1>{value}</h1>
                <button className='btn' onClick={() => complexIncrease()}>increase l8r</button>
            </section>

        </React.Fragment>
    );
}

export default Example;