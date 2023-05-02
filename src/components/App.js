import { Route, Routes } from 'react-router-dom';
import Bookstore from './bookstore';
import './styles.css';
import Layout from './layout';
import Header from './header';
import Categories from './categories';

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
