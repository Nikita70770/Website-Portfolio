/* import Components */

/* import css styles */
import './css/Education.css';

const Education = props => {
    const { activityStatus } = props;
    const classTitle = activityStatus === true ? ' active' : '';
    return (
        <div className={'education-content' + classTitle}>
            <h2>Education</h2>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt consectetur, molestias magni non vero
                commodi provident ex! Magnam molestias, dolorum est architecto non id excepturi necessitatibus animi
                atque nam voluptatem.
            </p>
        </div>
    );
};

export default Education;
