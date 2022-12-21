import Form from '../components/Form';
import Booklist from '../components/Booklist';

function Home() {
  return (
    <>
      <div className="home--container">
        <div>
          <Booklist />
        </div>
        <div>
          <Form />
        </div>
      </div>
    </>
  );
}

export default Home;
