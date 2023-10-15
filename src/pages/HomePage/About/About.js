import { Component } from 'react';

/* import Components */
import MainSkills from './Skills/MainSkills';
import Education from './Education/Education';
import Expereince from './Experience/Expereince';

/* import css styles */
import './About.css';

/* import images */
import ImageProfile from '../../../assets/img/about/img-profile.jpg';

class About extends Component {
    constructor() {
        super();
        this.switchPosition = 1;
        this.state = {
            skillsTab: true,
            educationTab: false,
            experienceTab: false
        };
    }

    clickMainSkills = () => {
        this.switchPosition = 1;
        this.resetState();
        this.setState(prevState => ({
            skillsTab: !prevState.skillsTab
        }));
    };

    clickEducation = () => {
        this.switchPosition = 2;
        this.resetState();
        this.setState(prevState => ({
            educationTab: !prevState.educationTab
        }));
    };

    clickExperience = () => {
        this.switchPosition = 3;
        this.resetState();
        this.setState(prevState => ({
            experienceTab: !prevState.experienceTab
        }));
    };

    resetState = () => {
        this.setState(prevState => {
            for (let key in prevState) {
                prevState[key] = false;
            }
        });
    };

    render() {
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
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero totam reiciendis
                                    fugit tempore laborum nulla, culpa odio rerum cumque dolor, architecto voluptas
                                    expedita, doloremque vero incidunt mollitia consequuntur optio beatae quidem. Sint
                                    labore iste est!
                                </p>
                            </div>
                            <div className="about-buttons-list">
                                <span className={'switch-elem' + ` move-in-pos${this.switchPosition}`}></span>
                                <ul className="about-list">
                                    <li className="about-list-item">
                                        <button
                                            className={
                                                'btn-main-skills' + (this.state.skillsTab === true ? ' active' : '')
                                            }
                                            onClick={this.clickMainSkills}
                                        >
                                            Main skills
                                        </button>
                                    </li>
                                    <li className="about-list-item">
                                        <button
                                            className={
                                                'btn-education' + (this.state.educationTab === true ? ' active' : '')
                                            }
                                            onClick={this.clickEducation}
                                        >
                                            Education
                                        </button>
                                    </li>
                                    <li className="about-list-item">
                                        <button
                                            className={
                                                'btn-expereince' + (this.state.experienceTab === true ? ' active' : '')
                                            }
                                            onClick={this.clickExperience}
                                        >
                                            Expereince
                                        </button>
                                    </li>
                                </ul>
                            </div>
                            <div className="about-details-content">
                                <MainSkills activityStatus={this.state.skillsTab} />
                                {/* <Education activityStatus={this.state.educationTab} />
                                <Expereince activityStatus={this.state.experienceTab} /> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default About;
