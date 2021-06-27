import { Link } from 'react-router-dom';
import './assets/App.css';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

function App() {
    return (
        <div className="App">
            <Header>
                <h3>Main Menu</h3>
            </Header>
            <div className="Body text-align-center">
                <div>
                    <Link to="/">
                        <button type="button" className="Buttons">
                            Home
                        </button>
                    </Link>
                </div>
                <div>
                    <Link to="/getData">
                        <button type="button" className="Buttons">
                            Get Data
                        </button>
                    </Link>
                </div>
                <div>
                    <Link to="/dataEntry">
                        <button type="button" className="Buttons">
                            Data Entry Form
                        </button>
                    </Link>
                </div>
                <div>
                    <Link to="/queries">
                        <button type="button" className="Buttons">
                            Queries Form
                        </button>
                    </Link>
                </div>
                <div>
                    <Link to="/reports">
                        <button type="button" className="Buttons">
                            Reports Form
                        </button>
                    </Link>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default App;
