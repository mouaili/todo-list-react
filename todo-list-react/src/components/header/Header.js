import style from './Header.module.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <header>
        <h1 className={`${style.header}`}>Todo List</h1>
        <nav>
          <ul>
            <Link to={'/'}>Home</Link>
            <Link to={'/about'}>Contact</Link>
            <Link to={'/api'}>Visit API</Link>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
