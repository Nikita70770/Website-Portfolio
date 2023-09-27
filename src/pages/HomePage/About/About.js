/* import Components */
import MainSkills from './Skills/MainSkills';
import Education from './Education/Education';
import Expereince from './Experience/Expereince';

/* import css styles */
import './About.css';

/* import images */
import ImageProfile from '../../../assets/img/about/img-profile.jpg';

const About = () => {
    return (
        <section className="about-section">
            <div className="about-section-inner">
                <div className="about-block-left">
                    <div className="about-image">
                        <img src={ImageProfile} alt="Image Profile" />
                    </div>
                </div>
                <div className="about-block-right">
                    <div className="about-block-right-inner">
                        <h2 className="about-title">About Me</h2>
                        <div className="about-text">
                            <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero totam reiciendis fugit
                                tempore laborum nulla, culpa odio rerum cumque dolor, architecto voluptas expedita,
                                doloremque vero incidunt mollitia consequuntur optio beatae quidem. Sint labore iste
                                est!
                            </p>
                        </div>
                        <div className="about-buttons-list">
                            <ul className="about-list">
                                <li className="about-list-item">
                                    <button className="btn-main-skills active">Main skills</button>
                                </li>
                                <li className="about-list-item">
                                    <button className="btn-education">Education</button>
                                </li>
                                <li className="about-list-item">
                                    <button className="btn-expereince">Expereince</button>
                                </li>
                            </ul>
                        </div>
                        <div className="about-details-content">
                            <MainSkills />
                            <Education />
                            {/* <Expereince /> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
