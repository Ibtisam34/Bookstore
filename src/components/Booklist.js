import { useSelector } from 'react-redux';
import Book from './Book';
import CreateBook from './create';

const Books = () => {
  const books = useSelector((state) => state.books);

  return (
    <div className="book-list">
      <ul className="book">
        {books && books.map((book) => (
          <Book
            key={book.item_id}
            id={book.item_id}
            title={book.title.title}
            author={book.title.author}
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
