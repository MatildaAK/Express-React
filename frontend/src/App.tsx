import { useEffect, useState } from "react";
import "./App.css";

const getBooksFromAPi = async () => {
  const url = "http://localhost:3000/api/books";
  const response = await fetch(url);
  const result = await response.json();
  return result;
}


function App() {
  const [books, setBooks] : any = useState();

  const setBooksFromAPi = async () => {
    const result = await getBooksFromAPi;
    setBooks(result);
  }

  useEffect(() => {
    setBooksFromAPi();
  }, []);

  return (
    <>
      <h2>Book listing</h2>
      { books ? (
        books.books.map((book: any, id: number) => {
          return (
            <article key={id}>
              <h3>{book.title}</h3>
              <p>{book.author}</p>
              <p>
                <b>{book.price}</b>
              </p>
            </article>
          );
        })
      ) : (
        <p>There are no books....</p>
      )}
    </>
  );
}

export default App;