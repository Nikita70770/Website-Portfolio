import uuid from 'react-uuid';

/* import css styles */
import './css/SkillItem.css';

const createItem = (level, valueLvl, maxLvl) => {
    const elemsSubList = new Array(valueLvl);
    for (let i = 0; i < valueLvl; i++) {
        let elem = <li key={uuid()} className={'skill-item' + ' active'}></li>;
        if (i + 1 === valueLvl) {
            elem = (
                <li key={uuid()} className={'skill-item' + ' active'}>
                    <span>{level}</span>
                </li>
            );
        }
        elemsSubList[i] = elem;
    }
    return elemsSubList;
};

const SkillItem = props => {
    const { skill, level, valueLvl, maxLvl } = props.data;
    return (
        <li className="item-skill">
            <div className="skills-details">
                <span>{skill}</span>
            </div>
            <div className="skill-status-bar"></div>
            <ul className="sub-list-skill">{createItem(level, valueLvl, maxLvl)}</ul>
        </li>
    );
};

export default SkillItem;
