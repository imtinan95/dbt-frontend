import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import '../../assets/App.css';
import '../../assets/dataEntryForm.css';

const logo = '/logo.png';
function CandidateForm() {
    const formikCandidate = useFormik({
        initialValues: {
            roll: '',
            name: '',
            cnic: '',
            contact: '',
            date: '',
            degree: '',
        },
        onSubmit: (values) => {
            console.log('Candidate Values', values);
        },
    });
    return (
        <div className="App">
            <div className="Header">
                <img src={logo} width="150" alt="FPSC_Logo" />
                <div className="Title text-align-center">
                    <h1 className="TitleName">Federal Public Service Commission, Pakistan</h1>
                    <h3>Candidate Data Entry Menu</h3>
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
                    <form onSubmit={formikCandidate.handleSubmit}>
                        <label htmlFor="roll">
                            Candidate Roll:
                            <input
                                type="text"
                                id="roll"
                                name="roll"
                                className="inputFields"
                                onChange={formikCandidate.handleChange}
                                value={formikCandidate.values.roll}
                            />
                        </label>

                        <label htmlFor="name">
                            Candidate Name:
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="inputFields"
                                onChange={formikCandidate.handleChange}
                                value={formikCandidate.values.name}
                            />
                        </label>

                        <label htmlFor="cnic">
                            Candidate CNIC:{' '}
                            <input
                                type="text"
                                id="cnic"
                                name="cnic"
                                className="inputFields"
                                onChange={formikCandidate.handleChange}
                                value={formikCandidate.values.cnic}
                            />
                        </label>

                        <label htmlFor="contact">
                            Candidate Contact:
                            <input
                                type="text"
                                id="contact"
                                name="contact"
                                className="inputFields"
                                onChange={formikCandidate.handleChange}
                                value={formikCandidate.values.contact}
                            />
                        </label>

                        <label htmlFor="date">
                            Candidate Date:
                            <input
                                type="date"
                                id="date"
                                name="date"
                                className="inputFields"
                                onChange={formikCandidate.handleChange}
                                value={formikCandidate.values.date}
                            />
                        </label>

                        <label htmlFor="degree">
                            Candidate Degree:
                            <input
                                type="text"
                                id="degree"
                                name="degree"
                                className="inputFields"
                                onChange={formikCandidate.handleChange}
                                value={formikCandidate.values.degree}
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

export default CandidateForm;
