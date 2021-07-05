import { Link } from 'react-router-dom';
import axios from 'axios';
import { useFormik } from 'formik';
import { ToastContainer, toast } from 'react-toastify';
import Header from '../layout/Header';
import Footer from '../layout/Footer';

import 'react-toastify/dist/ReactToastify.css';
import '../../assets/App.css';
import '../../assets/dataEntryForm.css';

function PositionsForm() {
    const handleSubmit = (mode, form) => {
        console.log(mode);
        console.log('Positions form values', form.values);

        if (mode === 'submit') {
            axios
                .post('http://localhost:61691/positions/', form.values)
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
                .delete(`http://localhost:61691/positions/${form.values.PosID}`, form.values)
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
                .patch(`http://localhost:61691/positions/${form.values.PosID}`, form.values)
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
    const formikPositions = useFormik({
        initialValues: {
            PosID: '',
            PositionName: '',
            Desgination: '',
            Pay: '',
            PostingCity: '',
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
                        <label htmlFor="PosID" className="labels">
                            Position ID:
                            <input
                                type="text"
                                className="inputFields"
                                id="PosID"
                                name="PosID"
                                onChange={formikPositions.handleChange}
                                value={formikPositions.values.PosID}
                            />
                        </label>
                        <label htmlFor="PositionName" className="labels">
                            Position Name:
                            <input
                                type="text"
                                className="inputFields"
                                id="PositionName"
                                name="PositionName"
                                onChange={formikPositions.handleChange}
                                value={formikPositions.values.PositionName}
                            />
                        </label>
                        <label htmlFor="Desgination" className="labels">
                            Designation:
                            <input
                                type="text"
                                className="inputFields"
                                id="Desgination"
                                name="Desgination"
                                onChange={formikPositions.handleChange}
                                value={formikPositions.values.Desgination}
                            />
                        </label>
                        <label htmlFor="Pay" className="labels">
                            Position Pay:
                            <input
                                type="text"
                                className="inputFields"
                                id="Pay"
                                name="Pay"
                                onChange={formikPositions.handleChange}
                                value={formikPositions.values.Pay}
                            />
                        </label>
                        <label htmlFor="PostingCity" className="labels">
                            Posting City:
                            <input
                                type="text"
                                className="inputFields"
                                id="PostingCity"
                                name="PostingCity"
                                onChange={formikPositions.handleChange}
                                value={formikPositions.values.PostingCity}
                            />
                        </label>
                        <button
                            className="Buttons"
                            type="submit"
                            onClick={() => handleSubmit('submit', formikPositions)}
                        >
                            Submit
                        </button>
                        <button
                            className="Buttons"
                            type="button"
                            onClick={() => handleSubmit('delete', formikPositions)}
                        >
                            Delete
                        </button>
                        <button
                            className="Buttons"
                            type="button"
                            onClick={() => handleSubmit('update', formikPositions)}
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

export default PositionsForm;
