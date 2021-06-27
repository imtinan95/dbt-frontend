import { Link } from 'react-router-dom';
import axios from 'axios';
import { useFormik } from 'formik';
import '../assets/fetch.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const logo = '/logo.png';

function Fetch() {
    const handleSubmit = (mode, form) => {
        console.log(mode);
        console.log('form vales', form.values);

        if (mode === 'submit') {
            axios
                .post('http://localhost:61691/dataEntry/fetch', form.values)
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
        } else {
            axios
                .delete('http://localhost:61691/dataEntry/fetch', form.values)
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
        }
    };
    const formicka = useFormik({
        initialValues: {
            name: '',
            email: '',
            pass: '',
        },
    });

    return (
        <div>
            <div className="Header">
                <img src={logo} width="150" alt="FPSC_Logo" />
                <div className="Title text-align-center">
                    <h1 className="TitleName">Federal Public Service Commission, Pakistan</h1>
                    <h3>DataFetch</h3>
                </div>
            </div>
            <div className="Body text-align-center">
                <div>
                    <Link to="/">
                        <button type="button" className="Buttons">
                            Home
                        </button>
                    </Link>
                </div>
                <div className="formicka">
                    <form onSubmit={formicka.handleSubmit}>
                        <label htmlFor="name">
                            Name
                            <input
                                type="text"
                                id="name"
                                name="name"
                                onChange={formicka.handleChange}
                                value={formicka.values.name}
                                className="inputField"
                            />
                        </label>

                        <label htmlFor="email">
                            Email
                            <input
                                type="email"
                                id="email"
                                name="email"
                                onChange={formicka.handleChange}
                                value={formicka.values.email}
                                className="inputField"
                            />
                        </label>

                        <label htmlFor="pass">
                            Password
                            <input
                                type="password"
                                id="pass"
                                name="pass"
                                onChange={formicka.handleChange}
                                value={formicka.values.pass}
                                className="inputField"
                            />
                        </label>

                        <button type="submit" onClick={() => handleSubmit('submit', formicka)}>
                            Submit
                        </button>
                        <button type="button" onClick={() => handleSubmit('delete', formicka)}>
                            delete
                        </button>
                    </form>
                </div>
            </div>
            <div className="Footer text-align-center">
                <h3>Developed by Muhammad Imtinan Ul Haq in React</h3>
                <p>Reg No. 4018-FBAS/BSCS/F18</p>
                <ToastContainer />
            </div>
        </div>
    );
}

export default Fetch;
