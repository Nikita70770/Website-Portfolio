/* import Components */
import NavbarList from './navbar-list/NavbarList';

/* import css styles */

const Navbar = () => {
    return (
        <nav className="nav">
            <div className="container">
                <div className="nav-inner">
                    <div className="logo">
                        <a href="#">Portfolio</a>
                    </div>
                    <NavbarList />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
