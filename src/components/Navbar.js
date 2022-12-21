import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <div className="header">
      <div className="sub--header">
        <h1 className="header--title">Bookstore CMS</h1>
        <nav className="nav">
          <ul className="nav-ul">
            <li className="nav-li">
              <Link to="/" className="nav-link">Books</Link>
            </li>
            <li className="nav-li">
              <Link to="/categories" className="nav-link">Categories</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default NavBar;
