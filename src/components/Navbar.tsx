import { Link } from 'react-router-dom';
import './Nav.css';

const Navbar = () => {
    return (
        <nav className="nav">
            <ul className="ul">
                <div className="flex-1 flex justify-center space-x-4">
                    <li><Link to="/" className='li'>Cover</Link></li>
                    <li><Link to="./Homes" className='li'>Homes</Link></li>
                    <li><Link to="./About" className='li'>About</Link></li>
                </div>
                <li><button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-1 px-2 rounded transition">SignUp/Login</button></li>
            </ul>
        </nav>
    );
};

export default Navbar;