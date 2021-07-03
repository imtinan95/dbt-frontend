import { useFormik } from 'formik';
import { Link } from 'react-router-dom';

import '../../assets/App.css';
import '../../assets/dataEntryForm.css';

import Header from '../layout/Header';
import Footer from '../layout/Footer';

function PositionsForm() {
    const formikPositions = useFormik({
        initialValues: {
            posID: '',
            posName: '',
            posDesignation: '',
            posPay: '',
            posCity: '',
        },
        onSubmit: (values) => {
            console.log('Position Data', values);
        },
    });

    return (
        <div className="App">
            <Header>Positions Data Entry Menu</Header>
            <div className="Body text-align-center">
                <div>
                    <Link to="/dataEntry">
                        <button type="button" className="Buttons">
                            Back
                        </button>
                    </Link>
                </div>

                <div className="dataContainer">
                    <form onSubmit={formikPositions.handleSubmit}>
                        <label htmlFor="posID" className="labels">
                            Position ID:
                            <input
                                type="text"
                                className="inputFields"
                                id="posID"
                                name="posID"
                                onChange={formikPositions.handleChange}
                                value={formikPositions.values.posID}
                            />
                        </label>
                        <label htmlFor="posName" className="labels">
                            Position Name:
                            <input
                                type="text"
                                className="inputFields"
                                id="posName"
                                name="posName"
                                onChange={formikPositions.handleChange}
                                value={formikPositions.values.posName}
                            />
                        </label>
                        <label htmlFor="posDesignation" className="labels">
                            Designation:
                            <input
                                type="text"
                                className="inputFields"
                                id="posDesignation"
                                name="posDesignation"
                                onChange={formikPositions.handleChange}
                                value={formikPositions.values.posDesignation}
                            />
                        </label>
                        <label htmlFor="posPay" className="labels">
                            Position Pay:
                            <input
                                type="text"
                                className="inputFields"
                                id="posPay"
                                name="posPay"
                                onChange={formikPositions.handleChange}
                                value={formikPositions.values.posPay}
                            />
                        </label>
                        <label htmlFor="posCity" className="labels">
                            Posting City:
                            <input
                                type="text"
                                className="inputFields"
                                id="posCity"
                                name="posCity"
                                onChange={formikPositions.handleChange}
                                value={formikPositions.values.posCity}
                            />
                        </label>
                        <button className="Buttons" type="submit">
                            Save
                        </button>
                    </form>
                </div>
                <div className="submitButtons">
                    <button type="button" className="Buttons">
                        Previous
                    </button>

                    <button type="button" className="Buttons">
                        Delete
                    </button>
                    <button type="button" className="Buttons">
                        Next
                    </button>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default PositionsForm;
