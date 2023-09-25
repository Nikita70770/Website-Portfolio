/* import Components */
import NavbarList from './navbar-list/NavbarList';

/* import css styles */
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="nav">
            <div className="container">
                <div className="nav-inner">
                    <div className="logo">
                        <a className="logo-link" href="#!">
                            <ul className="logo-list">
                                <li className="logo-list-item">
                                    <span>{'<'}</span>
                                </li>
                                <li className="logo-list-item">
                                    <p>portfolio</p>
                                </li>
                                <li className="logo-list-item">
                                    <span>{'/>'}</span>
                                </li>
                            </ul>
                        </a>
                    </div>
                    <NavbarList />
                </div>
            </div>
            <br />
        </nav>
    );
};

export default Navbar;
