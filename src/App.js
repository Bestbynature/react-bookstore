import { Route, Routes } from 'react-router-dom';
import Bookstore from './components/bookstore';
import './components/styles.css';
import Layout from './components/layout';
import Header from './components/header';
import Categories from './components/categories';

const App = () => (
  <div className="App">
    <Header />
    <Routes>
      <Route path="/" element={<Layout />} />
      <Route index element={<Bookstore />} />
      <Route path="/categories" element={<Categories />} />
    </Routes>
  </div>
);

export default App;
