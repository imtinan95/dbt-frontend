import { Link } from 'react-router-dom';

import '../assets/App.css';

import Header from './layout/Header';
import Footer from './layout/Footer';

function dataEntryMenu() {
    return (
        <div className="App">
            <Header>
                <h3>Data Entry Menu</h3>
            </Header>
            <div className="Body text-align-center">
                <div>
                    <Link to="/">
                        <button type="button" className="Buttons">
                            Home
                        </button>
                    </Link>
                </div>
                <br />
                <div>
                    <Link to="/dataEntry/form/Candidates">
                        <button type="button" className="Buttons">
                            Candidate Form
                        </button>
                    </Link>
                </div>
                <div>
                    <Link to="/dataEntry/form/Divisions">
                        <button type="button" className="Buttons">
                            Divisions Form
                        </button>
                    </Link>
                </div>
                <div>
                    <Link to="/dataEntry/form/Employees">
                        <button type="button" className="Buttons">
                            Employees Form
                        </button>
                    </Link>
                </div>
                <div>
                    <Link to="/dataEntry/form/Ministries">
                        <button type="button" className="Buttons">
                            Ministries Form
                        </button>
                    </Link>
                </div>
                <div>
                    <Link to="/dataEntry/form/Positions">
                        <button type="button" className="Buttons">
                            Positions Form
                        </button>
                    </Link>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default dataEntryMenu;
