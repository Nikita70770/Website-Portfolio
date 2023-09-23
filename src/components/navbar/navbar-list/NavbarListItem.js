/* import css styles */
import './css/NavbarListItem.css';

const NavbarListItem = ({ title, link }) => {
    return (
        <li className="nav-list-item">
            <a className="nav-list-item-link" href={link}>
                {title}
            </a>
        </li>
    );
};

export default NavbarListItem;
