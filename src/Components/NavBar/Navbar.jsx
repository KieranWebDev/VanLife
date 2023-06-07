import { Link } from 'react-router-dom';
import Logo from '../../assets/vanlifeLogo.png';
import './NavBar.css';

export default function Navbar() {
  return (
    <nav>
      <div className="logo">
        <img src={Logo} alt="logo" />
      </div>
      <ul>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>
    </nav>
  );
}
