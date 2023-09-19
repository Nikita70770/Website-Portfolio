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
                        <a className="logo-link" href="#">
                            Portfolio
                        </a>
                    </div>
                    <NavbarList />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
