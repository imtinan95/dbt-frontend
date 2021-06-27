import { useFormik } from 'formik';
import { Link } from 'react-router-dom';

import '../../assets/App.css';
import '../../assets/dataEntryForm.css';

const logo = '/logo.png';

function EmployeeForm() {
    const formikEmp = useFormik({
        initialValues: {
            empID: '',
            empName: '',
            empCNIC: '',
            empContact: '',
            empDOB: '',
        },
        onSubmit: (values) => {
            console.log('Emp Values', values);
        },
    });

    return (
        <div className="App">
            <div className="Header">
                <img src={logo} width="150" alt="FPSC_Logo" />
                <div className="Title text-align-center">
                    <h1 className="TitleName">Federal Public Service Commission, Pakistan</h1>
                    <h3>Employee Data Entry Menu</h3>
                </div>
            </div>
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
                        <label htmlFor="empID" className="labels">
                            Employee ID:
                            <input
                                type="text"
                                className="inputFields"
                                id="empID"
                                name="empID"
                                onChange={formikEmp.handleChange}
                                value={formikEmp.values.empID}
                            />
                        </label>

                        <label htmlFor="empName" className="labels">
                            Employee Name:
                            <input
                                type="text"
                                className="inputFields"
                                id="empName"
                                name="empName"
                                onChange={formikEmp.handleChange}
                                value={formikEmp.values.empName}
                            />
                        </label>

                        <label htmlFor="empCNIC" className="labels">
                            Employee CNIC:
                            <input
                                type="text"
                                className="inputFields"
                                id="empCNIC"
                                name="empCNIC"
                                onChange={formikEmp.handleChange}
                                value={formikEmp.values.empCNIC}
                            />
                        </label>

                        <label htmlFor="empContact" className="labels">
                            Employee Contact:
                            <input
                                type="text"
                                className="inputFields"
                                id="empContact"
                                name="empContact"
                                onChange={formikEmp.handleChange}
                                value={formikEmp.values.empContact}
                            />
                        </label>

                        <label htmlFor="empDOB" className="labels">
                            Employee Date of Birth:
                            <input
                                type="date"
                                className="inputFields"
                                id="empDOB"
                                name="empDOB"
                                onChange={formikEmp.handleChange}
                                value={formikEmp.values.empDOB}
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
            <div className="Footer text-align-center">
                <h3>Developed by Muhammad Imtinan Ul Haq in React</h3>
                <p>Reg No. 4018-FBAS/BSCS/F18</p>
            </div>
        </div>
    );
}

export default EmployeeForm;
