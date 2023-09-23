/* import Components */
import NavbarListItem from '../navbar-list/NavbarListItem';

/* import css styles */
import './css/NavbarList.css';

const NavbarList = () => {
    const dataNavbar = [
        {
            id: 0,
            title: 'Home',
            link: '#!'
        },
        {
            id: 1,
            title: 'About',
            link: '#!'
        },
        {
            id: 2,
            title: 'Skills',
            link: '#!'
        },
        {
            id: 3,
            title: 'Portfolio',
            link: '#!'
        },
        {
            id: 4,
            title: 'Contact',
            link: '#!'
        }
    ];
    return (
        <ul className="nav-list">
            {dataNavbar.map(({ id, title, link }) => {
                return <NavbarListItem key={id} title={title} link={link} />;
            })}
        </ul>
    );
};

export default NavbarList;
