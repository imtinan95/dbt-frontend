import { useFormik } from "formik";
import { Link } from "react-router-dom";

import "../../assets/App.css";
import "../../assets/dataEntryForm.css";

const logo = "/logo.png";
function MinistryForm() {
  const formikMinistry = useFormik({
    initialValues: {
      minID: "",
      minName: "",
      minHQ: "",
      minDivs: "",
      minstrRes: "",
    },
    onSubmit: (values) => {
      console.log("Ministry Data", formikMinistry.values);
    },
  });
  return (
    <div className="App">
      <div className="Header">
        <img src={logo} width="150" alt="FPSC_Logo"></img>
        <div className="Title text-align-center">
          <h1 className="TitleName">
            Federal Public Service Commission, Pakistan
          </h1>
          <h3>Ministries Data Entry Menu</h3>
        </div>
      </div>
      <div className="Body text-align-center">
        <div>
          <Link to="/dataEntry">
            <button className="Buttons">Back</button>
          </Link>
        </div>
        <div className="dataContainer">
          <form onSubmit={formikMinistry.handleSubmit}>
            <label className="labels">
              Ministry ID:
              <input
                type="text"
                className="inputFields"
                id="minID"
                name="minID"
                onChange={formikMinistry.handleChange}
                values={formikMinistry.values.minID}
              />
            </label>

            <label className="labels">
              Ministry Name:
              <input
                type="text"
                className="inputFields"
                id="minName"
                name="minName"
                onChange={formikMinistry.handleChange}
                values={formikMinistry.values.minName}
              />
            </label>

            <label className="labels">
              Ministry HQ:
              <input
                type="text"
                className="inputFields"
                id="minHQ"
                name="minHQ"
                onChange={formikMinistry.handleChange}
                values={formikMinistry.values.minHQ}
              />
            </label>

            <label className="labels">
              Ministry Divisions:
              <input
                type="text"
                className="inputFields"
                id="minDivs"
                name="minDivs"
                onChange={formikMinistry.handleChange}
                values={formikMinistry.values.minDivs}
              />
            </label>

            <label className="labels">
              Minister Responsible:
              <input
                type="text"
                className="inputFields"
                id="minstrRes"
                name="minstrRes"
                onChange={formikMinistry.handleChange}
                values={formikMinistry.values.minstrRes}
              />
            </label>

            <button className="Buttons" type="submit">
              Save
            </button>
          </form>
        </div>
        <div className="submitButtons">
          <button className="Buttons">Previous</button>

          <button className="Buttons">Delete</button>
          <button className="Buttons">Next</button>
        </div>
      </div>
      <div className="Footer text-align-center">
        <h3>Developed by Muhammad Imtinan Ul Haq in React</h3>
        <p>Reg No. 4018-FBAS/BSCS/F18</p>
      </div>
    </div>
  );
}

export default MinistryForm;
