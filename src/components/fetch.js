import { Link } from "react-router-dom";
import axios from "axios";
import { useFormik } from "formik";
import "../assets/fetch.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const logo = "/logo.png";

function Fetch() {
  const handleSubmit = (mode, formsica) => {
    console.log(mode);
    console.log("Flag 1", formsica.values);

    if (mode === "submit") {
      axios
        .post("http://localhost:61691/dataEntry/fetch/save", formsica.values)
        .then((res) => {
          console.log(res);
          toast("Data Inserted");
        })
        .catch((err) => {
          let toastMessage = "";
          console.log(err.response);
          if (!err.response) {
            toastMessage = err.message;
          } else toastMessage = err.response.data;
          toast(toastMessage);
        });
    } else {
      console.log("Flag 2", formsica.values);
      axios
        .post("http://localhost:61691/dataEntry/fetch/del", formsica.values)
        .then((res) => {
          console.log(res);
          toast("Data Deleted");
          console.log("Flag 3", formsica.values);
        })
        .catch((err) => {
          let toastMessage = "";
          console.log(err.response);
          if (!err.response) {
            toastMessage = err.message;
          } else toastMessage = err.response.data;
          toast(toastMessage);
          console.log("Flag 4", formsica.values);
        });
    }
  };
  const formicka = useFormik({
    initialValues: {
      name: "",
      email: "",
      pass: "",
    },
  });

  return (
    <div>
      <div className="Header">
        <img src={logo} width="150" alt="FPSC_Logo"></img>
        <div className="Title text-align-center">
          <h1 className="TitleName">
            Federal Public Service Commission, Pakistan
          </h1>
          <h3>DataFetch</h3>
        </div>
      </div>
      <div className="Body text-align-center">
        <div>
          <Link to="/">
            <button className="Buttons">Home</button>
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

            <button
              type="submit"
              onClick={() => handleSubmit("submit", formicka)}
            >
              Submit
            </button>
            <button
              type="button"
              onClick={() => handleSubmit("delete", formicka)}
            >
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
