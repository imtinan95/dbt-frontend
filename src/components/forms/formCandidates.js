import { Link } from "react-router-dom";

import "../../assets/App.css";
import "../../assets/dataEntryForm.css";

const logo = "/logo.png";
function dataEntryMenu() {
  return (
    <div className="App">
      <div className="Header">
        <img src={logo} width="150" alt="FPSC_Logo"></img>
        <div className="Title text-align-center">
          <h1 className="TitleName">
            Federal Public Service Commission, Pakistan
          </h1>
          <h3>Candidate Data Entry Menu</h3>
        </div>
      </div>
      <div className="Body text-align-center">
        <div>
          <Link to="/dataEntry">
            <button className="Buttons">Back</button>
          </Link>
        </div>
        <div className="dataContainer">
          <form>
            <label className="labels">
              Candidate Roll:
              <input type="text" className="inputFields" />
            </label>

            <label className="labels">
              Candidate Name:
              <input type="text" className="inputFields" />
            </label>

            <label className="labels">
              CNIC:
              <input type="text" className="inputFields" />
            </label>

            <label className="labels">
              Contact:
              <input type="text" className="inputFields" />
            </label>

            <label className="labels">
              DOB:
              <input type="text" className="inputFields" />
            </label>

            <label className="labels">
              Degree:
              <input type="text" className="inputFields" />
            </label>
          </form>
        </div>
        <div className="submitButtons">
          <button className="Buttons">Previous</button>
          <button className="Buttons">Save</button>
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

export default dataEntryMenu;
