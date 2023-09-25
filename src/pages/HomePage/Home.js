/* import Components */
import Header from './Header/Header';
import About from './About/About';

/* import css styles */

const Home = () => {
    return (
        <>
            <Header />
            <main className="main">
                <div className="container">
                    <About />
                </div>
            </main>
        </>
    );
};

export default Home;
