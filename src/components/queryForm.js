import { Link } from "react-router-dom";
import logo from "../External Files/logo.png";
import "../assets/App.css";

function queryForm() {
  return (
    <div className="App">
      <div className="Header">
        <img src={logo} width="150" alt="FPSC_Logo"></img>
        <div className="Title text-align-center">
          <h1 className="TitleName">
            Federal Public Service Commission, Pakistan
          </h1>
          <h3>Query Menu</h3>
        </div>
      </div>
      <div className="Body text-align-center">
        <div>
          <button className="Buttons">
            <Link to="/">Home</Link>
          </button>
        </div>
        <div>
          <button className="Buttons">Candidates Query</button>
        </div>
        <div>
          <button className="Buttons">Divisions Query</button>
        </div>
        <div>
          <button className="Buttons">Employees Query</button>
        </div>
        <div>
          <button className="Buttons">Ministries Query</button>
        </div>
        <div>
          <button className="Buttons">Positions Query</button>
        </div>
      </div>
      <div className="Footer text-align-center">
        <h3>Developed by Muhammad Imtinan Ul Haq in React</h3>
        <p>Reg No. 4018-FBAS/BSCS/F18</p>
      </div>
    </div>
  );
}

export default queryForm;
