import { useState } from 'react';
import { Link } from 'react-router-dom';
import { BiUserCircle } from 'react-icons/bi';

const Header = () => {
  const [active, setActive] = useState(1);

  const linkclicked = (a) => {
    setActive(a);
  };

  return (
    <div className="header">
      <div className="header-left">
        <h3>Bookstore CMS</h3>
        <nav>
          <ul>
            <li>
              <Link to="/" className={active === 1 ? 'active-link' : ''} onClick={() => { linkclicked(1); }}>BOOKS</Link>
            </li>
            <span>|</span>
            <li>
              <Link to="categories" className={active === 2 ? 'active-link' : ''} onClick={() => { linkclicked(2); }}>CATEGORIES</Link>
            </li>
          </ul>
        </nav>
        <BiUserCircle />
      </div>
    </div>
  );
};

export default Header;
