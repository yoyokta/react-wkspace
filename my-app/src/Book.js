function Book({ img, title, name, children }) {
    const clickHandler = () => {
        console.log(`Button clicked for book: ${title}`);
    };
    const complexExample = (author) => {
        console.log({ author });
    };
    return (
        <article className='book'>
            {children}
            <img src={img} alt="Book Cover" />
            <h1 onClick={() => console.log("what's up")}>{title}</h1>
            <h4>{name}</h4>
            <button type="button" onClick={clickHandler}>Awesome Button!!</button>
            <button type="button" onClick={() => complexExample(name)}>Another Awesome Button!!</button>
        </article>
    );
};

export default Book;