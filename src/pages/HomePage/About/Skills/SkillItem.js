/* import Components */

/* import css styles */
import './css/SkillItem.css';

const SkillItem = ({ level, statusActive, statusComplete }) => {
    return (
        <li className={'item-skill' + ' ' + statusActive + statusComplete}>
            <span className={'level-skill' + ' ' + statusActive}>{level}</span>
        </li>
    );
};

export default SkillItem;
