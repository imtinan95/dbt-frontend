import { Link } from 'react-router-dom';
import axios from 'axios';
import { useFormik } from 'formik';
import { ToastContainer, toast } from 'react-toastify';
import Header from '../layout/Header';
import Footer from '../layout/Footer';

import 'react-toastify/dist/ReactToastify.css';
import '../../assets/App.css';
import '../../assets/dataEntryForm.css';

function CandidateForm() {
    const handleSubmit = (mode, form) => {
        console.log(mode);
        console.log('candidate form values', form.values);

        if (mode === 'submit') {
            axios
                .post('http://localhost:61691/candidates/', form.values)
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
                .delete(`http://localhost:61691/candidates/${form.values.RollNo}`, form.values)
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
                .patch(`http://localhost:61691/candidates/${form.values.RollNo}`, form.values)
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
    const formikCandidate = useFormik({
        initialValues: {
            RollNo: '',
            CandidateName: '',
            CNIC: '',
            DOB: '',
            Contact: '',
            Degree: '',
        },
    });
    return (
        <div className="App">
            <Header>
                <h3>Candidate Data Entry Menu</h3>
            </Header>
            <div className="Body text-align-center">
                <div>
                    <Link to="/dataEntry">
                        <button type="button" className="Buttons">
                            Back
                        </button>
                    </Link>
                </div>
                <div className="dataContainer">
                    <form onSubmit={formikCandidate.handleSubmit}>
                        <label htmlFor="RollNo">
                            Candidate Roll No:
                            <input
                                type="number"
                                id="RollNo"
                                name="RollNo"
                                className="inputFields"
                                onChange={formikCandidate.handleChange}
                                value={formikCandidate.values.RollNo}
                            />
                        </label>

                        <label htmlFor="CandidateName">
                            Candidate Name:
                            <input
                                type="text"
                                id="CandidateName"
                                name="CandidateName"
                                className="inputFields"
                                onChange={formikCandidate.handleChange}
                                value={formikCandidate.values.CandidateName}
                            />
                        </label>

                        <label htmlFor="CNIC">
                            Candidate CNIC:{' '}
                            <input
                                type="text"
                                id="CNIC"
                                name="CNIC"
                                className="inputFields"
                                onChange={formikCandidate.handleChange}
                                value={formikCandidate.values.CNIC}
                            />
                        </label>

                        <label htmlFor="Contact">
                            Candidate Contact:
                            <input
                                type="text"
                                id="Contact"
                                name="Contact"
                                className="inputFields"
                                onChange={formikCandidate.handleChange}
                                value={formikCandidate.values.Contact}
                            />
                        </label>

                        <label htmlFor="DOB">
                            Candidate Date:
                            <input
                                type="date"
                                id="DOB"
                                name="DOB"
                                className="inputFields"
                                onChange={formikCandidate.handleChange}
                                value={formikCandidate.values.DOB}
                            />
                        </label>

                        <label htmlFor="Degree">
                            Candidate Degree:
                            <input
                                type="text"
                                id="Degree"
                                name="Degree"
                                className="inputFields"
                                onChange={formikCandidate.handleChange}
                                value={formikCandidate.values.Degree}
                            />
                        </label>

                        <button
                            className="Buttons"
                            type="submit"
                            onClick={() => handleSubmit('submit', formikCandidate)}
                        >
                            Submit
                        </button>
                        <button
                            className="Buttons"
                            type="button"
                            onClick={() => handleSubmit('delete', formikCandidate)}
                        >
                            Delete
                        </button>
                        <button
                            className="Buttons"
                            type="button"
                            onClick={() => handleSubmit('update', formikCandidate)}
                        >
                            Update
                        </button>
                    </form>
                    <br />
                    <p>The Deletion is performed on bases of Roll No.</p>
                    <p>The Updation is performed on Canndidate Name, Contact, Date of Birth and Degree. </p>
                    <p>CNIC and Roll No are not allow to be changed.</p>
                </div>
            </div>
            <ToastContainer />
            <Footer />
        </div>
    );
}

export default CandidateForm;
