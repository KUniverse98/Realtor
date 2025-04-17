import { Link } from 'react-router-dom';
import './Nav.css';

const Navbar = () => {
    return (
        <nav className="nav">
            <ul className="ul">
                <li><Link to="/" className='li'>Cover</Link></li>
                <li><Link to="./Homes" className='li'>Homes</Link></li>
                <li><Link to="./About" className='li'>About</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;