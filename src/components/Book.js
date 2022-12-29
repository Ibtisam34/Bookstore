import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { remove } from '../redux/books/books';

const Book = ({
  title, author, id, category,
}) => {
  const dispatch = useDispatch();
  return (
    <div id={id}>
      <h3>{category}</h3>
      <h3 className="book-title">{title}</h3>
      <p className="book-author">{author}</p>
      <button type="button" onClick={(e) => { dispatch(remove(e.target.parentNode.id)); }}>Remove</button>
    </div>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Book;
