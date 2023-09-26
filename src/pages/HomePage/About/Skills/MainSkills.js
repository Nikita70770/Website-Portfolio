/* import Components */
import SkillItem from './SkillItem';

/* import css styles */
import './css/MainSkills.css';

const MainSkills = () => {
    const skillsData = [
        {
            id: 0,
            title: 'Lorem',
            level: 'Begin',
            isActive: ''
        },
        {
            id: 1,
            title: 'Lorem',
            level: 'Basic',
            isActive: ''
        },
        {
            id: 2,
            title: 'Lorem',
            level: 'Medium',
            isActive: 'active'
        },
        {
            id: 3,
            title: 'Lorem',
            level: 'Upper',
            isActive: ''
        },
        {
            id: 4,
            title: 'Lorem',
            level: 'Advance',
            isActive: ''
        }
    ];
    return (
        <>
            <h2 className="competency">HTML</h2>
            <ul className="about-list-skills">
                {skillsData.map(({ id, title, level, isActive }) => {
                    return <SkillItem key={id} title={title} level={level} isActive={isActive} />;
                })}
            </ul>
        </>
    );
};

export default MainSkills;
