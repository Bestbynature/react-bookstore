import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import progress from '../assets/progress.png';
import { removeBook } from '../redux/books/booksSlice';

const Bookitem = ({ book, id }) => {
  const dispatch = useDispatch();

  return (
    <li>
      <div className="part1">
        <p>{book.category}</p>
        <h4>{book.title}</h4>
        <p>{book.author}</p>
        <div className="btns">
          <button type="button">Comment</button>
          <span> | </span>
          <button
            type="button"
            onClick={() => dispatch(removeBook(id))}
          >
            Remove
          </button>
          <span> | </span>
          <button type="button">Edit</button>
        </div>
      </div>
      <div className="part2">
        <img src={progress} alt="progres-bar" />
        <div className="part2b">
          <h4>
            64%
          </h4>
          <p>Completed</p>
        </div>
        <hr />
      </div>
      <div className="part3">
        <p>Current Chapter</p>
        <p>chapter</p>
        <button type="button">UPDATE PROGRESS</button>
      </div>
    </li>
  );
};

Bookitem.propTypes = {
  book: PropTypes.instanceOf(Object).isRequired,
  id: PropTypes.string.isRequired,
};

export default Bookitem;
