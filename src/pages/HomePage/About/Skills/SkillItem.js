/* import Components */

/* import css styles */
import './css/SkillItem.css';

const getRandomId = () => {
    const min = 0,
        max = 10000;
    return Math.floor(Math.random() * (max - min) + min).toString();
};

const createItem = (id, level, valueLvl, maxLvl) => {
    const elemsSubList = new Array(maxLvl);
    for (let i = 0; i < maxLvl; i++) {
        let elem = <li key={id} className={'skill-item' + (i + 1 <= valueLvl ? ' active' : '')}></li>;
        if (i + 1 === valueLvl) {
            elem = (
                <li key={id} className={'skill-item' + (i + 1 <= valueLvl ? ' active' : '')}>
                    <span>{level}</span>
                </li>
            );
        }
        elemsSubList[i] = elem;
    }
    return elemsSubList;
};

const SkillItem = props => {
    const idElem = getRandomId();
    const { skill, level, valueLvl, maxLvl } = props.data;
    return (
        <li className="item-skill">
            <div className="skills-details">
                <span>{skill}</span>
            </div>
            <div className="skill-status-bar"></div>
            <ul className="sub-list-skill">{createItem(idElem, level, valueLvl, maxLvl)}</ul>
        </li>
    );
};

export default SkillItem;
