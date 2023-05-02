import { useState } from 'react';
import Booklist from './booklist';
import Form from './form';

const Bookstore = () => {
  const [books, setBooks] = useState([
    {
      id: 1, title: 'The Hunger Games', author: 'Suzanne Collins', genre: 'Action', percent: '64', chapter: 'Chapter 17',
    },
    {
      id: 2, title: 'Harry Potter and the Order of the Phoenix', author: 'J.K. Rowling', genre: 'Fantasy', percent: '8', chapter: 'Chapter 3: A lesson learned',
    },
    {
      id: 3, title: 'To Kill a Mockingbird', author: 'Harper Lee', genre: 'scifi', percent: '0', chapter: 'Introduction',
    },
  ]);

  const handleForm = (e) => {
    e.preventDefault();
    const title = e.target[0].value;
    const author = e.target[1].value;
    const book = { title, author };
    setBooks([...books, book]);
    e.target.reset();
  };

  return (
    <div className="bookstore">
      <Booklist books={books} />
      <Form handleForm={handleForm} />
    </div>
  );
};

export default Bookstore;
