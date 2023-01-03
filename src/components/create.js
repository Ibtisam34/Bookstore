import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

const categories = ['Classics', 'Comic Book', 'Detective and Mystery', 'Fantasy'];

const CreateBook = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');

  const submitBookToStore = (e) => {
    e.preventDefault();
    if (title && category && author) {
      const newBook = {
        item_id: uuidv4(),
        title: {
          title,
          author,
        },
        category,
      };
      dispatch(addBook(newBook));
      setTitle('');
      setAuthor('');
      setCategory('');
    }
  };
  return (
    <div className="create-book">
      <h2 className="add-book">Add new Book</h2>
      <form
        className="form"
        onSubmit={submitBookToStore}
      >
        <input
          className="input"
          type="text"
          placeholder="Book Title"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          className="input"
          placeholder="Book Author"
          name="author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <select className="select" placeholder="Category" name="category" value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="" disabled>Category</option>
          {categories.sort().map((categ) => (
            <option key={uuidv4()} value={categ}>
              {categ}
            </option>
          ))}
        </select>
        <input type="submit" className="submit active" value="Add Book" />
      </form>
    </div>
  );
};

export default CreateBook;
