/* import Components */
import NavbarListItem from '../navbar-list/NavbarListItem';

/* import css styles */
import './css/NavbarList.css';

const NavbarList = () => {
    return (
        <ul className="nav-list">
            <NavbarListItem />
            <NavbarListItem />
            <NavbarListItem />
        </ul>
    );
};

export default NavbarList;
