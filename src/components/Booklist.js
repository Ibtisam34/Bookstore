import React from 'react';
import Book from './Book';
import Inputform from './Form';

const Booklist = () => (
  <div>
    <h2>My Book List</h2>
    <Book author="Riyana" title="Life is short" />
    <Book author="Pius" title="don't leave" />
    <Inputform />
  </div>
);

export default Booklist;