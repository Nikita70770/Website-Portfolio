/* import css styles */
import './css/Experience.css';

const Expereince = props => {
    const { activityStatus } = props;
    const classTitle = activityStatus === true ? ' active' : '';
    return (
        <div className={'experience-content' + classTitle}>
            <h2>Experience</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea odit quod voluptatum neque omnis numquam
                magnam saepe asperiores obcaecati cupiditate placeat amet debitis, excepturi quos distinctio
                perspiciatis laborum vel laboriosam doloremque exercitationem. Nihil, inventore voluptatem.
            </p>
        </div>
    );
};

export default Expereince;
