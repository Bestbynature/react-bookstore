import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Bookitem from './Bookitem';
import { getBooks } from '../redux/books/booksSlice';

const Booklist = () => {
  const dispatch = useDispatch();

  const { books, isLoading, count } = useSelector((store) => store.books);

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch, count]);

  return (
    <div className="booklist">
      <h2>{isLoading && <p>Loading...</p>}</h2>
      <ul>
        {Object.keys(books).length === 0 && !isLoading && <p>No books available</p>}

        {Object.keys(books).map((key) => {
          const book = books[key][0];
          return <Bookitem key={key} book={book} id={key} />;
        })}

      </ul>
    </div>
  );
};

export default Booklist;
