import { useFormik } from 'formik';
import { Link } from 'react-router-dom';

import '../../assets/App.css';
import '../../assets/dataEntryForm.css';

const logo = '/logo.png';

function DivisionsForm() {
    const formikaDivisions = useFormik({
        initialValues: {
            divID: '',
            divName: '',
            divManager: '',
            divContact: '',
            minID: '',
        },
        onSubmit: (values) => {
            console.log('Divisions Data', values);
        },
    });
    return (
        <div className="App">
            <div className="Header">
                <img src={logo} width="150" alt="FPSC_Logo" />
                <div className="Title text-align-center">
                    <h1 className="TitleName">Federal Public Service Commission, Pakistan</h1>
                    <h3>Divisions Data Entry Menu</h3>
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
                    <form onSubmit={formikaDivisions.handleSubmit}>
                        <label htmlFor="divID" className="labels">
                            Division ID:
                            <input
                                type="text"
                                className="inputFields"
                                id="divID"
                                name="divID"
                                onChange={formikaDivisions.handleChange}
                                values={formikaDivisions.values.divID}
                            />
                        </label>

                        <label htmlFor="divName" className="labels">
                            Division Name:
                            <input
                                type="text"
                                className="inputFields"
                                id="divName"
                                name="divName"
                                onChange={formikaDivisions.handleChange}
                                values={formikaDivisions.values.divName}
                            />
                        </label>
                        <label htmlFor="divManager" className="labels">
                            Division Manager:
                            <input
                                type="text"
                                className="inputFields"
                                id="divManager"
                                name="divManager"
                                onChange={formikaDivisions.handleChange}
                                values={formikaDivisions.values.divManager}
                            />
                        </label>
                        <label htmlFor="divContact" className="labels">
                            Division Contact:
                            <input
                                type="text"
                                className="inputFields"
                                id="divContact"
                                name="divContact"
                                onChange={formikaDivisions.handleChange}
                                values={formikaDivisions.values.divContact}
                            />
                        </label>
                        <label htmlFor="minID" className="labels">
                            Ministry ID:
                            <input
                                type="text"
                                className="inputFields"
                                id="minID"
                                name="minID"
                                onChange={formikaDivisions.handleChange}
                                values={formikaDivisions.values.minID}
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

export default DivisionsForm;
