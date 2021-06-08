import { Link } from "react-router-dom";

import logo from "../External Files/logo.png";
import "../assets/App.css";

function dataEntryMenu() {
  return (
    <div className="App">
      <div className="Header">
        <img src={logo} width="150" alt="FPSC_Logo"></img>
        <div className="Title text-align-center">
          <h1 className="TitleName">
            Federal Public Service Commission, Pakistan
          </h1>
          <h3>Data Entry Menu</h3>
        </div>
      </div>
      <div className="Body text-align-center">
        <div>
          <button className="Buttons">
            <Link to="/dataEntry">Back</Link>
          </button>
        </div>
        <div className="dataContainer">
          <div className="Roll flex">
            <h5>Roll: </h5>
            <input></input>
          </div>
          <div className="Name flex">
            <h5>Name: </h5>
            <input></input>
          </div>
          <div className="CNIC flex">
            <h5>CNIC: </h5>
            <input></input>
          </div>
          <div className="Contact flex">
            <h5>Contact: </h5>
            <input></input>
          </div>
          <div className="DOB flex">
            <h5>DOB: </h5>
            <input></input>
          </div>
          <div className="Degree flex">
            <h5>Degree: </h5>
            <input></input>
          </div>
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
