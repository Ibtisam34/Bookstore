import { useSelector } from 'react-redux';
import Book from './Book';
import CreateBook from './create';

const Books = () => {
  const books = useSelector((state) => state.booksReducer);

  return (
    <div className="book-list">
      <ul className="book">
        {books.map((book) => (
          <Book
            key={book.id}
            id={book.id}
            title={book.title}
            author={book.author}
            category={book.category}
          />
        ))}
      </ul>
      <hr />
      <CreateBook />
    </div>
  );
};

export default Books;
