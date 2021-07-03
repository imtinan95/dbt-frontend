import { useFormik } from 'formik';
import { Link } from 'react-router-dom';

import '../../assets/App.css';
import '../../assets/dataEntryForm.css';

import Header from '../layout/Header';
import Footer from '../layout/Footer';

function MinistryForm() {
    const formikMinistry = useFormik({
        initialValues: {
            minID: '',
            minName: '',
            minHQ: '',
            minDivs: '',
            minstrRes: '',
        },
        onSubmit: (values) => {
            console.log('Ministry Data', values);
        },
    });
    return (
        <div className="App">
            <Header>Ministries Data Entry Menu</Header>
            <div className="Body text-align-center">
                <div>
                    <Link to="/dataEntry">
                        <button type="button" className="Buttons">
                            Back
                        </button>
                    </Link>
                </div>
                <div className="dataContainer">
                    <form onSubmit={formikMinistry.handleSubmit}>
                        <label htmlFor="minID" className="labels">
                            Ministry ID:
                            <input
                                type="text"
                                className="inputFields"
                                id="minID"
                                name="minID"
                                onChange={formikMinistry.handleChange}
                                values={formikMinistry.values.minID}
                            />
                        </label>

                        <label htmlFor="minName" className="labels">
                            Ministry Name:
                            <input
                                type="text"
                                className="inputFields"
                                id="minName"
                                name="minName"
                                onChange={formikMinistry.handleChange}
                                values={formikMinistry.values.minName}
                            />
                        </label>

                        <label htmlFor="minHQ" className="labels">
                            Ministry HQ:
                            <input
                                type="text"
                                className="inputFields"
                                id="minHQ"
                                name="minHQ"
                                onChange={formikMinistry.handleChange}
                                values={formikMinistry.values.minHQ}
                            />
                        </label>

                        <label htmlFor="minDivs" className="labels">
                            Ministry Divisions:
                            <input
                                type="text"
                                className="inputFields"
                                id="minDivs"
                                name="minDivs"
                                onChange={formikMinistry.handleChange}
                                values={formikMinistry.values.minDivs}
                            />
                        </label>

                        <label htmlFor="minstrRes" className="labels">
                            Minister Responsible:
                            <input
                                type="text"
                                className="inputFields"
                                id="minstrRes"
                                name="minstrRes"
                                onChange={formikMinistry.handleChange}
                                values={formikMinistry.values.minstrRes}
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

export default MinistryForm;
