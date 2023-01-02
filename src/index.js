import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Categories from './pages/Categories';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import store from './redux/configureStore';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Categories" element={<Categories />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
