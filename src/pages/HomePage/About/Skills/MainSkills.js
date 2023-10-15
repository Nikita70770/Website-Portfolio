import uuid from 'react-uuid';

/* import Components */
import SkillItem from './SkillItem';

/* import css styles */
import './css/MainSkills.css';

const MainSkills = props => {
    const skillsData = [
        {
            id: uuid(),
            skill: 'HTML',
            level: 'Medium',
            valueLvl: 3,
            maxLvl: 5
        },
        {
            id: uuid(),
            skill: 'CSS',
            level: 'Basic',
            valueLvl: 2,
            maxLvl: 5
        },
        {
            id: uuid(),
            skill: 'JavaScript',
            level: 'Basic',
            valueLvl: 2,
            maxLvl: 5
        },
        {
            id: uuid(),
            skill: 'React',
            level: 'Begin',
            valueLvl: 1,
            maxLvl: 5
        },
        {
            id: uuid(),
            skill: 'Git',
            level: 'Basic',
            valueLvl: 2,
            maxLvl: 5
        }
    ];
    console.log(skillsData);
    const classTitle = props.activityStatus === true ? ' active' : '';
    const elementsList = skillsData.map(item => <SkillItem key={item.id} data={item} />);
    return (
        <div className={'skills-content' + classTitle}>
            <ul className="skills-list">{elementsList}</ul>
        </div>
    );
};

export default MainSkills;
