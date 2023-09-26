/* import Components */

/* import css styles */
import './css/SkillItem.css';

const SkillItem = ({ title, level, isActive }) => {
    return (
        <li className="item-skill">
            <span className={'level-skill' + isActive}>{level}</span>
        </li>
    );
};

export default SkillItem;
