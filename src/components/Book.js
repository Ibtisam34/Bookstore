import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { remove } from '../redux/books/books';

const Book = ({
  title, category, id, author,
}) => {
  const dispatch = useDispatch();
  const percentage = 80;
  return (
    <div className="book-container">
      <div>
        <h3 className="book-container-title">{category}</h3>
        <h2 className="h2-title">{title}</h2>
        <span className="author">{author}</span>
        <button type="button" className="button">Comments</button>
        <button type="button" className="button-active" onClick={() => { dispatch(remove(id)); }}>Remove</button>
        <button type="button" className="btn-edit">Edit</button>
      </div>
      <div className="progress">
        <div className="circular-progress">
          <div style={{ width: 70, height: 70 }}>
            <CircularProgressbar value={percentage} />
          </div>
          <div>
            <h2 className="percent-complete">80%</h2>
            <span className="completed">Completed</span>
          </div>
        </div>
        <div className="chapter">
          <p className="current-chapter-title">Current Chapter</p>
          <p className="current-chapter">Chapter 17</p>
          <button type="button" className="btn--update submit">Update Progress</button>
        </div>
      </div>
    </div>
  );
};

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Book;
