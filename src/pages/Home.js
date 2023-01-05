import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Books from '../components/Booklist';
import { fetchBooks } from '../redux/books/books';

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  return (
    <>
      <div className="home--container">
        <div>
          <Books />
        </div>
      </div>
    </>

  );
}

export default Home;
