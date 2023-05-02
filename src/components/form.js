import { PropTypes } from 'prop-types';

const Form = ({ handleForm }) => (
  <div className="form">
    <hr />
    <h3>ADD NEW BOOK</h3>
    <form onSubmit={handleForm}>
      <input type="text" required placeholder="Book title" />
      <input type="text" required placeholder="Author" />
      <button type="submit">Add Book</button>
    </form>
  </div>
);

Form.propTypes = {
  handleForm: PropTypes.func.isRequired,
};
export default Form;
