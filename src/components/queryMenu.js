import { Link } from 'react-router-dom';

import '../assets/App.css';

import Header from './layout/Header';
import Footer from './layout/Footer';

import queries from '../constants/queries';

function QueryForm() {
    // const handleSubmit = (mode) => {
    //     console.log('testing Mode', mode);
    // };

    return (
        <div className="App">
            <Header>
                <h3>Query Menu</h3>
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
                {queries.map((query) => (
                    <div key={query.key}>
                        <Link to={`/query/view?mode=${query.key}`}>
                            <button type="button" className="Buttons">
                                {query.key} Query
                            </button>
                        </Link>
                    </div>
                ))}
            </div>
            <Footer />
        </div>
    );
}

export default QueryForm;
