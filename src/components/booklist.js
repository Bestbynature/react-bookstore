import React from 'react';
import { useSelector } from 'react-redux';
import Bookitem from './Bookitem';

const Booklist = () => {
  const { books } = useSelector((store) => store.books);

  return (
    <div className="booklist">
      <ul>

        {books.map((book) => <Bookitem key={book.item_id} book={book} />)}

      </ul>
    </div>
  );
};

export default Booklist;
