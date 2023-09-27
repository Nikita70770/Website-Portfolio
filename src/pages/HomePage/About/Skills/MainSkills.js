/* import Components */
import SkillItem from './SkillItem';

/* import css styles */
import './css/MainSkills.css';

const MainSkills = () => {
    const skillsData = [
        {
            id: 0,
            level: 'Begin',
            valActive: '',
            valComplete: 'complete'
        },
        {
            id: 1,
            level: 'Basic',
            valActive: '',
            valComplete: 'complete'
        },
        {
            id: 2,
            level: 'Medium',
            valActive: 'active',
            valComplete: ''
        },
        {
            id: 3,
            level: 'Upper',
            valActive: '',
            valComplete: ''
        },
        {
            id: 4,
            level: 'Advance',
            valActive: '',
            valComplete: ''
        }
    ];
    return (
        <div className="skills-content">
            <h2 className="competency">Skills</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita natus ipsa repellat deleniti facere
                nulla explicabo illo nihil consequuntur saepe. Fuga id esse illum nam?
            </p>
            {/* <ul className="about-list-skills">
                {skillsData.map(({ id, level, valActive, valComplete }) => {
                    return <SkillItem key={id} level={level} statusActive={valActive} statusComplete={valComplete} />;
                })}
            </ul> */}
        </div>
    );
};

export default MainSkills;
