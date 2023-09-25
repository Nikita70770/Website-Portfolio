/* import Components */
import SkillItem from './SkillItem';

/* import css styles */

const MainSkills = () => {
    const skillsData = [
        {
            id: 0,
            title: 'Lorem',
            level: 'Begin',
            isActive: false
        },
        {
            id: 1,
            title: 'Lorem',
            level: 'Basic',
            isActive: false
        },
        {
            id: 2,
            title: 'Lorem',
            level: 'Medium',
            isActive: false
        },
        {
            id: 3,
            title: 'Lorem',
            level: 'Upper',
            isActive: false
        },
        {
            id: 4,
            title: 'Lorem',
            level: 'Advance',
            isActive: false
        }
    ];
    return (
        <ul className="about-list-skills">
            {skillsData.map(({ id, title, level, isActive }) => {
                return <SkillItem key={id} title={title} level={level} isActive={isActive} />;
            })}
        </ul>
    );
};

export default MainSkills;
