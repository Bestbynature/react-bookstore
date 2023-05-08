import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Bookitem from './Bookitem';
import { getBooks } from '../redux/books/booksSlice';

const Booklist = () => {
  const dispatch = useDispatch();

  const {
    books, isLoading, count, xyz,
  } = useSelector((store) => store.books);

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch, count]);

  return (
    <div className="booklist">
      <h2>{isLoading && <p>Loading...</p>}</h2>
      <ul>
        {Object.keys(books).length === 0 && !isLoading && <p>No books available</p>}

        {Object.keys(books).map((key, i) => {
          const book = books[key][0];
          const others = xyz[i] || xyz[2];
          return <Bookitem key={key} book={book} id={key} others={others} />;
        })}

      </ul>
      <hr />
    </div>
  );
};

export default Booklist;
