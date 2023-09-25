/* import Components */

/* import css styles */
// import './About.css';

const About = () => {
    return (
        <section className="about-section">
            <div className="about-section-inner">
                <div className="about-block-left">
                    <div className="about-image"></div>
                </div>
                <div className="about-block-right">
                    <h2 className="about-title">About Me</h2>
                    <div className="about-text">
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero totam reiciendis fugit
                            tempore laborum nulla, culpa odio rerum cumque dolor, architecto voluptas expedita,
                            doloremque vero incidunt mollitia consequuntur optio beatae quidem. Sint labore iste est!
                        </p>
                    </div>
                    <div className="about-details">
                        <ul className="about-details-list">
                            <li className="about-list-item">
                                <button className="btn-main-skills">Main skills</button>
                            </li>
                            <li className="about-list-item">
                                <button className="btn-education">Education</button>
                            </li>
                            <li className="about-list-item">
                                <button className="btn-lorem">Lorem.</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
