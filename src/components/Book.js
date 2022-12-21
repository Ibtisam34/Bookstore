/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';

function Book(props) {
  const { title, author} = props;
  return (
    <>
      <div>
        <h3 className="book-title">{title}</h3>
        <p className="book-author">{author}</p>
        <button type="button">remove Book</button>
      </div>
    </>
  );
}
Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
export default Book;