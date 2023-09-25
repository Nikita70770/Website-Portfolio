/* import Components */

/* import css styles */
import './Home.css';

const Home = () => {
    return (
        <header className="header">
            <div className="header-wrapper">
                <div className="header-text">
                    <p>Welcome!</p>
                </div>
                <h1 className="header-title">
                    <strong>
                        My name is <em>Nikita</em>
                    </strong>
                    <br />a frontend developer
                </h1>
                <div className="header-subtitle">
                    <p>with passion for learning and creating.</p>
                </div>
                <div className="header-button">
                    <a className="btn-download-cv" href="#!">
                        Download CV
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Home;
