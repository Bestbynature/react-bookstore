import { PropTypes } from 'prop-types';
import progress from '../assets/progress.png';

const Bookitem = ({ bookprop }) => (
  <>
    <li>
      <div className="part1">
        <p>{bookprop.genre}</p>
        <h4>{bookprop.title}</h4>
        <p>{bookprop.author}</p>
        <div className="btns">
          <button type="button">Comment</button>
          <span> | </span>
          <button type="button">Remove</button>
          <span> | </span>
          <button type="button">Edit</button>
        </div>
      </div>
      <div className="part2">
        <img src={progress} alt="progres-bar" />
        <div className="part2b">
          <h4>
            {bookprop.percent}
            %
          </h4>
          <p>Completed</p>
        </div>
        <hr />
      </div>
      <div className="part3">
        <p>Current Chapter</p>
        <p>{bookprop.chapter}</p>
        <button type="button">UPDATE PROGRESS</button>
      </div>
    </li>
  </>
);

Bookitem.propTypes = {
  bookprop: PropTypes.instanceOf(Object).isRequired,
};

export default Bookitem;
