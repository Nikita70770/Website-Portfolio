/* import Components */
import SkillItem from './SkillItem';

/* import css styles */
import './css/MainSkills.css';

const MainSkills = props => {
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
    const { activityStatus } = props;
    const classTitle = activityStatus === true ? ' active' : '';
    return (
        <div className={'skills-content' + classTitle}>
            <h2 className="competency">Skills</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita natus ipsa repellat deleniti facere
                nulla explicabo illo nihil consequuntur saepe. Fuga id esse illum nam?
            </p>
        </div>
    );
};

export default MainSkills;
