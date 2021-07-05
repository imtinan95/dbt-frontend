import { Link } from 'react-router-dom';
import axios from 'axios';
import { useFormik } from 'formik';
import { ToastContainer, toast } from 'react-toastify';
import Header from '../layout/Header';
import Footer from '../layout/Footer';

import 'react-toastify/dist/ReactToastify.css';
import '../../assets/App.css';
import '../../assets/dataEntryForm.css';

function MinistryForm() {
    const handleSubmit = (mode, form) => {
        console.log(mode);
        console.log('Ministry form values', form.values);

        if (mode === 'submit') {
            axios
                .post('http://localhost:61691/ministries/', form.values)
                .then((res) => {
                    console.log(res);
                    toast('Data Inserted');
                })
                .catch((err) => {
                    let toastMessage = '';
                    console.log(err.response);
                    if (!err.response) {
                        toastMessage = err.message;
                    } else toastMessage = err.response.data;
                    toast(toastMessage);
                });
        } else if (mode === 'delete') {
            axios
                .delete(`http://localhost:61691/ministries/${form.values.MinistryID}`, form.values)
                .then((res) => {
                    console.log(res);
                    toast('Data Deleted');
                })
                .catch((err) => {
                    let toastMessage = '';
                    console.log(err.response);
                    if (!err.response) {
                        toastMessage = err.message;
                    } else toastMessage = err.response.data;
                    toast(toastMessage);
                });
        } else {
            axios
                .patch(`http://localhost:61691/ministries/${form.values.MinistryID}`, form.values)
                .then((res) => {
                    console.log(res);
                    toast('Data Updated');
                })
                .catch((err) => {
                    let toastMessage = '';
                    console.log(err.response);
                    if (!err.response) {
                        toastMessage = err.message;
                    } else toastMessage = err.response.data;
                    toast(toastMessage);
                });
        }
    };
    const formikMinistry = useFormik({
        initialValues: {
            MinistryID: '',
            MinistryName: '',
            MinistryHQ: '',
            MinistryDivisions: '',
            MinisterResponsible: '',
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
                        <label htmlFor="MinistryID" className="labels">
                            Ministry ID:
                            <input
                                type="text"
                                className="inputFields"
                                id="MinistryID"
                                name="MinistryID"
                                onChange={formikMinistry.handleChange}
                                values={formikMinistry.values.MinistryID}
                            />
                        </label>

                        <label htmlFor="MinistryName" className="labels">
                            Ministry Name:
                            <input
                                type="text"
                                className="inputFields"
                                id="MinistryName"
                                name="MinistryName"
                                onChange={formikMinistry.handleChange}
                                values={formikMinistry.values.MinistryName}
                            />
                        </label>

                        <label htmlFor="MinistryHQ" className="labels">
                            Ministry HQ:
                            <input
                                type="text"
                                className="inputFields"
                                id="MinistryHQ"
                                name="MinistryHQ"
                                onChange={formikMinistry.handleChange}
                                values={formikMinistry.values.MinistryHQ}
                            />
                        </label>

                        <label htmlFor="MinistryDivisions" className="labels">
                            Ministry Divisions:
                            <input
                                type="text"
                                className="inputFields"
                                id="MinistryDivisions"
                                name="MinistryDivisions"
                                onChange={formikMinistry.handleChange}
                                values={formikMinistry.values.MinistryDivisions}
                            />
                        </label>

                        <label htmlFor="MinisterResponsible" className="labels">
                            Minister Responsible:
                            <input
                                type="text"
                                className="inputFields"
                                id="MinisterResponsible"
                                name="MinisterResponsible"
                                onChange={formikMinistry.handleChange}
                                values={formikMinistry.values.MinisterResponsible}
                            />
                        </label>

                        <button
                            className="Buttons"
                            type="submit"
                            onClick={() => handleSubmit('submit', formikMinistry)}
                        >
                            Submit
                        </button>
                        <button
                            className="Buttons"
                            type="button"
                            onClick={() => handleSubmit('delete', formikMinistry)}
                        >
                            Delete
                        </button>
                        <button
                            className="Buttons"
                            type="button"
                            onClick={() => handleSubmit('update', formikMinistry)}
                        >
                            Update
                        </button>
                    </form>
                </div>
            </div>
            <ToastContainer />
            <Footer />
        </div>
    );
}

export default MinistryForm;
