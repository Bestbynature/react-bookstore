import { useDispatch, useSelector } from 'react-redux';
import { v1 as uuidv1 } from 'uuid';
import { changeName, changeAuthor, postBook } from '../redux/books/booksSlice';

const Form = () => {
  const dispatch = useDispatch();

  const { title, author } = useSelector((store) => store.books);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newBook = {
      item_id: uuidv1(),
      category: 'Action',
      title,
      author,
    };

    dispatch(postBook(newBook));
  };

  return (
    <div className="form">
      <hr />
      <h3>
        ADD NEW BOOK
      </h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          required
          placeholder="Book title"
          value={title}
          onChange={(e) => dispatch(changeName(e.target.value))}
        />
        <input
          type="text"
          required
          placeholder="Author"
          value={author}
          onChange={(e) => dispatch(changeAuthor(e.target.value))}
        />
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default Form;
