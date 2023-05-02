import { PropTypes } from 'prop-types';
import Bookitem from './Bookitem';

const Booklist = ({ books }) => (
  <>
    <div className="booklist">
      <ul>
        {books.map((book) => (
          <Bookitem key={book.id} bookprop={book} />
        ))}
      </ul>
    </div>
  </>
);

Booklist.propTypes = {
  books: PropTypes.instanceOf(Array).isRequired,
};

export default Booklist;
