import axios from 'axios';
import { useFormik } from 'formik';
import { ToastContainer, toast } from 'react-toastify';
import { Link } from 'react-router-dom';

import '../../assets/App.css';
import '../../assets/dataEntryForm.css';

import 'react-toastify/dist/ReactToastify.css';
import Header from '../layout/Header';
import Footer from '../layout/Footer';

function DivisionsForm() {
    const handleSubmit = (mode, form) => {
        console.log(mode);
        console.log('candidate form values', form.values);

        if (mode === 'submit') {
            axios
                .post('http://localhost:61691/divisions/', form.values)
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
                .delete(`http://localhost:61691/divisions/${form.values.DivisionID}`, form.values)
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
                .patch(`http://localhost:61691/divisions/${form.values.DivisionID}`, form.values)
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
    const formikaDivisions = useFormik({
        initialValues: {
            DivisionID: '',
            DivisionName: '',
            DivisionManager: '',
            ParentMinistry: '',
            Contact: '',
            MinistryID: '',
        },
    });
    return (
        <div className="App">
            <Header>Divisions Data Entry Menu</Header>
            <div className="Body text-align-center">
                <div>
                    <Link to="/dataEntry">
                        <button type="button" className="Buttons">
                            Back
                        </button>
                    </Link>
                </div>
                <div className="dataContainer">
                    <form onSubmit={formikaDivisions.handleSubmit}>
                        <label htmlFor="DivisionID" className="labels">
                            Division ID:
                            <input
                                type="text"
                                className="inputFields"
                                id="DivisionID"
                                name="DivisionID"
                                onChange={formikaDivisions.handleChange}
                                values={formikaDivisions.values.DivisionID}
                            />
                        </label>

                        <label htmlFor="DivisionName" className="labels">
                            Division Name:
                            <input
                                type="text"
                                className="inputFields"
                                id="DivisionName"
                                name="DivisionName"
                                onChange={formikaDivisions.handleChange}
                                values={formikaDivisions.values.DivisionName}
                            />
                        </label>
                        <label htmlFor="DivisionManager" className="labels">
                            Division Manager:
                            <input
                                type="text"
                                className="inputFields"
                                id="DivisionManager"
                                name="DivisionManager"
                                onChange={formikaDivisions.handleChange}
                                values={formikaDivisions.values.DivisionManager}
                            />
                        </label>
                        <label htmlFor="Contact" className="labels">
                            Division Contact:
                            <input
                                type="text"
                                className="inputFields"
                                id="Contact"
                                name="Contact"
                                onChange={formikaDivisions.handleChange}
                                values={formikaDivisions.values.Contact}
                            />
                        </label>
                        <label htmlFor="ParentMinistry" className="labels">
                            Parent Ministry:
                            <input
                                type="text"
                                className="inputFields"
                                id="ParentMinistry"
                                name="ParentMinistry"
                                onChange={formikaDivisions.handleChange}
                                values={formikaDivisions.values.ParentMinistry}
                            />
                        </label>
                        <label htmlFor="MinistryID" className="labels">
                            Ministry ID:
                            <input
                                type="text"
                                className="inputFields"
                                id="MinistryID"
                                name="MinistryID"
                                onChange={formikaDivisions.handleChange}
                                values={formikaDivisions.values.MinistryID}
                            />
                        </label>
                        <button
                            className="Buttons"
                            type="submit"
                            onClick={() => handleSubmit('submit', formikaDivisions)}
                        >
                            Submit
                        </button>
                        <button
                            className="Buttons"
                            type="button"
                            onClick={() => handleSubmit('delete', formikaDivisions)}
                        >
                            Delete
                        </button>
                        <button
                            className="Buttons"
                            type="button"
                            onClick={() => handleSubmit('update', formikaDivisions)}
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

export default DivisionsForm;
