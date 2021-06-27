import { Link } from 'react-router-dom';

import '../assets/App.css';

import queries from '../constants/queries';

const logo = '/logo.png';

function QueryForm() {
    // const handleSubmit = (mode) => {
    //     console.log('testing Mode', mode);
    // };

    return (
        <div className="App">
            <div className="Header">
                <img src={logo} width="150" alt="FPSC_Logo" />
                <div className="Title text-align-center">
                    <h1 className="TitleName">Federal Public Service Commission, Pakistan</h1>
                    <h3>Query Menu</h3>
                </div>
            </div>
            <div className="Body text-align-center">
                <div>
                    <Link to="/">
                        <button type="button" className="Buttons">
                            Home
                        </button>
                    </Link>
                </div>

                {queries.map((query) => (
                    <div>
                        <Link to={`/query/view?mode=${query}`}>
                            <button type="button" className="Buttons">
                                {query} Query
                            </button>
                        </Link>
                    </div>
                ))}
            </div>
            <div className="Footer text-align-center">
                <h3>Developed by Muhammad Imtinan Ul Haq in React</h3>
                <p>Reg No. 4018-FBAS/BSCS/F18</p>
            </div>
        </div>
    );
}

export default QueryForm;
