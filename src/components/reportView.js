/* eslint-disable no-unused-vars */
import { Link, useHistory, useLocation } from 'react-router-dom';
import axios from 'axios';
import qs from 'query-string';
import { useEffect, useState } from 'react';

import '../assets/reportView.css';
import '../assets/App.css';
import 'react-toastify/dist/ReactToastify.css';

import queries from '../constants/queries';

import Header from './layout/Header';
import Footer from './layout/Footer';

const logo = '/logo.png';

const removeFirstLetter = (str) => {
    if (!str) return null;
    return str.substr(1, str.length);
};

function DataGet() {
    const location = useLocation();
    const history = useHistory();

    const [params, setParams] = useState(qs.parse(removeFirstLetter(location.search)));
    const [data, setData] = useState([]);
    const [query, setQuery] = useState(null);

    const fetchQuery = () => {
        axios.get(`http://localhost:61691/${params.mode}`).then((res) => {
            // handle success
            setData(res.data);
        });
    };

    useEffect(() => {
        const init = () => {
            if (!queries.map((row) => row.key).includes(params.mode)) return history.push('/queries');
            const matchedQuery = queries.find((row) => row.key === params.mode);
            setQuery(matchedQuery);
            fetchQuery();
        };
        init();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    console.log(query);
    console.log(data);

    return (
        <div className="Body">
            <table className="Table">
                <thead>
                    <tr>
                        {query?.structure?.map((header, index) => (
                            <th className="TH" key={`th-index-${index}`}>
                                {header}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, index) => (
                        <tr key={`tr-index-${index}`}>
                            {query?.structure?.map((elem) => (
                                <td className="TH">{row[elem]}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

function QueryView() {
    return (
        <div className="App">
            <div className="Header">
                <img src={logo} width="150" alt="FPSC_Logo" />
                <div className="Title text-align-center">
                    <h1 className="TitleName">Federal Public Service Commission, Pakistan</h1>
                    <h3>Report View</h3>
                </div>
            </div>
            <div className="Body text-align-center">
                <div>
                    <Link to="/reports">
                        <button type="button" className="Buttons">
                            Back
                        </button>
                    </Link>
                </div>
                <div>
                    <DataGet />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default QueryView;
