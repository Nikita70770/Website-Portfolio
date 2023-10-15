/* import Components */

/* import css styles */
import './css/Education.css';

const Education = props => {
    const { activityStatus } = props;
    const classTitle = activityStatus === true ? ' active' : '';
    return (
        <div className={'education-content' + classTitle}>
            <ul className="education-list">
                <li key={0} className="education-item">
                    <h2>Lorem</h2>
                    <h3>Lorem</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, obcaecati! Inventore porro ut
                        eaque aut dolorum consequuntur eum laboriosam iste?
                    </p>
                </li>
                <li key={1} className="education-item">
                    <h2>Lorem</h2>
                    <h3>Lorem</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, obcaecati! Inventore porro ut
                        eaque aut dolorum consequuntur eum laboriosam iste?
                    </p>
                </li>
            </ul>
        </div>
    );
};

export default Education;
