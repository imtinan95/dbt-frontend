import { Link } from 'react-router-dom';
import axios from 'axios';
import { useFormik } from 'formik';
import { ToastContainer, toast } from 'react-toastify';
import Header from '../layout/Header';
import Footer from '../layout/Footer';

import 'react-toastify/dist/ReactToastify.css';
import '../../assets/App.css';
import '../../assets/dataEntryForm.css';

function EmployeeForm() {
    const handleSubmit = (mode, form) => {
        console.log(mode);
        console.log('Employees form values', form.values);

        if (mode === 'submit') {
            axios
                .post('http://localhost:61691/employees/', form.values)
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
                .delete(`http://localhost:61691/employees/${form.values.EmployeeID}`, form.values)
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
                .patch(`http://localhost:61691/employees/${form.values.EmployeeID}`, form.values)
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

    const formikEmp = useFormik({
        initialValues: {
            EmployeeID: '',
            EmployeeName: '',
            CNIC: '',
            Contact: '',
            DOB: '',
        },
    });

    return (
        <div className="App">
            <Header>Employee Data Entry Menu</Header>
            <div className="Body text-align-center">
                <div>
                    <Link to="/dataEntry">
                        <button type="button" className="Buttons">
                            Back
                        </button>
                    </Link>
                </div>
                <div className="dataContainer">
                    <form onSubmit={formikEmp.handleSubmit}>
                        <label htmlFor="EmployeeID" className="labels">
                            Employee ID:
                            <input
                                type="text"
                                className="inputFields"
                                id="EmployeeID"
                                name="EmployeeID"
                                onChange={formikEmp.handleChange}
                                value={formikEmp.values.EmployeeID}
                            />
                        </label>

                        <label htmlFor="EmployeeName" className="labels">
                            Employee Name:
                            <input
                                type="text"
                                className="inputFields"
                                id="EmployeeName"
                                name="EmployeeName"
                                onChange={formikEmp.handleChange}
                                value={formikEmp.values.EmployeeName}
                            />
                        </label>

                        <label htmlFor="CNIC" className="labels">
                            Employee CNIC:
                            <input
                                type="text"
                                className="inputFields"
                                id="CNIC"
                                name="CNIC"
                                onChange={formikEmp.handleChange}
                                value={formikEmp.values.CNIC}
                            />
                        </label>

                        <label htmlFor="Contact" className="labels">
                            Employee Contact:
                            <input
                                type="text"
                                className="inputFields"
                                id="Contact"
                                name="Contact"
                                onChange={formikEmp.handleChange}
                                value={formikEmp.values.Contact}
                            />
                        </label>

                        <label htmlFor="DOB" className="labels">
                            Employee Date of Birth:
                            <input
                                type="date"
                                className="inputFields"
                                id="DOB"
                                name="DOB"
                                onChange={formikEmp.handleChange}
                                value={formikEmp.values.DOB}
                            />
                        </label>
                        <button className="Buttons" type="submit" onClick={() => handleSubmit('submit', formikEmp)}>
                            Submit
                        </button>
                        <button className="Buttons" type="button" onClick={() => handleSubmit('delete', formikEmp)}>
                            Delete
                        </button>
                        <button className="Buttons" type="button" onClick={() => handleSubmit('update', formikEmp)}>
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

export default EmployeeForm;
