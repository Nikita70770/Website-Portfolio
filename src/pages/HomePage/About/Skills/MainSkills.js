/* import Components */
import SkillItem from './SkillItem';

/* import css styles */
import './css/MainSkills.css';

const getRandomId = () => {
    const min = 0,
        max = 10000;
    return Math.floor(Math.random() * (max - min) + min).toString();
};

const MainSkills = props => {
    const skillsData = [
        {
            id: getRandomId(),
            skill: 'HTML',
            level: 'Medium',
            valueLvl: 3,
            maxLvl: 5
        },
        {
            id: getRandomId(),
            skill: 'CSS',
            level: 'Basic',
            valueLvl: 2,
            maxLvl: 5
        },
        {
            id: getRandomId(),
            skill: 'JavaScript',
            level: 'Basic',
            valueLvl: 2,
            maxLvl: 5
        },
        {
            id: getRandomId(),
            skill: 'React',
            level: 'Begin',
            valueLvl: 1,
            maxLvl: 5
        },
        {
            id: getRandomId(),
            skill: 'Git',
            level: 'Basic',
            valueLvl: 2,
            maxLvl: 5
        }
    ];
    const classTitle = props.activityStatus === true ? ' active' : '';
    const elementsList = skillsData.map(item => <SkillItem key={item.id} data={item} />);
    return (
        <div className={'skills-content' + classTitle}>
            <ul className="skills-list">{elementsList}</ul>
        </div>
    );
};

export default MainSkills;
